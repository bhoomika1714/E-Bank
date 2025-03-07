import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  onButtonPress,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propBackgroundColor,
  iconsArrowsarrowLongRight,
  text,
  propLeft1,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  const baseStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const text6Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.button, styles.basePosition, buttonStyle]}
      onPress={onButtonPress}
    >
      <View style={[styles.base, styles.basePosition, baseStyle]} />
      <Image
        style={[styles.iconsarrowsarrowLongRight, styles.textPosition]}
        contentFit="cover"
        source={iconsArrowsarrowLongRight}
      />
      <Text style={[styles.text, styles.textPosition, text6Style]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    bottom: "0%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  base: {
    height: "100%",
    top: "0%",
    right: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.yellowY100,
  },
  iconsarrowsarrowLongRight: {
    marginTop: -12,
    right: 16,
    width: 24,
    height: 24,
  },
  text: {
    marginTop: -10,
    left: 109,
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.white,
    textAlign: "center",
  },
  button: {
    height: "23.4%",
    width: "100%",
    top: "76.6%",
    right: "0%",
    left: "0%",
  },
});

export default Button1;
