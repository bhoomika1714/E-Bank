import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search1 = ({
  propPosition,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  placeholder,
  propFontFamily,
  propFontWeight,
}) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
    };
  }, [
    propPosition,
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
  ]);

  const placeholder1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [propFontFamily, propFontWeight]);

  return (
    <View style={[styles.search, styles.linePosition, searchStyle]}>
      <View style={[styles.line, styles.linePosition]} />
      <Image
        style={styles.iconsothersearch}
        contentFit="cover"
        source={require("../assets/-icon--l4.png")}
      />
      <Text style={[styles.placeholder, placeholder1Style]}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    top: "0%",
    position: "absolute",
  },
  line: {
    height: "100%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_600,
  },
  iconsothersearch: {
    height: "54.55%",
    width: "7.87%",
    top: "22.73%",
    right: "5.25%",
    bottom: "22.73%",
    left: "86.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  placeholder: {
    marginTop: -10,
    top: "50%",
    left: 16,
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    width: 233,
    position: "absolute",
  },
  search: {
    height: "57.14%",
    width: "81.33%",
    right: "9.33%",
    bottom: "42.86%",
    left: "9.33%",
    backgroundColor: Color.white,
  },
});

export default Search1;
