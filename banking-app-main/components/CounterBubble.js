import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CounterBubble = () => {
  return (
    <View style={styles.counterBubble}>
      <Image
        style={styles.fondIcon}
        contentFit="cover"
        source={require("../assets/fond.png")}
      />
      <Text style={styles.counter}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fondIcon: {
    marginTop: -8,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  counter: {
    width: "100%",
    top: "18.75%",
    left: "0%",
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  counterBubble: {
    height: "66.67%",
    width: "66.67%",
    top: "45.83%",
    right: "-12.5%",
    bottom: "-12.5%",
    left: "45.83%",
    position: "absolute",
  },
});

export default CounterBubble;
