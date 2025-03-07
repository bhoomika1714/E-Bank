import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent21 = ({ labelWidth, propWidth, label }) => {
  const groupView10Style = useMemo(() => {
    return {
      ...getStyleValue("width", labelWidth),
    };
  }, [labelWidth]);

  const amountStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const navigation = useNavigation();

  return (
    <View style={styles.currencyUnitParent}>
      <Pressable
        style={[styles.currencyUnit, styles.amountFlexBox]}
        onPress={() => navigation.navigate("SendMoney1")}
      >
        <Text style={styles.label}>INR</Text>
        <Text style={styles.hindi}>{`🇮🇳 `}</Text>
      </Pressable>
      <View style={[styles.parent, styles.textPosition, groupView10Style]}>
        <Text style={[styles.text, styles.textPosition]}>₹</Text>
        <View style={[styles.amount, styles.amountFlexBox, amountStyle]}>
          <Text style={styles.label1}>{label}</Text>
          <View style={styles.liner} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.blackWhiteGray90,
    textAlign: "left",
  },
  hindi: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorsFont,
    width: 24,
    textAlign: "left",
  },
  currencyUnit: {
    top: 11,
    left: 216,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 29,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    gap: Gap.gap_12xs,
  },
  text: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorPeru_200,
    textAlign: "left",
  },
  label1: {
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "left",
  },
  liner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryMain,
    width: 1,
    height: 28,
    opacity: 0.5,
  },
  amount: {
    top: 8,
    left: 20,
    gap: Gap.gap_17xs,
  },
  parent: {
    width: 114,
    height: 48,
  },
  currencyUnitParent: {
    width: 298,
    height: 48,
  },
});

export default GroupComponent21;
