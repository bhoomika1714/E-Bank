import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList, Alert } from "react-native";
import { Image } from "expo-image";
import * as Contacts from 'expo-contacts';
import { FontFamily, FontSize, Gap, Color, Border } from "../GlobalStyles";
import { useSelectedContacts } from '../screens/SelectedContactsContext'; // Import the context

const MAX_SELECTION = 10;
const MIN_SELECTION = 2;

const EditMembers = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const { updateSelectedContacts } = useSelectedContacts(); // Access the context function

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      } else {
        Alert.alert("Permission Denied", "Cannot access contacts without permission.");
      }
    })();
  }, []);

  const toggleContactSelection = (contact) => {
    const isSelected = selectedContacts.find(item => item.id === contact.id);
    if (isSelected) {
      setSelectedContacts(selectedContacts.filter(item => item.id !== contact.id));
    } else if (selectedContacts.length < MAX_SELECTION) {
      setSelectedContacts([...selectedContacts, contact]);
    } else {
      Alert.alert("Selection Limit", `You can select up to ${MAX_SELECTION} contacts.`);
    }
  };

  const handleContinue = () => {
    if (selectedContacts.length >= MIN_SELECTION) {
      updateSelectedContacts(selectedContacts); // Update the global state with selected contacts
      navigation.navigate("RoomSettings1"); // Navigate to RoomSettings1
    } else {
      Alert.alert("Minimum Selection", `Please select at least ${MIN_SELECTION} contacts.`);
    }
  };

  const renderContactItem = ({ item }) => (
    <Pressable
      style={[
        styles.contactItem,
        selectedContacts.find(c => c.id === item.id) && styles.contactSelected
      ]}
      onPress={() => toggleContactSelection(item)}
    >
      <Image style={styles.userIcon} contentFit="cover" source={require("../assets/user.png")} />
      <View>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>
          {item.phoneNumbers?.[0]?.number || "N/A"}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.editMembers}>
      <Text style={styles.header}>Select Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        style={styles.contactList}
      />
      <Pressable style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>
          Continue ({selectedContacts.length})
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editMembers: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: 20,
  },
  header: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
    marginBottom: 20,
  },
  contactList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
  },
  contactSelected: {
    backgroundColor: Color.colorGoldenrod_100,
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
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkWhiteGrey60,
  },
  continueButton: {
    padding: 15,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    margin: 20,
    alignItems: "center",
  },
  continueButtonText: {
    color: Color.white,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratSemiBold,
  },
});

export default EditMembers;

