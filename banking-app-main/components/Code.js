import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Code = () => {
  return (
    <View style={styles.code}>
      <View style={[styles.base, styles.basePosition]} />
      <View style={styles.code1}>
        <View style={[styles.rectangle, styles.basePosition]} />
        <Text style={styles.ca132}>ST#132</Text>
      </View>
      <Image
        style={[styles.iconR, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon--r3.png")}
      />
      <Image
        style={[styles.iconL, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon-l1.png")}
      />
      <Text style={[styles.promoCode, styles.textPosition]}>Promo Code</Text>
      <Text style={[styles.text, styles.textPosition]}>- $100.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.87%",
    bottom: "34.62%",
    top: "34.62%",
    height: "30.77%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    letterSpacing: 0,
    left: "23.61%",
    width: "31.48%",
    color: Color.blackB100,
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_600,
    borderWidth: 2,
  },
  rectangle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.yellowY100,
  },
  ca132: {
    marginTop: -12,
    fontSize: FontSize.size_3xs,
    letterSpacing: -1,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 24,
    top: "50%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  code1: {
    width: "18.36%",
    right: "18.36%",
    left: "63.28%",
    bottom: "34.62%",
    top: "34.62%",
    height: "30.77%",
    position: "absolute",
  },
  iconR: {
    right: "7.87%",
    left: "84.26%",
  },
  iconL: {
    right: "84.26%",
    left: "7.87%",
  },
  promoCode: {
    marginTop: -23,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 24,
    top: "50%",
    letterSpacing: 0,
    left: "23.61%",
    width: "31.48%",
  },
  text: {
    top: "53.85%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
  },
  code: {
    height: "14.18%",
    width: "81.33%",
    top: "46.91%",
    right: "9.33%",
    bottom: "38.91%",
    left: "9.33%",
    position: "absolute",
  },
});

export default Code;
