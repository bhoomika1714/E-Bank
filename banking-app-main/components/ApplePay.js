import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ApplePay = ({
  propTop,
  propBottom,
  iconR,
  iconL,
  prop,
  propFontSize,
  applePay,
}) => {
  const paypalStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  const hellocarrotlabsgmaStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propFontSize]);

  return (
    <View style={[styles.paypal, styles.linePosition, paypalStyle]}>
      <View style={[styles.line, styles.linePosition]} />
      <Image
        style={[styles.iconR, styles.iconLayout]}
        contentFit="cover"
        source={iconR}
      />
      <Image
        style={[styles.iconL, styles.iconLayout]}
        contentFit="cover"
        source={iconL}
      />
      <Text
        style={[
          styles.hellocarrotlabsgma,
          styles.paypal1Position,
          hellocarrotlabsgmaStyle,
        ]}
      >
        {prop}
      </Text>
      <Text style={[styles.paypal1, styles.paypal1Position]}>{applePay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  paypal1Position: {
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    left: "20%",
    width: "53.6%",
    position: "absolute",
  },
  line: {
    height: "1.54%",
    top: "98.46%",
    right: 0,
    bottom: "0%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
  },
  iconR: {
    height: "49.23%",
    width: "8.53%",
    top: "12.31%",
    right: "9.33%",
    bottom: "38.46%",
    left: "82.13%",
  },
  iconL: {
    height: "36.92%",
    width: "6.4%",
    top: "18.46%",
    right: "84.27%",
    bottom: "44.62%",
    left: "9.33%",
  },
  hellocarrotlabsgma: {
    top: "43.08%",
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
  },
  paypal1: {
    marginTop: -32.5,
    top: "50%",
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
  },
  paypal: {
    height: "9.56%",
    top: "43.68%",
    right: 3,
    bottom: "46.76%",
  },
});

export default ApplePay;
