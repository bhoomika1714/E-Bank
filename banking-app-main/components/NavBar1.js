import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const NavBar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("RoomSettings1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628270.png")}
          />
        </Pressable>
        <View style={[styles.vectorParent, styles.titleFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-64.png")}
          />
          <Text style={[styles.middleTitletext, styles.today1Typo]}>
            June 2023
          </Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-51.png")}
          />
        </View>
        <View style={styles.today}>
          <Text style={[styles.today1, styles.today1Typo]}>Today</Text>
        </View>
      </View>
      <View style={styles.navbarChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  today1Typo: {
    textAlign: "center",
    color: Color.textBigTitle,
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  frameChild: {
    width: 6,
    height: 12,
  },
  middleTitletext: {
    fontSize: FontSize.font_size,
  },
  vectorParent: {
    gap: Gap.gap_8xs,
    justifyContent: "center",
  },
  today1: {
    marginTop: -10,
    marginLeft: -21,
    top: "50%",
    fontSize: FontSize.m3LabelLarge_size,
    left: "50%",
    position: "absolute",
    color: Color.textBigTitle,
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  today: {
    borderRadius: Border.br_xl,
    width: 60,
    height: 24,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    backgroundColor: Color.white,
    paddingLeft: Padding.p_9xl,
    paddingRight: Padding.p_base,
    gap: Gap.gap_4xl,
    alignSelf: "stretch",
  },
  navbarChild: {
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  navbar: {
    marginLeft: -187.5,
    top: 41,
    width: 375,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
});

export default NavBar1;
