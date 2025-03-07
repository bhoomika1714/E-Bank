import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const FrameComponent10 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
        <View style={styles.expenseWrapper}>
          <Text style={[styles.expense, styles.textTypo]}>Expense</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>1500</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-51.png")}
        />
      </View>
      <View style={styles.frameInner} />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
        <View style={styles.expenseWrapper}>
          <Text style={[styles.expense, styles.textTypo]}>Income</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>2000</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-51.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
  },
  frameChild: {
    width: 12,
    height: 12,
  },
  expense: {
    textAlign: "left",
  },
  expenseWrapper: {
    flex: 1,
  },
  text: {
    textAlign: "right",
  },
  wrapper: {
    justifyContent: "center",
  },
  frameItem: {
    width: 6,
    height: 12,
  },
  ellipseParent: {
    flexDirection: "row",
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameInner: {
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    top: 395,
    right: 22,
    left: 10,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 338,
    padding: Padding.p_base,
    gap: Gap.gap_10xs,
    alignItems: "center",
  },
});

export default FrameComponent10;
