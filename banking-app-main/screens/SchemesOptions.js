// screens/SchemesOptions.js
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Image } from "expo-image";
import {
  Color,
  Border,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export default function SchemesOptions() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Select a Scheme</Text> */}

      <Pressable
        style={styles.option}
        onPress={() => navigation.navigate("FixedDepositScheme")}
      >
        <Text style={styles.optionText}>Fixed Deposit Scheme</Text>
      </Pressable>

      <Pressable
        style={styles.option}
        onPress={() => navigation.navigate("PPFScheme")}
      >
        <Text style={styles.optionText}>Public Provident Fund (PPF)</Text>
      </Pressable>

      <Pressable
        style={styles.option}
        onPress={() => navigation.navigate("SukanyaSamriddhi")}
      >
        <Text style={styles.optionText}>Sukanya Samriddhi Yojana</Text>
      </Pressable>

      <Pressable
        style={styles.option}
        onPress={() => navigation.navigate("SeniorCitizenSavingsScheme")}
      >
        <Text style={styles.optionText}>Senior Citizen Savings Scheme</Text>
      </Pressable>

      <Pressable
        style={styles.option}
        onPress={() => navigation.navigate("AtalPensionYojana")}
      >
        <Text style={styles.optionText}>Atal Pension Yojana</Text>
      </Pressable>

      
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
      <Text style={styles.insurance}>Select a Scheme</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  option: {
    padding: 15,
    backgroundColor: "#e0a340",
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
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
  insurance: {
    height: "6.84%",
    width: "75.28%",
    top: "6%",
    left: "32.27%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "left",
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
    maxWidth: "130%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "89%",
    width: "78%",
    top:23,
  },  
});
