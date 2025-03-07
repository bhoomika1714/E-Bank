import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import KeyboardsNumber from "../components/KeyboardsNumber";
import Button1 from "../components/Button1";
import Item3 from "../components/Item3";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import TimeStyle from "../components/TimeStyle";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UPIPIN3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upiPin}>
      <View style={styles.body}>
        <KeyboardsNumber textHeight="51.51%" textTop="48.49%" />
        <View
          style={[styles.barsHomeIndicatorIphone, styles.image111IconPosition]}
        >
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("Info6")}
          propHeight={44}
          propWidth={305}
          propTop={226}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#e0a340"
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
        <Text style={styles.otpAuthentication}>Enter UPI PIN</Text>
      </View>
      <View style={styles.upiPinChild} />
      <Image
        style={[styles.image111Icon, styles.image111IconPosition]}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <Text style={styles.bankOfBaroda}>Bank of Baroda</Text>
      <BarsTopBarsV2
        capIconBackgroundColor="#e0a340"
        capIconHeight={54}
        capIconWidth={375}
        propMarginTop={10}
        wifi={require("../assets/wifi14.png")}
        cellularConnection={require("../assets/cellular-connection10.png")}
        showBattery
      />
      <TimeStyle
        propTop={-6}
        propLeft={18}
        propWidth={54}
        propHeight={21}
        propMarginTop={-3.5}
      />
      <View style={[styles.battery, styles.borderLayout]}>
        <View style={[styles.border, styles.borderLayout]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap2.png")}
        />
        <View style={[styles.capacity, styles.capacityBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image111IconPosition: {
    left: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.lightGray11,
    position: "absolute",
  },
  borderLayout: {
    height: 11,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    top: 595,
    width: 375,
    height: 34,
    opacity: 0.05,
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
    top: "50%",
    left: "27.47%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    height: 26,
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
  upiPinChild: {
    top: 53,
    left: 3,
    borderColor: "#c58a2b",
    borderTopWidth: 2,
    width: 370,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  image111Icon: {
    top: 64,
    width: 55,
    height: 55,
  },
  bankOfBaroda: {
    top: 83,
    left: 72,
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.lightGray11,
    textAlign: "center",
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 7,
    right: 16,
    width: 24,
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

export default UPIPIN3;
