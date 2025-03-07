import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const AnotherAccountOption = () => {
  return (
    <View style={styles.anotherAccountOption}>
      <View
        style={[styles.anotherAccountOption1, styles.pxBorderBottomSpaceBlock]}
      >
        <Image
          style={styles.accountIcon}
          contentFit="cover"
          source={require("../assets/account-icon.png")}
        />
        <Text style={styles.useAnotherAccount}>Use another account</Text>
      </View>
      <View style={[styles.pxBorderBottom, styles.pxBorderBottomSpaceBlock]}>
        <View style={styles.pxBorderBottomChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pxBorderBottomSpaceBlock: {
    paddingHorizontal: Padding.p_21xl,
    alignSelf: "stretch",
  },
  accountIcon: {
    width: 28,
    height: 20,
  },
  useAnotherAccount: {
    flex: 1,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.colorDarkslategray_500,
    textAlign: "left",
  },
  anotherAccountOption1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    gap: Gap.gap_8xs,
  },
  pxBorderBottomChild: {
    backgroundColor: Color.colorGainsboro_300,
    height: 1,
    alignSelf: "stretch",
  },
  pxBorderBottom: {
    paddingVertical: 0,
  },
  anotherAccountOption: {
    alignSelf: "stretch",
  },
});

export default AnotherAccountOption;
