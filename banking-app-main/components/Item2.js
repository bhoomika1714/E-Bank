import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item2 = ({ twinPeaksBlvd, propWidth }) => {
  const twinPeaksBlvdStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.item}>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon29.png")}
      />
      <Image
        style={[styles.iconL, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon--l5.png")}
      />
      <Text style={[styles.twinPeaksBlvd, twinPeaksBlvdStyle]}>
        {twinPeaksBlvd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "66.67%",
    top: "0%",
    width: "7.97%",
    height: "33.33%",
    position: "absolute",
  },
  icon: {
    right: "0%",
    left: "92.03%",
  },
  iconL: {
    right: "92.03%",
    left: "0%",
  },
  twinPeaksBlvd: {
    marginTop: -36,
    width: "82.06%",
    top: "50%",
    left: "13.29%",
    fontSize: FontSize.font_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.blackB100,
    textAlign: "left",
    position: "absolute",
  },
  item: {
    width: 301,
    height: 72,
  },
});

export default Item2;
