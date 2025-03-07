import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Facebook from "../components/Facebook";
import Button1 from "../components/Button1";
import Item4 from "../components/Item4";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import Left from "../components/Left";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.body, styles.bodyPosition]}>
        <Facebook />
        <View style={[styles.barsHomeIndicatorIphone, styles.bodyPosition]}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={[styles.button, styles.linePosition]}>
          <View style={[styles.line, styles.linePosition]} />
          <Text style={styles.alreadyHaveAnContainer}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Text style={styles.signIn}>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.signIn1Typo}>Sign in</Text>
            </Text>
          </Text>
          <Button1
            onButtonPress={() => navigation.navigate("RecoverPassword")}
            propHeight="43.14%"
            propWidth="81.33%"
            propTop="0%"
            propRight="9.33%"
            propBottom="56.86%"
            propLeft="9.33%"
            propBackgroundColor="#c6ab5a"
            iconsArrowsarrowLongRight={require("../assets/iconsbuttonslogin.png")}
            text="Sign Up"
            propLeft1={127}
          />
        </View>
        <View style={[styles.termAndConditions, styles.titlePosition]}>
          <Text style={styles.byCreatingAnContainer}>
            <Text
              style={styles.byCreatingAn}
            >{`By creating an account, you agree to our
`}</Text>
            <Text style={styles.signIn1Typo}>{`Term & Conditions`}</Text>
          </Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon25.png")}
          />
        </View>
        <View style={styles.form}>
          <Item4
            propTop={200}
            propWidth={305}
            propLeft={0}
            label=" Password"
            propWidth2={305}
            iconR11
            iconR={require("../assets/iconsothereye.png")}
            iconL={require("../assets/iconsbuttonslock.png")}
            placeholder="• • • • • • • •"
            iconRBackgroundColor="#8f92a1"
            propWidth1="225"
          />
          <Item4
            propTop={108}
            propWidth={305}
            propLeft={0}
            label="Username"
            propWidth2={305}
            iconR11
            iconR={require("../assets/-icon--r3.png")}
            iconL={require("../assets/-icon--l6.png")}
            placeholder="SajinUIUX"
            iconRBackgroundColor="#02c697"
            propWidth1="225"
          />
          <Item4
            label="Email"
            iconR11
            iconR={require("../assets/-icon--r2.png")}
            iconL={require("../assets/iconsothermail.png")}
            placeholder="sajinTamangUIUX@figma.com"
          />
        </View>
        <View style={[styles.title, styles.titlePosition]}>
          <Text style={[styles.createAnAccount, styles.gettingStartedPosition]}>
            Create an account to continue!
          </Text>
          <Text style={[styles.gettingStarted, styles.gettingStartedPosition]}>
            Getting Started
          </Text>
        </View>
      </View>
      <BarsTopBarsV2
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="15"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="17"
      />
      <Left />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  linePosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  titlePosition: {
    right: "9.33%",
    left: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  gettingStartedPosition: {
    color: Color.blackB100,
    left: "0%",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightGray11,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 638,
    height: 34,
    opacity: 0.05,
  },
  line: {
    height: "0.98%",
    top: "99.02%",
    bottom: "0%",
    backgroundColor: Color.colorWhitesmoke_600,
  },
  alreadyHaveAn: {
    color: "rgba(23, 23, 23, 0.6)",
    fontFamily: FontFamily.dMSansRegular,
  },
  textTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  signIn1Typo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  signIn: {
    color: Color.lightGray11,
  },
  alreadyHaveAnContainer: {
    marginTop: 9,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 0,
    left: "9.33%",
    width: "81.33%",
    top: "50%",
    position: "absolute",
  },
  button: {
    height: "15.18%",
    top: "69.05%",
    bottom: "15.77%",
  },
  byCreatingAn: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byCreatingAnContainer: {
    marginTop: -20,
    width: "89.51%",
    left: "10.49%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 20,
    textAlign: "left",
    color: Color.lightGray11,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  icon: {
    height: "40%",
    width: "5.25%",
    top: "10%",
    right: "94.75%",
    bottom: "50%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  termAndConditions: {
    marginTop: 52,
    height: 40,
    top: "50%",
  },
  form: {
    top: 104,
    left: 35,
    width: 305,
    height: 268,
    position: "absolute",
  },
  createAnAccount: {
    top: "62.5%",
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 24,
    opacity: 0.6,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  gettingStarted: {
    marginTop: -32,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
  },
  title: {
    height: "9.52%",
    top: "0%",
    bottom: "90.48%",
  },
  body: {
    top: 140,
    height: 672,
  },
  signUp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
