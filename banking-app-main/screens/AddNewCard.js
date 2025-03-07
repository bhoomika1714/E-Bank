import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import CardDetails from "../components/CardDetails";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import Card5 from "../components/Card5";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const AddNewCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addNewCard}>
      <CardDetails />
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.framePosition}>
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
            style={[styles.batteryLight, styles.lightLayout]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight, styles.lightLayout]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightLayout]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light1.png")}
          />
          <Image
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={[styles.tabBar, styles.tabBarLayout]}>
          <Pressable
            style={[styles.wrapper, styles.tabBarLayout]}
            onPress={() => navigation.navigate("MyCards")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628274.png")}
            />
          </Pressable>
          <Text style={styles.addNewCard1}>Add New Card</Text>
        </View>
      </View>
      <View style={styles.frame1}>
        <Card5
          propWidth={341}
          propWidth1={321}
          propWidth2={321}
          propWidth3={125}
          propWidth4={74}
          propWidth5={74}
          propWidth6={72}
          propWidth7={63}
          propWidth8={72}
          propLeft={178}
          propWidth9={141}
          propLeft1={89}
          propWidth10={141}
        />
        <Image
          style={[styles.unionIcon, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../assets/union1.png")}
        />
        <Image
          style={[styles.unionIcon1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../assets/union2.png")}
        />
        <Image
          style={[styles.unionIcon2, styles.lightLayout]}
          contentFit="cover"
          source={require("../assets/union3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 95,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lightLayout: {
    height: 13,
    position: "absolute",
  },
  tabBarLayout: {
    height: 40,
    position: "absolute",
  },
  unionIconLayout: {
    width: 4,
    position: "absolute",
  },
  batteryLight: {
    left: 334,
    width: 25,
    top: 7,
    height: 13,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
    top: 7,
    height: 13,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
    top: 7,
    height: 13,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    left: 0,
    top: 0,
    height: 40,
  },
  addNewCard1: {
    top: 9,
    left: 80,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: "center",
    width: 194,
    height: 20,
    position: "absolute",
  },
  tabBar: {
    top: 32,
    left: 34,
    width: 274,
  },
  frame: {
    overflow: "hidden",
  },
  unionIcon: {
    top: 24,
    left: 311,
    height: 21,
  },
  unionIcon1: {
    top: 26,
    left: 307,
    height: 17,
  },
  unionIcon2: {
    top: 28,
    left: 303,
    width: 3,
  },
  frame1: {
    top: 128,
    left: 20,
    width: 341,
    height: 199,
    position: "absolute",
    overflow: "hidden",
  },
  addNewCard: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddNewCard;
