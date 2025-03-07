import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import { useNavigation } from "@react-navigation/native";
import Products1 from "../components/Products1";
import Top1 from "../components/Top1";
import { FontFamily, FontSize, Color, Border, Gap } from "../GlobalStyles";

const PaymentSuccessful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentSuccessful}>
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
          style={[styles.iconsbuttonsmoreAlt, styles.iconsarrowsarrowLayout]}
          contentFit="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
        <Pressable
          style={[styles.iconsarrowsarrowLongLeft, styles.buttonPosition]}
          onPress={() => navigation.navigate("Home2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={[styles.title, styles.textTypo]}>Order Complete</Text>
      </View>
      <View style={styles.body}>
        <View style={[styles.barsHomeIndicatorIphone, styles.basePosition]}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={[styles.button, styles.buttonPosition]}>
          <View style={[styles.base, styles.basePosition]} />
          <Image
            style={[
              styles.iconsarrowsarrowLongRight,
              styles.iconsarrowsarrowLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>See order details</Text>
        </View>
        <Products1 />
        <Top1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsarrowsarrowLayout: {
    height: 24,
    width: 24,
    top: "50%",
  },
  buttonPosition: {
    left: 35,
    position: "absolute",
  },
  textTypo: {
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
  basePosition: {
    left: 0,
    position: "absolute",
  },
  iconsbuttonsmoreAlt: {
    right: 35,
    marginTop: 10,
    position: "absolute",
  },
  icon: {
    height: "100%",
    marginTop: 10,
    width: "100%",
  },
  iconsarrowsarrowLongLeft: {
    height: 24,
    width: 24,
    top: "50%",
  },
  title: {
    marginTop: 12,
    width: "60%",
    left: "20%",
    color: Color.blackB100,
  },
  barstopBarsv4: {
    height: 100,
    width: 375,
    backgroundColor: Color.white,
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
    top: 540,
    height: 34,
    opacity: 0.05,
    width: 375,
  },
  base: {
    top: "0%",
    right: 0,
    bottom: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.yellowY100,
    height: "100%",
  },
  iconsarrowsarrowLongRight: {
    marginTop: -12,
    right: 16,
    position: "absolute",
  },
  text: {
    marginTop: -10,
    left: 88,
    color: Color.white,
  },
  button: {
    top: 496,
    width: 305,
    height: 44,
  },
  body: {
    height: 574,
    width: 375,
  },
  paymentSuccessful: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    alignItems: "center",
    gap: Gap.gap_17xl,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PaymentSuccessful;
