import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import FrontLayer from "../components/FrontLayer";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const MapDestination = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapDestination}>
      <Image
        style={styles.mapsIcon}
        contentFit="cover"
        source={require("../assets/maps.png")}
      />
      <FrontLayer
        placeholder="Bank of Baroda,8605 A, lX ward"
        propPosition="absolute"
        propHeight="57.14%"
        propWidth="81.33%"
        propTop="0%"
        propRight="9.33%"
        propBottom="42.86%"
        propLeft="9.33%"
        propFontFamily="Inter-Regular"
        propFontWeight="unset"
      />
      <Image
        style={styles.bulletIcon}
        contentFit="cover"
        source={require("../assets/bullet.png")}
      />
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
          wiFiSignalLight={require("../assets/wifi-signal--light3.png")}
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
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Image
        style={styles.mapDestinationChild}
        contentFit="cover"
        source={require("../assets/ellipse-307.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("MapSourceWithDestination")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={styles.profile}>Branch Locator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mapsIcon: {
    top: 68,
    left: -136,
    width: 748,
    height: 752,
    position: "absolute",
  },
  bulletIcon: {
    top: 354,
    left: 252,
    width: 64,
    height: 64,
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
    overflow: "hidden",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  mapDestinationChild: {
    top: 706,
    left: 24,
    width: 43,
    height: 43,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.8%",
    top: "87.44%",
    right: "84.43%",
    bottom: "8.9%",
    width: "6.77%",
    height: "3.66%",
    position: "absolute",
  },
  wrapper: {
    left: 31,
    top: 36,
    width: 40,
    height: 40,
    position: "absolute",
  },
  profile: {
    top: 46,
    left: 89,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    width: 225,
    height: 20,
    position: "absolute",
  },
  mapDestination: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MapDestination;
