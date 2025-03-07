import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormComponent = ({ undefined = "2000 INR" }) => {
  return (
    <View style={styles.formComponent}>
      <Text style={styles.text}>{undefined}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.font,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  formComponent: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFloralwhite,
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderWidth: 1,
    height: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_mini,
  },
});

export default FormComponent;
