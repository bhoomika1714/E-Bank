import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.about}>
      <View style={[styles.groupParent, styles.wrapperPosition]}>
        <View style={[styles.groupParent, styles.wrapperPosition]}>
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
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.wrapperPosition]}>
          <View style={[styles.groupParent, styles.wrapperPosition]}>
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
              style={styles.timeLight}
              contentFit="cover"
              source={require("../assets/time--light1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.wrapperLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <View style={styles.termsConditionWrapper}>
          <Text style={styles.termsCondition}>About Us</Text>
        </View>
      </View>
      <Text
        style={styles.l151ThankYou}
      >{`L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member.

15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy relates to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.

15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.

15.4 By using this Application, you agree to the terms of this Privacy Policy.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    top: 0,
    left: 0,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    position: "absolute",
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
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    width: 390,
    height: 95,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    left: 0,
    top: 0,
  },
  termsCondition: {
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
  },
  termsConditionWrapper: {
    top: 1,
    left: 95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  groupContainer: {
    top: 30,
    left: 28,
    width: 225,
  },
  l151ThankYou: {
    top: 126,
    left: 24,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorGray_400,
    textAlign: "left",
    width: 327,
    height: 648,
    position: "absolute",
  },
  about: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default About;
