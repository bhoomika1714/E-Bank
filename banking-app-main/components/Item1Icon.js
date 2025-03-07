import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item1Icon = ({ item1, propFlex, propWidth, showLabel }) => {
  const item1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("width", propWidth),
    };
  }, [propFlex, propWidth]);

  return (
    <ImageBackground
      style={[styles.item1Icon, item1IconStyle]}
      resizeMode="cover"
      source={item1}
    >
      <View style={[styles.itemText1, styles.contentPosition]}>
        <LinearGradient
          style={[styles.content, styles.contentPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.5)"]}
        >
          {showLabel && <Text style={styles.label}>Label</Text>}
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  label: {
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.white,
    textAlign: "left",
  },
  content: {
    justifyContent: "flex-end",
    padding: Padding.p_base,
    backgroundColor: "transparent",
  },
  itemText1: {
    display: "none",
  },
  item1Icon: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_9xl,
    overflow: "hidden",
  },
});

export default Item1Icon;
