import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import Button1 from "../components/Button1";
import Code from "../components/Code";
import Item7 from "../components/Item7";
import TabBar from "../components/TabBar";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
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
          onPress={() => navigation.navigate("SingleProduct")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={styles.title}> My Cart</Text>
      </View>
      <View style={styles.body}>
        <Button1
          onButtonPress={() => navigation.navigate("ShipTo")}
          propHeight={44}
          propWidth={305}
          propTop={506}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Checkout"
          propLeft1={117}
        />
        <View style={[styles.total, styles.linePosition1]}>
          <View style={[styles.line, styles.linePosition]} />
          <Text style={[styles.text, styles.textTypo]}>$ 9,800</Text>
          <Text style={styles.total1}>Total:</Text>
        </View>
        <Code />
        <View style={styles.shipping}>
          <View style={[styles.base, styles.linePosition]} />
          <Image
            style={[styles.iconR, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-r.png")}
          />
          <Image
            style={[styles.iconL, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-l.png")}
          />
          <Text style={[styles.shipping1, styles.daysPosition]}>Shipping</Text>
          <Text style={[styles.days, styles.daysPosition]}>2-3 days</Text>
        </View>
        <Item7 />
      </View>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsbuttonsmoreAltLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  linePosition1: {
    left: 0,
    right: 0,
  },
  linePosition: {
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "34.62%",
    top: "34.62%",
    width: "7.87%",
    height: "30.77%",
    position: "absolute",
    overflow: "hidden",
  },
  daysPosition: {
    left: "23.61%",
    width: "52.79%",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.blackB100,
    position: "absolute",
  },
  iconsbuttonsmoreAlt: {
    right: 35,
    marginTop: 10,
  },
  icon: {
    marginTop: 10,
  },
  iconsarrowsarrowLongLeft: {
    left: 35,
  },
  title: {
    marginTop: 12,
    width: "60%",
    left: "20%",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
    top: "50%",
    position: "absolute",
  },
  barstopBarsv4: {
    backgroundColor: Color.yellowY100,
    height: 100,
    width: 375,
  },
  line: {
    height: "2.04%",
    bottom: "97.96%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
    left: 0,
    right: 0,
  },
  text: {
    left: "52%",
    textAlign: "right",
    letterSpacing: 0,
    top: "51.02%",
    width: "38.67%",
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.blackB100,
    position: "absolute",
  },
  total1: {
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    left: "9.33%",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    top: "51.02%",
    width: "38.67%",
    color: Color.blackB100,
    position: "absolute",
  },
  total: {
    height: "8.91%",
    top: "77.27%",
    bottom: "13.82%",
    position: "absolute",
    right: 0,
  },
  base: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_600,
    borderWidth: 2,
    height: "100%",
    width: "100%",
    backgroundColor: Color.white,
    top: "0%",
  },
  iconR: {
    right: "7.87%",
    left: "84.26%",
  },
  iconL: {
    right: "84.26%",
    left: "7.87%",
  },
  shipping1: {
    marginTop: -23,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    width: "52.79%",
    top: "50%",
  },
  days: {
    top: "53.85%",
    opacity: 0.6,
    fontFamily: FontFamily.dMSansRegular,
    width: "52.79%",
    lineHeight: 20,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  shipping: {
    height: "14.18%",
    width: "81.33%",
    top: "31.27%",
    right: "9.33%",
    bottom: "54.55%",
    left: "9.33%",
    position: "absolute",
  },
  body: {
    height: 550,
    width: 375,
  },
  cart: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 812,
    alignItems: "center",
    gap: Gap.gap_lg,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Cart;
