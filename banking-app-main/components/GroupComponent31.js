import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const GroupComponent31 = () => {
  return (
    <View style={styles.searchButtonParent}>
      <View style={styles.searchButton} />
      <Text style={[styles.years, styles.paTypo]}>3 Years</Text>
      <Text style={[styles.timePeriod, styles.amountLayout]}>Time Period</Text>
      <Text style={[styles.pa, styles.paTypo]}>5% p.a</Text>
      <Text style={[styles.openFd, styles.openFdTypo]}>Open FD</Text>
      <Image
        style={styles.searchButtonIcon}
        contentFit="cover"
        source={require("../assets/searchbutton.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>20,000</Text>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <View style={[styles.groupItem, styles.groupLayout]} />
      <Text style={[styles.investmentAmount, styles.amountLayout]}>
        Investment Amount
      </Text>
      <Text style={[styles.interestRate, styles.amountLayout]}>
        Interest Rate
      </Text>
      <Text style={[styles.maturityAmount, styles.amountLayout]}>
        Maturity Amount
      </Text>
      <Text style={[styles.text1, styles.paTypo]}>21,000</Text>
      <Text style={[styles.proceed, styles.openFdTypo]}>PROCEED</Text>
      <Text style={[styles.fdsAreInsured, styles.fdsAreInsuredTypo]}>
        FDs are insured up to 5 Lakh by RBI
      </Text>
      <Text style={[styles.byClickingBelowContainer, styles.fdsAreInsuredTypo]}>
        <Text
          style={styles.byClickingBelow}
        >{`By clicking below you agree to `}</Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paTypo: {
    height: 18,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  amountLayout: {
    height: 15,
    fontSize: FontSize.m3TitleMedium_size,
  },
  openFdTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textLayout: {
    width: 91,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 324,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  fdsAreInsuredTypo: {
    height: 12,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  searchButton: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderColor: Color.colorWhitesmoke_800,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    height: 374,
    width: 323,
    position: "absolute",
  },
  years: {
    top: 168,
    width: 73,
    left: 233,
    fontSize: FontSize.size_xl,
  },
  timePeriod: {
    top: 172,
    width: 91,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
    left: 22,
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.m3TitleMedium_size,
  },
  pa: {
    top: 124,
    width: 64,
    left: 233,
    fontSize: FontSize.size_xl,
  },
  openFd: {
    top: 13,
    width: 102,
    height: 22,
    fontSize: FontSize.size_5xl,
    left: 22,
    color: Color.lightGray11,
  },
  searchButtonIcon: {
    top: 78,
    left: 197,
    width: 114,
    height: 37,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.28%",
    width: "4.95%",
    top: "23.83%",
    right: "30.34%",
    bottom: "71.89%",
    left: "64.71%",
  },
  vectorIcon1: {
    height: "3.08%",
    width: "5.14%",
    top: "59.63%",
    right: "25.33%",
    bottom: "37.3%",
    left: "69.54%",
  },
  text: {
    top: 80,
    left: 228,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDimgray_200,
    height: 17,
    fontSize: FontSize.size_5xl,
  },
  groupChild: {
    top: 48,
  },
  groupItem: {
    top: 206,
  },
  investmentAmount: {
    top: 86,
    width: 148,
    left: 22,
    color: Color.lightGray11,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  interestRate: {
    top: 127,
    width: 96,
    left: 22,
    color: Color.lightGray11,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  maturityAmount: {
    top: 223,
    width: 126,
    left: 22,
    color: Color.lightGray11,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text1: {
    top: 220,
    left: 243,
    width: 67,
  },
  proceed: {
    top: 336,
    left: 123,
    color: Color.white,
    width: 77,
    height: 15,
    fontSize: FontSize.m3TitleMedium_size,
  },
  fdsAreInsured: {
    top: 292,
    left: 62,
    width: 203,
    color: Color.lightGray11,
  },
  byClickingBelow: {
    color: Color.lightGray11,
  },
  termsConditions: {
    color: Color.colorGoldenrod_100,
  },
  byClickingBelowContainer: {
    top: 309,
    width: 285,
    left: 26,
    height: 12,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  searchButtonParent: {
    top: 399,
    height: 374,
    width: 323,
    left: 26,
    position: "absolute",
  },
});

export default GroupComponent31;
