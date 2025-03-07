import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import KeyboardsNumber from "../components/KeyboardsNumber";
import Button1 from "../components/Button1";
import Item3 from "../components/Item3";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <View style={styles.body}>
        <KeyboardsNumber textHeight="48.8%" textTop="51.2%" />
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("PaymentSuccessful")}
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
        <View style={styles.codeNumber}>
          <Item3
            propRight="2.24%"
            propLeft="76.92%"
            propHeight="100%"
            propWidth="20.83%"
            propTop="0%"
            propBottom="0%"
            propBackgroundColor="#8f92a1"
            number=" "
          />
          <Item3
            propRight="27.88%"
            propLeft="51.28%"
            propHeight="100%"
            propWidth="20.83%"
            propTop="0%"
            propBottom="0%"
            propBackgroundColor="#171717"
            number="0"
          />
          <Item3
            propRight="0%"
            propLeft="79.17%"
            propHeight="100%"
            propWidth="20.83%"
            propTop="0%"
            propBottom="0%"
            propBackgroundColor="#171717"
            number="0"
          />
          <Item3
            propRight="53.53%"
            propLeft="25.64%"
            propHeight="100%"
            propWidth="20.83%"
            propTop="0%"
            propBottom="0%"
            propBackgroundColor="#171717"
            number="0"
          />
          <Item3
            propRight="79.17%"
            propLeft="0%"
            propHeight="100%"
            propWidth="20.83%"
            propTop="0%"
            propBottom="0%"
            propBackgroundColor="#171717"
            number="0"
          />
        </View>
        <Text
          style={[styles.otpAuthentication, styles.otpAuthenticationPosition]}
        >
          Enter your PIN
        </Text>
      </View>
      <BarsTopBarsV2
        capIconBackgroundColor="#fff"
        capIconHeight={100}
        capIconLeft={-13}
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
      <Pressable
        style={[
          styles.iconsarrowsarrowLongLeft,
          styles.otpAuthenticationPosition,
        ]}
        onPress={() => navigation.navigate("OrderReview")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconsarrowsarrowlongleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  otpAuthenticationPosition: {
    top: "50%",
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
  codeNumber: {
    height: "9.79%",
    width: "83.2%",
    top: "19.28%",
    right: "7.47%",
    bottom: "70.93%",
    left: "9.33%",
    position: "absolute",
  },
  otpAuthentication: {
    marginTop: -332,
    width: "81.33%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    left: "9.33%",
  },
  body: {
    height: "81.77%",
    top: "18.23%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    marginTop: -330,
    height: "100%",
    width: "100%",
  },
  iconsarrowsarrowLongLeft: {
    left: 23,
    width: 24,
    height: 24,
  },
  onboarding: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;
