import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const KeyboardsNumber = ({ textHeight, textTop }) => {
  const keyboardsNumberStyle = useMemo(() => {
    return {
      ...getStyleValue("height", textHeight),
      ...getStyleValue("top", textTop),
    };
  }, [textHeight, textTop]);

  return (
    <View
      style={[
        styles.keyboardsNumber,
        styles.basePosition,
        keyboardsNumberStyle,
      ]}
    >
      <View style={[styles.base, styles.basePosition]} />
      <Text style={[styles.text, styles.textTypo2]}>1</Text>
      <Text style={[styles.text1, styles.textTypo2]}>2</Text>
      <Text style={[styles.text2, styles.textTypo2]}>3</Text>
      <Text style={[styles.text3, styles.textTypo1]}>4</Text>
      <Text style={[styles.text4, styles.textTypo1]}>5</Text>
      <Text style={[styles.text5, styles.textTypo1]}>6</Text>
      <Text style={[styles.text6, styles.textTypo]}>7</Text>
      <Text style={[styles.text7, styles.textTypo]}>8</Text>
      <Text style={[styles.text8, styles.textTypo]}>9</Text>
      <Text style={[styles.text9, styles.textTypo2]}>0</Text>
      <Image
        style={styles.iconsalertsalarm}
        contentFit="cover"
        source={require("../assets/iconsalertsalarm.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
    position: "absolute",
  },
  textTypo1: {
    marginTop: -40,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
    position: "absolute",
  },
  textTypo: {
    marginTop: 26,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
    position: "absolute",
  },
  base: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.white,
  },
  text: {
    left: "9.33%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
  },
  text1: {
    left: "38.67%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
  },
  text2: {
    left: "68%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "22.67%",
  },
  text3: {
    left: "9.33%",
  },
  text4: {
    left: "38.67%",
  },
  text5: {
    left: "68%",
  },
  text6: {
    left: "9.33%",
  },
  text7: {
    left: "38.67%",
  },
  text8: {
    left: "68%",
  },
  text9: {
    marginTop: 88,
    left: "38.67%",
  },
  iconsalertsalarm: {
    height: "7.41%",
    width: "6.4%",
    top: "78.7%",
    right: "17.33%",
    bottom: "13.89%",
    left: "76.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  keyboardsNumber: {
    height: "48.8%",
    top: "51.2%",
  },
});

export default KeyboardsNumber;
