import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Gap } from "../GlobalStyles";

const Shipping = () => {
  return (
    <View style={styles.shipping}>
      <View style={[styles.shipping1, styles.itemPosition]}>
        <View style={[styles.base, styles.basePosition]} />
        <Image
          style={[styles.iconR, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-r.png")}
        />
        <Image
          style={[styles.iconL, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-l.png")}
        />
        <Text style={[styles.standard, styles.standardTypo]}>Standard</Text>
        <Text style={[styles.days, styles.daysLayout]}>2-3 days</Text>
      </View>
      <View style={[styles.item, styles.itemPosition]}>
        <Image
          style={styles.iconL1}
          contentFit="cover"
          source={require("../assets/-icon--l5.png")}
        />
        <Text style={[styles.broadwayBrookl, styles.standardTypo]}>
          139 Haystreet,Perth
        </Text>
        <View style={styles.edit}>
          <View style={[styles.rectangle, styles.basePosition]} />
          <Text style={[styles.change, styles.changeTypo]}>Change</Text>
        </View>
      </View>
      <Text style={[styles.shipping2, styles.changeTypo]}>Shipping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    left: 0,
    position: "absolute",
    width: 305,
  },
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
    height: "34.29%",
    position: "absolute",
  },
  standardTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.blackB100,
    lineHeight: 24,
    letterSpacing: 0,
  },
  daysLayout: {
    lineHeight: 20,
    textAlign: "left",
  },
  changeTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_600,
    borderWidth: 2,
  },
  iconR: {
    top: "32.86%",
    right: "7.87%",
    bottom: "32.86%",
    left: "84.26%",
  },
  iconL: {
    top: "38.57%",
    right: "84.26%",
    bottom: "27.14%",
    left: "7.87%",
  },
  standard: {
    marginTop: -23,
    left: "23.61%",
    top: "50%",
    width: "52.79%",
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  days: {
    top: "54.29%",
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
    color: Color.blackB100,
    lineHeight: 20,
    letterSpacing: 0,
    left: "23.61%",
    width: "52.79%",
    position: "absolute",
  },
  shipping1: {
    top: 76,
    height: 70,
  },
  iconL1: {
    width: 24,
    height: 24,
  },
  broadwayBrookl: {
    width: 193,
  },
  rectangle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.yellowY100,
  },
  change: {
    marginTop: -12,
    left: "444.64%",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    width: "100%",
  },
  edit: {
    width: 56,
    height: 24,
  },
  item: {
    top: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_4xs,
    height: 24,
  },
  shipping2: {
    marginTop: -73,
    left: 35,
    letterSpacing: 1,
    textTransform: "uppercase",
    opacity: 0.4,
    lineHeight: 20,
    textAlign: "left",
  },
  shipping: {
    height: 146,
    width: 305,
  },
});

export default Shipping;
