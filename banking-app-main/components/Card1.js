import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Card1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.card, styles.cardLayout]}
      onPress={() => navigation.navigate("Analysis")}
    >
      <View style={[styles.rectangle, styles.cardLayout]} />
      <View style={styles.barChart}>
        <View style={[styles.rectangle1, styles.rectangleLayout5]} />
        <View style={[styles.rectangle2, styles.rectangleLayout4]} />
        <View style={[styles.rectangle3, styles.rectangleLayout3]} />
        <View style={[styles.rectangle4, styles.rectangleLayout2]} />
        <View style={[styles.rectangle5, styles.rectangleLayout1]} />
        <View style={[styles.rectangle6, styles.rectangleLayout5]} />
        <View style={[styles.rectangle7, styles.rectangleLayout4]} />
        <View style={[styles.rectangle8, styles.rectangleLayout]} />
        <View style={[styles.rectangle9, styles.rectangleLayout6]} />
        <View style={[styles.rectangle10, styles.rectangleLayout1]} />
        <View style={[styles.rectangle11, styles.rectangleLayout5]} />
        <View style={[styles.rectangle12, styles.rectangleLayout4]} />
        <View style={[styles.rectangle13, styles.rectangleLayout3]} />
        <View style={[styles.rectangle14, styles.rectangleLayout2]} />
        <View style={[styles.rectangle15, styles.rectangleLayout1]} />
        <View style={[styles.rectangle16, styles.rectangleLayout5]} />
        <View style={[styles.rectangle17, styles.rectangleLayout4]} />
        <View style={[styles.rectangle18, styles.rectangleLayout]} />
        <View style={[styles.rectangle19, styles.rectangleLayout6]} />
        <View style={[styles.rectangle20, styles.rectangleLayout1]} />
        <View style={[styles.rectangle21, styles.rectangleLayout5]} />
        <View style={[styles.rectangle22, styles.rectangleLayout4]} />
        <View style={[styles.rectangle23, styles.rectangleLayout3]} />
        <View style={[styles.rectangle24, styles.rectangleLayout6]} />
        <View style={[styles.rectangle25, styles.rectangleLayout1]} />
      </View>
      <View style={[styles.tab, styles.tabPosition]}>
        <View style={[styles.selected, styles.tagFlexBox]}>
          <View style={styles.rectangle26} />
          <Text style={[styles.d, styles.dTypo]}>1D</Text>
        </View>
        <Text style={[styles.d1, styles.mTypo]}>5d</Text>
        <Text style={[styles.m, styles.mTypo]}>1m</Text>
        <Text style={[styles.y, styles.mTypo]}>1y</Text>
        <Text style={[styles.all, styles.mTypo]}>all</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={[styles.text1, styles.textLayout]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>2.000</Text>
        </Text>
        <Text style={[styles.text4, styles.textLayout]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>2.000</Text>
        </Text>
        <Text style={[styles.text7, styles.textLayout]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>2.500</Text>
        </Text>
        <Text style={[styles.text10, styles.textLayout]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>3.000</Text>
        </Text>
        <Text style={[styles.text13, styles.textPosition]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>3.500</Text>
        </Text>
        <Text style={[styles.text16, styles.textLayout]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>4.000</Text>
        </Text>
      </View>
      <View style={[styles.text19, styles.textLayout]}>
        <Text style={[styles.pm, styles.pmPosition]}>02pm</Text>
        <Text style={[styles.pm1, styles.pmPosition]}>03pm</Text>
        <Text style={styles.pm2}>04pm</Text>
        <Text style={[styles.pm3, styles.pmPosition]}>05pm</Text>
        <Text style={[styles.pm4, styles.pmPosition]}>06pm</Text>
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line1.png")}
      />
      <Image
        style={[styles.lineIcon1, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line2.png")}
      />
      <Image
        style={[styles.lineIcon2, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line3.png")}
      />
      <Image
        style={[styles.lineIcon3, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line4.png")}
      />
      <Image
        style={[styles.lineIcon4, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line5.png")}
      />
      <Image
        style={[styles.lineIcon5, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line6.png")}
      />
      <Image
        style={[styles.chartIcon, styles.tabPosition]}
        contentFit="cover"
        source={require("../assets/chart.png")}
      />
      <View style={[styles.tag, styles.tagLayout]}>
        <View style={[styles.rectangle27, styles.tagLayout]} />
        <Text style={[styles.text20, styles.dTypo]}>
          <Text style={styles.text2}>₹</Text>
          <Text style={styles.text3}>3,642.89</Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: 367,
    position: "absolute",
  },
  rectangleLayout5: {
    height: 19,
    top: 29,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout4: {
    height: 26,
    top: 22,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout3: {
    height: 35,
    top: 14,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout2: {
    height: 42,
    top: 7,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 31,
    top: 18,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout: {
    height: 12,
    top: 37,
    width: 6,
    backgroundColor: Color.gray6,
    position: "absolute",
  },
  rectangleLayout6: {
    width: 6,
    backgroundColor: Color.gray6,
    top: 0,
    height: 49,
    position: "absolute",
  },
  tabPosition: {
    left: 13,
    position: "absolute",
  },
  tagFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  dTypo: {
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  mTypo: {
    color: Color.colorDarkgray_300,
    top: "50%",
    marginTop: -6.6,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  textPosition: {
    left: "-49.22%",
    width: "147.65%",
    textAlign: "right",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  pmPosition: {
    width: "12.15%",
    marginTop: -6.8,
    color: Color.colorDarkgray_300,
    top: "50%",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 281,
    left: 13,
    position: "absolute",
  },
  tagLayout: {
    width: 82,
    height: 29,
  },
  rectangle: {
    top: 120,
    left: 367,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    height: 345,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  rectangle1: {
    left: 23,
  },
  rectangle2: {
    left: 34,
  },
  rectangle3: {
    left: 46,
  },
  rectangle4: {
    left: 57,
  },
  rectangle5: {
    left: 69,
  },
  rectangle6: {
    left: 81,
  },
  rectangle7: {
    left: 92,
  },
  rectangle8: {
    left: 104,
  },
  rectangle9: {
    left: 115,
    top: 0,
  },
  rectangle10: {
    left: 127,
  },
  rectangle11: {
    left: 138,
  },
  rectangle12: {
    left: 149,
  },
  rectangle13: {
    left: 161,
  },
  rectangle14: {
    left: 172,
  },
  rectangle15: {
    left: 184,
  },
  rectangle16: {
    left: 195,
  },
  rectangle17: {
    left: 207,
  },
  rectangle18: {
    left: 219,
  },
  rectangle19: {
    left: 230,
    top: 0,
  },
  rectangle20: {
    left: 242,
  },
  rectangle21: {
    left: 253,
  },
  rectangle22: {
    left: 264,
  },
  rectangle23: {
    left: 276,
  },
  rectangle24: {
    left: 0,
    top: 0,
  },
  rectangle25: {
    left: 11,
  },
  barChart: {
    top: 368,
    height: 49,
    width: 281,
    left: 13,
    position: "absolute",
  },
  rectangle26: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBurlywood_100,
    width: 43,
    height: 29,
  },
  d: {
    width: 15,
    marginTop: -21,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  selected: {
    height: "100%",
    width: "12.57%",
    top: "0%",
    right: "87.43%",
    bottom: "0%",
    justifyContent: "flex-end",
    left: "0%",
  },
  d1: {
    left: "24.59%",
    width: "5.02%",
    top: "50%",
    marginTop: -6.6,
  },
  m: {
    left: "41.89%",
    width: "5.02%",
    top: "50%",
    marginTop: -6.6,
  },
  y: {
    width: "4.2%",
    left: "59.49%",
    top: "50%",
    marginTop: -6.6,
  },
  all: {
    width: "6.99%",
    left: "75.97%",
    top: "50%",
    marginTop: -6.6,
  },
  icon: {
    width: 17,
    height: 17,
  },
  tab: {
    top: 133,
    width: 340,
    overflow: "hidden",
    height: 29,
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  text3: {
    fontFamily: FontFamily.interRegular,
  },
  text1: {
    marginTop: 101.95,
    textAlign: "right",
    left: "-49.22%",
    width: "147.65%",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text4: {
    marginTop: 59.95,
    textAlign: "right",
    left: "-49.22%",
    width: "147.65%",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text7: {
    marginTop: 16.95,
    textAlign: "right",
    left: "-49.22%",
    width: "147.65%",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text10: {
    marginTop: -25.05,
    textAlign: "right",
    left: "-49.22%",
    width: "147.65%",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text13: {
    marginTop: -68.05,
    height: 15,
    textAlign: "right",
    position: "absolute",
  },
  text16: {
    marginTop: -110.05,
    textAlign: "right",
    left: "-49.22%",
    width: "147.65%",
    color: Color.colorDarkgray_300,
    top: "50%",
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text: {
    top: 191,
    left: 309,
    width: 45,
    height: 232,
    overflow: "hidden",
    position: "absolute",
  },
  pm: {
    textAlign: "left",
    left: "0%",
  },
  pm1: {
    left: "22.14%",
    textAlign: "center",
  },
  pm2: {
    width: "12.51%",
    left: "43.92%",
    marginTop: -6.8,
    color: Color.colorDarkgray_300,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  pm3: {
    left: "65.71%",
    textAlign: "center",
  },
  pm4: {
    left: "87.85%",
    textAlign: "right",
  },
  text19: {
    top: 437,
    overflow: "hidden",
    width: 281,
    height: 14,
    left: 13,
  },
  lineIcon: {
    top: 198,
  },
  lineIcon1: {
    top: 241,
  },
  lineIcon2: {
    top: 288,
  },
  lineIcon3: {
    top: 331,
  },
  lineIcon4: {
    top: 374,
  },
  lineIcon5: {
    top: 416,
  },
  chartIcon: {
    width: 282,
    height: 170,
    top: 198,
  },
  rectangle27: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorGreen,
  },
  text20: {
    width: 74,
    marginTop: -20,
    textAlign: "center",
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  tag: {
    left: 175,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    top: 0,
  },
  card: {
    top: 86,
    left: 2,
    height: 464,
  },
});

export default Card1;
