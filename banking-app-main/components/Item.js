import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item = ({ propLeft, image, beoplayA9, propLeft1 }) => {
  const itemStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const beosound1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.item, itemStyle]}>
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
      <Text style={[styles.beosound1, beosound1Style]}>{beoplayA9}</Text>
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
  baseIcon: {
    height: "74.07%",
    top: "0%",
    right: "0%",
    bottom: "25.93%",
    left: "0%",
    borderRadius: Border.br_5xl,
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
    left: "43.75%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    width: "100%",
    position: "absolute",
  },
  item: {
    top: 48,
    left: 35,
    width: 80,
    height: 108,
    position: "absolute",
  },
});

export default Item;
