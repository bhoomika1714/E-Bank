import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import BarsStatusBariPhoneLight from "./BarsStatusBariPhoneLight";
import { Color } from "../GlobalStyles";

const BarsTopBarsV1 = () => {
  return (
    <View style={styles.barstopBarsv4}>
      <BarsStatusBariPhoneLight
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackgroundColor="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        showBattery
        wifi={require("../assets/wifi.png")}
        wifiIconHeight={11}
        wifiIconWidth={15}
        cellularConnection={require("../assets/cellular-connection.png")}
        cellularConnectionIconHeight={11}
        cellularConnectionIconWidth={17}
        propTop="7"
        propLeft="21"
        propWidth="54"
        propHeight="21"
        propMarginTop="-3.5"
      />
      <Image
        style={styles.iconL}
        contentFit="cover"
        source={require("../assets/-icon--l8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconL: {
    marginTop: 10,
    top: "50%",
    left: 35,
    width: 24,
    height: 24,
    position: "absolute",
  },
  barstopBarsv4: {
    top: 0,
    left: 0,
    backgroundColor: Color.yellowY100,
    width: 375,
    height: 100,
    position: "absolute",
  },
});

export default BarsTopBarsV1;
