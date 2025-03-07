import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimeStyle = ({
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propMarginTop,
}) => {
  const timeStyleStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propLeft, propWidth, propHeight]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.timeStyle, styles.timeLayout, timeStyleStyle]}>
      <Text style={[styles.time, styles.timeLayout, timeStyle]}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.lightGray11,
    textAlign: "center",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
});

export default TimeStyle;
