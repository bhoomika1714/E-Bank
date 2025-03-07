import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import ApplePay from "../components/ApplePay";
import CreditCard from "../components/CreditCard";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const PaymentMethod5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("PaymentNewCard")}
          propHeight={44}
          propWidth={305}
          propTop={602}
          propRight="unset"
          propBottom="unset"
          propLeft={38}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Order Review"
          propLeft1={104}
        />
        <ApplePay
          propTop="56.47%"
          propBottom="33.97%"
          iconR={require("../assets/-icon--r.png")}
          iconL={require("../assets/-icon--l.png")}
          prop="**** 9000"
          propFontSize={12}
          applePay="Apple Pay"
        />
        <View style={[styles.applePay, styles.linePosition]}>
          <View style={[styles.line, styles.linePosition]} />
          <Image
            style={styles.iconR}
            contentFit="cover"
            source={require("../assets/-icon--r.png")}
          />
          <Image
            style={styles.iconoirpiggyBank}
            contentFit="cover"
            source={require("../assets/iconoirpiggybank.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>**** 9000</Text>
          <Text style={[styles.applePay1, styles.titlePosition]}>
            Daily Savings
          </Text>
        </View>
        <ApplePay
          iconR={require("../assets/-icon--r1.png")}
          iconL={require("../assets/-icon--l1.png")}
          prop="sajinTamangUIUX@figma.com"
          applePay="PayPal"
        />
        <CreditCard />
      </View>
      <View style={styles.barstopBarsv4}>
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
          style={[
            styles.iconsbuttonsmoreAlt,
            styles.iconsbuttonsmoreAltPosition,
          ]}
          contentFit="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
        <Pressable
          style={[
            styles.iconsarrowsarrowLongLeft,
            styles.iconsbuttonsmoreAltPosition,
          ]}
          onPress={() => navigation.navigate("PaymentMethod4")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={[styles.title, styles.titlePosition]}>Payment Method</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    width: "53.6%",
  },
  titlePosition: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    color: Color.blackB100,
    left: "20%",
    position: "absolute",
  },
  iconsbuttonsmoreAltPosition: {
    top: "50%",
    height: 24,
    width: 24,
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
    left: 3,
    height: 34,
    opacity: 0.05,
    width: 375,
    position: "absolute",
  },
  line: {
    height: "1.54%",
    top: "98.46%",
    right: 0,
    bottom: "0%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
  },
  iconR: {
    height: "49.23%",
    width: "8.53%",
    top: "12.31%",
    right: "9.33%",
    bottom: "38.46%",
    left: "82.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconoirpiggyBank: {
    height: 24,
    width: 24,
    left: 35,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: "43.08%",
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
    color: Color.blackB100,
    left: "20%",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.mobileBody3Regular_size,
    width: "53.6%",
    position: "absolute",
  },
  applePay1: {
    marginTop: -32.5,
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    textAlign: "left",
    letterSpacing: 0,
    width: "53.6%",
    fontWeight: "700",
  },
  applePay: {
    height: "9.56%",
    top: "34.12%",
    right: 3,
    bottom: "56.32%",
  },
  body: {
    top: 132,
    left: -3,
    width: 378,
    height: 680,
    position: "absolute",
  },
  iconsbuttonsmoreAlt: {
    right: 35,
    marginTop: 10,
  },
  icon: {
    height: "100%",
    marginTop: 10,
    width: "100%",
  },
  iconsarrowsarrowLongLeft: {
    left: 35,
    top: "50%",
  },
  title: {
    marginTop: 12,
    width: "60%",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "700",
  },
  barstopBarsv4: {
    backgroundColor: Color.yellowY100,
    height: 100,
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
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

export default PaymentMethod5;
