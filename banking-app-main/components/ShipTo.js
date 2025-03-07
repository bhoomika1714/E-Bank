import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import TopBar1 from "./TopBar1";
import FrontLayer2 from "./FrontLayer2";
import { Border, Color } from "../GlobalStyles";

const ShipTo = () => {
  return (
    <View style={[styles.shipTo, styles.shipToLayout]}>
      <Image
        style={[styles.mapsIcon, styles.shipToLayout]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <TopBar1 />
      <FrontLayer2 />
      <Image
        style={styles.bulletIcon}
        contentFit="cover"
        source={require("../assets/bullet.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shipToLayout: {
    height: 812,
    width: 375,
  },
  mapsIcon: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  bulletIcon: {
    top: 238,
    left: 167,
    width: 64,
    height: 64,
    position: "absolute",
  },
  shipTo: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
});

export default ShipTo;
