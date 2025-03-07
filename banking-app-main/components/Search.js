import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.text}>
        <Text style={styles.titleLabel}>Password</Text>
        <Text style={styles.label}>••••••••••••••</Text>
      </View>
      <Image
        style={styles.eyeIcon}
        contentFit="cover"
        source={require("../assets/eye.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleLabel: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.montserratRegular,
    color: Color.darkWhiteGrey60,
    textAlign: "left",
  },
  label: {
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 4,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    color: Color.blackWhiteGray100,
    textAlign: "left",
  },
  text: {
    gap: Gap.gap_18xs,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  search: {
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
  },
});

export default Search;
