import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent26 = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.sharePosition]} />
      <View style={styles.shareParent}>
        <Text style={[styles.share, styles.sharePosition]}>Share</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 100,
    width: 360,
  },
  sharePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "42.42%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 0.3,
    height: 100,
    width: 360,
  },
  share: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightGray11,
    textAlign: "left",
    width: 63,
    height: 25,
  },
  vectorIcon: {
    height: "48.03%",
    width: "12.66%",
    top: "50%",
    right: "86.5%",
    bottom: "1.97%",
    left: "0.84%",
  },
  vectorIcon1: {
    height: "57.27%",
    width: "15.99%",
    right: "43.21%",
    bottom: "0.3%",
    left: "40.81%",
  },
  vectorIcon2: {
    height: "46.36%",
    width: "6.86%",
    top: "53.64%",
    right: "47.62%",
    bottom: "0%",
    left: "45.52%",
  },
  vectorIcon3: {
    height: "55.45%",
    width: "15.31%",
    top: "43.48%",
    right: "0.25%",
    bottom: "1.06%",
    left: "84.43%",
  },
  vectorIcon4: {
    height: "57.42%",
    width: "15.86%",
    right: "0%",
    bottom: "0.15%",
    left: "84.14%",
  },
  vectorIcon5: {
    height: "26.82%",
    width: "8.04%",
    top: "57.73%",
    right: "3.87%",
    bottom: "15.45%",
    left: "88.09%",
  },
  shareParent: {
    top: 10,
    left: 50,
    width: 238,
    height: 66,
    position: "absolute",
  },
  rectangleParent: {
    top: 695,
    left: 8,
    position: "absolute",
  },
});

export default GroupComponent26;
