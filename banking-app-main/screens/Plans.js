import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import PlanCard from "../components/PlanCard";
import PlanCard1 from "../components/PlanCard1";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Plans = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plans}>
      <View style={[styles.plansChild, styles.containerPosition]} />
      <Text style={[styles.updatesForYou, styles.updatesForYouTypo]}>
        4 updates for you
      </Text>
      <PlanCard />
      <View style={[styles.viewTheGuideParent, styles.lineShadowBox]}>
        <Text style={[styles.viewTheGuide, styles.heresAQuickPosition]}>
          View the guide
        </Text>
        <View style={styles.image6} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.heresAQuick, styles.heresAQuickTypo]}>
          Here’s a quick guide to help you avoid becoming a victim of fake
          payment screenshots
        </Text>
      </View>
      <PlanCard1 />
      <View style={[styles.techno1, styles.techno1FlexBox]}>
        <View style={styles.stocksToWatchOnAugust8RParent}>
          <Text
            style={[styles.stocksToWatch, styles.heresAQuickTypo]}
          >{`Stocks to watch on August 8: Rate-sensitive
stocks, Eicher Motors, Maruti, Protean eGov
Tech, and more`}</Text>
          <Text style={[styles.may152024, styles.may152024Typo]}>
            May 15, 2024 19:19 IST
          </Text>
        </View>
      </View>
      <View style={[styles.button, styles.chatsFlexBox]}>
        <Text style={[styles.viewAllPlans, styles.viewAllPlansFlexBox]}>
          View all plans
        </Text>
      </View>
      <Image
        style={styles.high11Icon}
        contentFit="cover"
        source={require("../assets/high1-1.png")}
      />
      <View style={[styles.chatsParent, styles.chatsFlexBox]}>
        <View style={[styles.chats, styles.chatsFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chats1.png")}
          />
          <View style={[styles.line, styles.lineShadowBox]} />
        </View>
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
      <View style={[styles.statusBarParent, styles.containerPosition]}>
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
      <View style={[styles.groupParent, styles.containerLayout]}>
        <Pressable
          style={[styles.container, styles.containerLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628274.png")}
          />
        </Pressable>
        <Text style={[styles.termsCondition, styles.viewAllPlansFlexBox]}>
          Updates
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    top: 0,
    left: 0,
  },
  updatesForYouTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  lineShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    overflow: "hidden",
  },
  heresAQuickPosition: {
    lineHeight: 16,
    left: 89,
    position: "absolute",
  },
  heresAQuickTypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
  },
  techno1FlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  may152024Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewAllPlansFlexBox: {
    textAlign: "center",
    lineHeight: 18,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  containerLayout: {
    height: 40,
    position: "absolute",
  },
  plansChild: {
    width: 375,
    height: 893,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  updatesForYou: {
    top: 120,
    left: 36,
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGray_700,
  },
  viewTheGuide: {
    top: 75,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray_100,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
  },
  image6: {
    top: 27,
    left: 7,
    width: 61,
    height: 32,
    position: "absolute",
  },
  groupIcon: {
    height: "44.04%",
    width: "13.18%",
    top: "24.77%",
    right: "81.66%",
    bottom: "31.19%",
    left: "5.16%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  heresAQuick: {
    top: 18,
    fontSize: 11,
    width: 245,
    lineHeight: 16,
    left: 89,
    position: "absolute",
    color: Color.colorGray_700,
  },
  viewTheGuideParent: {
    top: 286,
    left: 13,
    shadowColor: "rgba(85, 85, 85, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_400,
    width: 349,
    height: 109,
    position: "absolute",
  },
  stocksToWatch: {
    fontSize: FontSize.size_xs_2,
    color: Color.black,
  },
  may152024: {
    fontSize: 8,
    color: Color.lightGrey,
    textAlign: "left",
  },
  stocksToWatchOnAugust8RParent: {
    height: 70,
    gap: Gap.gap_9xs,
  },
  techno1: {
    top: 425,
    left: 102,
  },
  viewAllPlans: {
    alignSelf: "stretch",
    color: Color.colorGoldenrod_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  button: {
    top: 678,
    left: 138,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_100,
    borderWidth: 0.5,
    width: 99,
    height: 26,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  high11Icon: {
    top: 431,
    left: 24,
    width: 64,
    height: 42,
    position: "absolute",
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowRadius: 16,
    elevation: 16,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
  },
  chats: {
    gap: Gap.gap_18xs,
    height: 32,
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
    bottom: 9,
    left: 6,
    borderRadius: Border.br_3xs,
    width: 362,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    flexDirection: "row",
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
  container: {
    width: 40,
    left: 0,
    top: 0,
  },
  termsCondition: {
    top: 10,
    left: 68,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    width: 169,
    height: 20,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParent: {
    top: 33,
    left: 27,
    width: 237,
  },
  plans: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Plans;
