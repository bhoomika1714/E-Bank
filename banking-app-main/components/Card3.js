import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Card3 = () => {
  return (
    <View style={[styles.card, styles.cardPosition]}>
      <LinearGradient
        style={[styles.base, styles.cardPosition]}
        locations={[0.5, 1]}
        colors={["#d39341", "#6d4c22"]}
      />
      <Text style={[styles.text, styles.textTypo1]}>01 / 2022</Text>
      <Text style={[styles.nguyenVanLinh, styles.textTypo1]}>Sajin Tamang</Text>
      <View style={styles.numberCard}>
        <Text style={[styles.text1, styles.textTypo]}>9000</Text>
        <Text style={[styles.text2, styles.textTypo]}>6686</Text>
        <Text style={[styles.text3, styles.textTypo]}>9942</Text>
        <Text style={[styles.text4, styles.textTypo]}>5988</Text>
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.cardIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/card.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    top: "0%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -1,
    fontSize: FontSize.m3LabelLarge_size,
    top: "50%",
    marginTop: 38,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.font_size,
    width: "20.33%",
    marginTop: -12,
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "72.09%",
    top: "13.95%",
    height: "13.95%",
    position: "absolute",
  },
  base: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_5xl,
    backgroundColor: "transparent",
    left: "0%",
  },
  text: {
    left: "71.8%",
  },
  nguyenVanLinh: {
    left: "10.49%",
  },
  text1: {
    left: "79.67%",
  },
  text2: {
    left: "53.11%",
  },
  text3: {
    left: "26.56%",
  },
  text4: {
    left: "0%",
  },
  numberCard: {
    width: "79.02%",
    right: "10.49%",
    height: 24,
    marginTop: -12,
    left: "10.49%",
    top: "50%",
    position: "absolute",
  },
  icon: {
    width: "11.87%",
    right: "10.75%",
    left: "77.38%",
  },
  cardIcon: {
    width: "10.13%",
    right: "79.38%",
    left: "10.49%",
  },
  card: {
    height: "25%",
    width: "81.33%",
    right: "9.33%",
    bottom: "75%",
    left: "9.33%",
  },
});

export default Card3;
