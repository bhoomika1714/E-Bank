import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Info11 = () => {
  return (
    <View style={styles.info}>
      <View style={styles.line} />
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <View style={styles.shipping}>
        <View style={[styles.shipping1, styles.itemPosition]}>
          <View style={[styles.base, styles.baseLayout]} />
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
          <Text style={[styles.standard, styles.standardPosition]}>
            Standard
          </Text>
          <Text style={styles.days}>2-3 days</Text>
        </View>
        <View style={styles.shipping2}>
          <View style={[styles.base, styles.baseLayout]} />
          <Image
            style={[styles.iconL, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-l.png")}
          />
          <Text style={[styles.standard1, styles.standardPosition]}>
            UPI xxxx
          </Text>
          <Text style={styles.days}>{`2-3 days                 `}</Text>
        </View>
        <View style={[styles.item, styles.itemPosition]}>
          <Image
            style={[styles.iconL2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon--l5.png")}
          />
          <Text style={[styles.broadwayBrookl, styles.changePosition]}>
            139 Haystreet,Perth
          </Text>
          <View style={[styles.edit, styles.basePosition]}>
            <View style={[styles.rectangle, styles.baseLayout]} />
            <Text style={[styles.change, styles.changePosition]}>Change</Text>
          </View>
        </View>
        <Text style={[styles.shipping3, styles.paymentTypo]}>Shipping</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentTypo: {
    opacity: 0.4,
    textAlign: "left",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 1,
    top: "50%",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  itemPosition: {
    left: "1.29%",
    right: "0%",
    width: "98.71%",
    position: "absolute",
  },
  baseLayout: {
    width: "100%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.87%",
    position: "absolute",
  },
  standardPosition: {
    lineHeight: 24,
    marginTop: -23,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    left: "23.61%",
    textAlign: "left",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  changePosition: {
    marginTop: -12,
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  basePosition: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  line: {
    height: "0.36%",
    top: "99.64%",
    right: 0,
    backgroundColor: Color.colorWhitesmoke_600,
    bottom: "0%",
    left: 0,
    position: "absolute",
  },
  payment: {
    marginTop: 32.5,
    left: 35,
  },
  base: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_600,
    borderWidth: 2,
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconR: {
    top: "32.86%",
    right: "7.87%",
    bottom: "32.86%",
    left: "84.26%",
    height: "34.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.87%",
  },
  iconL: {
    top: "38.57%",
    right: "84.26%",
    bottom: "27.14%",
    left: "7.87%",
    height: "34.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.87%",
  },
  standard: {
    width: "52.79%",
    lineHeight: 24,
    marginTop: -23,
  },
  days: {
    top: "54.29%",
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
    letterSpacing: 0,
    left: "23.61%",
    width: "52.79%",
    textAlign: "left",
    color: Color.blackB100,
    lineHeight: 20,
    position: "absolute",
  },
  shipping1: {
    top: "29.23%",
    bottom: "43.85%",
    height: "26.92%",
    left: "1.29%",
  },
  standard1: {
    width: "69.84%",
    lineHeight: 24,
    marginTop: -23,
  },
  shipping2: {
    top: "73.08%",
    right: "1.29%",
    left: "0%",
    width: "98.71%",
    height: "26.92%",
    bottom: "0%",
    position: "absolute",
  },
  iconL2: {
    right: "92.13%",
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  broadwayBrookl: {
    width: "63.28%",
    left: "13.11%",
    fontSize: FontSize.m3TitleMedium_size,
    marginTop: -12,
    textAlign: "left",
  },
  rectangle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.yellowY100,
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  change: {
    textAlign: "center",
    left: "0%",
    width: "100%",
    marginTop: -12,
    fontSize: FontSize.size_3xs,
  },
  edit: {
    width: "18.36%",
    left: "81.64%",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  item: {
    height: "9.23%",
    top: "13.85%",
    bottom: "76.92%",
  },
  shipping3: {
    marginTop: -130,
    left: 4,
  },
  shipping: {
    height: "94.55%",
    width: "82.4%",
    right: "9.33%",
    bottom: "5.45%",
    left: "8.27%",
    top: "0%",
    position: "absolute",
  },
  info: {
    height: "39.97%",
    top: "29.8%",
    right: 25,
    bottom: "30.23%",
    left: 0,
    position: "absolute",
  },
});

export default Info11;
