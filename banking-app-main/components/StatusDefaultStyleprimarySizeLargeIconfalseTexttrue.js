import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusDefaultStyleprimarySizeLargeIconfalseTexttrue = ({
  statusDefaultStyleprimaryPosition,
  statusDefaultStyleprimaryBackgroundColor,
  statusDefaultStyleprimaryTop,
  statusDefaultStyleprimaryLeft,
  statusDefaultStyleprimaryWidth,
  statusDefaultStyleprimaryHeight,
  statusDefaultStyleprimaryAlignSelf,
  label,
  labelFontWeight,
  labelFontFamily,
  labelColor,
}) => {
  const loginStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusDefaultStyleprimaryPosition),
      ...getStyleValue(
        "backgroundColor",
        statusDefaultStyleprimaryBackgroundColor
      ),
      ...getStyleValue("top", statusDefaultStyleprimaryTop),
      ...getStyleValue("left", statusDefaultStyleprimaryLeft),
      ...getStyleValue("width", statusDefaultStyleprimaryWidth),
      ...getStyleValue("height", statusDefaultStyleprimaryHeight),
      ...getStyleValue("alignSelf", statusDefaultStyleprimaryAlignSelf),
    };
  }, [
    statusDefaultStyleprimaryPosition,
    statusDefaultStyleprimaryBackgroundColor,
    statusDefaultStyleprimaryTop,
    statusDefaultStyleprimaryLeft,
    statusDefaultStyleprimaryWidth,
    statusDefaultStyleprimaryHeight,
    statusDefaultStyleprimaryAlignSelf,
  ]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", labelFontWeight),
      ...getStyleValue("fontFamily", labelFontFamily),
      ...getStyleValue("color", labelColor),
    };
  }, [labelFontWeight, labelFontFamily, labelColor]);

  return (
    <View style={[styles.login, loginStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.font_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "center",
  },
  login: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    width: 311,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default StatusDefaultStyleprimarySizeLargeIconfalseTexttrue;
