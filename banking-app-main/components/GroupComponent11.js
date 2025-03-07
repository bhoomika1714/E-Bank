import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent11 = () => {
  return (
    <View
      style={[styles.applicantNameEnglishParent, styles.groupChildPosition]}
    >
      <Text style={[styles.applicantNameEnglish, styles.enterYourFullTypo]}>
        Applicant Name (English)
      </Text>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.enterYourFull, styles.enterYourFullTypo]}>
        Enter Your Full name in English
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    position: "absolute",
    left: "0%",
  },
  enterYourFullTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.05%",
    position: "absolute",
  },
  applicantNameEnglish: {
    width: "54.23%",
    top: "0%",
    left: "0%",
  },
  groupChild: {
    height: "62.6%",
    width: "100%",
    top: "37.6%",
    right: "0%",
    bottom: "-0.19%",
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
  enterYourFull: {
    width: "65.75%",
    top: "56.3%",
    left: "3.04%",
    opacity: 0.6,
  },
  applicantNameEnglishParent: {
    height: "10.61%",
    width: "99.69%",
    top: "34.98%",
    right: "0.31%",
    bottom: "54.41%",
    left: "0%",
  },
});

export default GroupComponent11;
