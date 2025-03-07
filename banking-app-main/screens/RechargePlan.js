import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import StatusDefaultStyleprimarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleprimarySizeLargeIconfalseTexttrue";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const RechargePlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rechargePlan}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.rechargePlanChild, styles.vectorIconPosition]} />
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
      <View style={styles.rechargePlanItem} />
      <Image
        style={[styles.rechargePlanInner, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1272628259.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.bxrupee, styles.bxrupeeLayout]} />
      <Image
        style={[styles.bxrupeeIcon, styles.bxrupeeLayout]}
        contentFit="cover"
        source={require("../assets/bxrupee.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("PaymentType1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-6583.png")}
        />
      </Pressable>
      <Text
        style={styles.voiceUnlimitedCalls}
      >{`Voice: Unlimited calls |SMS: 100SMS/Days
Note - you can recharge with above plan to avail the same
benefits of  earlier Rs299 plan..`}</Text>
      <Text style={[styles.validity28Days, styles.data2gbdayTypo]}>{`Validity:
28 Days`}</Text>
      <Text style={[styles.data2gbday, styles.data2gbdayTypo]}>{`Data:
2GB/Day`}</Text>
      <Image
        style={[styles.rechargePlanChild1, styles.rectangleViewPosition]}
        contentFit="cover"
        source={require("../assets/vector-7579.png")}
      />
      <Text style={styles.text}>349</Text>
      <Text style={[styles.additionalBenefits, styles.data2gbdayTypo]}>
        Additional Benefits
      </Text>
      <Image
        style={styles.materialSymbolsLight5gMobiIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolslight5gmobiledatabadgerounded.png")}
      />
      <Text style={[styles.true5gData, styles.true5gDataTypo]}>
        True 5G Data
      </Text>
      <Image
        style={styles.arcticonsjiocinema}
        contentFit="cover"
        source={require("../assets/arcticonsjiocinema.png")}
      />
      <Text
        style={[styles.jiocinemaSports, styles.true5gDataTypo]}
      >{`JioCinema (sports & Movies)`}</Text>
      <Text style={[styles.pay, styles.payPosition]}>Pay</Text>
      <View style={styles.rechargePlanChild2} />
      <Image
        style={styles.arcticonsmyjio}
        contentFit="cover"
        source={require("../assets/arcticonsmyjio.png")}
      />
      <View style={[styles.reasonTime, styles.payPosition]}>
        <Text style={[styles.reason, styles.timeTypo]}>My number</Text>
        <Text style={[styles.time, styles.timeTypo]}>+91-2384659236</Text>
      </View>
      <StatusDefaultStyleprimarySizeLargeIconfalseTexttrue
        statusDefaultStyleprimaryPosition="absolute"
        statusDefaultStyleprimaryBackgroundColor="#e0a340"
        statusDefaultStyleprimaryTop={717}
        statusDefaultStyleprimaryLeft={29}
        statusDefaultStyleprimaryWidth={311}
        statusDefaultStyleprimaryHeight="unset"
        statusDefaultStyleprimaryAlignSelf="unset"
        label="Pay"
        labelFontWeight="500"
        labelFontFamily="Montserrat-Medium"
        labelColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    width: "100%",
  },
  rectangleViewPosition: {
    top: 206,
    position: "absolute",
  },
  bxrupeeLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  data2gbdayTypo: {
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    position: "absolute",
  },
  true5gDataTypo: {
    top: 340,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  payPosition: {
    left: 67,
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    width: "100%",
  },
  rechargePlanChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  rechargePlanItem: {
    top: 92,
    left: 2,
    borderStyle: "solid",
    borderColor: Color.colorPeru_200,
    borderTopWidth: 2,
    width: 377,
    height: 2,
    position: "absolute",
  },
  rechargePlanInner: {
    height: "4.93%",
    width: "11.2%",
    top: "4.93%",
    right: "86.93%",
    bottom: "90.15%",
    left: "1.87%",
  },
  rectangleView: {
    left: 74,
    width: 37,
    height: 36,
  },
  bxrupee: {
    top: 238,
    left: 170,
    backgroundColor: Color.lightGray11,
  },
  bxrupeeIcon: {
    top: 201,
    left: 28,
  },
  icon: {
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 9,
    top: 178,
    width: 351,
    height: 189,
    position: "absolute",
  },
  voiceUnlimitedCalls: {
    top: 252,
    left: 21,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    position: "absolute",
  },
  validity28Days: {
    left: 237,
    textAlign: "center",
    top: 199,
    fontSize: FontSize.m3LabelLarge_size,
  },
  data2gbday: {
    left: 130,
    width: 80,
    height: 33,
    top: 199,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  rechargePlanChild1: {
    left: 329,
    width: 12,
    height: 15,
  },
  text: {
    top: 207,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    left: 48,
    textAlign: "left",
    color: Color.lightGray11,
    lineHeight: 14,
    position: "absolute",
  },
  additionalBenefits: {
    top: 307,
    left: 22,
    textAlign: "left",
  },
  materialSymbolsLight5gMobiIcon: {
    top: 336,
    left: 23,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  true5gData: {
    left: 48,
  },
  arcticonsjiocinema: {
    top: 337,
    left: 166,
    width: 16,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  jiocinemaSports: {
    left: 188,
  },
  pay: {
    top: 40,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  rechargePlanChild2: {
    marginLeft: -181.5,
    top: 110,
    left: "50%",
    borderRadius: Border.br_mini,
    width: 349,
    height: 257,
    position: "absolute",
  },
  arcticonsmyjio: {
    top: 138,
    left: 31,
    borderRadius: Border.br_31xl,
    width: 27,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  reason: {
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    fontWeight: "600",
  },
  time: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.lightGray11,
  },
  reasonTime: {
    top: 135,
  },
  rechargePlan: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RechargePlan;
