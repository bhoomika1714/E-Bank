import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import BarsTopBarsV2 from "./BarsTopBarsV2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <BarsTopBarsV2
        capIconBackgroundColor="#e0a340"
        capIconHeight={95}
        capIconWidth={375}
        propMarginTop={10.5}
        wifi={require("../assets/wifi7.png")}
        cellularConnection={require("../assets/cellular-connection5.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="10"
        wifiIconWidth="15"
        cellularConnectionIconHeight="10"
        cellularConnectionIconWidth="17"
      />
      <Text style={styles.shop}>Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shop: {
    top: 46,
    left: 126,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  topBar: {
    top: 0,
    left: 0,
    width: 375,
    height: 95,
    position: "absolute",
  },
});

export default TopBar;
