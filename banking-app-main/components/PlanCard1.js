import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PlanCard1 = () => {
  return (
    <View style={[styles.planCard4, styles.planCard4Layout]}>
      <View style={[styles.activeFitPlusParent, styles.planCard4Layout]}>
        <Text style={[styles.activeFitPlus, styles.croreFlexBox]}>
          Active Fit Plus
        </Text>
        <Text style={[styles.view8More, styles.view8MoreTypo]}>
          View 8 more plans
        </Text>
        <Text style={[styles.viewFeatures, styles.view8MoreTypo]}>
          View Features
        </Text>
        <Text style={[styles.coverAmount, styles.crorePosition]}>
          Cover amount
        </Text>
        <Text style={[styles.crore, styles.croreTypo]}>₹1 Crore</Text>
        <Image
          style={styles.image11Icon}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
      </View>
      <View style={[styles.button, styles.crorePosition]}>
        <Text style={[styles.monts, styles.croreTypo]}>₹890/monts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planCard4Layout: {
    height: 109,
    width: 349,
    position: "absolute",
  },
  croreFlexBox: {
    textAlign: "left",
    color: Color.colorGray_700,
    lineHeight: 16,
  },
  view8MoreTypo: {
    color: Color.colorLightslategray_100,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    lineHeight: 16,
    left: 89,
    position: "absolute",
  },
  crorePosition: {
    left: 233,
    position: "absolute",
  },
  croreTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  activeFitPlus: {
    fontSize: FontSize.size_xs_2,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    left: 89,
    color: Color.colorGray_700,
    lineHeight: 16,
    top: 19,
    position: "absolute",
  },
  view8More: {
    top: 42,
  },
  viewFeatures: {
    top: 65,
  },
  coverAmount: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.mobileBody3Regular_size,
    left: 233,
    textAlign: "left",
    color: Color.colorGray_700,
    lineHeight: 16,
    top: 19,
  },
  crore: {
    top: 38,
    left: 233,
    position: "absolute",
    textAlign: "left",
    color: Color.colorGray_700,
    lineHeight: 16,
  },
  image11Icon: {
    left: 11,
    width: 64,
    height: 32,
    top: 19,
    position: "absolute",
  },
  activeFitPlusParent: {
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
    textAlign: "center",
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
  planCard4: {
    top: 517,
    left: 13,
  },
});

export default PlanCard1;
