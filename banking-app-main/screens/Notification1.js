import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Component from "../components/Component";
import Button3 from "../components/Button3";
import GroupComponent32 from "../components/GroupComponent32";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification1}>
      <Component
        component1={require("../assets/component-1.png")}
        youReceivedAPaymentOf="You received a payment of ₹"
        prop={`780.1
`}
        fromJustinWestervelt="from  Alex"
      />
      <View style={[styles.component9, styles.componentLayout]}>
        <View style={styles.component47}>
          <Image
            style={[styles.component1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/component-11.png")}
          />
          <Text style={styles.youContainerPosition}>
            <Text style={styles.lindseyCulhaneRequestedAPa}>
              <Text style={styles.lindseyCulhane}>Lindsey Culhane</Text>
              <Text
                style={styles.requestedAPayment}
              >{` requested a payment of ₹ `}</Text>
            </Text>
            <Text style={styles.requestedAPayment}>
              <Text style={styles.text1}>780.1</Text>
              <Text style={styles.lindseyCulhaneRequestedAPa}>{` `}</Text>
            </Text>
          </Text>
          <Button3 />
          <Text style={[styles.am, styles.amTypo]}>9:01am</Text>
          <View style={styles.component47Child} />
          <Image
            style={[styles.linesystemstarLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/linesystemstarline.png")}
          />
        </View>
      </View>
      <View style={[styles.component10, styles.componentLayout]}>
        <View style={styles.component47}>
          <Image
            style={[styles.component1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/component-12.png")}
          />
          <Text
            style={[styles.youReceivedAContainer1, styles.youContainerPosition]}
          >
            <Text style={styles.lindseyCulhaneRequestedAPa}>
              Pay your electricity bill of ₹
            </Text>
            <Text style={styles.text1}>1,780.1</Text>
          </Text>
          <Button3 />
          <Text style={[styles.am, styles.amTypo]}>9:01am</Text>
          <View style={styles.component47Child} />
          <Image
            style={[styles.linesystemstarLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/linesystemstarline.png")}
          />
        </View>
      </View>
      <Component
        propTop={468}
        component1={require("../assets/component-1.png")}
        youReceivedAPaymentOf="You requested a payment of ₹ "
        prop="780.1"
        fromJustinWestervelt=" from  Alex"
        propFontSize={12}
        propFontWeight="unset"
        propFontFamily="Roboto-Regular"
      />
      <Text style={[styles.am2, styles.amTypo]}>8:01am</Text>
      <Component
        propTop={708}
        component1={require("../assets/component-11.png")}
        youReceivedAPaymentOf="You received a payment of ₹"
        prop="780.1"
        fromJustinWestervelt=" from  Justin Westervelt"
        propFontSize={12}
        propFontWeight="unset"
        propFontFamily="Inter-Regular"
      />
      <Component
        propTop={796}
        component1={require("../assets/component-12.png")}
        youReceivedAPaymentOf="You received a payment of ₹ "
        prop="780.1"
        fromJustinWestervelt=" from  Justin Westervelt"
        propFontSize={14}
        propFontWeight="600"
        propFontFamily="Poppins-SemiBold"
      />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <Text style={[styles.yesterday, styles.todayTypo]}>Yesterday</Text>
      <Text style={[styles.thisWeek, styles.todayTypo]}>This week</Text>
      <Image
        style={[
          styles.healthiconselectricity,
          styles.healthiconselectricityPosition,
        ]}
        contentFit="cover"
        source={require("../assets/healthiconselectricity.png")}
      />
      <Image
        style={[
          styles.unsplashplkgcsboiw4Icon,
          styles.healthiconselectricityPosition,
        ]}
        contentFit="cover"
        source={require("../assets/unsplashplkgcsboiw4.png")}
      />
      <Image
        style={styles.notification1Child}
        contentFit="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Text style={[styles.text4, styles.text4Layout]}>2</Text>
      <Text style={[styles.loremIpsumDolor, styles.saleIsLivePosition]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <Text style={[styles.saleIsLive, styles.saleIsLivePosition]}>
        SALE IS LIVE
      </Text>
      <GroupComponent32 />
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    height: 68,
    width: 348,
    left: 15,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    fontFamily: FontFamily.m3TitleLarge,
    lineHeight: 16,
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.lightGray11,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  youContainerPosition: {
    textAlign: "left",
    top: "6.25%",
    width: "60.06%",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    left: "17.82%",
    position: "absolute",
  },
  todayTypo: {
    color: Color.lightGray7,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    left: 15,
    position: "absolute",
  },
  healthiconselectricityPosition: {
    left: 15,
    position: "absolute",
  },
  text4Layout: {
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
  },
  saleIsLivePosition: {
    left: 70,
    color: Color.lightGray11,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  component1Icon: {
    height: "100%",
    width: "13.79%",
    top: "0%",
    right: "86.21%",
    bottom: "0%",
    left: "0%",
  },
  lindseyCulhane: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  requestedAPayment: {
    fontFamily: FontFamily.interRegular,
  },
  lindseyCulhaneRequestedAPa: {
    color: Color.lightGray11,
  },
  text1: {
    color: Color.lightPrimary,
  },
  am: {
    top: "93.75%",
    left: "17.82%",
    fontFamily: FontFamily.m3TitleLarge,
    lineHeight: 16,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  component47Child: {
    height: "2.08%",
    width: "81.9%",
    top: "140.63%",
    right: "0.43%",
    bottom: "-42.71%",
    left: "17.67%",
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_1000,
    borderTopWidth: 1,
    position: "absolute",
  },
  linesystemstarLineIcon: {
    height: "50%",
    width: "6.9%",
    top: "8.33%",
    right: "0%",
    bottom: "41.67%",
    left: "93.1%",
    display: "none",
  },
  component47: {
    top: 0,
    left: 0,
    height: 48,
    width: 348,
    position: "absolute",
  },
  component9: {
    top: 252,
  },
  youReceivedAContainer1: {
    fontFamily: FontFamily.interRegular,
  },
  component10: {
    top: 340,
  },
  am2: {
    height: "3.82%",
    width: "14.93%",
    top: "77.22%",
    left: "20%",
  },
  today: {
    top: 123,
  },
  yesterday: {
    top: 427,
  },
  thisWeek: {
    top: 667,
  },
  healthiconselectricity: {
    top: 337,
    borderRadius: Border.br_81xl,
    width: 48,
    height: 53,
    overflow: "hidden",
  },
  unsplashplkgcsboiw4Icon: {
    top: 572,
    width: 42,
    height: 42,
  },
  notification1Child: {
    top: 566,
    left: 43,
    width: 19,
    height: 19,
    position: "absolute",
  },
  text4: {
    top: 569,
    left: 49,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 586,
    width: 262,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    letterSpacing: 0,
    height: 48,
  },
  saleIsLive: {
    top: 567,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    width: 93,
    height: 17,
  },
  notification1: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Notification1;
