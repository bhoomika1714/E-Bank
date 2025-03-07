import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent3 = ({ propTop, group6 }) => {
  const groupView8Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.groupParent, styles.groupParentLayout, groupView8Style]}
    >
      <View style={[styles.frameWrapper, styles.groupParentLayout]}>
        <View
          style={[
            styles.welcomeToLivechatWrapper,
            styles.groupContainerPosition,
          ]}
        >
          <Text
            style={[styles.welcomeToLivechat, styles.livechat0210PmTypo]}
          >{`Welcome to
 LiveChat`}</Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerPosition]}>
        <Image style={styles.groupChild} contentFit="cover" source={group6} />
        <Text style={[styles.livechat0210Pm, styles.livechat0210PmTypo]}>
          Livechat 02:10 PM
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    width: 145,
    position: "absolute",
  },
  groupContainerPosition: {
    top: 0,
    position: "absolute",
  },
  livechat0210PmTypo: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  welcomeToLivechat: {
    fontSize: FontSize.font_size,
  },
  welcomeToLivechatWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    left: 0,
  },
  frameWrapper: {
    top: 33,
    height: 88,
    left: 0,
  },
  groupChild: {
    top: 1,
    width: 28,
    height: 28,
    left: 0,
    position: "absolute",
  },
  livechat0210Pm: {
    marginLeft: -37,
    left: "50%",
    fontSize: FontSize.mobileBody3Regular_size,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    width: 136,
    height: 30,
    left: 0,
  },
  groupParent: {
    top: 476,
    left: 64,
    height: 121,
  },
});

export default GroupComponent3;
