import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent36 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.total, styles.totalTypo]}>TOTAL</Text>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupChildBorder]} />
        <View style={[styles.groupInner, styles.groupChildPosition1]} />
        <View style={[styles.rectangleView, styles.groupChildPosition1]} />
        <View style={[styles.groupChild1, styles.groupChildPosition1]} />
        <View style={[styles.groupChild2, styles.groupChildPosition1]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupChildBorder]} />
        <View style={[styles.groupInner, styles.groupChildPosition1]} />
        <View style={[styles.rectangleView, styles.groupChildPosition1]} />
        <View style={[styles.groupChild1, styles.groupChildPosition1]} />
        <View style={[styles.groupChild2, styles.groupChildPosition1]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupChildBorder]} />
          <View style={[styles.groupInner, styles.groupChildPosition1]} />
          <View style={[styles.rectangleView, styles.groupChildPosition1]} />
          <View style={[styles.groupChild1, styles.groupChildPosition1]} />
          <View style={[styles.groupChild2, styles.groupChildPosition1]} />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <View style={[styles.groupChild4, styles.groupChildPosition]} />
        </View>
      </View>
      <View style={[styles.groupChild19, styles.groupChildBorder]} />
      <Text style={[styles.slNo, styles.slNoTypo]}>SL No.</Text>
      <Text style={[styles.itemDiscription, styles.slNoTypo]}>
        Item Discription
      </Text>
      <Text style={[styles.quantity, styles.slNoTypo]}>Quantity</Text>
      <Text style={[styles.rate, styles.slNoTypo]}>₹ Rate</Text>
      <Text style={[styles.taxableValue, styles.slNoTypo]}>
        ₹ Taxable Value.
      </Text>
      <Text style={[styles.amount, styles.slNoTypo]}>₹ Amount</Text>
      <View style={[styles.groupChild20, styles.groupChildLayout]} />
      <View style={[styles.groupChild21, styles.groupChildLayout]} />
      <Text style={[styles.documentType, styles.totalTypo]}>Document Type</Text>
      <Image
        style={styles.qrcode11}
        contentFit="cover"
        source={require("../assets/qrcode-1-1.png")}
      />
      <View style={[styles.groupChild22, styles.groupChildBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 12,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  totalTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupPosition: {
    width: 316,
    left: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 9,
    height: 12,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  groupChildPosition: {
    top: 10,
    height: 12,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  slNoTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    top: 281,
    left: 248,
    width: 72,
  },
  total: {
    top: 276,
    left: 171,
    fontSize: FontSize.font_size,
  },
  groupItem: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    width: 316,
    top: 0,
    height: 32,
  },
  groupInner: {
    left: 14,
    width: 10,
  },
  rectangleView: {
    left: 42,
    width: 79,
  },
  groupChild1: {
    left: 139,
    width: 14,
  },
  groupChild2: {
    left: 164,
    width: 32,
  },
  groupChild3: {
    left: 229,
    width: 19,
  },
  groupChild4: {
    left: 280,
    width: 33,
  },
  rectangleGroup: {
    top: 162,
    height: 32,
  },
  groupView: {
    top: 32,
    height: 32,
  },
  rectangleContainer: {
    top: 194,
    height: 64,
  },
  groupChild19: {
    top: 137,
    height: 25,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    width: 316,
  },
  slNo: {
    left: 7,
    top: 144,
    fontSize: FontSize.size_5xs,
  },
  itemDiscription: {
    left: 45,
    top: 144,
    fontSize: FontSize.size_5xs,
  },
  quantity: {
    top: 145,
    left: 120,
    width: 34,
  },
  rate: {
    left: 167,
    width: 27,
    top: 144,
    fontSize: FontSize.size_5xs,
  },
  taxableValue: {
    left: 207,
    top: 144,
    fontSize: FontSize.size_5xs,
  },
  amount: {
    left: 276,
    top: 144,
    fontSize: FontSize.size_5xs,
  },
  groupChild20: {
    top: 65,
    width: 115,
    left: 7,
  },
  groupChild21: {
    top: 36,
    width: 92,
    left: 7,
  },
  documentType: {
    top: 3,
    fontSize: FontSize.mobileBody3Regular_size,
    left: 7,
  },
  qrcode11: {
    top: 11,
    left: 168,
    width: 108,
    height: 108,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild22: {
    width: 283,
    height: 119,
    top: 0,
  },
  rectangleParent: {
    top: 131,
    left: 29,
    width: 320,
    height: 298,
    position: "absolute",
  },
});

export default GroupComponent36;
