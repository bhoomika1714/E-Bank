import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import Shipping from "../components/Shipping";
import Payment1 from "../components/Payment1";
import Product from "../components/Product";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const OrderReview1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderReview}>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("PaymentSuccessful1")}
          propHeight={44}
          propWidth={305}
          propTop={610}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Place Order"
          propLeft1={108}
        />
        <View style={[styles.total, styles.infoFlexBox]}>
          <View style={styles.shipping}>
            <Text style={[styles.free, styles.freeLayout]}>Free</Text>
            <Text style={[styles.shipping1, styles.total2Typo]}>Shipping</Text>
          </View>
          <View style={styles.shipping}>
            <Text style={[styles.text, styles.textLayout]}>$ 9,800</Text>
            <Text style={[styles.total2, styles.textLayout]}>Total:</Text>
          </View>
        </View>
        <View style={[styles.info, styles.infoFlexBox]}>
          <Shipping />
          <Payment1 />
          <View style={styles.line} />
        </View>
        <Product />
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
          style={[styles.iconsbuttonsmoreAlt, styles.iconsbuttonsmoreAltLayout]}
          contentFit="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
        <Pressable
          style={[
            styles.iconsarrowsarrowLongLeft,
            styles.iconsbuttonsmoreAltLayout,
          ]}
          onPress={() => navigation.navigate("PaymentNewCard")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={styles.title}>Order Review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  freeLayout: {
    width: 145,
    color: Color.grayG100,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
  },
  total2Typo: {
    marginTop: -24,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
  },
  textLayout: {
    color: Color.blackB100,
    fontSize: FontSize.m3TitleMedium_size,
    width: 145,
    lineHeight: 24,
    letterSpacing: 0,
  },
  iconsbuttonsmoreAltLayout: {
    width: 24,
    top: "50%",
    height: 24,
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
    top: 654,
    height: 34,
    opacity: 0.05,
    width: 375,
    left: 0,
    position: "absolute",
  },
  free: {
    textAlign: "right",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  shipping1: {
    width: 145,
    color: Color.grayG100,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
  },
  shipping: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_141xl,
    height: 24,
    width: 305,
  },
  text: {
    textAlign: "right",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  total2: {
    marginTop: -24,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
  },
  total: {
    top: 504,
    height: 56,
    gap: Gap.gap_12xs,
    width: 305,
    alignItems: "center",
    left: 35,
  },
  line: {
    backgroundColor: Color.colorWhitesmoke_600,
    height: 1,
    width: 375,
  },
  info: {
    top: 205,
    height: 275,
    gap: Gap.gap_lg,
    width: 375,
    left: 0,
  },
  body: {
    top: 124,
    width: 400,
    height: 688,
    left: 0,
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
    width: 24,
  },
  title: {
    marginTop: 12,
    width: "60%",
    left: "20%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    textAlign: "center",
    top: "50%",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  barstopBarsv4: {
    top: 0,
    backgroundColor: Color.yellowY100,
    height: 100,
    width: 375,
    left: 0,
    position: "absolute",
  },
  orderReview: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderReview1;
