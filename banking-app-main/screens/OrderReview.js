import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import Info11 from "../components/Info11";
import Product1 from "../components/Product1";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const OrderReview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderReview}>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("Onboarding1")}
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
        <View style={[styles.total, styles.totalLayout]}>
          <View style={[styles.total1, styles.totalLayout]}>
            <Text style={[styles.text, styles.textLayout]}>$ 9,800</Text>
            <Text style={[styles.total2, styles.total2Typo]}>Total:</Text>
          </View>
          <View style={[styles.shipping, styles.titlePosition]}>
            <Text style={[styles.free, styles.freePosition]}>Free</Text>
            <Text style={[styles.shipping1, styles.freePosition]}>
              Shipping
            </Text>
          </View>
        </View>
        <Info11 />
        <Product1 />
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
          onPress={() => navigation.navigate("PaymentMethod3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={[styles.title, styles.titlePosition]}>Order Review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalLayout: {
    width: 305,
    position: "absolute",
  },
  textLayout: {
    width: 145,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.blackB100,
    top: 0,
    position: "absolute",
  },
  total2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
  },
  titlePosition: {
    top: "50%",
    position: "absolute",
  },
  freePosition: {
    color: Color.grayG100,
    fontSize: FontSize.m3LabelLarge_size,
    width: "47.54%",
    marginTop: -12,
    top: "50%",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
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
  text: {
    left: 160,
    textAlign: "right",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  total2: {
    width: 145,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.blackB100,
    top: 0,
    position: "absolute",
    left: 0,
  },
  total1: {
    top: 32,
    height: 24,
    left: 0,
  },
  free: {
    left: "52.46%",
    textAlign: "right",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  shipping1: {
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
  },
  shipping: {
    marginTop: -28,
    right: "0%",
    left: "0%",
    height: 24,
    width: "100%",
  },
  total: {
    top: 504,
    height: 56,
    left: 35,
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
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
  },
  barstopBarsv4: {
    height: 100,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  orderReview: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OrderReview;
