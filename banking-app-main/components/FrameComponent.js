import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FrameComponent = ({ onFramePressablePress, propTop, propLeft, save }) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Pressable
      style={[styles.qrCodeInner, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.scan}>{save}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChild: {
   
    height: "100%",
    width: "100%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    textAlign:"center",
  },
  scan: {
    left:50,
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
    top: "50%", // Vertically center text
    left: "70%", // Horizontally center text
    transform: [{ translateX: -50 }, { translateY: -10 }], // Center align the text
  },
  rectangleParent: {
    height: 54,
    width: 140,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    top:-210,
  },
  qrCodeInner: {
   
    alignItems: "center",
    justifyContent: "center",
    width: 189,
  },
});

export default FrameComponent;

