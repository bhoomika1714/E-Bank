import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import MainContent from "../components/MainContent";
import FooterButton from "../components/FooterButton";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const SignInWithGoogle = () => {
  return (
    <View style={styles.signInWithGoogle}>
      <View style={[styles.accountChoiceBox, styles.languageOptionFlexBox]}>
        <View style={styles.title}>
          <View style={styles.titleContents}>
            <Image
              style={styles.googleLogoIcon}
              contentFit="cover"
              source={require("../assets/google-logo.png")}
            />
            <Text style={[styles.signInWith, styles.signInWithTypo]}>
              Sign in with Google
            </Text>
          </View>
          <View style={styles.pxBorderBottom} />
        </View>
        <MainContent />
        <View style={styles.description}>
          <Text
            style={[styles.toContinueGoogleContainer, styles.signInWithTypo]}
          >
            <Text
              style={styles.signInWithClr}
            >{`To continue, Google will share your name, email address, language preference, and profile picture with Company. Before using this app, you can review Company’s
`}</Text>
            <Text style={styles.privacyPolicy}>privacy policy</Text>
            <Text style={styles.signInWithClr}>{` and `}</Text>
            <Text style={styles.privacyPolicy}>terms of service</Text>
            <Text style={styles.signInWithClr}>.</Text>
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={[styles.languageOption, styles.languageOptionFlexBox]}>
          <Text style={styles.englishUnitedStates}>
            English (United States)
          </Text>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={styles.rightButtons}>
          <FooterButton buttonText="Help" />
          <FooterButton buttonText="Privacy" />
          <FooterButton buttonText="Terms" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  languageOptionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signInWithTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  googleLogoIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  signInWith: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.m3TitleLarge,
  },
  titleContents: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    gap: Gap.gap_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  pxBorderBottom: {
    backgroundColor: Color.colorGainsboro_300,
    height: 1,
    alignSelf: "stretch",
  },
  title: {
    alignSelf: "stretch",
  },
  signInWithClr: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.m3TitleLarge,
  },
  privacyPolicy: {
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.colorRoyalblue_100,
  },
  toContinueGoogleContainer: {
    flex: 1,
  },
  description: {
    paddingHorizontal: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_10xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  accountChoiceBox: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    height: 798,
    paddingBottom: 36,
    gap: Gap.gap_2xl,
    alignSelf: "stretch",
  },
  englishUnitedStates: {
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 17,
    color: Color.colorGray_500,
    textAlign: "center",
    fontFamily: FontFamily.m3TitleLarge,
  },
  arrowIcon: {
    width: 8,
    height: 4,
  },
  languageOption: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_12xs,
    flexDirection: "row",
  },
  rightButtons: {
    flexDirection: "row",
  },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signInWithGoogle: {
    borderRadius: 34,
    width: "100%",
    height: 812,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    gap: Gap.gap_4xs,
    alignItems: "center",
    flex: 1,
  },
});

export default SignInWithGoogle;
