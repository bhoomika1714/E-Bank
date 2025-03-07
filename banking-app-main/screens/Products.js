import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import GroupComponent35 from "../components/GroupComponent35";
import { useNavigation } from "@react-navigation/native";
import Carousel1 from "../components/Carousel1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Products = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.products, styles.productsLayout]}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.productsChild, styles.vectorIconPosition]} />
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
      <GroupComponent35 />
      <Text style={styles.ourSchemes}>OUR Schemes</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Carousel1 textContent={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  productsLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
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
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  productsChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    width: "100%",
    backgroundColor: Color.white,
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
    width: 54,
    height: 19,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  ourSchemes: {
    height: "4.84%",
    width: "55.28%",
    top: "4.56%",
    left: "24.8%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: "6.4%",
    top: "3.94%",
    right: "82.93%",
    bottom: "91.13%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  products: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Products;
