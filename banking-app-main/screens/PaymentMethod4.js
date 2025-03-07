import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CreditCard from "../components/CreditCard";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PaymentMethod4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.button}>
          <View style={[styles.base, styles.basePosition]} />
          <Image
            style={[
              styles.iconsarrowsarrowLongRight,
              styles.iconsbuttonsmoreAltLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text}>Order Review</Text>
        </View>
        <View style={styles.applePay}>
          <View style={[styles.line, styles.linePosition]} />
          <Image
            style={[styles.iconR, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon--r.png")}
          />
          <Image
            style={[styles.iconL, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/-icon--l.png")}
          />
          <Text style={styles.text1}>**** 9000</Text>
          <Text style={[styles.applePay1, styles.appleTypo]}>Apple Pay</Text>
        </View>
        <Pressable
          style={[styles.dailySavingPay, styles.paypalLayout]}
          onPress={() => navigation.navigate("PaymentMethod3")}
        >
          <View style={[styles.line1, styles.linePosition]} />
          <Image
            style={[styles.iconR1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon--r.png")}
          />
          <Image
            style={[styles.iconoirpiggyBank, styles.iconoirpiggyBankPosition]}
            contentFit="cover"
            source={require("../assets/iconoirpiggybank.png")}
          />
          <Text style={[styles.text2, styles.text2Position]}>**** 9000</Text>
          <Text style={[styles.applePay2, styles.appleTypo]}>
            Daily Savings
          </Text>
        </Pressable>
        <Pressable
          style={[styles.paypal, styles.paypalLayout]}
          onPress={() => navigation.navigate("PaymentMethod5")}
        >
          <View style={[styles.line1, styles.linePosition]} />
          <Image
            style={[styles.iconL1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={[styles.hellocarrotlabsgma, styles.text2Position]}>
            sajinTamangUIUX@figma.com
          </Text>
          <Text style={[styles.applePay2, styles.appleTypo]}>PayPal</Text>
        </Pressable>
        <CreditCard propRight={1} propLeft={11} />
      </View>
      <View style={[styles.barstopBarsv4, styles.basePosition]}>
        <BarsStatusBariPhoneLight
          barsStatusBariPhoneLightPosition="absolute"
          barsStatusBariPhoneLightBackgroundColor="unset"
          barsStatusBariPhoneLightHeight="44%"
          barsStatusBariPhoneLightTop="0%"
          barsStatusBariPhoneLightRight="0%"
          barsStatusBariPhoneLightBottom="56%"
          barsStatusBariPhoneLightLeft="0%"
          showBattery
          wifi={require("../assets/wifi.png")}
          wifiIconHeight={11}
          wifiIconWidth={15}
          cellularConnection={require("../assets/cellular-connection.png")}
          cellularConnectionIconHeight={11}
          cellularConnectionIconWidth={17}
          propTop="7"
          propLeft="21"
          propWidth="54"
          propHeight="21"
          propMarginTop="-3.5"
        />
        <Image
          style={[styles.iconsbuttonsmoreAlt, styles.iconsbuttonsmoreAltLayout]}
          contentFit="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
        <Pressable
          style={[
            styles.iconsarrowsarrowLongLeft,
            styles.iconoirpiggyBankPosition,
          ]}
          onPress={() => navigation.navigate("Cart")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={styles.title}>Payment Method</Text>
      </View>
      <Image
        style={[styles.iconR2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon--r.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    backgroundColor: Color.yellowY100,
    left: 0,
    position: "absolute",
  },
  iconsbuttonsmoreAltLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  linePosition: {
    opacity: 0.2,
    backgroundColor: Color.grayG100,
    left: 0,
    bottom: "0%",
    right: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    left: "9.33%",
    right: "84.27%",
    width: "6.4%",
  },
  appleTypo: {
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
    color: Color.blackB100,
    letterSpacing: 0,
    left: "20%",
    width: "53.6%",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  paypalLayout: {
    height: "9.56%",
    position: "absolute",
  },
  iconPosition: {
    top: "18.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconoirpiggyBankPosition: {
    left: 35,
    height: 24,
    width: 24,
    position: "absolute",
  },
  text2Position: {
    top: "43.08%",
    opacity: 0.6,
    textAlign: "left",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
    left: "20%",
    width: "53.6%",
    lineHeight: 20,
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
    top: 646,
    left: 11,
    height: 34,
    opacity: 0.05,
    width: 375,
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_7xs,
    bottom: "0%",
    backgroundColor: Color.yellowY100,
    right: 0,
    top: "0%",
    height: "100%",
  },
  iconsarrowsarrowLongRight: {
    marginTop: -12,
    right: 16,
  },
  text: {
    marginTop: -10,
    left: 104,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    top: "50%",
    position: "absolute",
  },
  button: {
    top: 602,
    left: 46,
    width: 305,
    height: 44,
    position: "absolute",
  },
  line: {
    height: "0.48%",
    top: "99.52%",
  },
  iconR: {
    height: "15.38%",
    right: "12.27%",
    bottom: "84.62%",
    left: "79.2%",
    width: "8.53%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconL: {
    height: "11.54%",
    top: "74.52%",
    bottom: "13.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: "82.21%",
    opacity: 0.6,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
    width: "53.6%",
    color: Color.blackB100,
    left: "20%",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  applePay1: {
    marginTop: 39,
  },
  applePay: {
    height: "30.59%",
    right: 4,
    bottom: "33.97%",
    left: 8,
    top: "35.44%",
    position: "absolute",
  },
  line1: {
    height: "1.54%",
    top: "98.46%",
  },
  iconR1: {
    height: "49.23%",
    right: "10.13%",
    bottom: "32.31%",
    left: "81.33%",
    width: "8.53%",
  },
  iconoirpiggyBank: {
    top: 0,
    overflow: "hidden",
  },
  text2: {
    fontSize: FontSize.mobileBody3Regular_size,
    top: "43.08%",
  },
  applePay2: {
    marginTop: -32.5,
  },
  dailySavingPay: {
    top: "46.91%",
    right: 12,
    bottom: "43.53%",
    left: 0,
    height: "9.56%",
  },
  iconL1: {
    height: "36.92%",
    bottom: "44.62%",
    left: "9.33%",
    right: "84.27%",
    width: "6.4%",
  },
  hellocarrotlabsgma: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  paypal: {
    bottom: "55%",
    left: 12,
    top: "35.44%",
    height: "9.56%",
    right: 0,
  },
  body: {
    top: 132,
    left: -11,
    width: 387,
    height: 680,
    position: "absolute",
  },
  iconsbuttonsmoreAlt: {
    right: 35,
    marginTop: 10,
  },
  icon: {
    marginTop: 10,
    height: "100%",
    width: "100%",
  },
  iconsarrowsarrowLongLeft: {
    top: "50%",
    left: 35,
  },
  title: {
    marginTop: 12,
    width: "60%",
    color: Color.blackB100,
    left: "20%",
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    top: "50%",
    position: "absolute",
  },
  barstopBarsv4: {
    height: 100,
    top: 0,
    width: 375,
  },
  iconR2: {
    height: "3.94%",
    top: "65.02%",
    right: "13.07%",
    bottom: "31.03%",
    left: "78.4%",
    width: "8.53%",
  },
  paymentMethod: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PaymentMethod4;
