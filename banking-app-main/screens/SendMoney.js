import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, FlatList, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import * as Contacts from 'expo-contacts';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SendMoney = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
          setFilteredContacts(data);
        } else {
          Alert.alert("No Contacts Found");
        }
      } else {
        Alert.alert("Permission Denied", "Cannot access contacts.");
      }
    })();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = contacts.filter(contact => {
      const contactName = contact.name ? contact.name.toLowerCase() : "";
      return contactName.includes(text.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  const handleContactPress = (selectedContact) => {
    // Navigate to the Money screen, passing the selected contact's name and number
    navigation.navigate('Money', { contactName: selectedContact.name, contactNumber: selectedContact.phoneNumbers[0]?.number });
  };
  
  const renderContactItem = ({ item }) => {
    const contactName = item.name || 'No Name';
    const phoneNumber = item.phoneNumbers?.[0]?.number || 'No Number';

    return (           
      <Pressable   
        style={styles.contactItem} //this part will navigate to Money page on pressing any number
        onPress={() => handleContactPress(item)} // Navigate to SendMoney1
      >
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={styles.contactName}>{contactName}</Text>
          <Text style={styles.contactNumber}>{phoneNumber}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.sendMoney}>
      {/* Status Bar */}
      <View style={styles.statusBarParent}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
      </View>

      {/* Title */}
      <Text style={styles.sendMoneyTitle}>Send Money</Text>

      {/* Search Input Area */}
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor={Color.gray}
        />
      </View>

      {/* FlatList to display contacts */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderContactItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}  // Ensure FlatList occupies space
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendMoney: {
    flex: 1,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  statusBarParent: {
    width: "100%",
    height: 95,
    position: "absolute",
    top: 0,
  },
  sendMoneyTitle: {
    position: "absolute",
    top: 40,
    left: 120,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    paddingVertical: 5,
    marginTop: 100, // Adjust to position below the title
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: FontSize.m3LabelLarge_size + 2,
    paddingLeft: 10,
    color: Color.black,
  },
  contactItem: {
    flexDirection: "row",
    height: 68,
    alignItems: "center",
    marginBottom: 10,
    padding: 10,  // Padding added for spacing within the contact item
  },
  userIcon: {
    width: 43,
    height: 45,
    marginRight: 10,
  },
  contactName: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
  },
  contactNumber: {
    color: Color.darkWhiteGrey60,
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.mobileBody3Regular_size,
  },
});

export default SendMoney;
