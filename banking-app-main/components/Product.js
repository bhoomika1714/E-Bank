import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Item from "./Item";
import { Color, FontSize, FontFamily, Padding, Gap } from "../GlobalStyles";

const Product = () => {
  return (
    <View style={[styles.product, styles.linePosition]}>
      <View style={[styles.line, styles.linePosition]} />
      <Item
        propLeft={320}
        image={require("../assets/-image.png")}
        beoplayA9="Beoplay A9"
        propLeft1="400%"
      />
      <Item
        propLeft={225}
        image={require("../assets/-image1.png")}
        beoplayA9="Beoplay H4 2…"
        propLeft1="281.25%"
      />
      <Item
        propLeft={130}
        image={require("../assets/-image2.png")}
        beoplayA9="Beosound Ba…"
        propLeft1="162.5%"
      />
      <Item image={require("../assets/-image3.png")} beoplayA9="Beosound 1" />
      <View style={styles.title}>
        <Text style={styles.products}>Products</Text>
        <Image
          style={styles.iconR}
          contentFit="cover"
          source={require("../assets/r.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    left: 0,
    position: "absolute",
  },
  line: {
    height: "0.55%",
    top: "99.45%",
    right: 25,
    bottom: "0%",
    backgroundColor: Color.colorWhitesmoke_600,
  },
  products: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
  },
  iconR: {
    width: 24,
    height: 24,
  },
  title: {
    left: 35,
    width: 305,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_16xl,
    gap: Gap.gap_19xl,
    height: 24,
    top: 0,
    position: "absolute",
  },
  product: {
    width: 400,
    height: 181,
    top: 0,
  },
});

export default Product;
