import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1"; // Assuming StatusBar1 is a component you have
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const SukanyaSamriddhi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={450}
        statusBarHeight={95}
        statusBarTop={0.5}
        statusBarLeft={0.5}
        statusBarBackgroundColor="#e0a340" // Different color for this scheme
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

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eligibility</Text>
          <Text style={styles.text}>
            - Available to parents/guardians of a girl child.
          </Text>
          <Text style={styles.text}>
            - The account can be opened in the name of a girl child below 10 years of age.
          </Text>
          <Text style={styles.text}>
            - Only one account can be opened per girl child.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.text}>
            - Minimum deposit: ₹250 per year; maximum: ₹1.5 lakh per year.
          </Text>
          <Text style={styles.text}>
            - Tenure: 21 years from the date of opening the account.
          </Text>
          <Text style={styles.text}>
            - Current interest rate: 7.6% per annum (subject to revision).
          </Text>
        </View>

        <Pressable
          style={styles.applyButton}
          onPress={() => navigation.navigate("ApplyScheme")}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </Pressable>
      </ScrollView>

      {/* Sukanya Samriddhi Yojana Text */}
      <Text style={styles.insurance}>Sukanya Samriddhi Yojana</Text>

      {/* Back Icon */}
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("SchemesOptions")}
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
    backgroundColor: "#f7f7f7",
  },
  scrollView: {
    flex: 1,
    paddingTop: 120, // Added padding to ensure content starts below the status bar
    paddingHorizontal: 30,
  },
  section: { marginBottom: 30 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  text: { fontSize: 16, color: "#555", marginBottom: 8, lineHeight: 24 },
  applyButton: {
    backgroundColor: "#e0a340", // Different color for this scheme
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  insurance: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "center",
    width: "100%",
    position: "absolute",
    top: 50, // Positioned at the top below the status bar
    left: 0,
  },
  container1: {
    position: "absolute",
    top: 50, // Positioned at the top to be inside the status bar area
    left: 20, // Adjust as needed for the back icon's horizontal position
    width: 40,
    height: 40,
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  iconLayout: {
    width: "92%",
    height: "90%",
  },
});

export default SukanyaSamriddhi;
