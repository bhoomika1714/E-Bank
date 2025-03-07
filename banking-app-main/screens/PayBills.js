import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import GroupComponent41 from "../components/GroupComponent41";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PayBills = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.payBills}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.payBillsChild, styles.vectorIconPosition]} />
      <Text style={[styles.electricBill, styles.dthTypo]}>Electric Bill</Text>
      <Text style={[styles.water, styles.gasTypo]}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.water1}>Water</Text>
      </Text>
      <Text style={[styles.loanRepayment, styles.gasTypo]}>{`Loan repayment
`}</Text>
      <Text style={[styles.gas, styles.gasTypo]}>Gas</Text>
      <Text style={[styles.mobileRecharge, styles.dthTypo]}>{`Mobile recharge
 
`}</Text>
      <BarsTopBarsV2
        capIconBackgroundColor="#fff"
        capIconHeight={100}
        capIconTop={-35}
        capIconWidth={375}
        propMarginTop={10}
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="15"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="17"
      />
      <BarsTopBarsV2
        capIconBackgroundColor="#e0a340"
        capIconHeight={100}
        capIconWidth={375}
        propMarginTop={10}
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="15"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="17"
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Text style={styles.payBills1}>Pay Bills</Text>
      <View style={styles.payBillsItem} />
      <Image
        style={[styles.payBillsInner, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1272628293.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-1272628298.png")}
      />
      <View style={[styles.rectangleParent, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.iconLayout1]} />
        <Image
          style={[styles.ionwaterSharpIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ionwatersharp.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.iconLayout1]} />
        <Image
          style={[styles.vectorIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.iconLayout1]} />
        <Image
          style={[styles.cryptocurrencydthIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cryptocurrencydth.png")}
        />
      </View>
      <Text style={[styles.dth, styles.dthTypo]}>DTH</Text>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.iconLayout1]} />
        <Image
          style={[styles.iconoirgas, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconoirgas.png")}
        />
      </View>
      <Image
        style={[styles.payBillsChild1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/group-1272628297.png")}
      />
      <Text style={[styles.rent, styles.dthTypo]}>Rent</Text>
      <Image
        style={[styles.groupIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group6.png")}
      />
      <GroupComponent41 />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  dthTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  gasTypo: {
    height: "2.83%",
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupIconPosition: {
    bottom: "42.73%",
    top: "51.11%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  groupPosition: {
    left: "41.33%",
    right: "45.33%",
  },
  groupViewPosition: {
    left: "6.67%",
    right: "80%",
  },
  iconLayout: {
    height: 36,
    width: 36,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "28.2%",
    top: "65.64%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  payBillsChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
    left: "0.27%",
    right: "-0.27%",
  },
  electricBill: {
    height: "2.81%",
    width: "27.49%",
    left: "34.13%",
    top: "58.74%",
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  water1: {
    fontSize: FontSize.m3TitleMedium_size,
  },
  water: {
    width: "33.07%",
    left: "-4.8%",
    top: "58.74%",
  },
  loanRepayment: {
    width: "30.93%",
    top: "73.28%",
    left: "32.27%",
    fontSize: FontSize.m3TitleMedium_size,
  },
  gas: {
    width: "15.47%",
    top: "87.32%",
    left: "5.33%",
    fontSize: FontSize.m3TitleMedium_size,
  },
  mobileRecharge: {
    height: "3.94%",
    width: "26.93%",
    left: "66.13%",
    top: "58.74%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.47%",
    top: "5.42%",
    right: "81.33%",
    bottom: "89.66%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  payBills1: {
    height: "4.84%",
    width: "55.28%",
    top: "5.3%",
    left: "29.07%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  payBillsItem: {
    top: 100,
    left: 4,
    borderStyle: "solid",
    borderColor: Color.colorPeru_200,
    borderTopWidth: 2,
    width: 377,
    height: 2,
    position: "absolute",
  },
  payBillsInner: {
    right: "12.53%",
    left: "74.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon: {
    bottom: "42.73%",
    top: "51.11%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_700,
    top: "0%",
    position: "absolute",
  },
  ionwaterSharpIcon: {
    left: 6,
    width: 36,
    top: 7,
  },
  rectangleParent: {
    bottom: "42.73%",
    top: "51.11%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "71.4%",
    width: "71.4%",
    top: "22%",
    right: "14.6%",
    bottom: "6.6%",
    left: "14%",
    position: "absolute",
  },
  rectangleGroup: {
    left: "41.33%",
    right: "45.33%",
  },
  cryptocurrencydthIcon: {
    left: 7,
    top: 7,
  },
  rectangleContainer: {
    right: "13.6%",
    left: "73.07%",
  },
  dth: {
    top: 597,
    left: 285,
  },
  iconoirgas: {
    top: 5,
    left: 6,
    width: 36,
  },
  groupView: {
    top: "79.68%",
    bottom: "14.16%",
    width: "13.33%",
    height: "6.16%",
    right: "80%",
    position: "absolute",
  },
  payBillsChild1: {
    left: "6.67%",
    right: "80%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rent: {
    top: 595,
    left: 31,
  },
  groupIcon1: {
    height: "2.51%",
    width: "4%",
    top: "17%",
    right: "17.07%",
    bottom: "80.49%",
    left: "78.93%",
    position: "absolute",
  },
  payBills: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PayBills;
