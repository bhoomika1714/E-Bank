import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Time = ({
  hours = "9",
  minutes = "41",
  showLocation = false,
  propColor,
  propColor1,
  propColor2,
  locationArrow,
}) => {
  const hoursStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const text10Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const minutesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    <View style={[styles.time, styles.timeFlexBox]}>
      <View style={styles.timeFlexBox}>
        <Text style={[styles.hours, hoursStyle]}>{hours}</Text>
        <Text style={[styles.hours, text10Style]}>:</Text>
        <Text style={[styles.hours, minutesStyle]}>{minutes}</Text>
      </View>
      {showLocation && (
        <Image
          style={styles.locationArrowIcon}
          contentFit="cover"
          source={locationArrow}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  hours: {
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.lightGray11,
    textAlign: "left",
  },
  locationArrowIcon: {
    width: 12,
    height: 12,
  },
  time: {
    justifyContent: "center",
    gap: Gap.gap_18xs,
  },
});

export default Time;
