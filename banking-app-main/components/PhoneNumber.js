import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PhoneNumber = () => {
  return (
    <View style={styles.phoneNumber}>
      <View style={styles.line} />
      <Image
        style={[styles.iconR, styles.flagIconPosition]}
        contentFit="cover"
        source={require("../assets/-icon--r3.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>0486935279</Text>
      <Text style={[styles.text1, styles.textTypo]}>+61</Text>
      <View style={[styles.flag, styles.flagIconPosition]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/-icon.png")}
        />
        <Image
          style={[styles.flagIcon, styles.flagIconPosition]}
          contentFit="cover"
          source={require("../assets/flag.png")}
        />
      </View>
      <Text style={[styles.label, styles.textTypo]}>Phone Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flagIconPosition: {
    height: 24,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  line: {
    height: "1.43%",
    top: "100%",
    bottom: "-1.43%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
    left: 0,
    right: 0,
    position: "absolute",
  },
  iconR: {
    width: 24,
    height: 24,
    marginTop: -1,
    right: 0,
  },
  text: {
    left: 94,
    width: 171,
    color: Color.blackB100,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    top: "50%",
    marginTop: -1,
  },
  text1: {
    left: 54,
    opacity: 0.6,
    color: Color.blackB100,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    top: "50%",
    marginTop: -1,
  },
  icon: {
    marginTop: -2,
    left: 31,
    width: 7,
    height: 4,
    top: "50%",
    position: "absolute",
  },
  flagIcon: {
    marginTop: -12,
    width: 24,
    height: 24,
    left: 0,
  },
  flag: {
    width: 38,
    display: "none",
    marginTop: -1,
    left: 0,
  },
  label: {
    top: 0,
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.grayG100,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    width: 305,
  },
  phoneNumber: {
    top: 128,
    left: 35,
    backgroundColor: Color.white,
    height: 70,
    width: 305,
    position: "absolute",
  },
});

export default PhoneNumber;
