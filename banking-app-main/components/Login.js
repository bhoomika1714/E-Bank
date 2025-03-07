import React, { useMemo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Login = ({
  propTop,
  propLeft,
  propBorderRadius,
  propWidth,
  propBackgroundColor,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
  confirm1,
  propColor,
  propFontSize,
}) => {
  const login1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("borderRadius", propBorderRadius),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderStyle", propBorderStyle),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
    };
  }, [
    propTop,
    propLeft,
    propBorderRadius,
    propWidth,
    propBackgroundColor,
    propBorderStyle,
    propBorderColor,
    propBorderWidth,
  ]);

  const text11Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propColor, propFontSize]);

  const navigation = useNavigation();

  return (
    <View style={[styles.login, login1Style]}>
      <Pressable onPress={() => navigation.navigate("PaymentType1")}>
        <Text style={[styles.text, text11Style]}>{confirm1}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.m3LabelLarge_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    textAlign: "center",
  },
  login: {
    position: "absolute",
    top: 501,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_100,
    borderWidth: 2,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
  },
});

export default Login;
