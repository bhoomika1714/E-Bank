import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import CounterBubble from "./CounterBubble";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IconsOthershoppingBag = ({
  propMarginTop,
  propTop,
  propRight,
  propLeft,
  propWidth,
  propHeight,
  propBottom,
  path,
}) => {
  const menu3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("bottom", propBottom),
    };
  }, [
    propMarginTop,
    propTop,
    propRight,
    propLeft,
    propWidth,
    propHeight,
    propBottom,
  ]);

  return (
    <View style={[styles.menu3, menu3Style]}>
      <Image
        style={styles.shoppingBagIcon}
        contentFit="cover"
        source={require("../assets/shoppingbag.png")}
      />
      <Image style={styles.pathIcon} contentFit="cover" source={path} />
      <CounterBubble />
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingBagIcon: {
    width: 20,
    height: 20,
  },
  pathIcon: {
    height: "25%",
    width: "41.67%",
    top: "25%",
    right: "29.17%",
    bottom: "50%",
    left: "29.17%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  menu3: {
    top: 730,
    left: 242,
    width: 24,
    height: 24,
    position: "absolute",
  },
});

export default IconsOthershoppingBag;
