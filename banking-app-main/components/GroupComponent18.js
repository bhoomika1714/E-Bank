import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent18 = ({
  propLeft,
  propWidth,
  prop,
  prop1,
  propWidth1,
  spotify,
  propWidth2,
  music,
  propWidth3,
  group32,
}) => {
  const text5Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  const groupView6Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const spotifyStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const musicStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textLayout, text5Style]}>
        <Text style={styles.text1Typo}>-</Text>
        <Text style={styles.text2}>{prop}</Text>
        <Text style={styles.text1Typo}>{prop1}</Text>
      </Text>
      <View style={[styles.spotifyParent, groupView6Style]}>
        <Text style={[styles.spotify, styles.musicPosition, spotifyStyle]}>
          {spotify}
        </Text>
        <Text style={[styles.music, styles.musicPosition, musicStyle]}>
          {music}
        </Text>
      </View>
      <Image
        style={[styles.groupChild, styles.musicPosition]}
        contentFit="cover"
        source={group32}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 18,
    color: Color.colorGray_600,
    lineHeight: 16,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
  },
  musicPosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  text: {
    top: 12,
    left: 272,
    width: 63,
    position: "absolute",
  },
  spotify: {
    top: 0,
    left: 0,
    width: 56,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 18,
    color: Color.colorGray_600,
    lineHeight: 16,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
  },
  music: {
    top: 24,
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 12,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 35,
    height: 14,
    left: 0,
    textAlign: "left",
  },
  spotifyParent: {
    top: 2,
    left: 58,
    height: 38,
    width: 56,
    position: "absolute",
  },
  groupChild: {
    width: 42,
    top: 0,
    left: 0,
    height: 42,
  },
  parent: {
    width: 335,
    height: 42,
  },
});

export default GroupComponent18;
