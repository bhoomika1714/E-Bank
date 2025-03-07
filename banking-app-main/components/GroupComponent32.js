import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "./StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent32 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBarParent}>
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
      <View style={[styles.headerParent, styles.wrapperLayout]}>
        <View style={styles.header}>
          <Text style={styles.notification}>Notification</Text>
          <Image
            style={[styles.linesystemsearchLineIcon, styles.timeLightPosition]}
            contentFit="cover"
            source={require("../assets/linesystemsearchline.png")}
          />
        </View>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-34233.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  timeLightPosition: {
    overflow: "hidden",
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
  },
  notification: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  linesystemsearchLineIcon: {
    left: 202,
    width: 29,
    height: 26,
    top: 0,
  },
  header: {
    top: 6,
    left: 80,
    width: 231,
    height: 28,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 40,
    left: 0,
    top: 0,
  },
  headerParent: {
    top: 34,
    left: 26,
    width: 311,
  },
  statusBarParent: {
    width: 390,
    height: 95,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default GroupComponent32;
