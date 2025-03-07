import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ModalDatePicker from "../components/ModalDatePicker";
import { useNavigation } from "@react-navigation/native";
import FrameComponent7 from "../components/FrameComponent7";
import NavBar1 from "../components/NavBar1";
import HomeIndicator from "../components/HomeIndicator";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TargetDay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.targetDay}>
      <View style={styles.uilchartPie} />
      <ModalDatePicker
        headline="Mon, Aug 17"
        showClearButton={false}
        supportingText="Select date"
      />
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("ActivityGraph")}
      >
        <View style={[styles.totalParent, styles.parentBorder]}>
          <Text style={[styles.total, styles.textTypo]}>Total</Text>
          <Text style={[styles.text, styles.textTypo]}>+ 2000</Text>
        </View>
        <View style={[styles.expenseParent, styles.parentBorder]}>
          <Text style={[styles.total, styles.textTypo]}>Expense</Text>
          <Text style={[styles.text, styles.textTypo]}>－1500</Text>
        </View>
        <View style={[styles.balanceParent, styles.parentBorder]}>
          <Text style={[styles.total, styles.textTypo]}>Balance</Text>
          <Text style={[styles.text, styles.textTypo]}>+ 500</Text>
        </View>
      </Pressable>
      <FrameComponent7 />
      <NavBar1 />
      <View style={styles.statusBarwhite}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <HomeIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  parentBorder: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    width: 105,
    borderWidth: 1,
    borderColor: Color.textBigTitle,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    textAlign: "left",
    color: Color.textBigTitle,
    fontFamily: FontFamily.font,
    fontWeight: "700",
  },
  uilchartPie: {
    top: 41,
    left: 366,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  total: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  text: {
    fontSize: FontSize.font_size,
  },
  totalParent: {
    left: 0,
  },
  expenseParent: {
    left: 111,
  },
  balanceParent: {
    left: 221,
  },
  frameParent: {
    marginLeft: -157.5,
    top: 628,
    left: "50%",
    width: 326,
    height: 54,
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
    top: "50%",
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  targetDay: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
  },
});

export default TargetDay;
