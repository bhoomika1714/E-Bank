import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DailySavings from "../components/DailySavings";
import CardsAndShop from "../components/CardsAndShop";
import Loans from "../components/Loans";
import Transactions from "../components/Transactions";
import HeaderSection from "../components/HeaderSection";
import FrameComponent12 from "../components/FrameComponent12";
import StatusBar2 from "../components/StatusBar2";
import GroupComponent6 from "../components/GroupComponent6";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const HomeNav1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeNav}>
      <ScrollView
        style={styles.homeIcons}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <DailySavings />
        <CardsAndShop icon8={require("../assets/gold-loan9.png")} />
        <Loans />
        <Transactions />
      </ScrollView>
      <HeaderSection
        onMenuPress={() => navigation.navigate("Home")}
        hours="9"
        minutes="41"
        showLocation={false}
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("SendMoneyHome")}
      >
        {/* <View style={styles.frameChild} />   //commented as dropdown is directly written in framecom14
        <Pressable                              //and this page is returning other things like update and status bar
          style={[styles.language, styles.helpPosition]}
          onPress={() => navigation.navigate("Language")}
        >
          <Text style={styles.language1}>Language</Text>
        </Pressable>
        <Pressable
          style={[styles.settings, styles.helpPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.language1}>Settings</Text>
        </Pressable>
        <Pressable
          style={[styles.help, styles.helpPosition]}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.language1}>Help</Text>
        </Pressable>
        <Pressable
          style={[styles.aboutUs, styles.helpPosition]}
          onPress={() => navigation.navigate("About1")}
        >
          <Text style={styles.language1}>About us</Text>
        </Pressable> */}
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </Pressable>
      <FrameComponent12 />
      <LinearGradient
        style={styles.headerSection}
        locations={[0, 0.8]}
        colors={["#e0a340", "#7a5923"]}
      >
        <StatusBar2
          hours="9"
          minutes="41"
          showLocation={false}
          propColor="#fff"
          propColor1="#fff"
          propColor2="#fff"
        />
        {/* <GroupComponent6 propTop={110} propLeft={70} /> */}
        <View style={styles.activity}>
          <View style={[styles.send, styles.sendFlexBox]}>
            <View style={[styles.icon, styles.sendFlexBox]}>
              <Image
                style={styles.send2Icon}
                contentFit="cover"
                source={require("../assets/send2.png")}
              />
            </View>
            <Text style={styles.label}>Updates</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  helpPosition: {
    left: 61,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 249,
    backgroundColor: Color.colorDimgray_300,
    left: 52,
    position: "absolute",
  },
  sendFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeIcons: {
    top: 289,
    left: -13,
    width: 404,
    maxWidth: 404,
    position: "absolute",
    flex: 1,
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLinen_200,
    width: 371,
    height: 385,
    position: "absolute",
  },
  language1: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "left",
  },
  language: {
    top: 56,
  },
  settings: {
    top: 111,
  },
  help: {
    top: 166,
  },
  aboutUs: {
    top: 221,
  },
  frameItem: {
    top: 98,
  },
  frameInner: {
    top: 153,
  },
  rectangleView: {
    top: 208,
  },
  rectangleParent: {
    top: 103,
    left: 11,
    backgroundColor: Color.colorGray_1700,
    width: 353,
    height: 308,
    overflow: "hidden",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  send2Icon: {
    width: 24,
    height: 24,
  },
  icon: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_1500,
    padding: Padding.p_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  label: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    textAlign: "left",
  },
  send: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1600,
    padding: Padding.p_5xs,
    gap: Gap.gap_16xs,
    flex: 1,
  },
  activity: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  headerSection: {
    top: 9,
    left: 398,
    borderRadius: Border.br_7xl,
    width: 351,
    padding: Padding.p_5xl,
    gap: Gap.gap_7xs,
    display: "none",
    backgroundColor: "transparent",
    position: "absolute",
  },
  homeNav: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    backgroundColor: Color.white,
    width: "100%",
    height: 812,
    flex: 1,
    borderRadius: Border.br_5xl,
  },
});

export default HomeNav1;
