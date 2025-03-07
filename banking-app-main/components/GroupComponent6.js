//changed 

import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent6 = ({ propTop, propLeft }) => {
  const balanceStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={styles.balanceParent}>
      <View style={[styles.balance, balanceStyle]}>
        <Text style={[styles.careSupreme, styles.view12MoreFlexBox]}>
          Care Supreme
        </Text>
        <Text style={[styles.view12More, styles.view12MoreFlexBox]}>
          View 12 more plans
        </Text>
        <Text style={[styles.view12More, styles.view12MoreFlexBox]}>
          View Features
        </Text>
      </View>
      {/* <Image   //care image in home to be removed
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view12MoreFlexBox: {
    textAlign: "center",
    lineHeight: 16,
  },
  careSupreme: {
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
  },
  view12More: {
    fontSize: FontSize.mobileBody3Regular_size,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightgray_100,
  },
  balance: {
    top: 3,
    left: 46,
    width: 236,
    alignItems: "center",
    gap: Gap.gap_16xs,
    position: "absolute",
  },
  image3Icon: {
    top: 0,
    left: 0,
    width: 73,
    height: 54,
    position: "absolute",
  },
  balanceParent: {
    width: 282,
    height: 63,
  },
});

export default GroupComponent6;
