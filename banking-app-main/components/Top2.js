import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Top2 = () => {
  return (
    <View style={[styles.top, styles.topPosition]}>
      <View style={[styles.form, styles.formPosition]}>
        <Text style={[styles.text, styles.textFlexBox]}>$1,600</Text>
        <Text style={[styles.from, styles.fromTypo]}>From</Text>
      </View>
      <View style={[styles.name, styles.formPosition]}>
        <Text style={[styles.beosoundBalance, styles.speakersPosition]}>
          Beosound Balance
        </Text>
        <Text style={[styles.speakers, styles.speakersPosition]}>Speakers</Text>
      </View>
      <View style={styles.availableColors}>
        <View style={[styles.base, styles.basePosition]} />
        <View style={[styles.base1, styles.basePosition1]} />
        <View style={[styles.item, styles.basePosition1]}>
          <View style={[styles.base2, styles.base2Position]} />
          <Image
            style={[styles.iconsalertsalarm, styles.base2Position]}
            contentFit="cover"
            source={require("../assets/iconsalertsalarm1.png")}
          />
        </View>
        <Text style={[styles.availableColors1, styles.fromTypo]}>
          Available Colors
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    position: "absolute",
    top: "50%",
  },
  formPosition: {
    left: "0%",
    width: "100%",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    position: "absolute",
  },
  fromTypo: {
    opacity: 0.6,
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  speakersPosition: {
    letterSpacing: -1,
    textAlign: "left",
    color: Color.blackB100,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  basePosition: {
    right: 0,
    borderRadius: Border.br_7xs,
  },
  basePosition1: {
    top: "57.14%",
    height: "42.86%",
    bottom: "0%",
    position: "absolute",
  },
  base2Position: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    marginTop: 0,
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    left: "0%",
    width: "100%",
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
  },
  from: {
    top: "0%",
    opacity: 0.6,
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  form: {
    marginTop: -8,
    height: 48,
    right: "0%",
    left: "0%",
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  beosoundBalance: {
    marginTop: -20,
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
  },
  speakers: {
    opacity: 0.6,
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    top: "0%",
  },
  name: {
    marginTop: -120,
    height: 88,
    right: "0%",
    left: "0%",
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  base: {
    left: 72,
    backgroundColor: Color.blackB100,
    borderRadius: Border.br_7xs,
    top: "57.14%",
    height: "42.86%",
    bottom: "0%",
    position: "absolute",
  },
  base1: {
    right: 36,
    left: 36,
    backgroundColor: Color.pinkP100,
    borderRadius: Border.br_7xs,
  },
  base2: {
    backgroundColor: Color.yellowY100,
    borderRadius: Border.br_7xs,
    right: 0,
    left: 0,
  },
  iconsalertsalarm: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  item: {
    right: 72,
    left: 0,
  },
  availableColors1: {
    marginTop: -28,
    left: 0,
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    position: "absolute",
    top: "50%",
  },
  availableColors: {
    height: "23.33%",
    top: "76.67%",
    right: 24,
    left: 0,
    bottom: "0%",
    position: "absolute",
  },
  top: {
    marginTop: -340,
    width: "32%",
    right: "58.67%",
    left: "9.33%",
    height: 240,
    top: "50%",
  },
});

export default Top2;
