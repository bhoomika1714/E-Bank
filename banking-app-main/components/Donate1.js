import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Donate1 = ({ propWidth, propTop, propLeft }) => {
  const donateStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const rectanglePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.donate, donateStyle]}>
      <Image
        style={[styles.donateChild, styles.donatePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-211.png")}
      />
      <Text style={[styles.bySmvm, styles.bySmvmText]}>
        <Text style={styles.by}>{`by `}</Text>
        <Text style={styles.smvm}>smvm</Text>
      </Text>
      <Pressable
        style={[
          styles.donateItem,
          styles.donatePosition,
          rectanglePressableStyle,
        ]}
        onPress={() => navigation.navigate("ChooseAmount")}
      />
      <Text style={[styles.donate1, styles.bySmvmTypo]}>{`Donate
`}</Text>
      <Text style={[styles.theMissionOfContainer, styles.bySmvmText]}>
        <Text style={styles.theMissionOf}>
          The mission of this donation is to cultivate highly trained and
          capable indian graduated or dropouts with a proficiency in studies
          that will lead to thier successful participation in labor
        </Text>
        <Text style={styles.text}>{`. `}</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.readMore}>Read more</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  donatePosition: {
    left: 0,
    position: "absolute",
  },
  bySmvmText: {
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 24,
    position: "absolute",
  },
  bySmvmTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  donateChild: {
    top: 0,
    width: 30,
    height: 30,
  },
  by: {
    color: Color.colorGray_2100,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  smvm: {
    fontSize: FontSize.size_mini,
    color: Color.colorGoldenrod_100,
  },
  bySmvm: {
    top: 3,
    left: 38,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  donateItem: {
    top: 159,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    height: 54,
    width: 327,
  },
  donate1: {
    top: 174,
    left: 109,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 24,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  theMissionOf: {
    color: Color.colorGray_1200,
  },
  text: {
    color: Color.lightGray11,
  },
  text1: {
    color: Color.colorDarkcyan_100,
  },
  readMore: {
    color: Color.colorGoldenrod_100,
  },
  theMissionOfContainer: {
    top: 38,
    left: 13,
    fontFamily: FontFamily.interRegular,
    width: 273,
    height: 129,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  donate: {
    top: 547,
    left: 24,
    height: 222,
    width: 327,
    position: "absolute",
  },
});

export default Donate1;
