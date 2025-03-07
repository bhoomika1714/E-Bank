import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TimeStyle from "./TimeStyle";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent5 = ({
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propMarginTop,
}) => {
  const groupView9Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupView9Style]}>
      <View style={[styles.groupChild, styles.borderBorder]} />
      <Text style={[styles.chatWithUs, styles.exitFlexBox]}>Chat with us!</Text>
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft4.png")}
        />
      </View>
      <TimeStyle
        propTop={propTop}
        propLeft={propLeft}
        propWidth={propWidth}
        propHeight={propHeight}
        propMarginTop={propMarginTop}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection4.png")}
      />
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap4.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  exitFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  groupChild: {
    top: 3,
    left: 0,
    backgroundColor: Color.colorGoldenrod_100,
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    height: 93,
    width: 390,
  },
  chatWithUs: {
    top: 39,
    left: 101,
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    width: 225,
    height: 37,
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  exit: {
    top: 36,
    left: 29,
    borderRadius: Border.br_5xs,
    width: 35,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_7xs,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 13,
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 14,
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    height: 5,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 9,
    position: "absolute",
  },
  battery: {
    top: 14,
    right: 44,
    height: 14,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 14,
  },
  rectangleParent: {
    top: -5,
    left: -8,
    height: 95,
    width: 390,
    position: "absolute",
  },
});

export default GroupComponent5;
