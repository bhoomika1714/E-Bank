import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Gap } from "../GlobalStyles";

const FrameComponent3 = ({ cake, prop }) => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.cakeParent}>
        <Text style={[styles.cake, styles.cakeTypo]}>{cake}</Text>
        <Text style={[styles.name, styles.nameClr]}>Name</Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
        <Text style={[styles.date, styles.textTypo]}>Date</Text>
      </View>
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/vector-33.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cakeTypo: {
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
  cake: {
    color: Color.textBigTitle,
    fontSize: FontSize.font_size,
  },
  name: {
    textAlign: "left",
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  cakeParent: {
    flex: 1,
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
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameItem: {
    width: 6,
    height: 12,
  },
  ellipseParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_5xs,
  },
});

export default FrameComponent3;
