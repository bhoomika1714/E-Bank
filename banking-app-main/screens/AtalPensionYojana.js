import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1"; // Assuming you have a StatusBar1 component
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const AtalPensionYojana = () => {
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
        statusBarBackgroundColor="#e0a340" // Unique color for this scheme
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
            - Age between 18 to 40 years.
          </Text>
          <Text style={styles.text}>
            - Open to individuals working in the unorganized sector.
          </Text>
          <Text style={styles.text}>
            - Contributions can be made by auto-debit from a savings account.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.text}>
            - Minimum age: 18 years; maximum age: 40 years.
          </Text>
          <Text style={styles.text}>
            - Guaranteed pension between ₹1,000 and ₹5,000 after 60 years of age.
          </Text>
          <Text style={styles.text}>
            - Monthly contributions vary by age and pension amount.
          </Text>
        </View>

        <Pressable
          style={styles.applyButton}
          onPress={() => navigation.navigate("ApplyScheme")}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </Pressable>
      </ScrollView>

      {/* Atal Pension Yojana Text */}
      <Text style={styles.insurance}>Atal Pension Yojana</Text>

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
    backgroundColor: "#e0a340", // Unique color for this scheme
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

export default AtalPensionYojana;
