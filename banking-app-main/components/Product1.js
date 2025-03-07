import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Item1 from "./Item1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Product1 = () => {
  return (
    <View style={styles.product}>
      <View style={[styles.line, styles.linePosition]} />
      <Item1
        propRight="0%"
        propLeft="80%"
        image={require("../assets/-image.png")}
        beoplayA9="Beoplay A9"
      />
      <Item1
        propRight="23.75%"
        propLeft="56.25%"
        image={require("../assets/-image1.png")}
        beoplayA9="Beoplay H4 2…"
      />
      <Item1
        propRight="47.5%"
        propLeft="32.5%"
        image={require("../assets/-image2.png")}
        beoplayA9="Beosound Ba…"
      />
      <Item1 image={require("../assets/-image3.png")} beoplayA9="Beosound 1" />
      <View style={styles.title}>
        <Image
          style={[styles.iconR, styles.linePosition]}
          contentFit="cover"
          source={require("../assets/r.png")}
        />
        <Text style={styles.products}>Products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    bottom: "0%",
    position: "absolute",
  },
  line: {
    height: "0.55%",
    top: "99.45%",
    right: 25,
    backgroundColor: Color.colorWhitesmoke_600,
    left: 0,
  },
  iconR: {
    height: "100%",
    width: "7.87%",
    right: "0%",
    left: "92.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
  },
  products: {
    marginTop: -12,
    top: "50%",
    left: "0%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    position: "absolute",
  },
  title: {
    height: "13.26%",
    width: "76.25%",
    right: "15%",
    bottom: "86.74%",
    left: "8.75%",
    top: "0%",
    position: "absolute",
  },
  product: {
    height: "26.31%",
    right: 0,
    bottom: "73.69%",
    left: 0,
    top: "0%",
    position: "absolute",
  },
});

export default Product1;
