import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return (
    <View style={styles.homeindicatorPosition}>
      <View style={[styles.homeIndicatorIphone, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeindicatorPosition: {
    height: 34,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightGray11,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorIphone: {
    display: "none",
  },
});

export default HomeIndicator;
