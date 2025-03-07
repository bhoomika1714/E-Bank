import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent19 from "../components/FrameComponent19";
import {
  FontSize,
  Color,
  FontFamily,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const AUTHYVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.authyVerification}>
      <View style={styles.authyVerificationParent}>
        <Text style={styles.authyVerification1}>Authy Verification</Text>
        <Text style={[styles.copyTheVerification, styles.textTypo]}>
          Copy the verification code in your authy application to verify this
          account recovery
        </Text>
      </View>
      <FrameComponent19
        onFramePressablePress={() => navigation.navigate("SetNewPassword")}
        propLeft={60}
        propTop={511}
        primary="Submit verification"
        showPrimary
      />
      <Image
        style={styles.d582c7b6b0cc0181684d39e802d7efIcon}
        contentFit="cover"
        source={require("../assets/76d582c7b6b0cc0181684d39e802d7ef.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
        </View>
      </View>
      <View style={styles.authyVerificationChild} />
      <Image
        style={styles.authyVerificationItem}
        contentFit="cover"
        source={require("../assets/frame-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.lightGray11,
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  authyVerification1: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 38,
    fontWeight: "700",
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  copyTheVerification: {
    textAlign: "left",
    width: 268,
  },
  authyVerificationParent: {
    top: 108,
    left: 44,
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
  text: {
    textAlign: "center",
  },
  wrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_400,
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
  },
  frameParent: {
    top: 264,
    left: 28,
    gap: Gap.gap_10xs,
    flexDirection: "row",
    position: "absolute",
  },
  authyVerificationChild: {
    top: 68,
    left: 226,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorThistle,
    width: 5,
    height: 5,
    position: "absolute",
  },
  authyVerificationItem: {
    top: 602,
    left: 118,
    width: 360,
    height: 152,
    position: "absolute",
  },
  authyVerification: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AUTHYVerification;
