import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import GroupComponent from "./GroupComponent";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent25 = () => {
  return (
    <View style={styles.groupParent}>
      <GroupComponent benzCL250="Benz CL250" carName="Car Name" />
      <GroupComponent
        propTop="27.38%"
        propBottom="51.3%"
        benzCL250="KSF102HS07"
        carName="Number Plate"
      />
      <View style={styles.rectangleParent}>
        <View style={styles.rectanglePosition}>
          <View style={styles.rectangle1} />
        </View>
        <View style={styles.typeHere}>
          <Text style={[styles.january1890, styles.january1890Position]}>
            25 - January - 1890
          </Text>
        </View>
        <Text style={[styles.dateOfPurchase, styles.january1890Position]}>
          Date of Purchase
        </Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangle2, styles.rectanglePosition]}>
          <View style={styles.rectangle1} />
        </View>
        <View style={styles.typeHere}>
          <Text style={[styles.january1890, styles.january1890Position]}>
            25 - January - 1890
          </Text>
        </View>
        <Text style={[styles.dateOfPurchase, styles.january1890Position]}>
          Date of Purchase
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  january1890Position: {
    textAlign: "left",
    color: Color.gray3,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 45,
    top: 29,
    width: 327,
    left: 0,
    position: "absolute",
  },
  rectangle1: {
    height: "100%",
    width: "100%",
    right: "0%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray4,
    borderWidth: 1,
    left: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  january1890: {
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.mobileBody3Regular,
  },
  typeHere: {
    top: 41,
    left: 12,
    width: 116,
    height: 21,
    position: "absolute",
  },
  dateOfPurchase: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  rectangleParent: {
    top: 190,
    height: 74,
    width: 327,
    left: 0,
    position: "absolute",
  },
  rectangle2: {
    display: "none",
  },
  rectangleGroup: {
    top: 285,
    width: 128,
    height: 62,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    height: "65.97%",
    width: "70.32%",
    top: "34.03%",
    right: "18.28%",
    left: "11.4%",
    bottom: "0%",
    position: "absolute",
  },
});

export default GroupComponent25;
