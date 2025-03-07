import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import ApplePay from "../components/ApplePay";
import CreditCard from "../components/CreditCard";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PaymentMethod3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("OrderReview")}
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
        <View style={[styles.applePay, styles.paypalPosition]}>
          <View style={[styles.line, styles.linePosition]} />
          <Image
            style={[styles.iconR, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon--r.png")}
          />
          <Image
            style={styles.iconoirpiggyBank}
            contentFit="cover"
            source={require("../assets/iconoirpiggybank.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>**** 9000</Text>
          <Text style={[styles.applePay1, styles.titlePosition]}>
            Daily Savings
          </Text>
        </View>
        <View style={[styles.paypal, styles.paypalPosition]}>
          <View style={[styles.line1, styles.linePosition]} />
          <Image
            style={[styles.iconL, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={[styles.hellocarrotlabsgma, styles.textTypo]}>
            sajinTamangUIUX@figma.com
          </Text>
          <Text style={[styles.paypal1, styles.titlePosition]}>PayPal</Text>
        </View>
        <CreditCard propLeft={3} />
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
      <Image
        style={[styles.iconR1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon--r1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paypalPosition: {
    left: 0,
    right: 3,
    position: "absolute",
  },
  linePosition: {
    opacity: 0.2,
    backgroundColor: Color.grayG100,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
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
    height: "0.88%",
    top: "56.14%",
    bottom: "42.98%",
  },
  iconR: {
    height: "28.07%",
    top: "71.93%",
    right: "9.33%",
    left: "82.13%",
    bottom: "0%",
    width: "8.53%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    top: "24.56%",
    fontSize: FontSize.mobileBody3Regular_size,
    opacity: 0.6,
    textAlign: "left",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
    left: "20%",
    width: "53.6%",
  },
  applePay1: {
    marginTop: -57,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
    width: "53.6%",
  },
  applePay: {
    height: "16.76%",
    top: "34.12%",
    bottom: "49.12%",
  },
  line1: {
    height: "1.54%",
    top: "98.46%",
    bottom: "0%",
  },
  iconL: {
    height: "36.92%",
    width: "6.4%",
    top: "18.46%",
    right: "84.27%",
    bottom: "44.62%",
    left: "9.33%",
  },
  hellocarrotlabsgma: {
    top: "43.08%",
    fontSize: FontSize.m3LabelLarge_size,
    opacity: 0.6,
    textAlign: "left",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
    left: "20%",
    width: "53.6%",
  },
  paypal1: {
    marginTop: -32.5,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
    width: "53.6%",
  },
  paypal: {
    height: "9.56%",
    top: "43.68%",
    bottom: "46.76%",
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
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  barstopBarsv4: {
    height: 100,
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconR1: {
    height: "3.94%",
    top: "44.83%",
    right: "10.13%",
    bottom: "51.23%",
    left: "81.33%",
    width: "8.53%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  paymentMethod: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default PaymentMethod3;
