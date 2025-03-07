import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePassword}>
      <View style={[styles.signIn, styles.signLayout]}>
        <Pressable
          style={[styles.signIn1, styles.signIn1Position]}
          onPress={() => navigation.navigate("Settings")}
        />
        <Text style={[styles.text, styles.textTypo]}>Change Password</Text>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <Text style={[styles.newPassword, styles.newTypo]}>New Password</Text>
        <View style={styles.group}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-1053.png")}
          />
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </View>
      </View>
      <View style={[styles.password1, styles.passwordLayout]}>
        <Text style={[styles.cofirmNewPassword, styles.newTypo]}>
          Cofirm New Password
        </Text>
        <View style={styles.group}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-1053.png")}
          />
          <View style={[styles.group2, styles.groupPosition]}>
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/group-18499.png")}
            />
            <Image
              style={[styles.interfaceEssentiallockPas, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/interface-essentiallock-password.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.email, styles.passwordLayout]}>
        <Text style={[styles.currentPassword, styles.newTypo]}>
          Current Password
        </Text>
        <View style={styles.group}>
          <View style={[styles.group2, styles.groupPosition]}>
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/group-18499.png")}
            />
            <Image
              style={[styles.interfaceEssentiallockPas, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/interface-essentiallock-password.png")}
            />
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-1053.png")}
          />
        </View>
      </View>
      <Text style={styles.bothPasswordsMust}>Both Passwords Must Match</Text>
      <View style={[styles.statusBarParent, styles.signIn1Position]}>
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
      <View style={[styles.groupView, styles.wrapperLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <Text style={[styles.changePassword1, styles.textTypo]}>
          Change Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 56,
    width: 335,
    position: "absolute",
  },
  signIn1Position: {
    top: 0,
    left: 0,
  },
  textTypo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    left: 58,
    position: "absolute",
  },
  passwordLayout: {
    height: 63,
    width: 335,
    left: 20,
    position: "absolute",
  },
  newTypo: {
    height: 16,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.mobileBody3Regular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
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
  signIn1: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    height: 56,
    width: 335,
    position: "absolute",
  },
  text: {
    top: 16,
    fontSize: FontSize.font_size,
    lineHeight: 24,
    fontFamily: FontFamily.montserratBold,
    width: 220,
    height: 24,
  },
  signIn: {
    top: 420,
    left: 20,
  },
  newPassword: {
    width: 102,
  },
  groupChild: {
    top: 32,
    maxHeight: "100%",
    left: 0,
    width: 335,
    position: "absolute",
  },
  groupIcon: {
    width: 335,
  },
  group: {
    top: 31,
    height: 32,
    left: 0,
    width: 335,
    position: "absolute",
  },
  password: {
    top: 211,
  },
  cofirmNewPassword: {
    width: 153,
  },
  groupInner: {
    top: 8,
    left: 38,
    width: 83,
    height: 6,
    position: "absolute",
  },
  interfaceEssentiallockPas: {
    width: 22,
    overflow: "hidden",
  },
  group2: {
    width: 121,
  },
  password1: {
    top: 295,
  },
  currentPassword: {
    width: 125,
  },
  email: {
    top: 127,
  },
  bothPasswordsMust: {
    top: 367,
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 12,
    width: 168,
    height: 14,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.mobileBody3Regular,
    left: 20,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    left: 0,
    top: 0,
  },
  changePassword1: {
    top: 10,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsBold,
    width: 237,
    height: 20,
  },
  groupView: {
    top: 37,
    width: 295,
    left: 20,
  },
  changePassword: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangePassword;
