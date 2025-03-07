import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LanguageDropdown = ({
  languageDropdownPosition,
  languageDropdownWidth,
  languageDropdownHeight,
  languageDropdownMarginTop,
  languageDropdownMarginLeft,
  languageDropdownTop,
  languageDropdownLeft,
  selectLanguageFontSize,
  arrow,
  showArrowIcon,
}) => {
  const languageDropdownStyle = useMemo(() => {
    return {
      ...getStyleValue("position", languageDropdownPosition),
      ...getStyleValue("width", languageDropdownWidth),
      ...getStyleValue("height", languageDropdownHeight),
      ...getStyleValue("marginTop", languageDropdownMarginTop),
      ...getStyleValue("marginLeft", languageDropdownMarginLeft),
      ...getStyleValue("top", languageDropdownTop),
      ...getStyleValue("left", languageDropdownLeft),
    };
  }, [
    languageDropdownPosition,
    languageDropdownWidth,
    languageDropdownHeight,
    languageDropdownMarginTop,
    languageDropdownMarginLeft,
    languageDropdownTop,
    languageDropdownLeft,
  ]);

  const selectLanguageStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", selectLanguageFontSize),
    };
  }, [selectLanguageFontSize]);

  return (
    <View style={[styles.languageDropdown, languageDropdownStyle]}>
      <View style={styles.text}>
        <Text style={[styles.selectLanguage, selectLanguageStyle]}>
          Select Language
        </Text>
      </View>
      {showArrowIcon && (
        <Image style={styles.arrowIcon} contentFit="cover" source={arrow} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectLanguage: {
    position: "relative",
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorsFont,
    textAlign: "left",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  languageDropdown: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 71,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Padding.p_3xl,
    paddingRight: Padding.p_smi,
    minWidth: 170,
    marginTop: 47,
    marginLeft: -189,
  },
});

export default LanguageDropdown;
