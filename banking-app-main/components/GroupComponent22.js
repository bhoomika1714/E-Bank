import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent22 = ({ maskGroup }) => {
  return (
    <View style={styles.dateOfBirthParent}>
      <Text style={styles.dateOfBirth}>Date of Birth</Text>
      <View style={[styles.groupChild, styles.groupShadowBox]} />
      <Text style={[styles.dateOfBirth1, styles.ageTypo]}>Date of Birth</Text>
      <View style={[styles.groupItem, styles.groupShadowBox]} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={maskGroup}
      />
      <Text style={[styles.age, styles.ageTypo]}>Age</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    bottom: "-0.19%",
    top: "37.6%",
    width: "48.49%",
    height: "62.6%",
    position: "absolute",
  },
  ageTypo: {
    opacity: 0.7,
    top: "54.77%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.05%",
    position: "absolute",
  },
  dateOfBirth: {
    top: "0%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.05%",
    width: "28.8%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    right: "51.51%",
    left: "0%",
  },
  dateOfBirth1: {
    left: "3.04%",
    width: "28.8%",
    top: "54.77%",
  },
  groupItem: {
    right: "0%",
    left: "51.51%",
  },
  maskGroupIcon: {
    height: "46.95%",
    width: "9.1%",
    top: "45.42%",
    right: "53.03%",
    bottom: "7.63%",
    left: "37.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  age: {
    width: "8.79%",
    left: "57.28%",
  },
  dateOfBirthParent: {
    height: "10.61%",
    width: "99.69%",
    top: "21.38%",
    right: "0.31%",
    bottom: "68.02%",
    left: "0%",
    position: "absolute",
  },
});

export default GroupComponent22;
