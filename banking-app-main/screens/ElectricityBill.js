import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ElectricityBill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.electricityBill}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.electricityBillChild, styles.vectorIconPosition]} />
      <View style={[styles.topBar, styles.iconPosition]}>
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
      </View>
      <View style={styles.electricityBillItem} />
      <View style={styles.searchButton} />
      <View
        style={[styles.electricityBillInner, styles.electricityBillInnerLayout]}
      >
        <View
          style={[
            styles.searchLanguageWrapper,
            styles.electricityBillInnerLayout,
          ]}
        >
          <Text style={styles.searchLanguage}>Search by biller....</Text>
        </View>
      </View>
      <Text style={styles.karnatakaBillers}>Karnataka Billers</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("PayBills")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Image
        style={[styles.image113Icon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/image-113.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.bescomBangalore, styles.bescomBangalorePosition]}
        onPress={() => navigation.navigate("BESCOMBangalore")}
      >
        <Text style={styles.electricityTypo}>BESCOM Bangalore</Text>
      </Pressable>
      <Text
        style={[styles.chamundeshwariElectricitySup, styles.electricityTypo]}
      >
        Chamundeshwari Electricity Supply Corp Ltd (CESCOM)
      </Text>
      <Image
        style={styles.image114Icon}
        contentFit="cover"
        source={require("../assets/image-114.png")}
      />
      <View
        style={[
          styles.gulbargaElectricitySupplyCoParent,
          styles.image115IconLayout,
        ]}
      >
        <Text
          style={[styles.gulbargaElectricitySupply, styles.electricityTypo]}
        >
          Gulbarga Electricity Supply Corp Ltd
        </Text>
        <Image
          style={[styles.image115Icon, styles.image115IconLayout]}
          contentFit="cover"
          source={require("../assets/image-115.png")}
        />
      </View>
      <View
        style={[
          styles.hubliElectricitySupplyCorpParent,
          styles.image116IconLayout,
        ]}
      >
        <Text
          style={[styles.hubliElectricitySupply, styles.electricityTypo]}
        >{`Hubli  Electricity Supply Corp Ltd (HESCOM) `}</Text>
        <Image
          style={[styles.image116Icon, styles.image116IconLayout]}
          contentFit="cover"
          source={require("../assets/image-116.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628239.png")}
        />
        <View
          style={[
            styles.mangaloreElectricitySupplyCWrapper,
            styles.groupParentLayout,
          ]}
        >
          <Text
            style={styles.mangaloreElectricitySupply}
          >{`Mangalore Electricity Supply Company  Ltd 
(Non RAPDR)(MESCOM)`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  electricityBillInnerLayout: {
    height: 16,
    width: 124,
    position: "absolute",
  },
  groupChildLayout: {
    width: 22,
    position: "absolute",
  },
  bescomBangalorePosition: {
    left: 56,
    position: "absolute",
  },
  electricityTypo: {
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_2xs,
    color: Color.lightGray11,
    textAlign: "left",
  },
  image115IconLayout: {
    height: 25,
    position: "absolute",
  },
  image116IconLayout: {
    height: 35,
    position: "absolute",
  },
  groupParentLayout: {
    height: 28,
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  electricityBillChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    width: "100%",
    backgroundColor: Color.white,
    left: "0.27%",
    right: "-0.27%",
  },
  topBar: {
    width: 375,
    height: 100,
    position: "absolute",
  },
  electricityBillItem: {
    top: 99,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPeru_200,
    borderTopWidth: 2,
    width: 377,
    height: 2,
    position: "absolute",
  },
  searchButton: {
    top: 49,
    left: 6,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
    width: 355,
    height: 43,
    position: "absolute",
  },
  searchLanguage: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    height: 16,
    width: 124,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchLanguageWrapper: {
    left: 0,
    top: 0,
  },
  electricityBillInner: {
    top: 63,
    left: 48,
  },
  karnatakaBillers: {
    top: 132,
    color: Color.lightGray11,
    left: 13,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: "1.6%",
    top: "6.03%",
    right: "87.2%",
    bottom: "89.04%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  image113Icon: {
    top: 172,
    height: 30,
    left: 23,
  },
  rectangleView: {
    top: 158,
    left: 71,
    width: 37,
    height: 36,
    position: "absolute",
  },
  bescomBangalore: {
    top: 180,
  },
  chamundeshwariElectricitySup: {
    top: 238,
    left: 56,
    position: "absolute",
  },
  image114Icon: {
    top: 224,
    width: 43,
    left: 13,
    height: 43,
    position: "absolute",
  },
  gulbargaElectricitySupply: {
    top: 5,
    left: 35,
    width: 214,
    position: "absolute",
  },
  image115Icon: {
    width: 25,
    left: 0,
    top: 0,
  },
  gulbargaElectricitySupplyCoParent: {
    top: 282,
    width: 249,
    left: 23,
  },
  hubliElectricitySupply: {
    top: 10,
    left: 38,
    position: "absolute",
  },
  image116Icon: {
    width: 33,
    left: 0,
    top: 0,
  },
  hubliElectricitySupplyCorpParent: {
    top: 322,
    left: 18,
    width: 288,
  },
  groupChild: {
    height: 27,
    left: 0,
    top: 0,
  },
  mangaloreElectricitySupply: {
    fontSize: FontSize.size_2xs,
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mangaloreElectricitySupplyCWrapper: {
    left: 33,
    width: 238,
    top: 0,
    height: 28,
  },
  groupParent: {
    top: 372,
    width: 271,
    left: 23,
  },
  electricityBill: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ElectricityBill;
