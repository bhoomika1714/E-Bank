import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent8 = ({
  propLeft,
  expiryDate,
  propWidth,
  prop,
  propFontFamily,
  propWidth1,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const expiryDateStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("width", propWidth1),
    };
  }, [propFontFamily, propWidth1]);

  return (
    <View
      style={[styles.expiryDateParent, styles.parentPosition, groupView2Style]}
    >
      <Text style={[styles.expiryDate, styles.textPosition, expiryDateStyle]}>
        {expiryDate}
      </Text>
      <View style={[styles.vectorParent, styles.parentPosition]}>
        <Image
          style={[styles.groupChild, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/vector-106.png")}
        />
        <Text style={[styles.text, styles.textPosition, text2Style]}>
          {prop}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 120,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  expiryDate: {
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 77,
  },
  groupChild: {
    top: 25,
    maxHeight: "100%",
    left: 0,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_600,
    width: 83,
  },
  vectorParent: {
    top: 30,
    height: 25,
    left: 0,
    position: "absolute",
  },
  expiryDateParent: {
    height: 55,
    top: 0,
    left: 0,
    position: "absolute",
  },
});

export default GroupComponent8;
