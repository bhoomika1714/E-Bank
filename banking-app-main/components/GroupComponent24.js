import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent24 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.vehicleInformationWrapper}>
        <Text style={styles.vehicleInformation}>Vehicle Information</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.categoryBgSelectedParent, styles.categoryLayout]}>
          <View style={[styles.categoryBgSelected, styles.categoryShadowBox]} />
          <Text style={[styles.benzCl250, styles.textTypo]}>Benz CL250</Text>
          <Text style={[styles.text, styles.textTypo]}>2017</Text>
          <Image
            style={styles.image7Icon}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
        </View>
        <View style={[styles.categoryBgSelectedGroup, styles.categoryLayout]}>
          <View
            style={[styles.categoryBgSelected1, styles.categoryShadowBox]}
          />
          <Text style={[styles.addNewCar, styles.textTypo]}>Add New Car</Text>
          <Image
            style={styles.iconoutlineplus}
            contentFit="cover"
            source={require("../assets/iconoutlineplus1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryLayout: {
    height: 123,
    width: 120,
    top: 16,
    position: "absolute",
  },
  categoryShadowBox: {
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(17, 17, 17, 0.04)",
    height: 123,
    width: 120,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  vehicleInformation: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.text,
  },
  vehicleInformationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left: 21,
    top: 0,
    position: "absolute",
  },
  categoryBgSelected: {
    backgroundColor: Color.white,
  },
  benzCl250: {
    top: 70,
    left: 26,
    fontFamily: FontFamily.mobileBody3Regular,
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.text,
  },
  text: {
    top: 91,
    left: 47,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.gray4,
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  image7Icon: {
    top: 12,
    left: 1,
    width: 117,
    height: 56,
    position: "absolute",
  },
  categoryBgSelectedParent: {
    left: 24,
  },
  categoryBgSelected1: {
    backgroundColor: Color.secondary,
    opacity: 0.1,
  },
  addNewCar: {
    top: 76,
    color: Color.secondary,
    fontFamily: FontFamily.mobileBody3Regular,
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
    left: 21,
  },
  iconoutlineplus: {
    top: 32,
    left: 42,
    width: 36,
    height: 36,
    overflow: "hidden",
    position: "absolute",
  },
  categoryBgSelectedGroup: {
    left: 185,
  },
  groupParent: {
    top: 23,
    height: 156,
    left: 0,
    width: 371,
    position: "absolute",
  },
  frameParent: {
    left: 28,
    height: 179,
    width: 371,
    top: 0,
    position: "absolute",
  },
});

export default GroupComponent24;
