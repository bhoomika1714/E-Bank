import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item3 = ({
  propRight,
  propLeft,
  propHeight,
  propWidth,
  propTop,
  propBottom,
  propBackgroundColor,
  number,
}) => {
  const item3Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propRight, propLeft, propHeight, propWidth, propTop, propBottom]);

  const lineStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.item, styles.itemPosition, item3Style]}>
      <View style={[styles.line, styles.itemPosition, lineStyle]} />
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    left: 0,
    position: "absolute",
  },
  line: {
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    backgroundColor: Color.blackB100,
    opacity: 0.2,
  },
  number: {
    marginTop: -15.5,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    position: "absolute",
  },
  item: {
    top: 0,
    backgroundColor: Color.white,
    width: 65,
    height: 65,
  },
});

export default Item3;
