import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CheckDeposit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkDeposit}>
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
      <Text style={styles.fixedDeposit}>{`Fixed Deposit `}</Text>
      <Text
        style={[styles.depositAmount, styles.amountTypo]}
      >{`Deposit Amount:      `}</Text>
      <View style={[styles.searchButton, styles.searchLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>20,000</Text>
      <Text style={[styles.interestmonth5, styles.date0907Typo]}>
        Interest/month: 5%
      </Text>
      <Text style={[styles.date0907, styles.date0907Typo]}>
        Date: 09/ 07 / 2024
      </Text>
      <Text style={[styles.timeLine3, styles.date0907Typo]}>
        Time line: 3 years
      </Text>
      <Text
        style={[styles.currentAmount, styles.amountTypo]}
      >{`Current amount:  `}</Text>
      <View style={[styles.searchButton1, styles.searchLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>21,000</Text>
      <View style={styles.bxrupee} />
      <View style={styles.checkDepositChild} />
      <View style={[styles.checkDepositItem, styles.checkPosition]} />
      <View style={[styles.checkDepositInner, styles.lineViewPosition]} />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.checkDepositChild1, styles.checkPosition]} />
      <Text style={styles.checkDeposit1}>Check deposit</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Pressable
        style={styles.addIcon}
        onPress={() => navigation.navigate("FD")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/addicon.png")}
        />
      </Pressable>
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
  amountTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 17,
    position: "absolute",
  },
  searchLayout: {
    height: 39,
    width: 132,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_3xs,
    left: 223,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    width: 79,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.white,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  date0907Typo: {
    width: 344,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  checkPosition: {
    left: 4,
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
    left: -3,
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  fixedDeposit: {
    top: 104,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 17,
    position: "absolute",
  },
  depositAmount: {
    top: 159,
    width: 200,
    height: 38,
  },
  searchButton: {
    top: 155,
  },
  vectorIcon: {
    top: "20.44%",
    right: "34.13%",
    bottom: "77.34%",
    left: "61.87%",
    width: "4%",
    height: "2.22%",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    top: 158,
    left: 255,
  },
  interestmonth5: {
    top: 227,
    height: 41,
    left: 17,
    width: 344,
  },
  date0907: {
    top: 304,
    left: 17,
    width: 344,
  },
  timeLine3: {
    top: 380,
    left: 20,
  },
  currentAmount: {
    top: 452,
  },
  searchButton1: {
    top: 447,
  },
  vectorIcon1: {
    top: "56.53%",
    right: "32%",
    bottom: "41.26%",
    left: "64%",
    width: "4%",
    height: "2.22%",
    maxWidth: "100%",
    position: "absolute",
  },
  text1: {
    top: 450,
    left: 262,
  },
  bxrupee: {
    top: 454,
    left: 211,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  checkDepositChild: {
    top: 213,
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  checkDepositItem: {
    top: 514,
  },
  checkDepositInner: {
    top: 428,
  },
  lineView: {
    top: 279,
  },
  checkDepositChild1: {
    top: 353,
  },
  checkDeposit1: {
    top: 37,
    left: 97,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "5.07%",
    top: "3.82%",
    right: "83.73%",
    bottom: "91.26%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  addIcon: {
    left: 297,
    top: 31,
    width: 40,
    height: 40,
    position: "absolute",
  },
  checkDeposit: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CheckDeposit;
