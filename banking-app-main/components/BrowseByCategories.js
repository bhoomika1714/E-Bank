import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Item5 from "./Item5";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const BrowseByCategories = () => {
  return (
    <View style={styles.browseByCategories}>
      <View style={styles.line} />
      <View style={styles.card}>
        <View style={styles.item}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg1.png")}
          />
          <View style={styles.title}>
            <Text style={styles.speakers}>Headphones</Text>
            <Text style={[styles.product, styles.productPosition]}>
              15+ Product
            </Text>
          </View>
          <Image
            style={[styles.imageIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
        </View>
        <Item5 />
      </View>
      <Text style={[styles.browseByCategories1, styles.productPosition]}>
        Browse by Categories
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    right: "0%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  productPosition: {
    lineHeight: 20,
    top: "50%",
    textAlign: "center",
    color: Color.blackB100,
    letterSpacing: 0,
    position: "absolute",
  },
  line: {
    height: "0.32%",
    width: "81.34%",
    top: "99.68%",
    right: "18.66%",
    backgroundColor: Color.colorWhitesmoke_600,
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  bgIcon: {
    height: "80.65%",
    top: "19.35%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  speakers: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.blackB100,
    letterSpacing: 0,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    width: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  product: {
    marginTop: 4,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
    lineHeight: 20,
    top: "50%",
    width: "100%",
    left: "0%",
  },
  title: {
    height: "19.35%",
    width: "84.39%",
    top: "70.97%",
    right: "7.8%",
    bottom: "9.68%",
    left: "7.8%",
    position: "absolute",
  },
  imageIcon: {
    height: "64.52%",
    bottom: "35.48%",
    top: "0%",
  },
  item: {
    height: "100%",
    width: "48.12%",
    left: "51.88%",
    backgroundColor: Color.white,
    top: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  card: {
    height: "78.23%",
    width: "92.41%",
    top: "11.36%",
    bottom: "10.41%",
    left: "7.59%",
    right: "0%",
    position: "absolute",
  },
  browseByCategories1: {
    marginTop: -158.5,
    width: "66.16%",
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    top: "50%",
    left: "7.59%",
  },
  browseByCategories: {
    top: 0,
    left: 0,
    width: 461,
    height: 317,
    overflow: "hidden",
    position: "absolute",
  },
});

export default BrowseByCategories;
