import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Description from "../components/Description";
import Top2 from "../components/Top2";
import BarsTopBarsV from "../components/BarsTopBarsV";
import { Color, Border } from "../GlobalStyles";

const SingleProduct = () => {
  return (
    <View style={styles.singleProduct}>
      <View style={styles.bodyLayout}>
        <View style={[styles.base, styles.basePosition]} />
        <View style={[styles.info, styles.basePosition]}>
          <Description />
          <Image
            style={styles.baseIcon}
            contentFit="cover"
            source={require("../assets/base.png")}
          />
          <Top2 />
        </View>
      </View>
      <BarsTopBarsV />
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    position: "absolute",
  },
  base: {
    top: 0,
    backgroundColor: Color.colorWhitesmoke_600,
    width: 375,
    height: 812,
  },
  baseIcon: {
    top: 55,
    left: 170,
    width: 170,
    height: 360,
    position: "absolute",
  },
  info: {
    marginTop: -274,
    top: "50%",
    right: 0,
    height: 680,
  },
  bodyLayout: {
    width: 375,
    height: 812,
  },
  singleProduct: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    height: 812,
  },
});

export default SingleProduct;
