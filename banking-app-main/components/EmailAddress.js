import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const EmailAddress = () => {
  return (
    <View style={[styles.emailAddress, styles.groupViewLayout]}>
      <View style={[styles.name, styles.nameLayout]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
        <View style={[styles.vectorParent, styles.groupViewLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
          <View style={[styles.tanyaMyroniukParent, styles.parentPosition]}>
            <Text style={styles.tanyaMyroniuk}>Name</Text>
            <Image
              style={[styles.useruserprofileIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/useruserprofile.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.email, styles.nameLayout]}>
        <Text style={[styles.emailAddress1, styles.fullNameTypo]}>
          Email Address
        </Text>
        <View style={[styles.vectorParent, styles.groupViewLayout]}>
          <View
            style={[styles.tanyaMyroniukgmailcomParent, styles.parentPosition]}
          >
            <Text style={[styles.tanyaMyroniukgmailcom, styles.textTypo]}>
              name@gmail.com
            </Text>
            <Image
              style={[styles.useruserprofileIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/emailsemailmailletter.png")}
            />
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </View>
      </View>
      <View style={[styles.number, styles.nameLayout]}>
        <Text style={[styles.phoneNumber, styles.fullNameTypo]}>
          Phone Number
        </Text>
        <View style={[styles.vectorParent, styles.groupViewLayout]}>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>+8801712663389</Text>
            <Image
              style={[styles.useruserprofileIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/phonesphone-call1.png")}
            />
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </View>
      </View>
      <View style={[styles.dateOfBirth, styles.groupViewLayout]}>
        <Text style={[styles.birthDate, styles.fullNameTypo]}>Birth Date</Text>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text1, styles.textTypo]}>28</Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector-1054.png")}
            />
          </View>
          <View style={[styles.septemberParent, styles.groupLayout]}>
            <Text style={[styles.september, styles.text2Typo]}>September</Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector-1062.png")}
            />
          </View>
          <View style={[styles.container, styles.containerLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>2000</Text>
            <Image
              style={[styles.groupChild2, styles.containerLayout]}
              contentFit="cover"
              source={require("../assets/vector-107.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupViewLayout: {
    width: 335,
    position: "absolute",
  },
  nameLayout: {
    height: 63,
    left: 0,
    width: 335,
    position: "absolute",
  },
  fullNameTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textTransform: "lowercase",
    color: Color.colorGray_600,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  groupLayout: {
    width: 83,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 25,
    maxHeight: "100%",
    left: 0,
  },
  text2Typo: {
    textTransform: "capitalize",
    color: Color.colorGray_600,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    top: 0,
    position: "absolute",
  },
  containerLayout: {
    width: 82,
    position: "absolute",
  },
  fullName: {
    width: 70,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  groupChild: {
    top: 32,
    maxHeight: "100%",
    left: 0,
    width: 335,
    position: "absolute",
  },
  tanyaMyroniuk: {
    width: 110,
    color: Color.colorGray_600,
    left: 38,
    top: 3,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  useruserprofileIcon: {
    width: 22,
    overflow: "hidden",
  },
  tanyaMyroniukParent: {
    width: 148,
  },
  vectorParent: {
    top: 31,
    height: 32,
    left: 0,
  },
  name: {
    top: 0,
  },
  emailAddress1: {
    width: 99,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  tanyaMyroniukgmailcom: {
    width: 199,
    left: 38,
    top: 3,
    textTransform: "lowercase",
  },
  tanyaMyroniukgmailcomParent: {
    width: 237,
  },
  email: {
    top: 84,
  },
  phoneNumber: {
    width: 104,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  text: {
    width: 113,
    left: 38,
    top: 3,
    textTransform: "lowercase",
  },
  parent: {
    width: 151,
  },
  number: {
    top: 168,
  },
  birthDate: {
    color: Color.colorSlategray_100,
    width: 69,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  text1: {
    left: 33,
    width: 17,
    top: 0,
  },
  vectorIcon: {
    width: 83,
    position: "absolute",
  },
  group: {
    height: 25,
    left: 0,
    top: 0,
  },
  september: {
    left: 2,
    width: 78,
  },
  septemberParent: {
    left: 126,
    height: 25,
    top: 0,
  },
  text2: {
    left: 24,
    width: 35,
  },
  groupChild2: {
    top: 25,
    maxHeight: "100%",
    left: 0,
  },
  container: {
    left: 253,
    height: 25,
    top: 0,
  },
  groupView: {
    top: 30,
    height: 25,
    left: 0,
  },
  dateOfBirth: {
    top: 252,
    height: 55,
    left: 0,
  },
  emailAddress: {
    top: 312,
    left: 20,
    height: 307,
  },
});

export default EmailAddress;
