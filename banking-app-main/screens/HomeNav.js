import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Loans1 from "../components/Loans1";
import DailySavings1 from "../components/DailySavings1";
import Deposits from "../components/Deposits";
import Transactions1 from "../components/Transactions1";
import { useNavigation } from "@react-navigation/native";
import HeaderSection1 from "../components/HeaderSection1";
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

const HomeNav = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeNav, styles.lineShadowBox]}>
      <View style={[styles.homeBody, styles.homeLayout1]}>
        <Image
          style={[styles.notoV1ticketIcon, styles.notoIconLayout]}
          contentFit="cover"
          source={require("../assets/notov1ticket.png")}
        />
        <View style={styles.homeBodyChild} />
        <View style={[styles.homeBodyItem, styles.homeLayout]} />
        <View style={[styles.homeIcons, styles.homeLayout1]}>
          <Loans1 />
          <DailySavings1 />
          <Deposits />
          <Transactions1 />
        </View>
        <Pressable
          style={styles.askAi}
          onPress={() => navigation.navigate("Livechat")}
        >
          <View style={styles.groupParent}>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            <Text style={[styles.askAi1, styles.sendFlexBox]}>Ask AI</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.homeBody1, styles.homeLayout]}>
        <Image
          style={[styles.notoV1ticketIcon1, styles.notoIconLayout]}
          contentFit="cover"
          source={require("../assets/notov1ticket.png")}
        />
        <View style={[styles.homeBodyInner, styles.homeLayout]} />
      </View>
      <HeaderSection1 />
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
        {/* <GroupComponent6 /> */}
        <Pressable style={[styles.helpPosition]} onPress={() => navigation.navigate("News")}>
        <View style={[styles.activity, styles.iconFlexBox]}>
          <View style={[styles.send, styles.sendFlexBox]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/send2.png")}
              />
            </View>
            <Text style={[styles.label, styles.labelClr]}>Updates</Text>
          </View>
        </View>
        </Pressable>
      </LinearGradient>
      <View style={styles.homeNavChild} />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("SendMoneyHome")}
      >
        <View style={styles.frameChild} />
        <Pressable
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
        </Pressable>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
      </Pressable>
      <View style={[styles.chatsParent, styles.iconFlexBox]}>
        <View style={[styles.chats, styles.sendFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chats.png")}
          />
          <View style={[styles.line, styles.lineShadowBox]} />
        </View>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <Image
          style={[styles.weuilocationFilledIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/weuilocationfilled.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  homeLayout1: {
    width: 404,
    position: "absolute",
  },
  notoIconLayout: {
    display: "none",
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeLayout: {
    height: 131,
    width: 392,
    position: "absolute",
  },
  sendFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelClr: {
    color: Color.white,
    fontSize: FontSize.size_3xs,
  },
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
  iconLayout: {
    height: 24,
    width: 24,
  },
  notoV1ticketIcon: {
    left: 401,
    top: 0,
  },
  homeBodyChild: {
    width: 401,
    height: 748,
    left: 0,
    overflow: "hidden",
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  homeBodyItem: {
    top: 619,
    left: 8,
    backgroundColor: Color.white,
  },
  homeIcons: {
    top: 16,
    height: 573,
    left: 0,
  },
  groupIcon: {
    height: "70%",
    width: "92.39%",
    top: "0%",
    right: "7.61%",
    bottom: "30%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  askAi1: {
    top: 35,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    display: "flex",
    width: 38,
    height: 15,
    justifyContent: "center",
    color: Color.white,
    fontSize: FontSize.size_3xs,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    height: "87.72%",
    width: "88.6%",
    top: "8.77%",
    right: "4.65%",
    bottom: "3.51%",
    left: "6.74%",
    position: "absolute",
  },
  askAi: {
    top: 292,
    left: 344,
    borderRadius: 35,
    backgroundColor: Color.colorGoldenrod_100,
    width: 43,
    height: 57,
    position: "absolute",
  },
  homeBody: {
    top: 276,
    left: -15,
    height: 750,
  },
  notoV1ticketIcon1: {
    top: -619,
    left: 393,
  },
  homeBodyInner: {
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  homeBody1: {
    top: 887,
    left: 3,
  },
  icon: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_1500,
    padding: Padding.p_7xs,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
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
    justifyContent: "center",
    flex: 1,
  },
  activity: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  headerSection: {
    top: 9,
    left: 398,
    borderRadius: Border.br_7xl,
    width: 351,
    padding: Padding.p_5xl,
    gap: Gap.gap_7xs,
    backgroundColor: "transparent",
    position: "absolute",
  },
  homeNavChild: {
    top: 884,
    left: -1,
    backgroundColor: "#fffafa",
    width: 375,
    height: 100,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorLinen_200,
    width: 371,
    height: 385,
    left: 0,
    top: 0,
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
    top: 110,
    left: 10,
    backgroundColor: Color.colorGray_1700,
    width: 353,
    height: 308,
    overflow: "hidden",
    position: "absolute",
    borderRadius: Border.br_5xl,
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
    overflow: "hidden",
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
    justifyContent: "center",
  },
  frameChild1: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: 5,
    left: 4,
    borderRadius: Border.br_3xs,
    width: 367,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.white,
  },
  homeNav: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowRadius: 44.8,
    elevation: 44.8,
    width: "100%",
    height: 812,
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
  },
});

export default HomeNav;
