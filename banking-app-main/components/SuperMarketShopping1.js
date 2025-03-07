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
const SuperMarketShopping1 = ({
  propBackgroundColor,
  bagTick,
  reason,
  time,
  propBackgroundColor1,
  propColor,
  prop,
  prop1,
  propColor1,
  prop2,
  propColor2,
}) => {
  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const amount1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  const text7Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const text8Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const text9Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    <View style={[styles.superMarketShopping, styles.infoFlexBox]}>
      <View style={[styles.info, styles.infoFlexBox]}>
        <View style={[styles.icon, styles.infoFlexBox, iconStyle]}>
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
      <View style={[styles.amount, styles.infoFlexBox, amount1Style]}>
        <Text style={styles.number}>
          <Text style={[styles.text, text7Style]}>
            <Text style={styles.timeTypo}>{prop}</Text>
            <Text style={styles.text2}>₹</Text>
          </Text>
          <Text style={styles.timeTypo}>
            <Text style={[styles.text, text8Style]}>{prop1}</Text>
            <Text style={[styles.text5, text9Style]}>{prop2}</Text>
          </Text>
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
  },
  bagTickIcon: {
    width: 28,
    height: 28,
  },
  icon: {
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
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
    fontWeight: "500",
  },
  time: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.darkWhiteGrey60,
    textAlign: "center",
  },
  info: {
    gap: Gap.gap_8xs,
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  text: {
    color: Color.colorTomato_100,
  },
  text5: {
    color: Color.colorTomato_200,
  },
  number: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
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

export default SuperMarketShopping1;
