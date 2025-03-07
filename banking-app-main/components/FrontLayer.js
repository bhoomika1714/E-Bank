import * as React from "react";
import { StyleSheet, View } from "react-native";
import Search1 from "./Search1";
import { Color, Border } from "../GlobalStyles";

const FrontLayer = ({
  placeholder,
  propPosition,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propFontFamily,
  propFontWeight,
}) => {
  return (
    <View style={[styles.frontLayer, styles.linePosition1]}>
      <View style={[styles.search, styles.linePosition1]}>
        <View style={[styles.line, styles.linePosition]} />
        <Search1
          propPosition={propPosition}
          propHeight={propHeight}
          propWidth={propWidth}
          propTop={propTop}
          propRight={propRight}
          propBottom={propBottom}
          propLeft={propLeft}
          placeholder={placeholder}
          propFontFamily={propFontFamily}
          propFontWeight={propFontWeight}
        />
      </View>
      <View style={[styles.line1, styles.linePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition1: {
    left: 0,
    right: 0,
  },
  linePosition: {
    bottom: "0%",
    position: "absolute",
  },
  line: {
    height: "1.3%",
    top: "98.7%",
    backgroundColor: Color.grayG100,
    opacity: 0.2,
    left: 0,
    right: 0,
  },
  search: {
    height: "18.38%",
    top: "0%",
    bottom: "81.62%",
    position: "absolute",
    right: 0,
  },
  line1: {
    height: "1.19%",
    width: "12.8%",
    top: "98.81%",
    right: "43.47%",
    left: "43.73%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorWhitesmoke_600,
  },
  frontLayer: {
    height: "51.6%",
    top: "13.67%",
    bottom: "34.73%",
    position: "absolute",
    right: 0,
  },
});

export default FrontLayer;
