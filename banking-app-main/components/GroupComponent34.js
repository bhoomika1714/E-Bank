import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent34 = () => {
  return (
    <View style={styles.bengaluruParent}>
      <Text style={[styles.bengaluru, styles.mumbaiTypo]}>Bengaluru</Text>
      <Text style={[styles.mumbai, styles.mumbaiTypo]}>Mumbai</Text>
      <Text style={[styles.dehli, styles.dehliTypo]}>Dehli</Text>
      <Text style={[styles.kolkata, styles.mumbaiTypo]}>Kolkata</Text>
      <Text style={[styles.hyderabad, styles.kochiTypo]}>Hyderabad</Text>
      <Text style={[styles.chennai, styles.dehliTypo]}>Chennai</Text>
      <Text style={[styles.ahmedabad, styles.mumbaiTypo]}>Ahmedabad</Text>
      <Text style={[styles.kochi, styles.kochiTypo]}>Kochi</Text>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mumbaiTypo: {
    height: 14,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  dehliTypo: {
    left: 225,
    height: 14,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  kochiTypo: {
    top: 119,
    height: 14,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 169,
    width: 314,
    position: "absolute",
  },
  bengaluru: {
    width: 75,
    left: 27,
    top: 21,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  mumbai: {
    width: 59,
    left: 137,
    top: 21,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  dehli: {
    top: 19,
    width: 38,
  },
  kolkata: {
    top: 70,
    left: 139,
    width: 55,
  },
  hyderabad: {
    width: 82,
    left: 27,
  },
  chennai: {
    top: 68,
    width: 61,
  },
  ahmedabad: {
    top: 72,
    width: 89,
    left: 27,
  },
  kochi: {
    width: 41,
    left: 137,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_400,
    borderWidth: 1,
  },
  bengaluruParent: {
    top: 227,
    left: 36,
    height: 169,
    width: 314,
    position: "absolute",
  },
});

export default GroupComponent34;
