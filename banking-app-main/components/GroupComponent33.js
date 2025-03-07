import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import {
  Color,
  Border,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const GroupComponent33 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Row Icons */}
      <View style={styles.row}>
        {/* Education Loan */}
        <Pressable
          onPress={() => navigation.navigate("EducationLoanForm")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/EducationLoanIcon.png")}
          />
          <Text style={styles.label}>Education Loan</Text>
        </Pressable>

        {/* Vehicle Loan */}
        <Pressable
          onPress={() => navigation.navigate("VehicleLoanForm")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/VehicleLoanIcon.png")}
          />
          <Text style={styles.label}>Vehicle Loan</Text>
        </Pressable>
      </View>

      {/* Bottom Row Icons */}
      <View style={styles.row}>
        {/* Loan Calculator */}
        <Pressable
          onPress={() => navigation.navigate("LoanCalculator")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/LoanCalculatorIcon.png")}
          />
          <Text style={styles.label}>Loan Calculator</Text>
        </Pressable>

        {/* Home Loan */}
        <Pressable
          onPress={() => navigation.navigate("HomeLoanForm")}
          style={styles.iconContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/HomeLoanIcon.png")}
          />
          <Text style={styles.label}>Home Loan</Text>
        </Pressable>
      </View>

      
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
      <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={450}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
      </View>
      <Text style={styles.Headtext}>Loans</Text>
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",  
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 30,    
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  statusBarParent: {
    top: 0,
    width: 600,
    height: 100,
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  Headtext: {
    height: "6.84%",
    width: "75.28%",
    top: "6%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },  
  container1: {
    left: "10.27%",
    top: "3.06%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.69%",
    height: "4.15%",
    position: "absolute",
  },
  icon2: {
    maxHeight: "135%",
    maxWidth: "135%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "92%",
    width: "78%",
    top:23,
  },  
});

export default GroupComponent33;
