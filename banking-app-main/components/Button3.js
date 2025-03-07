import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button3 = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.button1}>PAY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    fontSize: FontSize.m3LabelLarge_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.white,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    height: "66.67%",
    width: "15.8%",
    top: "10.42%",
    right: "0%",
    bottom: "22.92%",
    left: "84.2%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lightPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
});

export default Button3;
