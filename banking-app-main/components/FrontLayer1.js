import * as React from "react";
import { StyleSheet, View } from "react-native";
import Search1 from "./Search1";
import { Border, Color, Gap } from "../GlobalStyles";

const FrontLayer1 = () => {
  return (
    <View style={[styles.frontLayer, styles.basePosition]}>
      <View style={[styles.base, styles.basePosition]} />
      <View style={styles.search}>
        <Search1
          propPosition="relative"
          propHeight={44}
          propWidth={305}
          propTop="unset"
          propRight="unset"
          propBottom="unset"
          propLeft="unset"
          placeholder="BANK OF BARODA"
          propFontFamily="Montserrat-Bold"
          propFontWeight="700"
        />
        <View style={styles.line} />
      </View>
      <View style={styles.line1} />
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    height: 307,
    left: 0,
    position: "absolute",
  },
  base: {
    marginTop: -153.5,
    top: "50%",
    right: 0,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  line: {
    backgroundColor: Color.grayG100,
    height: 1,
    opacity: 0.2,
    width: 375,
  },
  search: {
    top: 56,
    height: 77,
    alignItems: "center",
    gap: Gap.gap_2xl,
    width: 375,
    left: 0,
    position: "absolute",
  },
  line1: {
    height: "1.63%",
    width: "12.8%",
    top: "6.51%",
    right: "43.47%",
    bottom: "91.86%",
    left: "43.73%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorWhitesmoke_600,
    position: "absolute",
  },
  frontLayer: {
    top: 505,
    width: 375,
  },
});

export default FrontLayer1;
