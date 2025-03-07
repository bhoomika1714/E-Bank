import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Item7 = () => {
  return (
    <View style={styles.item}>
      <Image
        style={[styles.baseIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/base4.png")}
      />
      <Image
        style={[styles.imageIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image5.png")}
      />
      <View style={[styles.quantity, styles.namePosition]}>
        <View style={[styles.base, styles.rectanglePosition]} />
        <Image
          style={[styles.iconR, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon--r5.png")}
        />
        <Image
          style={[styles.iconL, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon--l9.png")}
        />
        <Text style={[styles.text, styles.sTypo]}>4</Text>
      </View>
      <View style={styles.info}>
        <View style={[styles.size, styles.sizePosition]}>
          <Text style={[styles.size1, styles.size1Position]}>Size</Text>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.s, styles.sPosition]}>S</Text>
        </View>
        <View style={[styles.color, styles.sizePosition]}>
          <Text style={[styles.size1, styles.size1Position]}>Color</Text>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.name, styles.namePosition]}>
        <Text style={[styles.text1, styles.size1Position]}>$1,600</Text>
        <Text style={[styles.beosound1, styles.size1Position]}>Beosound 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  namePosition: {
    left: "38.03%",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_9xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "16.67%",
    top: "16.67%",
    width: "20%",
    height: "66.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  sTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  sizePosition: {
    marginTop: -8,
    height: 16,
    top: "50%",
    position: "absolute",
  },
  size1Position: {
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
  },
  sPosition: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: -8,
    top: "50%",
  },
  baseIcon: {
    borderRadius: Border.br_5xl,
    left: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
  },
  imageIcon: {
    height: "83.78%",
    width: "28.85%",
    top: "8.11%",
    right: "67.21%",
    bottom: "8.11%",
    left: "3.93%",
  },
  base: {
    right: "30%",
    left: "30%",
    width: "40%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
  },
  iconR: {
    left: "80%",
    right: "0%",
  },
  iconL: {
    right: "80%",
    left: "0%",
  },
  text: {
    marginTop: -10,
    left: 32,
    width: 16,
    color: Color.blackB100,
    top: "50%",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  quantity: {
    height: "16.22%",
    width: "26.23%",
    top: "72.97%",
    right: "35.74%",
    bottom: "10.81%",
  },
  size1: {
    opacity: 0.6,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: -8,
    top: "50%",
  },
  rectangle: {
    left: "60%",
    width: "40%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    right: "0%",
  },
  s: {
    left: "70%",
    color: Color.grayG100,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.size_3xs,
    width: "20%",
  },
  size: {
    width: "39.22%",
    left: "60.78%",
    right: "0%",
  },
  rectangle1: {
    width: "34.78%",
    left: "65.22%",
    backgroundColor: Color.blackB100,
    right: "0%",
  },
  color: {
    width: "45.1%",
    right: "54.9%",
    left: "0%",
  },
  info: {
    marginTop: -30,
    width: "33.44%",
    right: "28.52%",
    height: 16,
    top: "50%",
    left: "38.03%",
    position: "absolute",
  },
  text1: {
    top: "73.68%",
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    width: "100%",
  },
  beosound1: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "0%",
    width: "100%",
  },
  name: {
    height: "51.35%",
    width: "56.72%",
    top: "10.81%",
    right: "5.25%",
    bottom: "37.84%",
  },
  item: {
    top: 0,
    left: 35,
    width: 305,
    height: 148,
    backgroundColor: Color.white,
    position: "absolute",
  },
});

export default Item7;
