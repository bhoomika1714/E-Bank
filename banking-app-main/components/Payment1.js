import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Payment1 = () => {
  return (
    <View style={styles.payment}>
      <View style={styles.item}>
        <View style={styles.base} />
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon9.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>* * * * 9000</Text>
        <View style={[styles.edit, styles.iconPosition]}>
          <View style={styles.rectangle} />
          <Text style={[styles.change, styles.changeTypo]}>Change</Text>
        </View>
      </View>
      <Text style={[styles.payment1, styles.changeTypo]}>Payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  changeTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  base: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorPeru_400,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  icon: {
    width: "11.87%",
    right: "82.89%",
    left: "5.25%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    marginTop: -12,
    width: "49.84%",
    left: "22.62%",
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.white,
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
  },
  rectangle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.yellowY100,
    height: 24,
    width: 56,
  },
  change: {
    textAlign: "center",
    marginTop: -24,
    width: 56,
    color: Color.white,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  edit: {
    width: "18.36%",
    right: "3.93%",
    left: "77.7%",
    alignItems: "center",
  },
  item: {
    height: "60%",
    top: "40%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  payment1: {
    marginTop: -40,
    left: 35,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.blackB100,
    opacity: 0.4,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    fontSize: FontSize.size_3xs,
  },
  payment: {
    width: 305,
    height: 80,
  },
});

export default Payment1;
