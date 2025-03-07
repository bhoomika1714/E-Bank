import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Gap, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({ propFontFamily, propFontFamily1 }) => {
  const nameStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontFamily]);

  const iD0001Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily1),
    };
  }, [propFontFamily1]);

  return (
    <View style={styles.emptyFriendlistInner}>
      <View style={styles.avatarParent}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={styles.name}>
          <Text style={[styles.name1, styles.name1Typo, nameStyle]}>Name</Text>
          <Text style={[styles.id0001, styles.name1Typo, iD0001Style]}>
            ID #0001
          </Text>
        </View>
        <Image
          style={styles.materialSymbolseditIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolsedit.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  avatarIcon: {
    width: 80,
    height: 80,
    zIndex: 0,
  },
  name1: {
    fontSize: FontSize.size_5xl,
    color: Color.textBigTitle,
  },
  id0001: {
    fontSize: FontSize.font_size,
    color: Color.textDescription,
  },
  name: {
    flex: 1,
    gap: Gap.gap_17xs,
    zIndex: 1,
  },
  materialSymbolseditIcon: {
    top: 60,
    left: 56,
    borderRadius: Border.br_xl,
    width: 24,
    height: 24,
    overflow: "hidden",
    zIndex: 2,
    position: "absolute",
  },
  avatarParent: {
    width: 197,
    alignItems: "center",
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  emptyFriendlistInner: {
    marginLeft: -98,
    top: 68,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
});

export default FrameComponent2;
