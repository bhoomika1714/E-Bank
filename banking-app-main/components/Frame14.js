import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import StatusBar1 from "./StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame14 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.frameInner, styles.titleFlexBox]}>
        <View style={styles.frameLayout}>
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
      <View style={[styles.frameInner, styles.titleFlexBox]}>
        <View style={styles.frameLayout}>
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
      <View style={styles.tabBar}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Loan")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <View style={[styles.title, styles.titleLayout]}>
          <Text style={styles.label}>Send Money</Text>
        </View>
        <View style={[styles.hiddenShape, styles.titleLayout]} />
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
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  titleLayout: {
    height: 36,
    borderRadius: Border.br_5xs,
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
  frameLayout: {
    height: 95,
    width: 390,
  },
  frameInner: {
    width: 390,
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  label: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
  },
  title: {
    padding: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hiddenShape: {
    width: 36,
  },
  tabBar: {
    top: 35,
    left: 27,
    width: 327,
    height: 53,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  frame: {
    height: 95,
    width: 390,
    top: 0,
    overflow: "hidden",
  },
});

export default Frame14;
