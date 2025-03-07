import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Component1 = () => {
  return (
    <View>
      <View style={styles.frameParent}>
        <View style={styles.emailWrapper}>
          <Text style={styles.email}>Email</Text>
        </View>
        <Text style={styles.inputHere}>Input here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 18,
    fontWeight: "700",
    color: Color.lightGray11,
    textAlign: "center",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
  },
  emailWrapper: {
    top: -9,
    left: 18,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    position: "absolute",
  },
  inputHere: {
    top: 17,
    left: 23,
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 20,
    color: Color.slate500,
    textAlign: "left",
    fontFamily: FontFamily.kudaProjectHeaderText32Bold,
    position: "absolute",
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_400,
    borderWidth: 1,
    width: 312,
    height: 54,
  },
});

export default Component1;
