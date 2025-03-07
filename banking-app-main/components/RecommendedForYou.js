import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Item6 from "./Item6";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const RecommendedForYou = () => {
  return (
    <View style={styles.recommendedForYou}>
      <View style={styles.line} />
      <View style={[styles.card, styles.cardPosition]}>
        <Item6
          propRight="0%"
          propLeft="52.46%"
          beosound1="Beolit 17"
          prop="$550"
          image={require("../assets/image.png")}
        />
        <Item6
          beosound1="Beosound 1"
          prop="$1,600"
          image={require("../assets/image1.png")}
        />
      </View>
      <Text style={[styles.recommendedForYou1, styles.cardPosition]}>
        Recommended for You
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    left: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  line: {
    height: "0.32%",
    width: "100%",
    top: "99.68%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_600,
    position: "absolute",
  },
  card: {
    height: "65.93%",
    top: "13.88%",
    right: "9.33%",
    bottom: "20.19%",
  },
  recommendedForYou1: {
    marginTop: -158.5,
    top: "50%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
  },
  recommendedForYou: {
    top: 349,
    left: 0,
    width: 375,
    height: 317,
    overflow: "hidden",
    position: "absolute",
  },
});

export default RecommendedForYou;
