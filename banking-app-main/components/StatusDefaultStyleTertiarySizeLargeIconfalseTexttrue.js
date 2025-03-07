import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusDefaultStyleTertiarySizeLargeIconfalseTexttrue = ({
  statusDefaultStyleTertiaryPosition,
  statusDefaultStyleTertiaryAlignSelf,
  label,
  labelFontWeight,
  labelFontFamily,
  labelColor,
}) => {
  const registerStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusDefaultStyleTertiaryPosition),
      ...getStyleValue("alignSelf", statusDefaultStyleTertiaryAlignSelf),
    };
  }, [statusDefaultStyleTertiaryPosition, statusDefaultStyleTertiaryAlignSelf]);

  const label1Style = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", labelFontWeight),
      ...getStyleValue("fontFamily", labelFontFamily),
      ...getStyleValue("color", labelColor),
    };
  }, [labelFontWeight, labelFontFamily, labelColor]);

  return (
    <View style={[styles.register, registerStyle]}>
      <Text style={[styles.label, label1Style]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.font_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorPeru_300,
    textAlign: "center",
  },
  register: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default StatusDefaultStyleTertiarySizeLargeIconfalseTexttrue;
