import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "./Button1";
import Search1 from "./Search1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FrontLayer2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frontLayer, styles.baseLayout]}>
      <View style={[styles.base, styles.basePosition]} />
      <Button1
        onButtonPress={() => navigation.navigate("PaymentMethod4")}
        propHeight="14.33%"
        propWidth="81.12%"
        propTop="74.59%"
        propRight="9.57%"
        propBottom="11.07%"
        propLeft="9.31%"
        propBackgroundColor="#c6ab5a"
        iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
        text="Continue to Payment"
        propLeft1={75}
      />
      <View style={styles.addresses}>
        <View style={[styles.item, styles.itemPosition]}>
          <Image
            style={[styles.iconR, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon29.png")}
          />
          <Image
            style={[styles.iconL, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon--l5.png")}
          />
          <Text style={styles.twinPeaksBlvd}>139 Haystreet ,Perth</Text>
        </View>
      </View>
      <View style={[styles.search, styles.basePosition]}>
        <View style={[styles.line, styles.itemPosition]} />
        <Search1 placeholder="139 Haystreet,Perth" />
      </View>
      <View style={[styles.barsHomeIndicatorIphone, styles.itemPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.line1} />
    </View>
  );
};

const styles = StyleSheet.create({
  baseLayout: {
    height: 307,
    top: "50%",
  },
  basePosition: {
    right: 1,
    left: 0,
    position: "absolute",
  },
  itemPosition: {
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.97%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  base: {
    marginTop: -153.5,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.white,
    height: 307,
    top: "50%",
  },
  iconR: {
    left: "92.03%",
    right: "0%",
  },
  iconL: {
    right: "92.03%",
    left: "0%",
  },
  twinPeaksBlvd: {
    marginTop: -12,
    width: "73.42%",
    left: "13.29%",
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  item: {
    width: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  addresses: {
    height: "7.82%",
    width: "80.05%",
    top: "53.75%",
    right: "10.64%",
    bottom: "38.44%",
    left: "9.31%",
    position: "absolute",
  },
  line: {
    height: "1.3%",
    top: "98.7%",
    right: 0,
    backgroundColor: Color.grayG100,
    opacity: 0.2,
    left: 0,
  },
  search: {
    height: "25.08%",
    top: "18.24%",
    bottom: "56.68%",
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
    height: "11.07%",
    width: "99.73%",
    top: "88.93%",
    left: "0.27%",
    opacity: 0.05,
    right: "0%",
  },
  line1: {
    height: "1.63%",
    width: "12.77%",
    top: "6.51%",
    right: "43.62%",
    bottom: "91.86%",
    left: "43.62%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorWhitesmoke_600,
    position: "absolute",
  },
  frontLayer: {
    marginTop: 99,
    right: -1,
    left: 0,
    position: "absolute",
  },
});

export default FrontLayer2;
