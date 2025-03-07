import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import SearchButton from "../components/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Language = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.language}>
      <View style={[styles.statusBarParent, styles.wrapperPosition]}>
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
      <View style={[styles.number, styles.groupLayout]}>
        <Text style={[styles.phoneNumber, styles.textTypo]}>Phone Number</Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textClr]}>+8801712663389</Text>
            <Image
              style={[styles.phonesphoneCallIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/phonesphone-call.png")}
            />
          </View>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/vector-1061.png")}
          />
        </View>
      </View>
      <SearchButton />
      <View style={[styles.tabBar, styles.tabBarLayout]}>
        <Pressable
          style={[styles.wrapper, styles.tabBarLayout]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <Text style={[styles.language1, styles.textClr]}>Language</Text>
      </View>
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
  groupLayout: {
    width: 335,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  parentPosition: {
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    position: "absolute",
  },
  tabBarLayout: {
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
  statusBarParent: {
    width: 390,
    height: 95,
    left: 0,
    position: "absolute",
  },
  phoneNumber: {
    color: "#bbbbc1",
    width: 104,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 3,
    left: 38,
    textTransform: "lowercase",
    width: 113,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  phonesphoneCallIcon: {
    width: 22,
    overflow: "hidden",
  },
  parent: {
    width: 151,
  },
  groupChild: {
    top: 34,
    height: 0,
    left: 0,
  },
  groupParent: {
    top: 31,
    height: 34,
    left: 0,
  },
  number: {
    top: 299,
    left: 20,
    height: 65,
    display: "none",
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
  language1: {
    top: 10,
    left: 100,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    width: 138,
    height: 20,
  },
  tabBar: {
    top: 33,
    left: 15,
    width: 238,
  },
  language: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Language;
