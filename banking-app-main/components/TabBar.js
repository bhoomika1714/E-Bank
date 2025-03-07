import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import IconsOthershoppingBag from "./IconsOthershoppingBag";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <Image
        style={[styles.baseIcon, styles.baseIconPosition]}
        contentFit="cover"
        source={require("../assets/base2.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.baseIconPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.menu4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-menu-3.png")}
      />
      <View style={styles.active}>
        <View style={styles.base} />
        <Text style={styles.order}>Order</Text>
        <IconsOthershoppingBag
          propMarginTop="unset"
          propTop="20%"
          propRight="62.11%"
          propLeft="12.63%"
          propWidth="25.26%"
          propHeight="60%"
          propBottom="20%"
          path={require("../assets/path3.png")}
        />
      </View>
      <Image
        style={[styles.menu2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon--l4.png")}
      />
      <Image
        style={[styles.menu1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-menu-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseIconPosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 32,
    position: "absolute",
  },
  baseIcon: {
    top: 0,
    height: 114,
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
    top: 80,
    height: 34,
    opacity: 0.05,
  },
  menu4Icon: {
    left: 316,
  },
  base: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.yellowY100,
    position: "absolute",
  },
  order: {
    marginTop: -10,
    top: "50%",
    left: "46.32%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: -1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    position: "absolute",
  },
  active: {
    height: "35.09%",
    width: "25.33%",
    top: "21.05%",
    right: "28%",
    bottom: "43.86%",
    left: "46.67%",
    position: "absolute",
  },
  menu2Icon: {
    left: 105,
  },
  menu1Icon: {
    left: 35,
  },
  tabBar: {
    height: 114,
    width: 375,
  },
});

export default TabBar;
