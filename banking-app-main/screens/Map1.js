import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import FrontLayer1 from "../components/FrontLayer1";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import Item2 from "../components/Item2";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.map}>
      <Image
        style={[styles.rectangleIcon, styles.basePosition]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <FrontLayer1 />
      <Image
        style={styles.bulletIcon}
        contentFit="cover"
        source={require("../assets/bullet.png")}
      />
      <View style={[styles.statusBarParent, styles.basePosition]}>
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
          style={[styles.timeLight, styles.basePosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.profile, styles.textFlexBox]}>Branch Locator</Text>
      <View style={styles.itemParent}>
        <Item2 twinPeaksBlvd="BANK OF BARODA, 8605 A, IX WARD, NARAYANPUR, DHARWAD" />
        <Item2
          twinPeaksBlvd="BANK OF BARODA, 84, VINAYAK SADAN, PAWAR COMPLEX, P B ROAD"
          propWidth="80.73%"
        />
      </View>
      <View style={styles.button}>
        <View style={[styles.base, styles.basePosition]} />
        <Image
          style={[styles.iconsarrowsarrowLongRight, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/iconsarrowsarrowlongright.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>Locate</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleIcon: {
    width: 375,
    top: 0,
    left: 0,
    height: 812,
  },
  bulletIcon: {
    top: 238,
    left: 167,
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
    width: 390,
    height: 95,
    top: 0,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 24,
    top: 37,
    width: 40,
    height: 40,
    position: "absolute",
  },
  profile: {
    top: 47,
    left: 78,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 225,
    height: 20,
    position: "absolute",
  },
  itemParent: {
    top: 652,
    left: 17,
    width: 301,
    height: 165,
    alignItems: "center",
    gap: Gap.gap_sm,
    position: "absolute",
  },
  base: {
    top: "0%",
    right: 0,
    bottom: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: "100%",
  },
  iconsarrowsarrowLongRight: {
    marginTop: -12,
    right: 16,
    width: 24,
    height: 24,
    display: "none",
  },
  text: {
    marginTop: -10,
    left: 128,
    fontSize: FontSize.font_size,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    color: Color.white,
  },
  button: {
    height: "6.9%",
    width: "89.33%",
    top: "91.87%",
    right: "6.4%",
    bottom: "1.23%",
    left: "4.27%",
    position: "absolute",
  },
  map: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Map1;
