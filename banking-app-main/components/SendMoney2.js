import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Contacts from 'react-native-contacts';
import {
  FontFamily,
  Border,
  Gap,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";
import { PermissionsAndroid } from 'react-native'; // Import PermissionsAndroid for Android

const SendMoney2 = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const requestContactsPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: "Contacts Permission",
            message: "This app would like to access your contacts.",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Permission denied", "You need to grant contacts permission to use this feature.");
          return;
        }
      }

      // Fetch contacts
      Contacts.getAll()
        .then(contacts => {
          setContacts(contacts.slice(0, 5));
        })
        .catch(e => console.log('Error fetching contacts', e));
    };

    requestContactsPermission();
  }, []);

  return (
    <View style={styles.sendMoney}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={styles.label}>Send Money</Text>
        {/* <Text style={[styles.moreButton, styles.newSendTypo]}>More</Text> */}
      </View>
      <View style={[styles.users, styles.titleFlexBox1]}>
        <Pressable
          style={styles.alexFlexBox}
          onPress={() => navigation.navigate("SendMoney")}
        >
          <View style={[styles.iconButton, styles.iconLayout]}>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={require("../assets/button.png")}
            />
          </View>
          <Text style={[styles.newSend, styles.newSendTypo]}>New Send</Text>
        </Pressable>
        {contacts.map((contact, index) => (
          <Pressable
            key={index}
            style={styles.alexFlexBox}
            onPress={() => navigation.navigate("Money", { contact })}
          >
            <Image
              style={[styles.profilePictureIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/profile-picture3.png")}
            />
            <Image
              style={styles.userIcon}
              contentFit="cover"
              source={require("../assets/user2.png")}
            />
            <Text style={[styles.newSend, styles.newSendTypo]}>{contact.givenName || "Contact"}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  titleFlexBox: {
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  newSendTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  titleFlexBox1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    overflow: "hidden",
    borderRadius: Border.br_sm,
    height: 55,
    width: 55,
  },
  alexFlexBox: {
    gap: Gap.gap_21xs,
    alignItems: "center",
  },
  label: {
    height: 40,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
  },
  moreButton: {
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.colorPeru_300,
    marginRight:-10,
  },
  title: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonIcon: {
    paddingTop: 50,
    width: 40,
    height: 40,
  },
  iconButton: {
    backgroundColor: Color.colorAliceblue_100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  newSend: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.colorDarkslategray_800,
  },
  profilePictureIcon: {
    display: "none",
  },
  userIcon: {
    height: 55,
    width: 55,
  },
  setareh: {
    width: 57,
  },
  nameWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  alex: {
    display: "none",
  },
  users: {
    minHeight: 400,
    gap: Gap.gap_4xs,
  },
  sendMoney: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    gap: Gap.gap_2xs,
  },
});

export default SendMoney2;
