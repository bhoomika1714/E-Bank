import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Login from "./Login";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent41 = () => {
  return (
    <View style={styles.searchButtonParent}>
      <View style={styles.searchButton} />
      <View style={[styles.searchButton1, styles.searchBorder]} />
      <View style={styles.searchButton2} />
      <View style={[styles.searchButton3, styles.searchBorder]} />
      <Image
        style={styles.image140Icon}
        contentFit="cover"
        source={require("../assets/image-140.png")}
      />
      <Text
        style={[
          styles.alintaEnergyElectricityContainer,
          styles.containerFlexBox,
        ]}
      >
        <Text style={[styles.alintaEnergy, styles.ptsTypo]}>{`Alinta Energy
`}</Text>
        <Text style={[styles.electricity, styles.dueDateTypo]}>
          Electricity
        </Text>
      </Text>
      <Text style={[styles.dueDate25Container, styles.containerFlexBox]}>
        <Text style={styles.dueDateTypo}>{`Due date
`}</Text>
        <Text style={styles.ptsTypo}>25 AUG 24</Text>
      </Text>
      <Text style={[styles.amount, styles.amountPosition]}>Amount</Text>
      <Image
        style={styles.bxrupeeIcon}
        contentFit="cover"
        source={require("../assets/bxrupee2.png")}
      />
      <Text style={[styles.text, styles.ptsTypo]}>1024.75</Text>
      <Text style={[styles.payNowEarn, styles.amountPosition]}>
        Pay now, earn
      </Text>
      <Text style={[styles.pts, styles.ptsTypo]}>100pts</Text>
      <Login
        propTop={209}
        propLeft={0}
        propBorderRadius={10}
        propWidth={354}
        propBackgroundColor="#e0a340"
        propBorderStyle="unset"
        propBorderColor="unset"
        confirm1="pay now"
        propColor="#000"
        propFontSize={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBorder: {
    top: 96,
    height: 96,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    position: "absolute",
  },
  containerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  ptsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dueDateTypo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  amountPosition: {
    top: 111,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  searchButton: {
    top: 0,
    height: 96,
    borderColor: Color.colorGainsboro_400,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    width: 354,
    position: "absolute",
  },
  searchButton1: {
    width: 206,
    left: 0,
    top: 96,
  },
  searchButton2: {
    top: 139,
    left: 256,
    borderRadius: Border.br_11xl,
    borderColor: Color.blackWhiteGray50,
    width: 79,
    height: 27,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  searchButton3: {
    left: 206,
    width: 148,
  },
  image140Icon: {
    top: 26,
    left: 9,
    width: 40,
    height: 23,
    position: "absolute",
  },
  alintaEnergy: {
    fontSize: FontSize.m3TitleMedium_size,
  },
  electricity: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  alintaEnergyElectricityContainer: {
    top: 20,
    left: 62,
    color: Color.lightGray11,
    textAlign: "left",
  },
  dueDate25Container: {
    top: 45,
    left: 261,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    textAlign: "left",
  },
  amount: {
    left: 12,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
  },
  bxrupeeIcon: {
    top: 137,
    left: 17,
    width: 32,
    height: 29,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    top: 135,
    left: 49,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
    color: Color.lightGray11,
  },
  payNowEarn: {
    left: 251,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  pts: {
    top: 144,
    left: 273,
    color: Color.colorGoldenrod_100,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    position: "absolute",
  },
  searchButtonParent: {
    top: 118,
    left: 11,
    height: 263,
    width: 354,
    position: "absolute",
  },
});

export default GroupComponent41;
