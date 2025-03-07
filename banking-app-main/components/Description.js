import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button2 from "./Button2";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Description = () => {
  return (
    <View style={[styles.description, styles.basePosition]}>
      <View style={[styles.base, styles.basePosition]} />
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
      <Button2 />
      <Text style={[styles.wirelessSmartHome, styles.wirelessPosition]}>
        Wireless, smart home speaker
      </Text>
      <Text style={[styles.aWirelessSpeaker, styles.wirelessPosition]}>
        A wireless speaker with a dynamic acoustic performance designed to be
        positioned up against the wall on a shelf or side table in your home.
        Impressive sound compared to its size.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    height: 360,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wirelessPosition: {
    textAlign: "left",
    color: Color.blackB100,
    left: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  base: {
    marginTop: -180,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightGray11,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    height: "9.44%",
    width: "100%",
    top: "90.56%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    opacity: 0.05,
    position: "absolute",
  },
  wirelessSmartHome: {
    marginTop: -84,
    fontSize: FontSize.font_size,
    letterSpacing: -1,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    top: "50%",
    color: Color.blackB100,
    left: "9.33%",
    width: "81.33%",
  },
  aWirelessSpeaker: {
    top: "37.78%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.7,
  },
  description: {
    marginTop: -20,
  },
});

export default Description;
