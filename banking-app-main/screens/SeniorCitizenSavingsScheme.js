import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SeniorCitizenSavingsScheme = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBarContainer}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={450}
          statusBarHeight={95}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
        />
        <Text style={styles.title}>Senior Citizen Savings Scheme</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("SchemesOptions")}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
      </View>

      {/* Eligibility Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Eligibility</Text>
        <Text style={styles.text}>
          - An individual may open an account in individual capacity, or jointly
          with spouse.
        </Text>
        <Text style={styles.text}>
          - NRI's & Hindu Undivided Family are not eligible to open an account
          under these rules.
        </Text>
        <Text style={styles.text}>
          - An individual who has attained the age of 60 years and above.
        </Text>
        <Text style={styles.text}>
          - An individual who has attained the age of 55 years or more but less
          than 60 years and has retired on superannuation or otherwise.
        </Text>
        <Text style={styles.text}>
          - Retired personnel of Defence Services attaining the age of 50 years.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features</Text>
        <Text style={styles.text}>
          - Minimum deposit of ₹1,000, and multiples thereof up to ₹30 Lakhs
          (effective 01.04.2023).
        </Text>
        <Text style={styles.text}>
          - Account maturity: 5 years, extendable by 3 years.
        </Text>
        <Text style={styles.text}>
          - Interest rate: 8.20% per annum, paid quarterly (effective
          01.04.2023).
        </Text>
        <Text style={styles.text}>
          - Unclaimed interest does not earn additional interest.
        </Text>
        <Text style={styles.text}>
          - Entire deposit amount in joint accounts is attributable to the first
          account holder.
        </Text>
        <Text style={styles.text}>
          - Both spouses can open single and joint accounts with each other.
        </Text>
        <Text style={styles.text}>
          - Option to nominate one or more persons; nominations can be modified.
        </Text>
        <Text style={styles.text}>
          - Withdrawal permitted after 5 or 8 years (if extended), no multiple
          withdrawals.
        </Text>
      </View>

      {/* Apply Button */}
      <Pressable
        style={styles.applyButton}
        onPress={() => navigation.navigate("ApplyScheme")}
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  statusBarContainer: {
    backgroundColor: "#e0a340",
    paddingTop: 52,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    left: 12,
    top: 55,
  },
  backIcon: {
    width: 35,
    height: 33,
    resizeMode: "contain",
  },
  section: {
    marginBottom: 22,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  applyButton: {
    backgroundColor: "#e0a340",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 30,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SeniorCitizenSavingsScheme;
