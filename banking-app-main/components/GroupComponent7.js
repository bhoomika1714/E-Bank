import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent7 = ({
  propRight,
  propLeft,
  nationality,
  propWidth,
  vector,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  const nationalityStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View
      style={[
        styles.nationalityParent,
        styles.nationalityPosition,
        groupView1Style,
      ]}
    >
      <Text
        style={[styles.nationality, styles.bangladeshTypo, nationalityStyle]}
      >
        {nationality}
      </Text>
      <View style={[styles.groupChild, styles.nationalityPosition]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={vector}
      />
      <Text style={[styles.bangladesh, styles.vectorIconPosition]}>
        Bangladesh
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nationalityPosition: {
    left: "0%",
    position: "absolute",
  },
  bangladeshTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "27.66%",
  },
  vectorIconPosition: {
    top: "56.88%",
    position: "absolute",
  },
  nationality: {
    width: "51.23%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    height: "62.98%",
    width: "100%",
    top: "36.88%",
    right: "0%",
    bottom: "0.14%",
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "23.55%",
    width: "14.4%",
    right: "6.24%",
    bottom: "19.57%",
    left: "79.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangladesh: {
    width: "59.99%",
    left: "6.24%",
    opacity: 0.6,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "27.66%",
  },
  nationalityParent: {
    height: "11.71%",
    width: "48.49%",
    top: "43.65%",
    right: "51.51%",
    bottom: "44.63%",
  },
});

export default GroupComponent7;
