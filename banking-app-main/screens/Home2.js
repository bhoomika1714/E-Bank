import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import RecommendedForYou from "../components/RecommendedForYou";
import BrowseByCategories from "../components/BrowseByCategories";
import IconsOthershoppingBag from "../components/IconsOthershoppingBag";
import BarsTopBarsV1 from "../components/BarsTopBarsV1";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const Home2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={styles.body}>
        <RecommendedForYou />
        <BrowseByCategories />
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Image
          style={[styles.baseIcon, styles.tabBarPosition]}
          contentFit="cover"
          source={require("../assets/base2.png")}
        />
        <View style={[styles.barsHomeIndicatorIphone, styles.tabBarPosition]}>
          <View style={styles.homeIndicator} />
        </View>
        <Image
          style={[styles.menu3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-menu-3.png")}
        />
        <IconsOthershoppingBag path={require("../assets/path3.png")} />
        <Image
          style={[styles.menu2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon--l4.png")}
        />
        <View style={styles.active}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/-menu-1.png")}
          />
          <Text style={styles.home1}>Home</Text>
        </View>
      </View>
      <BarsTopBarsV1 />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628207.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tabBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  body: {
    top: 124,
    width: 461,
    height: 666,
    left: 0,
    position: "absolute",
  },
  baseIcon: {
    top: 698,
    height: 114,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightGray11,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 778,
    height: 34,
    opacity: 0.05,
  },
  menu3Icon: {
    left: 316,
    top: 730,
    height: 24,
    width: 24,
    position: "absolute",
  },
  menu2Icon: {
    left: 168,
    top: 730,
    height: 24,
    width: 24,
    position: "absolute",
  },
  home1: {
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: -1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
  },
  active: {
    height: "4.93%",
    width: "25.6%",
    top: "0%",
    right: "68.27%",
    bottom: "95.07%",
    left: "6.13%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.yellowY100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    gap: Gap.gap_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  tabBar: {
    top: 0,
    height: 812,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "85.07%",
    top: "7.76%",
    right: "8.69%",
    bottom: "89.61%",
    width: "6.24%",
    height: "2.64%",
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default Home2;
