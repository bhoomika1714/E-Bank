import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import GroupComponent31 from "../components/GroupComponent31";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FD = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.fd, styles.fdLayout]}>
      <View style={[styles.groupParent, styles.timeLightPosition]}>
        <View style={[styles.groupParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
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
        <View style={[styles.groupParent, styles.timeLightPosition]}>
          <View style={[styles.groupParent, styles.timeLightPosition]}>
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
        </View>
      </View>
      <Text style={[styles.openFixedDeposit, styles.labelFlexBox]}>
        Open fixed deposit
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CheckDeposit")}
      >
        <Image
          style={[styles.icon, styles.fdLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <View style={[styles.searchButton, styles.searchLayout]} />
      <View style={[styles.searchButton1, styles.searchLayout]} />
      <GroupComponent31 />
      <View style={[styles.fdChild, styles.childLayout]} />
      <View style={[styles.fdItem, styles.childLayout]} />
      <View style={[styles.fdInner, styles.childLayout]} />
      <View style={[styles.lineView, styles.childLayout]} />
      <View style={[styles.fdChild1, styles.childLayout]} />
      <View style={[styles.fdChild2, styles.childLayout]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line11.png")}
      />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("FdSuccess")}
      >
        <Text style={[styles.label, styles.labelFlexBox]}>Pay</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fdLayout: {
    width: "100%",
    overflow: "hidden",
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
  labelFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  searchLayout: {
    width: 343,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  childLayout: {
    height: 131,
    width: 1,
    borderRightWidth: 0.5,
    borderRadius: 0.001,
    borderColor: Color.colorGray_2000,
    borderStyle: "dashed",
    top: 149,
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
  groupParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  openFixedDeposit: {
    top: 38,
    left: 83,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "5.33%",
    top: "4.43%",
    right: "83.47%",
    bottom: "90.64%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  searchButton: {
    top: 103,
    left: 15,
    borderColor: Color.lightGray11,
    height: 263,
    backgroundColor: Color.white,
  },
  searchButton1: {
    top: 383,
    left: 16,
    backgroundColor: Color.colorLinen_100,
    borderColor: Color.white,
    height: 406,
  },
  fdChild: {
    left: 27,
  },
  fdItem: {
    left: 259,
  },
  fdInner: {
    left: 317,
  },
  lineView: {
    left: 81,
  },
  fdChild1: {
    left: 193,
  },
  fdChild2: {
    left: 135,
  },
  lineIcon: {
    top: 279,
    width: 35,
    height: 35,
    left: 27,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.font_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  login: {
    top: 746,
    left: 24,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  fd: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default FD;
