import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const GroupComponent28 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.parentPosition]}>
      <View style={[styles.yourInsuredVehiclesParent, styles.parentFlexBox]}>
        <Text style={[styles.yourInsuredVehicles, styles.toyotaYarisFlexBox]}>
          Your Insured Vehicles
        </Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={[styles.groupParent, styles.parentFlexBox]}>
        <View style={styles.categoryBgSelectedParent}>
          <View style={[styles.categoryBgSelected, styles.categoryShadowBox]} />
          <Text style={[styles.toyotaYaris, styles.toyotaYarisTypo]}>
            Toyota Yaris
          </Text>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <Pressable
          style={styles.categoryBgSelectedParent}
          onPress={() => navigation.navigate("InsurancePlan")}
        >
          <View
            style={[styles.categoryBgSelected1, styles.categoryShadowBox]}
          />
          <Text style={[styles.addNewVehicle, styles.toyotaYarisTypo]}>
            Add New Vehicle
          </Text>
          <Image
            style={styles.iconoutlineplus}
            contentFit="cover"
            source={require("../assets/iconoutlineplus1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 371,
    left: 0,
    top: 0,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  toyotaYarisFlexBox: {
    textAlign: "left",
    color: Color.text,
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
  toyotaYarisTypo: {
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  yourInsuredVehicles: {
    fontSize: FontSize.m3TitleMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  seeAll: {
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorPeru_200,
    textAlign: "right",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  yourInsuredVehiclesParent: {
    top: 266,
    left: 29,
    width: 325,
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_16xl,
  },
  categoryBgSelected: {
    backgroundColor: Color.white,
  },
  toyotaYaris: {
    top: 85,
    left: 23,
    textAlign: "left",
    color: Color.text,
  },
  image6Icon: {
    top: 20,
    left: 8,
    width: 104,
    height: 60,
    position: "absolute",
  },
  categoryBgSelectedParent: {
    height: 123,
    width: 120,
  },
  categoryBgSelected1: {
    backgroundColor: Color.colorGoldenrod_100,
    opacity: 0.1,
  },
  addNewVehicle: {
    top: 76,
    left: 10,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
  },
  iconoutlineplus: {
    top: 32,
    left: 42,
    width: 36,
    height: 36,
    overflow: "hidden",
    position: "absolute",
  },
  groupParent: {
    height: 156,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_9xl,
    width: 371,
    left: 0,
    top: 0,
  },
  frameParent: {
    height: 290,
    position: "absolute",
  },
});

export default GroupComponent28;
