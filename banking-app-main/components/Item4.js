import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import Input1 from "./Input1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item4 = ({
  propTop,
  propWidth,
  propLeft,
  label,
  propWidth2,
  iconR11,
  iconR,
  iconL,
  placeholder,
  iconRBackgroundColor,
  propWidth1,
}) => {
  const emailStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propWidth, propLeft]);

  const label2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  return (
    <View style={[styles.email, styles.emailPosition, emailStyle]}>
      <Input1
        iconRBackgroundColor={iconRBackgroundColor}
        iconR={iconR}
        iconR1={iconR11}
        iconL={iconL}
        placeholder={placeholder}
        propWidth={propWidth1}
      />
      <Text style={[styles.label, styles.emailPosition, label2Style]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    width: 305,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.grayG100,
    textAlign: "left",
  },
  email: {
    backgroundColor: Color.white,
    height: 68,
  },
});

export default Item4;
