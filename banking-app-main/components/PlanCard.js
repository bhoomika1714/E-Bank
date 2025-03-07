import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const PlanCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.planCard1, styles.planCard1Layout]}
      onPress={() => navigation.navigate("CarePolicy")}
    >
      <View style={[styles.careSupremeParent, styles.planCard1Layout]}>
        <Text style={styles.careSupreme}>Care Supreme</Text>
        <Text style={[styles.view12More, styles.view12MoreTypo]}>
          View 12 more plans
        </Text>
        <Text style={[styles.viewFeatures, styles.view12MoreTypo]}>
          View Features
        </Text>
        <Text style={[styles.coverAmount, styles.lakhsTypo]}>Cover amount</Text>
        <Text style={[styles.lakhs, styles.lakhsTypo]}>₹5 Lakhs</Text>
      </View>
      <View style={[styles.button, styles.lakhsPosition]}>
        <Text style={[styles.monts, styles.lakhsTypo]}>₹593/monts</Text>
      </View>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  planCard1Layout: {
    height: 109,
    width: 349,
    position: "absolute",
  },
  view12MoreTypo: {
    color: Color.colorLightslategray_100,
    textDecoration: "underline",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 16,
    position: "absolute",
  },
  lakhsTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  lakhsPosition: {
    left: 233,
    position: "absolute",
  },
  careSupreme: {
    fontSize: FontSize.size_xs_2,
    textAlign: "center",
    color: Color.colorGray_700,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 16,
    left: 89,
    top: 19,
    position: "absolute",
  },
  view12More: {
    top: 43,
    left: 89,
    color: Color.colorLightslategray_100,
    textDecoration: "underline",
    fontSize: FontSize.size_2xs,
  },
  viewFeatures: {
    top: 65,
    left: 92,
  },
  coverAmount: {
    left: 233,
    position: "absolute",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.colorGray_700,
    lineHeight: 16,
    top: 19,
  },
  lakhs: {
    top: 38,
    left: 233,
    position: "absolute",
    color: Color.colorGray_700,
    lineHeight: 16,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  careSupremeParent: {
    top: 0,
    left: 0,
    shadowColor: "rgba(85, 85, 85, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_400,
    overflow: "hidden",
  },
  monts: {
    lineHeight: 18,
    color: Color.white,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  button: {
    top: 64,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 26,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    overflow: "hidden",
  },
  image2Icon: {
    left: 14,
    width: 59,
    height: 42,
    top: 19,
    position: "absolute",
  },
  planCard1: {
    top: 158,
    left: 13,
  },
});

export default PlanCard;
