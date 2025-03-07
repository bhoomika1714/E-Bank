import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TimeStyle from "./TimeStyle";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent39 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.capacityPosition]} />
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft10.png")}
        />
      </View>
      <TimeStyle
        propTop={0}
        propLeft={33}
        propWidth={55}
        propHeight={25}
        propMarginTop={-3.65}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection9.png")}
      />
      <View style={[styles.battery, styles.borderLayout]}>
        <View style={[styles.border, styles.borderLayout]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap7.png")}
        />
        <View style={[styles.capacity, styles.capacityPosition]} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi13.png")}
      />
      <Text style={[styles.chatWithUs, styles.exitFlexBox]}>Chat with us!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityPosition: {
    top: 2,
    position: "absolute",
  },
  exitFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  borderLayout: {
    height: 14,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.colorGoldenrod_100,
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    height: 93,
    borderStyle: "solid",
    width: 390,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    top: 36,
    left: 42,
    borderRadius: Border.br_5xs,
    width: 37,
    height: 43,
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_7xs,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 13,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 5,
    position: "absolute",
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 9,
  },
  battery: {
    top: 13,
    right: 24,
    width: 25,
  },
  wifiIcon: {
    width: 16,
    height: 13,
  },
  chatWithUs: {
    top: 40,
    left: 110,
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    width: 233,
    height: 36,
  },
  rectangleParent: {
    left: -8,
    height: 95,
    width: 390,
    top: 0,
    position: "absolute",
  },
});

export default GroupComponent39;
