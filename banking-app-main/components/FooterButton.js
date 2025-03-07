import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FooterButton = ({ buttonText }) => {
  return (
    <View style={styles.footerButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.lightGray7,
    textAlign: "center",
  },
  footerButton: {
    borderRadius: Border.br_11xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default FooterButton;
