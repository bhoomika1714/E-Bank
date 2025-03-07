import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input1 = ({
  iconRBackgroundColor,
  iconR,
  iconR1,
  iconL,
  placeholder,
  propWidth,
}) => {
  const line1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", iconRBackgroundColor),
    };
  }, [iconRBackgroundColor]);

  const placeholderStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.input, styles.linePosition]}>
      <View style={[styles.line, styles.linePosition, line1Style]} />
      {!iconR1 && (
        <Image
          style={[styles.iconR, styles.iconRPosition]}
          contentFit="cover"
          source={iconR}
        />
      )}
      <Image
        style={[styles.iconsothermail, styles.iconRPosition]}
        contentFit="cover"
        source={iconL}
      />
      <Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  iconRPosition: {
    height: 24,
    width: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  line: {
    height: "2.27%",
    top: "97.73%",
    bottom: "0%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
    left: 0,
    right: 0,
  },
  iconR: {
    right: 0,
  },
  iconsothermail: {
    left: 0,
  },
  placeholder: {
    marginTop: -10,
    left: 40,
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.blackB100,
    textAlign: "left",
    width: 225,
    top: "50%",
    position: "absolute",
  },
  input: {
    top: 24,
    backgroundColor: Color.white,
    height: 44,
    left: 0,
    right: 0,
  },
});

export default Input1;
