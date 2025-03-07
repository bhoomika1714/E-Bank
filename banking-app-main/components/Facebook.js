import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Facebook = () => {
  return (
    <View style={styles.facebook}>
      <View style={styles.base} />
      <View style={[styles.content, styles.contentPosition]}>
        <Text style={[styles.connectWithFaceboo, styles.contentPosition1]}>
          Connect with Facebook
        </Text>
        <Image
          style={[styles.facebookLogo, styles.contentPosition]}
          contentFit="cover"
          source={require("../assets/facebook--logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  contentPosition1: {
    top: "50%",
    marginTop: -12,
  },
  base: {
    height: "100%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.blueB100,
    top: "0%",
    position: "absolute",
  },
  connectWithFaceboo: {
    left: "33.18%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: -1,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  facebookLogo: {
    height: "99.58%",
    width: "11.37%",
    right: "88.63%",
    bottom: "0.42%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
  },
  content: {
    marginLeft: -140.5,
    left: "50%",
    width: 211,
    height: 24,
    top: "50%",
    marginTop: -12,
  },
  facebook: {
    top: 590,
    left: 35,
    width: 305,
    height: 48,
    position: "absolute",
  },
});

export default Facebook;
