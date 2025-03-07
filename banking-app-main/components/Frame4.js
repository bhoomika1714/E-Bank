import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import GroupComponent18 from "./GroupComponent18";
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.lastTransaction, styles.appleStorePosition]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.text1Typo}>-</Text>
            <Text style={styles.text2}>{`₹ `}</Text>
            <Text style={styles.text1Typo}>5,99</Text>
          </Text>
          <View style={[styles.appleStoreParent, styles.appleLayout]}>
            <Text style={[styles.appleStore, styles.appleLayout]}>
              Electricity bill
            </Text>
            <Text style={styles.entertainment}>Bills</Text>
          </View>
          <View style={[styles.groupChild, styles.appleStorePosition]} />
        </View>
        <GroupComponent18
          prop="₹ "
          prop1="12,99"
          spotify="Spotify"
          music="Music"
          group32={require("../assets/group-32.png")}
        />
        <GroupComponent18
          propLeft={286}
          propWidth={49}
          prop="₹"
          prop1=" 88"
          propWidth1={64}
          spotify="Grocery"
          propWidth2={64}
          music="Shopping"
          propWidth3={58}
          group32={require("../assets/group-31.png")}
        />
      </View>
      <Image
        style={[styles.tablerbulbFilledIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/tablerbulbfilled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  appleStorePosition: {
    top: 0,
    left: 0,
  },
  textTypo: {
    color: Color.colorGray_600,
    lineHeight: 16,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
  },
  appleLayout: {
    width: 122,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  text: {
    top: 12,
    left: 276,
    width: 59,
    height: 18,
    textAlign: "left",
    position: "absolute",
  },
  appleStore: {
    height: 19,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_600,
    lineHeight: 16,
    fontSize: FontSize.m3TitleMedium_size,
    left: 0,
    top: 0,
  },
  entertainment: {
    top: 24,
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 12,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 86,
    height: 14,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  appleStoreParent: {
    top: 2,
    left: 58,
    height: 38,
  },
  groupChild: {
    borderRadius: 25,
    backgroundColor: Color.colorWhitesmoke_800,
    width: 42,
    height: 42,
    left: 0,
    position: "absolute",
  },
  parent: {
    height: 42,
    width: 335,
  },
  lastTransaction: {
    alignItems: "center",
    gap: Gap.gap_md,
    left: 0,
    height: 170,
    width: 335,
    position: "absolute",
  },
  tablerbulbFilledIcon: {
    top: 6,
    left: 7,
    width: 24,
    height: 24,
  },
  frame: {
    top: 357,
    left: 20,
    height: 170,
    width: 335,
  },
});

export default Frame4;
