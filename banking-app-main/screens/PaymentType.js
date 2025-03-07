import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentType = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentType}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.paymentTypeChild, styles.vectorIconPosition]} />
      <BarsTopBarsV2
        capIconBackgroundColor="#e0a340"
        capIconHeight={100}
        capIconTop={-7}
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
      <View style={[styles.paymentTypeItem, styles.paymentBorder]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("RechargePlan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Text style={styles.pay}>Pay</Text>
      <Image
        style={styles.bxrupeeIcon}
        contentFit="cover"
        source={require("../assets/bxrupee.png")}
      />
      <Text style={styles.text}>349</Text>
      <Text style={[styles.totalAmount, styles.totalAmountPosition]}>
        Total Amount
      </Text>
      <View style={[styles.paymentTypeInner, styles.paymentBorder]} />
      <Image
        style={[styles.image105Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <Text style={[styles.bankOfBaroda, styles.bankTypo]}>Bank of Baroda</Text>
      <Pressable
        style={[styles.arrowsDiagramsarrow, styles.arrowsIconPosition]}
        onPress={() => navigation.navigate("UPIPIN3")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>
      <Image
        style={[styles.image106Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-104.png")}
      />
      <Image
        style={[styles.arrowsDiagramsarrowIcon, styles.arrowsIconPosition]}
        contentFit="cover"
        source={require("../assets/arrows-diagramsarrow.png")}
      />
      <Text style={[styles.sbiBank, styles.bankTypo]}>SBI Bank</Text>
      <Image
        style={[styles.arrowsDiagramsarrowIcon1, styles.arrowsIconPosition]}
        contentFit="cover"
        source={require("../assets/arrows-diagramsarrow.png")}
      />
      <Text style={[styles.canaraBank, styles.bankTypo]}>Canara Bank</Text>
      <Image
        style={styles.image110Icon}
        contentFit="cover"
        source={require("../assets/image-105.png")}
      />
      <Text style={[styles.addUpiAccount, styles.totalAmountPosition]}>
        Add UPI Account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  paymentBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  totalAmountPosition: {
    left: 21,
    textAlign: "left",
    lineHeight: 14,
    position: "absolute",
  },
  iconLayout: {
    height: 55,
    width: 55,
    position: "absolute",
  },
  bankTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.mobileBody3Regular_size,
    left: 77,
    color: Color.lightGray11,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  arrowsIconPosition: {
    left: 284,
    height: 24,
    width: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
  paymentTypeChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
    left: "0.27%",
    right: "-0.27%",
  },
  paymentTypeItem: {
    top: 92,
    left: 2,
    borderColor: Color.colorPeru_200,
    borderTopWidth: 2,
    width: 377,
    height: 2,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  wrapper: {
    left: "1.87%",
    top: "4.93%",
    right: "86.93%",
    bottom: "90.15%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  pay: {
    top: 40,
    left: 67,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  bxrupeeIcon: {
    top: 129,
    left: 262,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 285,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    lineHeight: 14,
    color: Color.lightGray11,
    top: 135,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  totalAmount: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightGray11,
    top: 135,
    left: 21,
    fontSize: FontSize.size_5xl,
  },
  paymentTypeInner: {
    top: 117,
    left: 3,
    borderRadius: Border.br_mini,
    borderColor: Color.colorAliceblue_100,
    borderWidth: 1,
    width: 361,
    height: 63,
  },
  image105Icon: {
    top: 189,
    left: 14,
  },
  bankOfBaroda: {
    top: 208,
  },
  arrowsDiagramsarrow: {
    top: 209,
  },
  image106Icon: {
    top: 238,
    left: 13,
  },
  arrowsDiagramsarrowIcon: {
    top: 255,
    overflow: "hidden",
  },
  sbiBank: {
    top: 257,
  },
  arrowsDiagramsarrowIcon1: {
    top: 301,
    overflow: "hidden",
  },
  canaraBank: {
    top: 307,
  },
  image110Icon: {
    top: 298,
    left: 18,
    width: 42,
    height: 42,
    position: "absolute",
  },
  addUpiAccount: {
    top: 371,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorPeru_200,
  },
  paymentType: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PaymentType;
