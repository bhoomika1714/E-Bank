import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import KeyboardsNumber from "../components/KeyboardsNumber";
import Item3 from "../components/Item3";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UPIPIN1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upiPin}>
      <View style={styles.body}>
        <KeyboardsNumber textHeight="51.51%" textTop="48.49%" />
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
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
        <Text style={[styles.otpAuthentication, styles.timePosition1]}>
          Enter UPI PIN
        </Text>
      </View>
      <Image
        style={styles.image111Icon}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <Text style={[styles.bankOfBaroda, styles.timeClr]}>Bank of Baroda</Text>
      <Pressable
        style={[styles.signIn, styles.signLayout]}
        onPress={() => navigation.navigate("Info3")}
      >
        <View style={[styles.signIn1, styles.signIn1Position]} />
        <Text style={styles.text}>Proceed to Pay</Text>
      </Pressable>
      <View style={[styles.statusBarwhite, styles.signIn1Position]}>
        
      </View>
      <Pressable
        style={[styles.wrapper, styles.timePosition]}
        onPress={() => navigation.navigate("PaymentMethod1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition1: {
    top: "50%",
    fontWeight: "700",
  },
  timeClr: {
    color: Color.lightGray11,
    letterSpacing: 0,
    textAlign: "center",
  },
  signLayout: {
    height: 56,
    width: 335,
  },
  signIn1Position: {
    backgroundColor: Color.colorGoldenrod_100,
    top: 0,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    left: 24,
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
    top: 595,
    height: 34,
    opacity: 0.05,
    width: 375,
    left: 0,
    position: "absolute",
  },
  codeNumber: {
    height: "10.33%",
    width: "83.2%",
    top: "14.79%",
    right: "7.47%",
    bottom: "74.88%",
    left: "9.33%",
    position: "absolute",
  },
  otpAuthentication: {
    marginTop: -314.5,
    width: "40.53%",
    left: "27.47%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    height: 26,
    fontWeight: "700",
    position: "absolute",
  },
  body: {
    height: "77.46%",
    top: "22.54%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  image111Icon: {
    top: 80,
    left: 151,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bankOfBaroda: {
    top: 127,
    left: 138,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  signIn1: {
    borderRadius: Border.br_base,
    height: 56,
    width: 335,
  },
  text: {
    top: 16,
    left: 58,
    fontSize: FontSize.font_size,
    lineHeight: 24,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    width: 220,
    height: 24,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  signIn: {
    top: 392,
    left: 20,
    position: "absolute",
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    color: Color.lightGray11,
    letterSpacing: 0,
    fontWeight: "700",
    top: "50%",
  },
  statusBarwhite: {
    height: 36,
    width: 400,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 50,
    width: 40,
    height: 40,
  },
  upiPin: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UPIPIN1;

