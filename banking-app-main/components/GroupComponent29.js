import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent20 from "./GroupComponent20";
import { Color, FontSize, Border, FontFamily, Gap } from "../GlobalStyles";

const GroupComponent29 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <GroupComponent20 />
      <GroupComponent20 propTop={78} />
      <View style={styles.groupParent}>
        <View style={styles.brokenWindshieldSideMirroParent}>
          <Text
            style={styles.brokenWindshield}
          >{`Broken Windshield & Side Mirror`}</Text>
          <Text style={[styles.la0029030117, styles.la0029030117Typo]}>
            LA0029030117
          </Text>
          <View
            style={[styles.lagosIslandEastParent, styles.groupItemPosition]}
          >
            <Text style={[styles.lagosIslandEast, styles.la0029030117Typo]}>
              Lagos Island East
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-61.png")}
            />
            <Text style={[styles.lagosIslandEast, styles.la0029030117Typo]}>
              02 Jan, 2022
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-61.png")}
            />
            <Text style={[styles.lagosIslandEast, styles.la0029030117Typo]}>
              16:44pm
            </Text>
          </View>
        </View>
        <Image
          style={[styles.iconoutlinecheveronRight, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/iconoutlinecheveronright.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/group-3005.png")}
        />
      </View>
      <View style={styles.groupInner} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    right: "0%",
    position: "absolute",
  },
  la0029030117Typo: {
    color: Color.gray3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  groupItemPosition: {
    left: 0,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_900,
    borderWidth: 1,
  },
  brokenWindshield: {
    top: 12,
    fontSize: FontSize.size_smi,
    color: Color.text,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  la0029030117: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.gray3,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lagosIslandEast: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLightItalic,
    opacity: 0.75,
  },
  frameChild: {
    width: 0,
    height: 12,
  },
  lagosIslandEastParent: {
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_15xs,
  },
  brokenWindshieldSideMirroParent: {
    left: 51,
    width: 216,
    top: 0,
    height: 45,
    position: "absolute",
  },
  iconoutlinecheveronRight: {
    height: "40%",
    width: "5.9%",
    top: "31.11%",
    bottom: "28.89%",
    left: "94.1%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupItem: {
    top: 2,
    width: 41,
    height: 41,
  },
  groupParent: {
    top: 140,
    left: 12,
    width: 305,
    height: 45,
    position: "absolute",
  },
  groupInner: {
    top: 209,
    left: 109,
    backgroundColor: Color.colorGray_100,
    width: 95,
    height: 97,
    position: "absolute",
  },
  rectangleParent: {
    height: "38.79%",
    width: "90.67%",
    top: "61.33%",
    right: "2.93%",
    bottom: "-0.12%",
    left: "6.4%",
    position: "absolute",
  },
});

export default GroupComponent29;
