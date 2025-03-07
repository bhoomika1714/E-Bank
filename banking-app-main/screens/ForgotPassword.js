import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent19 from "../components/FrameComponent19";
import Component1 from "../components/Component1";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.forgotPasswordParent}>
        <Text style={[styles.forgotPassword1, styles.oppsItHappensClr]}>
          Forgot Password
        </Text>
        <Text style={[styles.oppsItHappens, styles.oppsItHappensClr]}>
          Opps. It happens to the best of us. Input your email address to fix
          the issue.
        </Text>
      </View>
      <FrameComponent19
        onFramePressablePress={() => navigation.navigate("AUTHYVerification")}
        primary="Submit"
        showPrimary
      />
      <Image
        style={styles.d582c7b6b0cc0181684d39e802d7efIcon}
        contentFit="cover"
        source={require("../assets/76d582c7b6b0cc0181684d39e802d7ef.png")}
      />
      <View style={styles.component1Wrapper}>
        <Component1 />
      </View>
      <View style={styles.forgotPasswordChild} />
      <View style={styles.forgotPasswordItem} />
      <Image
        style={styles.forgotPasswordInner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  oppsItHappensClr: {
    color: Color.lightGray11,
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  forgotPassword1: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 38,
    fontWeight: "700",
    textAlign: "center",
  },
  oppsItHappens: {
    alignSelf: "stretch",
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "left",
  },
  forgotPasswordParent: {
    top: 118,
    left: 48,
    width: 312,
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
  component1Wrapper: {
    top: 257,
    left: 32,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 68,
    left: 226,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorThistle,
    width: 5,
    height: 5,
    position: "absolute",
  },
  forgotPasswordItem: {
    top: 648,
    left: -70,
    width: 360,
    height: 152,
    position: "absolute",
  },
  forgotPasswordInner: {
    top: 665,
    left: -36,
    width: 433,
    height: 235,
    position: "absolute",
  },
  forgotPassword: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgotPassword;
