import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent8 = () => {
  return (
    <View style={styles.component1Parent}>
      <View style={styles.component1}>
        <View style={[styles.frameParent, styles.parentBorder]}>
          <View style={styles.passwordWrapper}>
            <Text style={[styles.password, styles.passwordTypo1]}>
              Set new password
            </Text>
          </View>
          <Text style={[styles.inputPasswordHere, styles.passwordTypo1]}>
            Input password here
          </Text>
          <Image
            style={[styles.iconsolideye, styles.iconsolideyeLayout]}
            contentFit="cover"
            source={require("../assets/iconsolideye.png")}
          />
        </View>
        <View style={[styles.hintHereParent, styles.parentFlexBox]}>
          <Text style={[styles.hintHere, styles.passwordTypo]}>Hint here</Text>
          <Text style={[styles.forgotPassword, styles.passwordTypo]}>
            Forgot password?
          </Text>
        </View>
      </View>
      <View>
        <View style={[styles.passwordParent, styles.parentFlexBox]}>
          <Text style={[styles.password1, styles.passwordTypo]}>
            Confirm password
          </Text>
          <Image
            style={styles.iconsolideyeLayout}
            contentFit="cover"
            source={require("../assets/iconsolideyeoff.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentBorder: {
    width: 312,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_400,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  passwordTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  iconsolideyeLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  passwordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
    fontSize: FontSize.m3LabelLarge_size,
  },
  password: {
    color: Color.lightGray11,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  passwordWrapper: {
    top: -9,
    left: 18,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    flexDirection: "row",
    position: "absolute",
  },
  inputPasswordHere: {
    top: 17,
    left: 23,
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 20,
    color: Color.slate500,
    position: "absolute",
  },
  iconsolideye: {
    top: 18,
    left: 271,
    position: "absolute",
  },
  frameParent: {
    height: 54,
  },
  hintHere: {
    lineHeight: 14,
    fontWeight: "500",
    color: Color.teal600,
  },
  forgotPassword: {
    color: Color.rose600,
    display: "none",
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "center",
  },
  hintHereParent: {
    alignSelf: "stretch",
    display: "none",
  },
  component1: {
    gap: Gap.gap_15xs,
  },
  password1: {
    color: Color.lightGray11,
    fontWeight: "700",
    lineHeight: 18,
  },
  passwordParent: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    width: 312,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_400,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  component1Parent: {
    top: 251,
    left: 24,
    gap: Gap.gap_xs,
    position: "absolute",
  },
});

export default FrameComponent8;
