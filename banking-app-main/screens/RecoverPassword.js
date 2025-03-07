import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import PhoneNumber from "../components/PhoneNumber";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import Left from "../components/Left";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RecoverPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recoverPassword}>
      <View style={[styles.body, styles.bodyPosition]}>
        <View style={[styles.keyboardsNumber, styles.bodyPosition]}>
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
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("VerifyOTP")}
          propHeight={44}
          propWidth={305}
          propTop={261}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Continue"
          propLeft1={119}
        />
        <PhoneNumber />
        <View style={[styles.title, styles.basePosition]}>
          <Text style={[styles.enterYourPhone, styles.enterYourPhonePosition]}>
            Enter your Phone number to recover your password
          </Text>
          <Text
            style={[styles.passwordRecovery, styles.enterYourPhonePosition]}
          >
            Password Recovery
          </Text>
        </View>
      </View>
      <BarsTopBarsV2
        capIconBackgroundColor="#c6ab5a"
        capIconHeight={100}
        capIconWidth={375}
        propMarginTop={10}
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
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <Left propTop={50} propRight="unset" propLeft={35} />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  basePosition: {
    top: "0%",
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    color: Color.blackB100,
    lineHeight: 34,
    width: "22.67%",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: "50%",
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
  enterYourPhonePosition: {
    textAlign: "left",
    color: Color.blackB100,
    left: "0%",
    position: "absolute",
  },
  base: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
    top: "0%",
  },
  text: {
    left: "9.33%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    lineHeight: 34,
    width: "22.67%",
  },
  text1: {
    left: "38.67%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    lineHeight: 34,
    width: "22.67%",
  },
  text2: {
    left: "68%",
    marginTop: -106,
    textAlign: "center",
    color: Color.blackB100,
    lineHeight: 34,
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
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  keyboardsNumber: {
    height: "48.8%",
    top: "51.2%",
    position: "absolute",
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
    top: 630,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
    position: "absolute",
  },
  enterYourPhone: {
    width: "76.72%",
    top: "45.45%",
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 24,
    opacity: 0.6,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
  },
  passwordRecovery: {
    marginTop: -44,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    top: "50%",
    width: "100%",
  },
  title: {
    height: "13.25%",
    width: "81.33%",
    right: "9.33%",
    bottom: "86.75%",
    left: "9.33%",
  },
  body: {
    height: "81.77%",
    top: "18.23%",
    position: "absolute",
  },
  frameIcon: {
    top: 310,
    left: 44,
    width: 34,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  recoverPassword: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RecoverPassword;
