import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item1 = ({ propRight, propLeft, image, beoplayA9 }) => {
  const item2Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  return (
    <View style={[styles.item, item2Style]}>
      <Image
        style={[styles.baseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/base1.png")}
      />
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        contentFit="cover"
        source={image}
      />
      <Text style={[styles.beosound1, styles.baseIconPosition]}>
        {beoplayA9}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  baseIconPosition: {
    left: "0%",
    width: "100%",
  },
  baseIcon: {
    height: "74.07%",
    top: "0%",
    right: "0%",
    bottom: "25.93%",
    borderRadius: Border.br_5xl,
    left: "0%",
    width: "100%",
  },
  imageIcon: {
    height: "59.26%",
    width: "80%",
    top: "7.41%",
    right: "10%",
    bottom: "33.33%",
    left: "10%",
    borderRadius: Border.br_base,
  },
  beosound1: {
    top: "81.48%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    position: "absolute",
  },
  item: {
    height: "59.67%",
    width: "20%",
    top: "26.52%",
    right: "71.25%",
    bottom: "13.81%",
    left: "8.75%",
    position: "absolute",
  },
});

export default Item1;
