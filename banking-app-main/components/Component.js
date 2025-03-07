import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({
  propTop,
  component1,
  youReceivedAPaymentOf,
  prop,
  fromJustinWestervelt,
  propFontSize,
  propFontWeight,
  propFontFamily,
}) => {
  const component8Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const amStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontSize, propFontWeight, propFontFamily]);

  return (
    <View style={[styles.component8, styles.componentLayout, component8Style]}>
      <View style={[styles.component47, styles.componentLayout]}>
        <Image
          style={[styles.component1Icon, styles.iconLayout]}
          contentFit="cover"
          source={component1}
        />
        <Text style={[styles.youReceivedAContainer, styles.amPosition]}>
          <Text style={styles.youReceivedA}>{youReceivedAPaymentOf}</Text>
          <Text style={styles.text}>{prop}</Text>
          <Text style={styles.youReceivedA}>{fromJustinWestervelt}</Text>
        </Text>
        <Text style={[styles.am, styles.amPosition, amStyle]}>9:01am</Text>
        <View style={styles.component47Child} />
        <Image
          style={[styles.linesystemstarLineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/linesystemstarline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    width: 348,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  amPosition: {
    textAlign: "left",
    letterSpacing: 0,
    left: "17.82%",
    position: "absolute",
  },
  component1Icon: {
    height: "100%",
    width: "13.79%",
    top: "0%",
    right: "86.21%",
    bottom: "0%",
    left: "0%",
  },
  youReceivedA: {
    color: Color.lightGray11,
  },
  text: {
    color: Color.lightPrimary,
  },
  youReceivedAContainer: {
    width: "85.34%",
    top: "6.25%",
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
  },
  am: {
    top: "93.75%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 16,
    fontFamily: FontFamily.m3TitleLarge,
    color: Color.lightGray11,
  },
  component47Child: {
    height: "2.08%",
    width: "81.9%",
    top: "140.63%",
    right: "0.43%",
    bottom: "-42.71%",
    left: "17.67%",
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_1000,
    borderTopWidth: 1,
    position: "absolute",
  },
  linesystemstarLineIcon: {
    height: "50%",
    width: "6.9%",
    top: "8.33%",
    right: "0%",
    bottom: "41.67%",
    left: "93.1%",
    display: "none",
  },
  component47: {
    top: 0,
    left: 0,
    height: 48,
  },
  component8: {
    top: 164,
    left: 15,
    height: 68,
  },
});

export default Component;
