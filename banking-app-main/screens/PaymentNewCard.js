import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBariPhoneLight from "../components/BarsStatusBariPhoneLight";
import Button1 from "../components/Button1";
import Item4 from "../components/Item4";
import Card3 from "../components/Card3";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const PaymentNewCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentNewCard}>
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
          style={[styles.iconsdevicescamera, styles.iconsdevicescameraLayout]}
          contentFit="cover"
          source={require("../assets/iconsdevicescamera.png")}
        />
        <Pressable
          style={[
            styles.iconsarrowsarrowLongLeft,
            styles.iconsdevicescameraLayout,
          ]}
          onPress={() => navigation.navigate("PaymentMethod5")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={[styles.title, styles.titleTypo]}>Add New Card</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("OrderReview1")}
          propHeight={44}
          propWidth={305}
          propTop={610}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Order Review"
          propLeft1={104}
        />
        <Item4
          propTop={304}
          propWidth={305}
          propLeft={35}
          label="Card Number"
          propWidth2={305}
          iconR11={false}
          iconR={require("../assets/-icon--r2.png")}
          iconL={require("../assets/-icon--l3.png")}
          placeholder="5988 9942 6686 9000"
          iconRBackgroundColor="#8f92a1"
          propWidth1="225"
        />
        <Item4
          propTop={404}
          propWidth={145}
          propLeft={35}
          label="Expiry Date"
          propWidth2={145}
          iconR11={false}
          iconR={require("../assets/-icon--r2.png")}
          iconL={require("../assets/iconsalertscalendar.png")}
          placeholder="01/2022"
          iconRBackgroundColor="#8f92a1"
          propWidth1="65"
        />
        <Item4
          propTop={404}
          propWidth={145}
          propLeft={195}
          label="CVV"
          propWidth2={145}
          iconR11={false}
          iconR={require("../assets/-icon--r2.png")}
          iconL={require("../assets/iconsbuttonslock.png")}
          placeholder="000"
          iconRBackgroundColor="#8f92a1"
          propWidth1="65"
        />
        <Item4
          propTop={204}
          propWidth={305}
          propLeft={35}
          label="Card Holder"
          propWidth2={305}
          iconR11={false}
          iconR={require("../assets/-icon--r2.png")}
          iconL={require("../assets/-icon--l6.png")}
          placeholder="Sajin Tamang"
          iconRBackgroundColor="#8f92a1"
          propWidth1="225"
        />
        <View style={styles.title1}>
          <Image
            style={styles.iconL}
            contentFit="cover"
            source={require("../assets/-icon--l7.png")}
          />
          <Text style={[styles.saveToMy, styles.titleTypo]}>
            Save to My Cards
          </Text>
        </View>
        <Card3 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsdevicescameraLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  titleTypo: {
    color: Color.blackB100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  iconsdevicescamera: {
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
  },
  barstopBarsv4: {
    backgroundColor: Color.yellowY100,
    height: 100,
    width: 375,
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
    left: 0,
    height: 34,
    opacity: 0.05,
    position: "absolute",
    width: 375,
  },
  iconL: {
    width: "15.79%",
    top: "0%",
    right: "84.21%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveToMy: {
    marginTop: -12,
    left: "26.32%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 24,
    textAlign: "left",
  },
  title1: {
    height: "3.49%",
    width: "40.53%",
    top: "73.26%",
    right: "50.13%",
    bottom: "23.26%",
    left: "9.33%",
    position: "absolute",
  },
  body: {
    height: 688,
    width: 375,
  },
  paymentNewCard: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    alignItems: "center",
    gap: Gap.gap_lg,
    overflow: "hidden",
    width: "100%",
  },
});

export default PaymentNewCard;
