import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const BuildingBlocksMenuButton = ({ labelText = "August 2023" }) => {
  return (
    <View>
      <View style={styles.stateLayer}>
        <Text style={styles.labelText}>{labelText}</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon17.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.schemesOnSurfaceVariant,
    textAlign: "center",
  },
  icon: {
    width: 18,
    height: 18,
  },
  stateLayer: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_3xs,
    gap: Gap.gap_12xs,
  },
});

export default BuildingBlocksMenuButton;
