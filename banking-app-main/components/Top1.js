import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Top1 = () => {
  return (
    <View style={[styles.top, styles.topPosition]}>
      <View style={[styles.line, styles.topPosition]} />
      <Text style={[styles.ordersWillArrive, styles.ordersWillArrivePosition]}>
        Orders will arrive in 3 days!
      </Text>
      <Text style={[styles.paymentSuccessful, styles.ordersWillArrivePosition]}>
        Payment Successful!
      </Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon15.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  ordersWillArrivePosition: {
    textAlign: "center",
    color: Color.blackB100,
    left: "9.33%",
    width: "81.33%",
    position: "absolute",
  },
  line: {
    height: "0.49%",
    top: "99.51%",
    bottom: "0%",
    backgroundColor: Color.colorWhitesmoke_600,
  },
  ordersWillArrive: {
    top: "70.24%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
  },
  paymentSuccessful: {
    marginTop: 1.5,
    top: "50%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
  },
  icon: {
    height: "39.02%",
    width: "21.33%",
    right: "39.2%",
    bottom: "60.98%",
    left: "39.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
  },
  top: {
    height: "35.71%",
    bottom: "64.29%",
    top: "0%",
  },
});

export default Top1;
