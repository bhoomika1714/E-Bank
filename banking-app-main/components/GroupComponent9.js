import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent9 = () => {
  return (
    <View style={[styles.genderParent, styles.genderPosition]}>
      <Text style={[styles.gender, styles.genderTypo]}>Gender</Text>
      <View style={[styles.groupChild, styles.genderPosition]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector28.png")}
      />
      <Text style={[styles.selectGender, styles.vectorIconPosition]}>
        Select Gender
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  genderPosition: {
    left: "0%",
    position: "absolute",
  },
  genderTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.05%",
  },
  vectorIconPosition: {
    top: "56.3%",
    position: "absolute",
  },
  gender: {
    width: "16.05%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    height: "62.6%",
    width: "100%",
    top: "37.4%",
    right: "0%",
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "24.05%",
    width: "6.98%",
    right: "3.01%",
    bottom: "19.66%",
    left: "90.01%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  selectGender: {
    width: "30.61%",
    left: "3.04%",
    opacity: 0.6,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.05%",
  },
  genderParent: {
    height: "10.61%",
    width: "99.69%",
    top: "62.19%",
    right: "0.31%",
    bottom: "27.21%",
  },
});

export default GroupComponent9;
