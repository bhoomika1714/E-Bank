import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
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

const FixedDepositScheme = () => {
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

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eligibility</Text>
          <Text style={styles.text}>
            - Generally available to individuals, including minors (with a guardian).
          </Text>
          <Text style={styles.text}>
            - NRI and HUF accounts can also be opened with specific banks.
          </Text>
          <Text style={styles.text}>
            - No maximum age limit for most accounts, but terms vary by institution.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.text}>
            - Minimum deposit varies; flexible tenure options from 7 days to 10 years.
          </Text>
          <Text style={styles.text}>- Premature withdrawal options are available.</Text>
          <Text style={styles.text}>- Loan against FD facility available with certain banks.</Text>
        </View>

        <Pressable
          style={styles.applyButton}
          onPress={() => navigation.navigate("ApplyScheme")}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </Pressable>
      </ScrollView>

      {/* Fixed Deposit Scheme Text */}
      <Text style={styles.insurance}>Fixed Deposit Scheme</Text>

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
    paddingTop: 120, // Increased top padding to move content further below the status bar
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
    backgroundColor: "#e0a340",
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
    top: 50, // Increased the top margin to push the text further down from the status bar
    left: 0,
  },
  container1: {
    position: "absolute",
    top: 50, // Adjusted to ensure the back icon is also moved lower
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

export default FixedDepositScheme;
