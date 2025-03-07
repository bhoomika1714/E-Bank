import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Section1 = () => {
  return (
    <View style={styles.section4}>
      <Text style={[styles.text, styles.textTypo]}>{`        `}</Text>
      <View style={[styles.loanAmtParent, styles.amtParentLayout]}>
        <Text
          style={[styles.loanAmt, styles.loanAmtTypo]}
        >{`    Loan Amt: `}</Text>
        <View style={[styles.groupChild, styles.groupLayout]} />
      </View>
      <View style={[styles.totalAmtParent, styles.amtParentLayout]}>
        <Text
          style={[styles.totalAmt, styles.textTypo]}
        >{`    Total Amt: `}</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={styles.interestRateParent}>
        <Text
          style={[styles.interestRate, styles.loanAmtTypo]}
        >{`Interest : Rate      `}</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.m3TitleLarge,
    lineHeight: 28,
    fontSize: FontSize.m3TitleLarge_size,
  },
  amtParentLayout: {
    height: 53,
    position: "absolute",
  },
  loanAmtTypo: {
    width: 122,
    left: 0,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.m3TitleLarge,
    lineHeight: 28,
    fontSize: FontSize.m3TitleLarge_size,
    position: "absolute",
  },
  groupLayout: {
    width: 219,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen_100,
    borderRadius: Border.br_xs,
    left: "50%",
    top: 0,
    height: 53,
    position: "absolute",
  },
  text: {
    zIndex: 0,
  },
  loanAmt: {
    top: 10,
  },
  groupChild: {
    marginLeft: -26,
  },
  loanAmtParent: {
    top: 61,
    width: 386,
    zIndex: 1,
    left: 0,
  },
  totalAmt: {
    top: 13,
    width: 145,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -19.5,
  },
  totalAmtParent: {
    top: 261,
    left: -12,
    width: 399,
    zIndex: 2,
  },
  interestRate: {
    top: 5,
  },
  groupInner: {
    marginLeft: -27.5,
  },
  interestRateParent: {
    top: 157,
    left: 3,
    width: 383,
    height: 61,
    zIndex: 3,
    position: "absolute",
  },
  section4: {
    top: 211,
    left: -15,
    backgroundColor: Color.colorGray_100,
    width: 404,
    height: 427,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Section1;
