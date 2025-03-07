import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({ prop, propTop, propHeight }) => {
  const text12Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Image
        style={styles.maskIcon}
        contentFit="cover"
        source={require("../assets/mask.png")}
      />
      <Text style={[styles.text, text12Style]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderRadius: 13,
    backgroundColor: Color.white,
    width: 196,
    height: 50,
    zIndex: 0,
  },
  maskIcon: {
    height: "40%",
    width: "7.65%",
    top: "30%",
    right: "75.51%",
    bottom: "30%",
    left: "16.84%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  text: {
    top: 15,
    left: 48,
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.lightGray11,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 84,
    height: 22,
    zIndex: 2,
    position: "absolute",
  },
  rectangleParent: {
    top: 637,
    left: 112,
    gap: Gap.gap_10xs,
    position: "absolute",
  },
});

export default FrameComponent1;
