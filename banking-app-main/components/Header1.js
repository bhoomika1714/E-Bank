import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const Header1 = () => {
  return (
    <View style={styles.header}>
      <View style={styles.labelAndDate}>
        <Text style={[styles.supportingText, styles.dayFlexBox]}>
          Select date
        </Text>
        <Text style={[styles.weekDayDay, styles.dayFlexBox]}>Mon, Aug 17</Text>
      </View>
      <IconButton icon={require("../assets/icon16.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  dayFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  supportingText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.schemesOnSurfaceVariant,
    height: 16,
  },
  weekDayDay: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 40,
    fontFamily: FontFamily.m3TitleLarge,
    color: Color.schemesOnSurface,
    height: 40,
  },
  labelAndDate: {
    flex: 1,
    gap: Gap.gap_3xl,
  },
  header: {
    borderStyle: "solid",
    borderColor: Color.colorSaddlebrown,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    gap: Gap.gap_12xs,
    alignSelf: "stretch",
  },
});

export default Header1;
