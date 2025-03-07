import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PrimaryButton = ({ labelText = "OK" }) => {
  return (
    <View style={[styles.secondayButton, styles.stateLayerFlexBox]}>
      <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.schemesPrimary,
    textAlign: "center",
  },
  stateLayer: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  secondayButton: {
    borderRadius: Border.br_81xl,
    height: 40,
    overflow: "hidden",
  },
});

export default PrimaryButton;
