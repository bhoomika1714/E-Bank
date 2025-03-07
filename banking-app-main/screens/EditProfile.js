import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import EmailAddress from "../components/EmailAddress";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfile}>
      <View style={[styles.profile, styles.profileLayout]}>
        <View style={[styles.nameParent, styles.wrapperPosition]}>
          <Text style={[styles.name, styles.namePosition]}> Name</Text>
          <Text style={styles.seniorDesigner}>Senior Designer</Text>
        </View>
      </View>
      <EmailAddress />
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user8.png")}
      />
      <View style={[styles.editProfileInner, styles.wrapperPosition]}>
        <View style={[styles.editProfileInner, styles.wrapperPosition]}>
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
            style={[styles.timeLight, styles.namePosition]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarLayout]}>
        <Pressable
          style={[styles.wrapper, styles.tabBarLayout]}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <Text style={styles.editProfile1}>Edit Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 43,
    width: 189,
    position: "absolute",
  },
  wrapperPosition: {
    left: 0,
    top: 0,
  },
  namePosition: {
    height: 19,
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  tabBarLayout: {
    height: 40,
    position: "absolute",
  },
  name: {
    fontSize: FontSize.size_mid,
    lineHeight: 17,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_600,
    textAlign: "left",
    top: 0,
    height: 19,
    width: 189,
  },
  seniorDesigner: {
    top: 29,
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 12,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorSlategray_100,
    width: 94,
    height: 14,
    left: 18,
    textAlign: "left",
    position: "absolute",
  },
  nameParent: {
    height: 43,
    width: 189,
    position: "absolute",
  },
  profile: {
    top: 239,
    left: 123,
  },
  userIcon: {
    height: "8.99%",
    width: "20.8%",
    top: "16.75%",
    right: "39.2%",
    bottom: "74.26%",
    left: "40%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    overflow: "hidden",
  },
  editProfileInner: {
    width: 390,
    height: 95,
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
  editProfile1: {
    top: 15,
    left: 88,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    width: 151,
    height: 20,
    position: "absolute",
  },
  tabBar: {
    top: 32,
    width: 239,
    left: 18,
  },
  editProfile: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfile;
