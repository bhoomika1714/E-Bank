import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent19 from "../components/FrameComponent19";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const SetNewPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setNewPassword}>
      <View style={styles.setNewPasswordParent}>
        <Text style={[styles.setNewPassword1, styles.newClr]}>
          Set new password
        </Text>
        <Text style={[styles.enterYourNew, styles.setPasswordLayout]}>
          Enter your new password below and check the hint while setting it.
        </Text>
      </View>
      <Image
        style={styles.d582c7b6b0cc0181684d39e802d7efIcon}
        contentFit="cover"
        source={require("../assets/76d582c7b6b0cc0181684d39e802d7ef.png")}
      />
      <FrameComponent8 />
      <View style={styles.setNewPasswordChild} />
      <Image
        style={styles.setNewPasswordItem}
        contentFit="cover"
        source={require("../assets/frame-101.png")}
      />
      <View style={styles.instanceParent}>
        <FrameComponent19
          onFramePressablePress={() => navigation.navigate("Home")}
          propLeft={0}
          propTop={0}
          primary="Submit verification"
          showPrimary={false}
        />
        <Text style={[styles.setPassword, styles.setPasswordLayout]}>
          Set password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newClr: {
    color: Color.lightGray11,
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  setPasswordLayout: {
    lineHeight: 20,
    fontSize: FontSize.m3TitleMedium_size,
  },
  setNewPassword1: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 38,
    fontWeight: "700",
    textAlign: "center",
  },
  enterYourNew: {
    fontWeight: "500",
    textAlign: "left",
    width: 252,
    color: Color.lightGray11,
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  setNewPasswordParent: {
    top: 102,
    left: 54,
    gap: Gap.gap_4xs,
    position: "absolute",
  },
  d582c7b6b0cc0181684d39e802d7efIcon: {
    top: 0,
    left: -4,
    width: 368,
    height: 800,
    display: "none",
    position: "absolute",
  },
  setNewPasswordChild: {
    top: 68,
    left: 226,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorThistle,
    width: 5,
    height: 5,
    position: "absolute",
  },
  setNewPasswordItem: {
    top: 660,
    left: 78,
    width: 360,
    height: 152,
    position: "absolute",
  },
  setPassword: {
    top: 18,
    left: 70,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  instanceParent: {
    top: 517,
    left: 62,
    height: 56,
    width: 252,
    position: "absolute",
  },
  setNewPassword: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SetNewPassword;
