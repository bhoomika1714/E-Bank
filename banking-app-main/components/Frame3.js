import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import StatusBar1 from "./StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={[styles.statusBarParent, styles.frame1Layout]}>
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
            source={require("../assets/wifi-signal--light1.png")}
          />
          <Image
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={styles.tabBar}>
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
          <Text style={styles.myCards}>My Cards</Text>
          <Pressable
            style={[styles.addIcon, styles.wrapperLayout]}
            onPress={() => navigation.navigate("AddNewCard")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/addicon1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    position: "absolute",
  },
  frame1Layout: {
    height: 95,
    width: 390,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  wrapperLayout: {
    width: 40,
    height: 40,
    top: 0,
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
    overflow: "hidden",
    position: "absolute",
  },
  statusBarParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 0,
  },
  myCards: {
    top: 11,
    left: 105,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: "center",
    width: 124,
    height: 20,
    position: "absolute",
  },
  addIcon: {
    left: 293,
  },
  tabBar: {
    top: 37,
    left: 11,
    width: 333,
    height: 40,
    position: "absolute",
  },
  frame1: {
    overflow: "hidden",
  },
  frame: {
    left: -15,
    width: 405,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame3;
