import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item6 = ({ propRight, propLeft, beosound1, prop, image }) => {
  const item1Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  return (
    <View style={[styles.item, item1Style]}>
      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.title, styles.titlePosition]}>
        <Text style={[styles.beosound1, styles.textPosition]}>{beosound1}</Text>
        <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.titlePosition]}
        contentFit="cover"
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  titlePosition: {
    left: "11.03%",
    right: "11.03%",
    width: "77.93%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "center",
    color: Color.blackB100,
    letterSpacing: 0,
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  bgIcon: {
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  beosound1: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    top: "0%",
    color: Color.blackB100,
    letterSpacing: 0,
  },
  text: {
    marginTop: 4,
    top: "50%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
  },
  title: {
    height: "22.97%",
    top: "69.38%",
    bottom: "7.66%",
  },
  imageIcon: {
    height: "54.07%",
    top: "7.66%",
    bottom: "38.28%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  item: {
    width: "47.54%",
    right: "52.46%",
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    top: "0%",
  },
});

export default Item6;
