import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Card2 = () => {
  return (
    <View style={[styles.card, styles.cardLayout]}>
      <View style={[styles.rectangle, styles.cardLayout]} />
      <View style={[styles.logo, styles.logoLayout]}>
        <View style={[styles.mask, styles.logoLayout]} />
      </View>
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.aapl, styles.aaplTypo]}>AAPL</Text>
        <Text style={[styles.text1, styles.text1Typo]}>+2.21%</Text>
        <Text style={[styles.appleInc, styles.text2Position]}>Apple Inc.</Text>
        <Text style={[styles.text2, styles.text2Position]}>
          <Text style={styles.text3}>₹</Text>
          <Text style={styles.text4}>149,64</Text>
        </Text>
      </View>
      <Image
        style={[styles.lineIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/line.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 78,
    width: 386,
    position: "absolute",
  },
  logoLayout: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  textPosition: {
    top: 17,
    position: "absolute",
  },
  aaplTypo: {
    textAlign: "left",
    fontWeight: "500",
    left: "0%",
  },
  text1Typo: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.sFProText,
  },
  text2Position: {
    marginTop: 5.5,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    left: 386,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
  },
  mask: {
    left: 0,
    borderRadius: Border.br_37xl,
    backgroundColor: Color.colorAliceblue_200,
    height: 50,
    top: 0,
  },
  logo: {
    top: 14,
    left: 14,
    height: 50,
  },
  aapl: {
    marginTop: -22.5,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 1,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  text1: {
    marginTop: -21.5,
    left: "84.01%",
    color: Color.colorGreen,
    textAlign: "right",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  appleInc: {
    color: Color.colorDarkgray_300,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    fontWeight: "500",
    left: "0%",
    marginTop: 5.5,
  },
  text3: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  text4: {
    fontFamily: FontFamily.interRegular,
  },
  text2: {
    width: "35.03%",
    left: "68.71%",
    fontSize: FontSize.m3TitleMedium_size,
    height: 18,
    textAlign: "right",
    color: Color.colorDarkolivegreen,
  },
  text: {
    left: 78,
    width: 294,
    height: 45,
    overflow: "hidden",
  },
  lineIcon: {
    left: 162,
    width: 110,
    height: 50,
  },
  card: {
    top: 96,
    left: -8,
  },
});

export default Card2;
