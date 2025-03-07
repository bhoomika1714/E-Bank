import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent3 from "./FrameComponent3";
import { Color, Border, Padding, Gap } from "../GlobalStyles";

const FrameComponent7 = () => {
  return (
    <View style={[styles.frameParent, styles.frameBorder]}>
      <FrameComponent3 cake="Cake" prop="- 500" />
      <View style={[styles.frameChild, styles.frameBorder]} />
      <FrameComponent3 cake="Decoration" prop="- 200" />
      <View style={[styles.frameChild, styles.frameBorder]} />
      <FrameComponent3 cake="Category" prop="- $100" />
      <View style={[styles.frameChild, styles.frameBorder]} />
      <FrameComponent3 cake="Category" prop="- $100" />
      <View style={[styles.frameChild, styles.frameBorder]} />
      <FrameComponent3 cake="Category" prop="- $100" />
      <View style={[styles.frameChild, styles.frameBorder]} />
      <FrameComponent3 cake="Category" prop="- $100" />
      <View style={[styles.frameChild, styles.frameBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameBorder: {
    borderTopWidth: 1,
    borderColor: Color.textBigTitle,
    borderStyle: "solid",
  },
  frameChild: {
    alignSelf: "stretch",
    height: 1,
  },
  frameParent: {
    position: "absolute",
    top: 694,
    right: 3,
    left: 3,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 73,
    alignItems: "center",
    padding: Padding.p_base,
    gap: Gap.gap_10xs,
  },
});

export default FrameComponent7;
