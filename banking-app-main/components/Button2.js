import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Button2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Cart")}
    >
      <View style={[styles.base, styles.basePosition]} />
      <Text style={[styles.text, styles.basePosition]}>Buy</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    position: "absolute",
  },
  base: {
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.yellowY100,
  },
  text: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.white,
    textAlign: "center",
    width: 305,
  },
  button: {
    height: "12.22%",
    width: "81.33%",
    top: "78.33%",
    right: "9.33%",
    bottom: "9.44%",
    left: "9.33%",
    position: "absolute",
  },
});

export default Button2;
