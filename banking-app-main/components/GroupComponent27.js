import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const GroupComponent27 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Image
        style={[styles.effectsIcon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/effects.png")}
      />
      <View style={styles.upgradeNowWrapper}>
        <Text style={styles.upgradeNow}>Upgrade Now</Text>
      </View>
      <Text
        style={[styles.upgradeYourMotor, styles.upgradeYourMotorPosition]}
      >{`Upgrade your Motor 
Insurance Plan`}</Text>
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-71.png")}
      />
      <Text style={[styles.enjoyMoreCoverage, styles.upgradeYourMotorPosition]}>
        Enjoy more coverage on the Comprehensive Motor Insurance
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    width: 327,
    position: "absolute",
  },
  upgradeYourMotorPosition: {
    color: Color.white,
    textAlign: "left",
    left: 21,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkgoldenrod_100,
    height: 336,
  },
  effectsIcon: {
    top: 17,
    height: 319,
  },
  upgradeNow: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorPeru_200,
    textAlign: "left",
  },
  upgradeNowWrapper: {
    top: 133,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 107,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_77xl,
    paddingVertical: Padding.p_5xs,
    left: 21,
    position: "absolute",
  },
  upgradeYourMotor: {
    top: 16,
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  image7Icon: {
    top: 180,
    left: 19,
    width: 304,
    height: 140,
    position: "absolute",
  },
  enjoyMoreCoverage: {
    top: 80,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 274,
  },
  rectangleParent: {
    top: -85,
    left: 24,
    height: 336,
    width: 327,
    position: "absolute",
  },
});

export default GroupComponent27;
