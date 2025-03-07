import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Info10 = ({ propWidth, propFontWeight, propFontFamily }) => {
  const infoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const reasonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <View style={[styles.info, infoStyle]}>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user1.png")}
      />
      <View>
        <Text style={[styles.reason, reasonStyle]}>Alex</Text>
        <Text style={styles.time}>Today, at 4:17pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 43,
    height: 45,
  },
  reason: {
    fontSize: FontSize.font_size,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
  },
  time: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkWhiteGrey60,
    textAlign: "center",
  },
  info: {
    width: 209,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_sm,
  },
});

export default Info10;
