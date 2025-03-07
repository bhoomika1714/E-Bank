import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Left = ({ propTop, propRight, propLeft }) => {
  const leftStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propRight, propLeft]);

  return (
    <View style={[styles.left, leftStyle]}>
      <Image
        style={styles.iconR}
        contentFit="cover"
        source={require("../assets/-icon--r4.png")}
      />
      <Text style={styles.perthWesternAustralia}>Perth, Western Australia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconR: {
    width: 24,
    height: 24,
  },
  perthWesternAustralia: {
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "right",
  },
  left: {
    position: "absolute",
    top: 58,
    right: 181,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_12xs,
  },
});

export default Left;
