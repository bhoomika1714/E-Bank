import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent5 = ({ propWidth, propFlex, you, propWidth1 }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("flex", propFlex),
    };
  }, [propWidth, propFlex]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={[styles.youParent, frameView1Style]}>
        <Text style={[styles.you, styles.youTypo]}>{you}</Text>
        <Text style={[styles.name, styles.nameClr]}>Name</Text>
      </View>
      <View style={[styles.parent, frameView2Style]}>
        <Text style={[styles.text, styles.textTypo]}>+ 500</Text>
        <Text style={[styles.date, styles.textTypo]}>Date</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  youTypo: {
    textAlign: "left",
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  nameClr: {
    color: Color.textDescription,
    fontSize: FontSize.m3LabelLarge_size,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  you: {
    color: Color.textBigTitle,
    fontSize: FontSize.font_size,
  },
  name: {
    textAlign: "left",
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  youParent: {
    width: 221,
    gap: Gap.gap_21xs,
  },
  text: {
    color: Color.textBigTitle,
    fontSize: FontSize.font_size,
  },
  date: {
    color: Color.textDescription,
    fontSize: FontSize.m3LabelLarge_size,
  },
  parent: {
    width: 31,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ellipseParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_5xs,
  },
});

export default FrameComponent5;
