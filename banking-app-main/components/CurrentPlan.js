import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const CurrentPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.currentPlan, styles.currentPosition]}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("SavingPlan")}>
          <Image style={styles.icon} source={require("../assets/group-1272628274.png")} />
        </Pressable>

        {/* Header Title */}
        <Text style={styles.headerText}>Current Plan</Text>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <View style={styles.lineParent}>
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
        </View>
        <Text style={[styles.greatTodayIsContainer, styles.containerClr]}>
          <Text style={styles.currentPlan1}>Great!</Text>
        </Text>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerClr: {
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
  },
  linePosition: {
    left: 50,
    position: "absolute",
  },
  currentPlanChild: {
    top: 258,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderTopWidth: 1,
    width: 341,
    height: 1,
    left: 0,
    position: "absolute",
  },
  currentPlan1: {
    fontSize: FontSize.size_xl,
    top: 10,
  },
  lineParent: {
    top: -37,
    width: 284,
    height: 190,
    gap: Gap.gap_13xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    left:-68,
  },
  frameChild: {
    borderStyle: "dashed",
    borderColor: Color.colorGray_2000,
    borderRadius: 0.001,
    borderRightWidth: 0.5,
    width: 1,
    height: 131,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 50, // Adjust this value as needed
  },
  greatTodayIsContainer: {
    textAlign: "center",
    left:40,
    width: 300,
    position: "absolute",
  },
  lineIcon: {
    top:-162,
    left:-205,
    marginTop: 20, // Add spacing above the graph
    width: 10, // Adjust width to fit your design
    height: 50, // Adjust height to fit your design
    alignSelf: "center", // Center the graph image
  },
  headerBar: {
    width: "100%",
    height: 80,
    backgroundColor: Color.colorGoldenrod_100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    left:-20,
    paddingTop: 30, // Adjust for status bar if needed
  },
  backButton: {
    width: 40,
    height: 40,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    left:-50,
    flex: 1,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    marginLeft: -40, // Adjust to center the text when there's a back button
  },
  currentPlan: {
    top: 0,
    width: 500,
    height: 395,
    left: 0,
  },
});

export default CurrentPlan;

