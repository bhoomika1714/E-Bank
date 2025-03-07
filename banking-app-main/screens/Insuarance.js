import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import GroupComponent30 from "../components/GroupComponent30";
import {
  Color,
  Border,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Insuarance = () => {
  const navigation = useNavigation();

  return (  
    <View style={styles.insuarance}>
      
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
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
      <Text style={styles.insurance}>Insurance</Text>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <GroupComponent30 />
      <Image
        style={styles.image141Icon}
        contentFit="cover"
        source={require("../assets/Insurance.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-5.37%",
    position: "absolute",
    width: "95%",  
  },
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
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
  iconLayout: {
    height: "70%",
    width: "70%",
    top:9,
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  insuaranceChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
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
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: 0,
    left: 11,
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
    left: 0,
  },
  statusBarParent: {
    top: 0,
    width: 600,
    height: 100,
  },
  insurance: {
    height: "5.84%",
    width: "55.28%",
    top: "5%",
    left: "32.27%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  icon2: {
    maxHeight: "120%",
    maxWidth: "135%",
    overflow: "hidden",
  },
  container: {
    left: "8.27%",
    top: "4.06%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  image141Icon: {
    top: 116,
    left: 40,
    width: 346,
    height: 396,
    position: "absolute",
  },
  insuarance: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
});

export default Insuarance;
