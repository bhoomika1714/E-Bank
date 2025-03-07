import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent10 from "../components/FrameComponent10";
import { useNavigation } from "@react-navigation/native";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent11 from "../components/FrameComponent11";
import NavBar2 from "../components/NavBar2";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const ActivityGraph = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activitygraph}>
      <View style={styles.uilchartPie} />
      <FrameComponent10 />
      <View style={styles.togglebar}>
        <View style={styles.togglebutton4optWrapper}>
          <View style={styles.togglebutton4opt}>
            <View style={[styles.balanceWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.balance, styles.timeTypo]}>Balance</Text>
            </View>
            <Pressable
              style={[styles.categoryWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("TargetDay")}
            >
              <Text style={[styles.balance, styles.timeTypo]}>Category</Text>
            </Pressable>
            <Pressable
              style={[styles.membersWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("RoomSettings1")}
            >
              <Text style={[styles.balance, styles.timeTypo]}>Members</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.graphExpense}>
        <View style={[styles.graphExpenseInner, styles.wrapperFlexBox]}>
          <FrameComponent9 />
        </View>
      </View>
      <FrameComponent11 />
      <View style={styles.statusBarwhite}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      </View>
      <NavBar2 />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  uilchartPie: {
    top: 41,
    left: 366,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  balance: {
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.font,
    color: Color.textBigTitle,
  },
  balanceWrapper: {
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_11xl,
    paddingVertical: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  categoryWrapper: {
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_11xl,
    paddingVertical: 0,
    overflow: "hidden",
  },
  membersWrapper: {
    shadowColor: "#ce735f",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_11xl,
    paddingVertical: 0,
    overflow: "hidden",
  },
  togglebutton4opt: {
    marginLeft: -138.5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  togglebutton4optWrapper: {
    marginTop: -17,
    marginLeft: -178.5,
    width: 358,
    height: 28,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  togglebar: {
    top: 125,
    right: 16,
    left: 16,
    height: 32,
    position: "absolute",
  },
  graphExpenseInner: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
  graphExpense: {
    top: 177,
    right: 63,
    left: 63,
    height: 218,
    position: "absolute",
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    top: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  statusBarwhite: {
    left: 0,
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    top: 0,
    position: "absolute",
  },
  activitygraph: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ActivityGraph;
