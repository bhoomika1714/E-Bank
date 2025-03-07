import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent35 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <Pressable
        style={[styles.wrapper, styles.groupChildLayout1]}
        onPress={() => navigation.navigate("ChildScheme")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-791.png")}
        />
      </Pressable>
      <Text style={[styles.childScheme, styles.dpsTypo]}>Child Scheme</Text>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-82.png")}
      />
      <Text style={[styles.microScheme, styles.pensionTypo]}>Micro Scheme</Text>
      <Image
        style={[styles.groupItem, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-831.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-87.png")}
      />
      <Text style={[styles.onlineTerm, styles.pensionTypo]}>Online Term</Text>
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-84.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/group-86.png")}
      />
      <Text
        style={[styles.savingsProfits, styles.savingsProfitsTypo]}
      >{`Savings & Profits `}</Text>
      <Image
        style={[styles.groupChild2, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/group-85.png")}
      />
      <Image
        style={[styles.groupChild3, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-802.png")}
      />
      <Text style={[styles.pension, styles.pensionTypo]}>Pension</Text>
      <Image
        style={[styles.groupChild4, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-81.png")}
      />
      <Text style={[styles.ritualScheme, styles.schemeTypo]}>
        Ritual Scheme
      </Text>
      <Text style={[styles.pensionScheme, styles.schemeTypo]}>
        Pension Scheme
      </Text>
      <Text style={[styles.dps, styles.dpsTypo]}>DPS</Text>
      <Text style={[styles.guaranteedBonus, styles.savingsProfitsTypo]}>
        Guaranteed Bonus
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  dpsTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    top: "21.61%",
    height: "6.66%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "48.03%",
    top: "34.45%",
  },
  pensionTypo: {
    top: "56.06%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    height: "6.66%",
    position: "absolute",
  },
  groupChildLayout: {
    left: "40.29%",
    right: "42.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  groupLayout: {
    left: "75.07%",
    right: "7.54%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "10.36%",
    top: "72.12%",
  },
  savingsProfitsTypo: {
    textAlign: "center",
    width: "29.28%",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  schemeTypo: {
    width: "28.99%",
    textAlign: "center",
    top: "93.72%",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    bottom: "82.48%",
    top: "0%",
    right: "77.1%",
    left: "5.51%",
    width: "17.39%",
  },
  childScheme: {
    width: "29.88%",
    left: "1.45%",
  },
  groupChild: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
    right: "77.1%",
    left: "5.51%",
  },
  microScheme: {
    width: "31.1%",
    left: "1.45%",
  },
  groupItem: {
    bottom: "48.03%",
    top: "34.45%",
  },
  groupInner: {
    bottom: "10.36%",
    top: "72.12%",
  },
  onlineTerm: {
    width: "26.26%",
    left: "38.55%",
  },
  groupIcon: {
    top: "35.91%",
    right: "6.87%",
    bottom: "46.57%",
    left: "75.74%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  groupChild1: {
    left: "40.29%",
    right: "42.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  savingsProfits: {
    left: "69.86%",
    top: "93.72%",
    textAlign: "center",
    width: "29.28%",
    height: "5.55%",
  },
  groupChild2: {
    right: "77.97%",
    left: "4.64%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "17.52%",
    width: "17.39%",
    position: "absolute",
  },
  groupChild3: {
    bottom: "82.48%",
    top: "0%",
  },
  pension: {
    width: "17.51%",
    left: "76.81%",
  },
  groupChild4: {
    bottom: "82.48%",
    top: "0%",
  },
  ritualScheme: {
    height: "6.28%",
    left: "34.49%",
  },
  pensionScheme: {
    left: "0%",
    height: "5.55%",
    width: "28.99%",
  },
  dps: {
    width: "9.36%",
    left: "44.35%",
  },
  guaranteedBonus: {
    height: "4.82%",
    left: "70.72%",
    textAlign: "center",
    width: "29.28%",
    top: "21.61%",
  },
  groupParent: {
    height: "42.18%",
    width: "92%",
    top: "46.18%",
    right: "3.73%",
    bottom: "11.64%",
    left: "4.27%",
    position: "absolute",
  },
});

export default GroupComponent35;
