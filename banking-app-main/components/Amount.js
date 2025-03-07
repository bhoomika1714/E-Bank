import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Amount = () => {
  return (
    <View style={styles.amount}>
      <View style={styles.donation}>
        <View style={[styles.donationChild, styles.raisedLayout]} />
        <Image
          style={[styles.buddhistIcon, styles.raisedLayout]}
          contentFit="cover"
          source={require("../assets/buddhist.png")}
        />
      </View>
      <View style={[styles.raised, styles.raisedLayout]}>
        <View style={[styles.raisedChild, styles.childLayout]} />
        <Image
          style={[styles.buddhistIcon, styles.raisedLayout]}
          contentFit="cover"
          source={require("../assets/buddhist.png")}
        />
      </View>
      <Text
        style={[styles.targetAmount, styles.textTypo]}
      >{`Target amount  `}</Text>
      <Text style={[styles.text, styles.textClr]}>₹1,00,000</Text>
      <Text style={[styles.raised1, styles.text1Typo]}>Raised</Text>
      <Text style={[styles.text1, styles.text1Typo]}>₹5530.70</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  raisedLayout: {
    width: 54,
    position: "absolute",
  },
  childLayout: {
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 47,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    left: 60,
    position: "absolute",
  },
  textClr: {
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  text1Typo: {
    left: 240,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    position: "absolute",
  },
  donationChild: {
    left: 1,
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 47,
  },
  buddhistIcon: {
    top: 9,
    height: 30,
    left: 0,
  },
  donation: {
    width: 55,
    left: 0,
    top: 0,
    height: 47,
    position: "absolute",
  },
  raisedChild: {
    left: 2,
    width: 51,
    position: "absolute",
  },
  raised: {
    left: 176,
    top: 0,
    height: 47,
  },
  targetAmount: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_1000,
    top: 0,
  },
  text: {
    top: 22,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    left: 60,
    position: "absolute",
  },
  raised1: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.colorGray_1100,
    top: 0,
  },
  text1: {
    top: 23,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  amount: {
    top: 463,
    left: 18,
    width: 310,
    height: 47,
    position: "absolute",
  },
});

export default Amount;
