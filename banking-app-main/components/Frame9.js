import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import StatusBar1 from "./StatusBar1";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame9 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.groupParent, styles.frameLayout]}>
        <View style={[styles.groupParent, styles.frameLayout]}>
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
            style={[styles.timeLight, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.frameLayout]}>
          <View style={[styles.groupParent, styles.frameLayout]}>
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
              style={[styles.timeLight, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/time--light1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
        <Text style={styles.termsCondition}>{`Terms & Condition`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 95,
    width: 390,
    top: 0,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  groupLayout: {
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
  },
  groupParent: {
    left: 0,
    position: "absolute",
  },
  groupChild: {
    width: 40,
    left: 0,
    top: 0,
    height: 40,
  },
  termsCondition: {
    top: 14,
    left: 52,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    width: 258,
    height: 20,
    position: "absolute",
  },
  groupContainer: {
    top: 30,
    left: 14,
    width: 310,
  },
  frame: {
    height: 95,
    width: 390,
    top: 0,
  },
});

export default Frame9;
