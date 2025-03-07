import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import Frame11 from "../components/Frame11";
import Frame10 from "../components/Frame10";
import {
  Border,
  Color,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <View style={[styles.chatsParent, styles.chatsFlexBox]}>
        <Pressable
          style={[styles.chats, styles.chatsFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chats1.png")}
          />
          <View style={styles.line} />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("QRCode")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-51.png")}
          />
        </Pressable>
        <Image
          style={[styles.weuilocationFilledIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/weuilocationfilled1.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </Pressable>
      </View>
      
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.framePosition}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.1}
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
        <View style={[styles.tabBar, styles.tabBarLayout]}>
          {/* <Pressable
            style={[styles.container, styles.tabBarLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628274.png")}
            />
          </Pressable> */}
          <Text style={[styles.settings1, styles.settings1Position]}>
            Settings
          </Text>
        </View>
      </View>
      <Frame10 />
      <Frame11 /> 
      {/* <Text style={[styles.joined28Jan, styles.settings1Position]}>
        End to end encryption
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  settings1Position: {
    left: 107,
    position: "absolute",
  },
  framePosition: {
    height: 95,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  timeLightPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  tabBarLayout: {
    height: 40,
    position: "absolute",
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
    overflow: "hidden",
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: 0,
    left: 7,
    borderRadius: Border.br_3xs,
    width: 362,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  joined28Jan: {
    top: 674,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorSlategray_100,
    textAlign: "left",
    width: 158,
    height: 14,
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
  },
  container: {
    width: 40,
    left: 0,
    top: 0,
    height: 40,
  },
  settings1: {
    top: 10,
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    width: 122,
    height: 30,
  },
  tabBar: {
    top: 30,
    left: 40,
    width: 229,
  },
  // frame: {
  //   overflow: "hidden",
  // },
  settings: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Settings;
