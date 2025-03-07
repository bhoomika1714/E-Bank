import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent19 = ({
  onFramePressablePress,
  propLeft,
  propTop,
  primary,
  showPrimary,
}) => {
  const framePressable1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propLeft, propTop]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.primaryWrapper, framePressable1Style]}
      onPress={onFramePressablePress}
    >
      {showPrimary && <Text style={styles.primary}>{primary}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
    color: Color.white,
    textAlign: "center",
  },
  primaryWrapper: {
    position: "absolute",
    top: 511,
    left: 54,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGoldenrod_100,
    width: 252,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_71xl,
    paddingVertical: Padding.p_lg,
  },
});

export default FrameComponent19;
