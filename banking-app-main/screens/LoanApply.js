import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import GroupComponent33 from "../components/GroupComponent33";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Loan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loan}>

      <View style={[styles.statusBarParent, styles.groupInnerPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={450}
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
      </View>

      <Pressable
        style={[styles.wrapper, styles.exitPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.name, styles.namePosition]}>Loans</Text>
      <GroupComponent33 />
    </View>

  );
};

const styles = StyleSheet.create({
  exitPosition: {
    top: 36,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 0,
    left: 0,
  },
  namePosition: {
    textAlign: "left",
    left: 103,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    position: "absolute",
  },
  statusBarParent: {
    width: 390,
    left: 0,
    height: 95,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 23,
    width: 40,
    height: 40,
  },
  name: {
    top: 39,
    fontSize: FontSize.m3TitleLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.lexendDecaMedium,
    color: Color.white,
    width: 145,
  },
  loan: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 250,
    elevation: 250,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Loan;
