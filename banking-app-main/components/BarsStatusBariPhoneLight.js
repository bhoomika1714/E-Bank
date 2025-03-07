import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarsStatusBariPhoneLight = ({
  barsStatusBariPhoneLightPosition,
  barsStatusBariPhoneLightBackgroundColor,
  barsStatusBariPhoneLightHeight,
  barsStatusBariPhoneLightTop,
  barsStatusBariPhoneLightRight,
  barsStatusBariPhoneLightBottom,
  barsStatusBariPhoneLightLeft,
  showBattery,
  wifi,
  wifiIconHeight,
  wifiIconWidth,
  cellularConnection,
  cellularConnectionIconHeight,
  cellularConnectionIconWidth,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propMarginTop,
}) => {
  const barsStatusBariPhoneLightStyle = useMemo(() => {
    return {
      ...getStyleValue("position", barsStatusBariPhoneLightPosition),
      ...getStyleValue(
        "backgroundColor",
        barsStatusBariPhoneLightBackgroundColor
      ),
      ...getStyleValue("height", barsStatusBariPhoneLightHeight),
      ...getStyleValue("top", barsStatusBariPhoneLightTop),
      ...getStyleValue("right", barsStatusBariPhoneLightRight),
      ...getStyleValue("bottom", barsStatusBariPhoneLightBottom),
      ...getStyleValue("left", barsStatusBariPhoneLightLeft),
    };
  }, [
    barsStatusBariPhoneLightPosition,
    barsStatusBariPhoneLightBackgroundColor,
    barsStatusBariPhoneLightHeight,
    barsStatusBariPhoneLightTop,
    barsStatusBariPhoneLightRight,
    barsStatusBariPhoneLightBottom,
    barsStatusBariPhoneLightLeft,
  ]);

  const wifiIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", wifiIconHeight),
      ...getStyleValue("width", wifiIconWidth),
    };
  }, [wifiIconHeight, wifiIconWidth]);

  const cellularConnectionIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", cellularConnectionIconHeight),
      ...getStyleValue("width", cellularConnectionIconWidth),
    };
  }, [cellularConnectionIconHeight, cellularConnectionIconWidth]);

  return (
    <View
      style={[styles.barsstatusBariphonelight, barsStatusBariPhoneLightStyle]}
    >
      {showBattery && (
        <View style={[styles.battery, styles.borderLayout]}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
      )}
      <Image
        style={[styles.wifiIcon, wifiIconStyle]}
        contentFit="cover"
        source={wifi}
      />
      <Image
        style={[styles.cellularConnectionIcon, cellularConnectionIconStyle]}
        contentFit="cover"
        source={cellularConnection}
      />
      <View style={[styles.timeStyle, styles.timeLayout]}>
        <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderLayout: {
    height: 11,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
  },
  wifiIcon: {
    width: 15,
    height: 6,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 6,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.lightGray11,
    textAlign: "center",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    display: "none",
  },
  barsstatusBariphonelight: {
    height: "44.07%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "55.93%",
    left: "0%",
    position: "absolute",
  },
});

export default BarsStatusBariPhoneLight;
