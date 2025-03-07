import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const GroupComponent19 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupChildPosition1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.enterYourNid, styles.documentIdTypo]}>
          Enter your NID number
        </Text>
      </View>
      <Text style={[styles.documentId, styles.documentIdTypo]}>
        Document ID
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition1: {
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    top: "0%",
    left: "0%",
  },
  documentIdTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  enterYourNid: {
    height: "44.99%",
    width: "72.55%",
    top: "27.37%",
    left: "4.72%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_400,
  },
  rectangleParent: {
    height: "63.4%",
    top: "36.6%",
    left: "0%",
  },
  documentId: {
    height: "25.26%",
    width: "47.7%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.lightGray11,
    top: "0%",
    left: "0%",
  },
  groupParent: {
    height: "11.78%",
    width: "70.38%",
    top: "6.62%",
    right: "29.62%",
    bottom: "81.6%",
    left: "0%",
    position: "absolute",
  },
});

export default GroupComponent19;
