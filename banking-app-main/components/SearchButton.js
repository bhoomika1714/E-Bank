import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import LanguageDropdown from "./LanguageDropdown";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SearchButton = () => {
  return (
    <View style={styles.searchButton}>
      <View style={styles.searchButton1} />
      <View
        style={[styles.interfaceEssentialsearchLParent, styles.interfaceLayout]}
      >
        <Image
          style={[styles.interfaceEssentialsearchL, styles.interfaceLayout]}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <Text style={styles.searchLanguage}>Search Language</Text>
      </View>
      <LanguageDropdown
        languageDropdownPosition="absolute"
        languageDropdownWidth={241}
        languageDropdownHeight={38}
        languageDropdownMarginTop="unset"
        languageDropdownMarginLeft="unset"
        languageDropdownTop={73}
        languageDropdownLeft={0}
        selectLanguageFontSize={20}
        arrow={require("../assets/arrow.png")}
        showArrowIcon
      />
    </View>
  );
};

const styles = StyleSheet.create({
  interfaceLayout: {
    height: 20,
    position: "absolute",
  },
  searchButton1: {
    left: 19,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
    width: 335,
    height: 44,
    top: 0,
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    left: 0,
    width: 20,
    overflow: "hidden",
    top: 0,
  },
  searchLanguage: {
    top: 2,
    left: 28,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 124,
    height: 16,
    position: "absolute",
  },
  interfaceEssentialsearchLParent: {
    top: 12,
    left: 31,
    width: 152,
  },
  searchButton: {
    top: 128,
    left: 1,
    width: 354,
    height: 111,
    position: "absolute",
  },
});

export default SearchButton;
