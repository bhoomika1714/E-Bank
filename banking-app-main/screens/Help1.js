import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Gap, FontSize, FontFamily } from "../GlobalStyles";

const Help1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help}>
      <View style={styles.statusBarPosition}>
        <View style={styles.statusBarPosition}>
          <View style={[styles.statusBar, styles.statusBarPosition]}>
            <Image
              style={[styles.notchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.statusIcons}>
              <Image
                style={styles.networkSignalLight}
                contentFit="cover"
                source={require("../assets/network-signal-light.png")}
              />
              <Image
                style={styles.wifiSignalLight}
                contentFit="cover"
                source={require("../assets/wifi-signal--light.png")}
              />
              <Image
                style={styles.batteryLight}
                contentFit="cover"
                source={require("../assets/battery--light.png")}
              />
            </View>
            <Image
              style={styles.indicatorIcon}
              contentFit="cover"
              source={require("../assets/indicator.png")}
            />
            <Image
              style={[styles.timeLight, styles.timeLayout]}
              contentFit="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
          <Image
            style={[styles.batteryLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={[styles.timeLight1, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={styles.statusBarPosition}>
          <View style={[styles.statusBar, styles.statusBarPosition]}>
            <Image
              style={[styles.notchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.statusIcons}>
              <Image
                style={styles.networkSignalLight}
                contentFit="cover"
                source={require("../assets/network-signal-light.png")}
              />
              <Image
                style={styles.wifiSignalLight}
                contentFit="cover"
                source={require("../assets/wifi-signal--light.png")}
              />
              <Image
                style={styles.batteryLight}
                contentFit="cover"
                source={require("../assets/battery--light.png")}
              />
            </View>
            <Image
              style={styles.indicatorIcon}
              contentFit="cover"
              source={require("../assets/indicator.png")}
            />
            <Image
              style={[styles.timeLight, styles.timeLayout]}
              contentFit="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
          <Image
            style={[styles.batteryLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={[styles.timeLight1, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
      </View>
      <Text style={styles.help1}>Help</Text>
      <Text style={[styles.whatIfPayment, styles.textFlexBox]}>
        What if payment is successful but the money has not reached the
        receiver?
      </Text>
      <Text
        style={[styles.eBank, styles.textFlexBox]}
      >{`E - Bank only records a payment as
successful when we obtain
confirmation from the recipient’s
bank that the funds have been 
received. For UPI payments, banks 
quickly transfer the funds into 
the recipient’s account. Kindly request that the 
recipient look for a deposit confirmation on the 
pertinent bank account statement.
Note: To make sure you’ve paid the money to the 
right account, please review the payment details 
in the History section. `}</Text>
      <Text style={[styles.text, styles.textFlexBox]}>{`
`}</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Help")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    height: 95,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeLayout: {
    width: 54,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.lightGray11,
    letterSpacing: 0,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    height: 30,
    left: 0,
    top: 0,
    maxWidth: "100%",
    position: "absolute",
  },
  networkSignalLight: {
    display: "none",
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    display: "none",
    height: 14,
  },
  batteryLight: {
    width: 25,
    display: "none",
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    width: 69,
    flexDirection: "row",
    gap: Gap.gap_18xs,
    alignItems: "center",
    height: 14,
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    height: 21,
    display: "none",
  },
  statusBar: {
    backgroundColor: Color.colorGoldenrod_100,
    overflow: "hidden",
  },
  batteryLight1: {
    left: 334,
    width: 25,
  },
  networkSignalLight1: {
    left: 292,
    width: 20,
  },
  wifiSignalLight1: {
    left: 315,
    width: 16,
  },
  timeLight1: {
    top: 4,
    height: 19,
    left: 0,
  },
  help1: {
    top: 38,
    left: 160,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  whatIfPayment: {
    top: 130,
    left: 14,
    width: 355,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightGray11,
    fontSize: FontSize.size_xl,
  },
  eBank: {
    top: 234,
    left: 18,
    fontFamily: FontFamily.mobileBody3Regular,
    display: "flex",
    width: 366,
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  text: {
    top: 462,
    left: 81,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightGray11,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  wrapper: {
    left: "7.2%",
    top: "4.19%",
    right: "81.6%",
    bottom: "90.89%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  help: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Help1;
