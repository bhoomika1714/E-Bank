import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent4 = ({ propTop, propLeft, propBackgroundColor }) => {
  const groupView11Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.frameParent, groupView11Style]}>
      <View style={[styles.welcomeWrapper, frameViewStyle]}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
      <Text style={[styles.visitor0212Pm, styles.readTypo]}>
        Visitor 02:12 PM
      </Text>
      <Text style={[styles.read, styles.readTypo]}>Read</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  readTypo: {
    color: Color.iPFTGreyText,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    position: "absolute",
  },
  welcome: {
    fontSize: FontSize.font_size,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  welcomeWrapper: {
    top: 30,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumblue_100,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    position: "absolute",
  },
  visitor0212Pm: {
    top: 0,
    left: 30,
  },
  read: {
    top: 88,
    left: 93,
  },
  frameParent: {
    top: 316,
    left: 270,
    width: 122,
    height: 118,
    position: "absolute",
  },
});

export default GroupComponent4;
