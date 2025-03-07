import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const GroupComponent40 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.buttonLayout]}>
      <View style={styles.groupContainer}>
        <View style={styles.of1UpoadedParent}>
          <Text style={[styles.of1Upoaded, styles.of1UpoadedTypo]}>
            1 of 1 upoaded
          </Text>
          <Pressable
            style={[styles.vuesaxlineararrowDown, styles.frameIconPosition]}
            onPress={() => navigation.navigate("Livechat2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowdown.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-65.png")}
          />
        </View>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <View style={[styles.recentBillsFileParent, styles.groupPosition]}>
          <Text style={[styles.recentBillsFile, styles.groupPosition]}>
            Recent Bills file
          </Text>
          <Image
            style={[styles.frameIcon, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/frame7.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Livechat4")}
      >
        <Text style={styles.label}>Send files</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: 342,
    position: "absolute",
  },
  of1UpoadedTypo: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  frameIconPosition: {
    top: 3,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  of1Upoaded: {
    left: 83,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vuesaxlineararrowDown: {
    left: 280,
    width: 24,
    height: 24,
  },
  groupChild: {
    width: 30,
    height: 30,
    top: 0,
  },
  of1UpoadedParent: {
    left: 2,
    width: 304,
    height: 30,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 40,
    height: 125,
    width: 306,
  },
  recentBillsFile: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  frameIcon: {
    left: 281,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  recentBillsFileParent: {
    top: 175,
    height: 30,
    width: 306,
  },
  groupContainer: {
    left: 18,
    height: 205,
    width: 306,
    top: 0,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.heeboRegular,
    color: Color.white,
    textAlign: "center",
  },
  button: {
    marginLeft: -171,
    top: 215,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
  },
  groupParent: {
    top: 24,
    left: 25,
    height: 269,
  },
});

export default GroupComponent40;
