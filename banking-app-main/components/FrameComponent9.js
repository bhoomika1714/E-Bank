import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Gap, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent9 = () => {
  return (
    <View style={styles.balanceParent}>
      <Text style={[styles.balance, styles.textFlexBox]}>Balance</Text>
      <Text style={[styles.text, styles.textClr]}>500</Text>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={[styles.percent, styles.percentFlexBox]}>
        <Image
          style={styles.percentChild}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textClr]}>25%</Text>
      </View>
      <View style={[styles.percent1, styles.percentFlexBox]}>
        <Image
          style={styles.percentChild}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.text1, styles.textClr]}>75%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  textClr: {
    color: Color.textBigTitle,
    textAlign: "center",
    position: "absolute",
  },
  percentFlexBox: {
    gap: Gap.gap_10xs,
    flexDirection: "row",
    position: "absolute",
  },
  balance: {
    marginLeft: -36,
    top: 82,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.textDescription,
    width: 73,
    height: 16,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.font,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    marginLeft: -52,
    top: 103,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansTCBlack,
    width: 105,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  frameChild: {
    marginTop: -109,
    marginLeft: -109,
    top: "50%",
    left: "50%",
    position: "absolute",
    height: 218,
    width: 218,
  },
  percentChild: {
    width: 42,
    height: 42,
    zIndex: 0,
  },
  text1: {
    top: 12,
    left: 8,
    fontSize: FontSize.mobileBody3Regular_size,
    zIndex: 1,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    color: Color.textBigTitle,
  },
  percent: {
    top: 156,
    left: -21,
  },
  percent1: {
    top: 96,
    left: 210,
  },
  balanceParent: {
    height: 218,
    width: 218,
  },
});

export default FrameComponent9;
