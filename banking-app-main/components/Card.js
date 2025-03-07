import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card = ({
  propLeft,
  icon,
  propWidth,
  hHigh,
  prop,
  prop1,
  propLeft1,
  propColor,
}) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
      ...getStyleValue("color", propColor),
    };
  }, [propLeft1, propColor]);

  return (
    <View style={[styles.card, styles.cardLayout, cardStyle]}>
      <View style={[styles.rectangle, styles.cardLayout]} />
      <Image style={styles.icon} contentFit="cover" source={icon} />
      <View style={[styles.text, textStyle]}>
        <Text style={[styles.hHigh, styles.textTypo]}>{hHigh}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{prop}</Text>
        <Text style={[styles.text2, styles.textTypo, text1Style]}>{prop1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 71,
    width: 186,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  icon: {
    top: 21,
    left: 14,
    width: 30,
    height: 30,
    position: "absolute",
  },
  hHigh: {
    marginTop: -21.5,
    fontWeight: "500",
    color: Color.colorDarkgray_300,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    top: "50%",
    left: "0%",
  },
  text1: {
    marginTop: 2.5,
    fontSize: FontSize.m3TitleMedium_size,
    fontWeight: "600",
    color: Color.colorDarkolivegreen,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    top: "50%",
  },
  text2: {
    marginTop: 5.5,
    left: "63.79%",
    color: Color.colorMediumaquamarine,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    top: "50%",
  },
  text: {
    top: 14,
    left: 58,
    width: 116,
    height: 43,
    overflow: "hidden",
    position: "absolute",
  },
  card: {
    top: 707,
  },
});

export default Card;
