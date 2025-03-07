import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Section from "../components/Section";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Analysis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.analysis}>
      <Section />
      <View style={[styles.tab, styles.tabFlexBox]}>
        <Text style={styles.hour}>Hour</Text>
        <Text style={[styles.day, styles.dayTypo]}>Day</Text>
        <View style={[styles.month, styles.monthFlexBox]}>
          <View style={[styles.rectangle, styles.monthLayout]} />
          <Text style={styles.month1}>Month</Text>
        </View>
        <Text style={[styles.day, styles.dayTypo]}>6 Month</Text>
        <Text style={[styles.day, styles.dayTypo]}>Yearly</Text>
        <Text style={[styles.all, styles.dayTypo]}>All</Text>
      </View>
      <View style={[styles.barChart, styles.textPosition1]}>
        <View style={[styles.text, styles.textPosition1]}>
          <Text style={styles.text1}>900</Text>
          <Text style={styles.text1}>700</Text>
          <Text style={styles.text1}>500</Text>
          <Text style={styles.text1}>300</Text>
          <Text style={styles.text1}>100</Text>
          <Text style={styles.text1}>0</Text>
        </View>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line7.png")}
        />
        <Image
          style={[styles.lineIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <Image
          style={[styles.lineIcon2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <Image
          style={[styles.lineIcon3, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <Image
          style={[styles.lineIcon4, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <View style={styles.text7}>
          <View style={styles.rectangle1} />
          <Text style={[styles.text8, styles.textPosition]}>
            <Text style={styles.text9}>₹</Text>
            <Text style={styles.text10}>200</Text>
          </Text>
          <Text style={[styles.text11, styles.textPosition]}>%1.9</Text>
        </View>
        <Image
          style={[styles.lineIcon5, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <Image
          style={[styles.lineIcon6, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
        <Image
          style={[styles.lineIcon7, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line9.png")}
        />
        <Image
          style={[styles.lineIcon8, styles.lineIconPosition1]}
          contentFit="cover"
          source={require("../assets/line10.png")}
        />
      </View>
      <View style={[styles.buttons, styles.textPosition1]}>
        <View style={[styles.button, styles.buttonLayout]}>
          <View style={styles.rectangle2} />
          <Text style={[styles.buyNow, styles.nowTypo]}>Buy Now</Text>
        </View>
        <View style={[styles.button1, styles.buttonLayout]}>
          <View style={[styles.rectangle3, styles.buttonLayout]} />
          <Text style={[styles.sellNow, styles.nowTypo]}>Sell Now</Text>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.statusBarwhite, styles.textPosition1]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayTypo: {
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelLarge_size,
  },
  monthFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  monthLayout: {
    width: 104,
    height: 32,
  },
  textPosition1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 340,
    left: 60,
  },
  lineIconPosition: {
    top: 551,
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    color: Color.white,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  lineIconPosition1: {
    top: 431,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 185,
  },
  nowTypo: {
    marginTop: -14,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
  },
  hour: {
    textAlign: "left",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelLarge_size,
  },
  day: {
    textAlign: "center",
  },
  rectangle: {
    backgroundColor: Color.colorBurlywood_100,
    borderRadius: Border.br_5xs,
  },
  month1: {
    fontWeight: "500",
    marginTop: -17,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelLarge_size,
  },
  month: {
    width: 104,
    height: 32,
  },
  all: {
    textAlign: "right",
  },
  tab: {
    top: 329,
    width: 386,
    gap: Gap.gap_2xs,
    alignItems: "center",
    height: 32,
    flexDirection: "row",
    left: 14,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
  },
  text: {
    width: 26,
    height: 314,
    gap: Gap.gap_10xl,
    overflow: "hidden",
  },
  lineIcon: {
    top: 392,
    left: 59,
    height: 340,
    width: 1,
    position: "absolute",
  },
  lineIcon1: {
    top: 431,
    position: "absolute",
  },
  lineIcon2: {
    top: 491,
    position: "absolute",
  },
  lineIcon3: {
    height: 1,
    width: 340,
    left: 60,
  },
  lineIcon4: {
    top: 611,
    position: "absolute",
  },
  rectangle1: {
    height: "85.25%",
    top: "0%",
    right: "0%",
    bottom: "14.75%",
    left: "0%",
    backgroundColor: Color.colorGreen,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  text9: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text10: {
    fontFamily: FontFamily.interRegular,
  },
  text8: {
    marginTop: -23.5,
    left: "28.89%",
  },
  text11: {
    marginTop: -1.5,
    left: "31.67%",
    fontFamily: FontFamily.sFProText,
  },
  text7: {
    top: 581,
    left: 259,
    width: 90,
    height: 61,
    position: "absolute",
    overflow: "hidden",
  },
  lineIcon5: {
    top: 671,
    position: "absolute",
  },
  lineIcon6: {
    top: 731,
    position: "absolute",
  },
  lineIcon7: {
    left: 61,
    width: 190,
    height: 175,
  },
  lineIcon8: {
    left: 251,
    height: 301,
    width: 1,
  },
  barChart: {
    width: 400,
    height: 732,
  },
  rectangle2: {
    width: 174,
    height: 41,
    backgroundColor: Color.colorBurlywood_100,
    borderRadius: Border.br_5xl,
  },
  buyNow: {
    color: Color.white,
  },
  button: {
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_10xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  rectangle3: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
  },
  sellNow: {
    color: Color.colorBurlywood_100,
  },
  button1: {
    top: 750,
    left: 186,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  buttons: {
    width: 371,
    height: 798,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 44,
    width: 40,
    height: 40,
    left: 14,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    fontWeight: "700",
    textAlign: "center",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    alignItems: "center",
    flexDirection: "row",
  },
  analysis: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_5xl,
  },
});

export default Analysis;
