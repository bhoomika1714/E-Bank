import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CarePolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carePolicy}>
      <Text style={[styles.termOfThe, styles.inCaseOfTypo]}>
        Term of the Policy
      </Text>
      <Text style={[styles.supplementaryCover, styles.inCaseOfTypo]}>
        Supplementary Cover
      </Text>
      <Text style={[styles.onMaturity, styles.onMaturityFlexBox]}>
        On Maturity
      </Text>
      <Text style={[styles.inCaseOf, styles.inCaseOfTypo]}>
        In case of assured’s death during policy term
      </Text>
      <Text style={[styles.specialBenefits, styles.inCaseOfTypo]}>
        Special Benefits
      </Text>
      <Text style={[styles.l151ThankYouContainer, styles.onMaturityFlexBox]}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.care}>{`Care ...
`}</Text>
        <Text style={styles.text}>{`







L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member.

15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy relates to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.

15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.

15.4 By using this Application, you agree to the terms of this Privacy Policy.`}</Text>
      </Text>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={390}
          statusBarHeight={95}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
        <Image
          style={[styles.batteryLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/battery--light1.png")}
        />
        <Image
          style={[styles.networkSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/network-signal-light1.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/wifi-signal--light2.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Plans1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <Text style={styles.termsCondition}>Updates</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inCaseOfTypo: {
    height: 14,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.mobileBody3Regular_size,
    left: 25,
    position: "absolute",
  },
  onMaturityFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  termOfThe: {
    top: 183,
    width: 147,
    height: 14,
  },
  supplementaryCover: {
    top: 211,
    width: 147,
    height: 14,
  },
  onMaturity: {
    top: 239,
    width: 79,
    height: 15,
    color: Color.lightGray11,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.mobileBody3Regular_size,
    left: 25,
    textAlign: "left",
    fontWeight: "600",
  },
  inCaseOf: {
    top: 268,
    width: 303,
  },
  specialBenefits: {
    top: 296,
    width: 109,
  },
  text: {
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.interRegular,
  },
  care: {
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  l151ThankYouContainer: {
    top: 130,
    left: 22,
    lineHeight: 24,
    color: Color.colorGray_400,
    width: 327,
    height: 648,
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    overflow: "hidden",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  termsCondition: {
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    width: 169,
    height: 20,
    fontWeight: "600",
  },
  groupParent: {
    top: 33,
    left: 27,
    width: 237,
    flexDirection: "row",
    alignItems: "center",
    gap: 55,
    height: 40,
    position: "absolute",
  },
  carePolicy: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 1,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default CarePolicy;
