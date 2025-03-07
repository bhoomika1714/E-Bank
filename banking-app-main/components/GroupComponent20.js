import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent20 = ({ propTop }) => {
  const groupView7Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.groupParent, groupView7Style]}>
      <View style={[styles.groupContainer, styles.groupContainerPosition]}>
        <View
          style={[
            styles.brokenWindshieldSideMirroParent,
            styles.groupContainerPosition,
          ]}
        >
          <Text
            style={styles.brokenWindshield}
          >{`Broken Windshield & Side Mirror`}</Text>
          <Text style={[styles.la0029030117, styles.la0029030117Typo]}>
            LA0029030117
          </Text>
          <View style={styles.lagosIslandEastParent}>
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
          style={[styles.iconoutlinecheveronRight, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/iconoutlinecheveronright.png")}
        />
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-3005.png")}
        />
      </View>
      <Image
        style={[styles.groupItem, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/vector-62.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainerPosition: {
    height: 45,
    top: 0,
    position: "absolute",
  },
  la0029030117Typo: {
    color: Color.gray3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  groupItemLayout: {
    maxHeight: "100%",
    position: "absolute",
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
    left: 0,
    position: "absolute",
  },
  brokenWindshieldSideMirroParent: {
    left: 51,
    width: 216,
  },
  iconoutlinecheveronRight: {
    height: "40%",
    width: "5.9%",
    top: "31.11%",
    right: "0%",
    bottom: "28.89%",
    left: "94.1%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    top: 2,
    width: 41,
    height: 41,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 0,
    width: 305,
  },
  groupItem: {
    top: 54,
    left: 2,
    width: 302,
  },
  groupParent: {
    top: 16,
    left: 12,
    height: 54,
    width: 305,
    position: "absolute",
  },
});

export default GroupComponent20;
