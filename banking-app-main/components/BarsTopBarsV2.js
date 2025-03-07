import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import BarsStatusBariPhoneLight from "./BarsStatusBariPhoneLight";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarsTopBarsV2 = ({
  capIconBackgroundColor,
  capIconHeight,
  capIconTop,
  capIconLeft,
  capIconWidth,
  propMarginTop,
  wifi,
  cellularConnection,
  showBattery,
  barsStatusBariPhoneLightPosition,
  barsStatusBariPhoneLightBackground,
  barsStatusBariPhoneLightHeight,
  barsStatusBariPhoneLightTop,
  barsStatusBariPhoneLightRight,
  barsStatusBariPhoneLightBottom,
  barsStatusBariPhoneLightLeft,
  wifiIconHeight,
  wifiIconWidth,
  cellularConnectionIconHeight,
  cellularConnectionIconWidth,
}) => {
  const barsTopBarsV4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", capIconBackgroundColor),
      ...getStyleValue("height", capIconHeight),
      ...getStyleValue("top", capIconTop),
      ...getStyleValue("left", capIconLeft),
      ...getStyleValue("width", capIconWidth),
    };
  }, [
    capIconBackgroundColor,
    capIconHeight,
    capIconTop,
    capIconLeft,
    capIconWidth,
  ]);

  const iconLStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.barstopBarsv4, barsTopBarsV4Style]}>
      <BarsStatusBariPhoneLight
        barsStatusBariPhoneLightPosition={barsStatusBariPhoneLightPosition}
        barsStatusBariPhoneLightBackgroundColor={
          barsStatusBariPhoneLightBackground
        }
        barsStatusBariPhoneLightHeight={barsStatusBariPhoneLightHeight}
        barsStatusBariPhoneLightTop={barsStatusBariPhoneLightTop}
        barsStatusBariPhoneLightRight={barsStatusBariPhoneLightRight}
        barsStatusBariPhoneLightBottom={barsStatusBariPhoneLightBottom}
        barsStatusBariPhoneLightLeft={barsStatusBariPhoneLightLeft}
        showBattery={showBattery}
        wifi={wifi}
        wifiIconHeight={wifiIconHeight}
        wifiIconWidth={wifiIconWidth}
        cellularConnection={cellularConnection}
        cellularConnectionIconHeight={cellularConnectionIconHeight}
        cellularConnectionIconWidth={cellularConnectionIconWidth}
        propTop="7"
        propLeft="21"
        propWidth="54"
        propHeight="21"
        propMarginTop="-3.5"
      />
      <Image
        style={[styles.iconL, iconLStyle]}
        contentFit="cover"
        source={require("../assets/-icon--l4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconL: {
    marginTop: 10,
    top: "50%",
    left: 316,
    width: 24,
    height: 24,
    display: "none",
    position: "absolute",
  },
  barstopBarsv4: {
    top: 0,
    left: 0,
    backgroundColor: Color.yellowY100,
    width: 375,
    height: 100,
    position: "absolute",
  },
});

export default BarsTopBarsV2;
