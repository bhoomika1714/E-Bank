import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Email from "./Email";
import Search from "./Search";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Inputs = () => {
  return (
    <View style={styles.inputs}>
      <Email label="name@gmail.com" title="Email" />
      <View style={styles.password}>
        <Search />
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: FontSize.size_2xs,
    textDecoration: "underline",
    letterSpacing: 0.1,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratRegular,
    color: Color.primaryMain,
    textAlign: "left",
    overflow: "hidden",
    height: 13,
    display: "none",
    alignSelf: "stretch",
  },
  password: {
    gap: Gap.gap_12xs,
    alignSelf: "stretch",
  },
  inputs: {
    gap: Gap.gap_8xs,
    alignSelf: "stretch",
  },
});

export default Inputs;
