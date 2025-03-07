import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ propTop, propBottom, benzCL250, carName }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  return (
    <View
      style={[
        styles.component223Parent,
        styles.carNamePosition,
        groupViewStyle,
      ]}
    >
      <View style={[styles.component223, styles.rectanglePosition]}>
        <Text style={[styles.benzCl250, styles.carNameFlexBox]}>
          {benzCL250}
        </Text>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <Text style={[styles.carName, styles.carNameFlexBox]}>{carName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carNamePosition: {
    left: "0%",
    top: "0%",
  },
  rectanglePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  carNameFlexBox: {
    textAlign: "left",
    color: Color.gray3,
    position: "absolute",
  },
  benzCl250: {
    top: "27.78%",
    left: "3.67%",
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.mobileBody3Regular,
  },
  rectangle: {
    height: "100%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray4,
    borderWidth: 1,
    top: "0%",
    bottom: "0%",
  },
  component223: {
    height: "60.81%",
    top: "39.19%",
  },
  carName: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: "0%",
    top: "0%",
  },
  component223Parent: {
    height: "21.33%",
    bottom: "78.67%",
    right: "0%",
    width: "100%",
    position: "absolute",
    left: "0%",
  },
});

export default GroupComponent;
