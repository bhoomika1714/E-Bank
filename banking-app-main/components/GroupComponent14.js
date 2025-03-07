import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent14 = () => {
  return (
    <View style={[styles.postOfficeParent, styles.groupChildPosition]}>
      <Text style={[styles.postOffice, styles.postTypo]}>Post Office</Text>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.enterYourPost, styles.postTypo]}>
        Enter Your Post Office Name
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    right: "0%",
    width: "100%",
    position: "absolute",
    left: "0%",
  },
  postTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.06%",
    position: "absolute",
  },
  postOffice: {
    width: "23.94%",
    top: "0%",
    left: "0%",
  },
  groupChild: {
    height: "62.48%",
    top: "37.36%",
    bottom: "0.16%",
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
    left: "0%",
  },
  enterYourPost: {
    width: "61.52%",
    top: "56.12%",
    left: "3.03%",
    opacity: 0.6,
  },
  postOfficeParent: {
    height: "12.4%",
    top: "24.04%",
    bottom: "63.56%",
    left: "0%",
  },
});

export default GroupComponent14;
