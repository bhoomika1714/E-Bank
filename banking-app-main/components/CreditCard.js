import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CreditCard = ({ propRight, propLeft }) => {
  const creditCardStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  return (
    <View style={[styles.creditCard, creditCardStyle]}>
      <View style={[styles.line, styles.linePosition]} />
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.base, styles.linePosition]} />
        <View style={styles.base1} />
        <View style={styles.item}>
          <View style={[styles.base2, styles.base2Position]} />
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>{`&3,580.04`}</Text>
          <Text style={[styles.travelCard, styles.textPosition]}>
            Travel Card
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>**** 9000</Text>
          <Text style={[styles.text2, styles.textTypo]}>01 / 22</Text>
        </View>
        <View style={styles.add}>
          <View style={[styles.rectangle, styles.base2Position]} />
          <Image
            style={[styles.iconL, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/-icon--l2.png")}
          />
        </View>
      </View>
      <View style={[styles.title, styles.cardPosition]}>
        <Image
          style={[styles.rIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/r.png")}
        />
        <Image
          style={[styles.iconL1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon--l3.png")}
        />
        <Text style={styles.creditCard1}>Credit Card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    opacity: 0.2,
    position: "absolute",
  },
  cardPosition: {
    left: "9.33%",
    right: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  base2Position: {
    width: "100%",
    left: "0%",
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
    width: "56.25%",
    left: "10%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: -1,
    marginTop: -43.5,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: "7.87%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  line: {
    height: "0.46%",
    top: "99.54%",
    left: 0,
    backgroundColor: Color.grayG100,
    bottom: "0%",
    opacity: 0.2,
    right: 0,
  },
  base: {
    height: "58.52%",
    width: "47.21%",
    top: "20.74%",
    bottom: "20.74%",
    left: "52.79%",
    borderRadius: Border.br_mini_4,
    backgroundColor: Color.blackB100,
    right: "0%",
  },
  base1: {
    height: "79.26%",
    width: "62.95%",
    top: "10.37%",
    right: "2.62%",
    bottom: "10.37%",
    left: "34.43%",
    borderRadius: Border.br_lgi_2,
    backgroundColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  base2: {
    borderRadius: Border.br_5xl,
    left: "0%",
    backgroundColor: Color.blackB100,
  },
  icon: {
    height: "17.78%",
    width: "15.08%",
    top: "64.44%",
    right: "10.33%",
    left: "74.58%",
    bottom: "17.78%",
  },
  text: {
    marginTop: 19.5,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 24,
    top: "50%",
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
    width: "56.25%",
  },
  travelCard: {
    top: "46.67%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
    width: "56.25%",
  },
  text1: {
    left: "10%",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: -1,
    marginTop: -43.5,
  },
  text2: {
    left: "74.17%",
  },
  item: {
    width: "78.69%",
    right: "5.9%",
    left: "15.41%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke_600,
    left: "0%",
  },
  iconL: {
    height: "27.59%",
    width: "61.54%",
    top: "36.78%",
    right: "17.95%",
    bottom: "35.63%",
    left: "20.51%",
  },
  add: {
    height: "64.44%",
    width: "12.79%",
    top: "17.78%",
    right: "87.21%",
    bottom: "17.78%",
    left: "0%",
    position: "absolute",
  },
  card: {
    height: "62.5%",
    top: "22.22%",
    bottom: "15.28%",
  },
  rIcon: {
    left: "92.13%",
    right: "0%",
  },
  iconL1: {
    right: "92.13%",
    left: "0%",
  },
  creditCard1: {
    marginTop: -12,
    left: "13.11%",
    color: Color.blackB100,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  title: {
    height: "11.11%",
    bottom: "88.89%",
    top: "0%",
    left: "9.33%",
    right: "9.33%",
    width: "81.33%",
  },
  creditCard: {
    height: "31.76%",
    bottom: "68.24%",
    left: 3,
    right: 0,
    top: "0%",
    position: "absolute",
  },
});

export default CreditCard;
