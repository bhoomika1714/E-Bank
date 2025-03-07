import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FrameComponent5 from "./FrameComponent5";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent11 = () => {
  return (
    <View style={styles.contributionParent}>
      <Text style={styles.contribution}>Contribution</Text>
      <FrameComponent5 you="you" />
      <View style={styles.frameChild} />
      <FrameComponent5
        propWidth="unset"
        propFlex={1}
        you="Alex"
        propWidth1="unset"
      />
      <View style={styles.frameChild} />
      <FrameComponent5 propWidth={218} you="Harry" propWidth1={34} />
      <FrameComponent5
        propWidth="unset"
        propFlex={1}
        you="Ria"
        propWidth1="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contribution: {
    fontSize: FontSize.m3TitleLarge_size,
    fontWeight: "700",
    fontFamily: FontFamily.font,
    color: Color.lightGray11,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  contributionParent: {
    position: "absolute",
    top: 507,
    right: 22,
    left: -1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    alignItems: "center",
    padding: Padding.p_base,
    gap: Gap.gap_7xs,
  },
});

export default FrameComponent11;
