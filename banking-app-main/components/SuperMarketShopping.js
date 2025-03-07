import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import {
  FontFamily,
  Color,
  Border,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SuperMarketShopping = ({
  propWidth,
  propBackgroundColor,
  bagTick,
  reason,
  time,
  prop,
  prop1,
}) => {
  const info1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const iconElementStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.superMarketShopping, styles.infoFlexBox]}>
      <View style={[styles.info, styles.infoFlexBox, info1Style]}>
        <View
          style={[styles.iconElement, styles.infoFlexBox, iconElementStyle]}
        >
          <Image
            style={styles.bagTickIcon}
            contentFit="cover"
            source={bagTick}
          />
        </View>
        <View>
          <Text style={styles.reason}>{reason}</Text>
          <Text style={[styles.time, styles.timeTypo]}>{time}</Text>
        </View>
      </View>
      <View style={[styles.amount, styles.infoFlexBox]}>
        <Text style={[styles.number, styles.timeTypo]}>
          <Text style={styles.text}>{prop}</Text>
          <Text style={styles.text1}>{prop1}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  timeTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  bagTickIcon: {
    width: 28,
    height: 28,
  },
  iconElement: {
    backgroundColor: Color.colorMediumslateblue,
    width: 50,
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Border.br_xs,
    flexDirection: "row",
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
    color: Color.darkWhiteGrey60,
  },
  info: {
    width: 209,
    gap: Gap.gap_8xs,
  },
  text: {
    color: Color.colorTomato_100,
  },
  text1: {
    color: Color.colorTomato_200,
  },
  number: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  amount: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorTomato_300,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
  },
  superMarketShopping: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
});

export default SuperMarketShopping;
