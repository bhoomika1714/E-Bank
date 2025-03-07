import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import * as Contacts from 'expo-contacts';

const RequestMoney = () => {
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

  return (
    <View style={styles.requestMoney}>
      {/* Search Input Area */}
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search...."
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor={Color.gray} // Set placeholder color
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filteredContacts.map((contact, index) => (
          <Pressable
            key={index}
            style={styles.contactItem}
            onPress={() =>
              navigation.navigate("Message", {
                contactName: contact.name || 'No Name',
                phoneNumber: contact.phoneNumbers?.[0]?.number || 'No Number',
              })
            }
          >
            <Image
              style={styles.userIcon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
            <View>
              <Text style={styles.contactName}>{contact.name || 'No Name'}</Text>
              {contact.phoneNumbers && contact.phoneNumbers.length > 0 && (
                <Text style={styles.contactNumber}>{contact.phoneNumbers[0].number}</Text>
              )}
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.statusBarParent}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
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
        {/* <Image
          style={styles.batteryLight}
          contentFit="cover"
          source={require("../assets/battery--light1.png")}
        />
        <Image
          style={styles.networkSignalLight}
          contentFit="cover"
          source={require("../assets/network-signal-light1.png")}
        />
        <Image
          style={styles.wifiSignalLight}
          contentFit="cover"
          source={require("../assets/wifi-signal--light2.png")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        /> */}
      </View>

      {/* <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable> */}
      <Text style={styles.requestMoneyTitle}>Request Money</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  requestMoney: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: '100%', // Use '100%' for full height
    overflow: "hidden",
    width: "100%",
    position: 'relative', // Position relative for absolute child elements
  },
  searchContainer: {
    flexDirection: 'row', // Align icon and input horizontally
    alignItems: 'center',
    top: 40,
    marginHorizontal: 16, // Horizontal margin for spacing
    marginBottom: 10,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingTop:70,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchInput: {
    flex: 1, // Allow input to grow
    height: 40,
    fontSize: FontSize.m3LabelLarge_size+2,
    paddingLeft: 10,
    color: Color.black, // Color for the input text
  },
  scrollViewContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
    paddingTop:20,
  },
  contactItem: {
    flexDirection: "row",
    height: 68,
    alignItems: "center",
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row", // Aligns the button and text horizontally
    alignItems: "center", // Centers items vertically
    marginTop: 100, // Adjust the margin top as needed
    marginLeft: 16, // Add some left margin for better spacing
  },
  userIcon: {
    width: 43,
    height: 45,
    borderRadius: 22.5,
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
  statusBarParent: {
    width: "100%",
    height: 95,
    position: "absolute",
    top: 0,
  },
  wrapper: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 40,
    height: 40,
  },
  icon: {
    alignContent:"left",
    width: "100%",
    height: "100%",
  },
  requestMoneyTitle: {
    position: "absolute",
    top: 40,
    left: 95,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black,
    textAlign: "left",
  },
});

export default RequestMoney;
