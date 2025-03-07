import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const HealthInsuranceScreen2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.childScheme, styles.timeLightLayout]}>
        {/* Status Bar */}
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={425}
          statusBarHeight={95}
          statusBarTop={0}
          statusBarLeft={0.5}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={80}
          statusIconsHeight={20}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />

        {/* Header and Buttons */}
        <View style={styles.headerContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.navigate("Insuarance")}
          >
            <Image
              style={styles.backIcon}
              contentFit="cover"
              source={require("../assets/group-1272628274.png")}
            />
          </Pressable>
          <Text style={styles.policyDetails}> Health Insurance</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.applyButton]}
            onPress={() => navigation.navigate("HealthInsuranceApplicationForm")}
          >
            <Text style={styles.buttonText}>Apply for Policy</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.payButton]}
            onPress={() => navigation.navigate("AmountEntry")}
          >
            <Text style={styles.buttonText}>Pay Premium</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.claimButton]}
            onPress={() => navigation.navigate("HealthClaimForm")}
          >
            <Text style={styles.buttonText}>Claim Policy</Text>
          </Pressable>
        </View>

        {/* Main Image */}
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/HealthInsuranceImg.png")}
        />

        {/* Key Features */}
        <Text style={styles.eligibility}>Eligibility & Benefits</Text>
        <Text style={styles.details}>{"\n"}
          * Entry age: 3 months to 65 years. {"\n"}
          * Coverage from 1 to 3 lakh rupees. {"\n"}
          * Comprehensive pre-hospitalisation (60 days) and post-hospitalisation coverage (90 days). {"\n"}
          * Includes hospital room rent, boarding expenses, doctor fees, operation theatre, intensive care charges, nursing expenses and medicines consumed. {"\n"}
          * Domiciliary hospitalisation. {"\n"}
          * Also covers alternative treatment taken in accredited/recognised hospitals and 142 daycare expenses. {"\n"}
          * Outpatient treatment covered PD. {"\n"}
          </Text>          
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Color.white,
  },
  childScheme: {
    flex: 1,
    padding: 15,
    paddingTop: 53, // Adjust padding to accommodate StatusBar
    
  },
  timeLightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backButton: {
    marginRight: 5,
  },
  backIcon: {
    width: 35,
    height: 35,
    left: 20,
  },
  policyDetails: {
    fontSize: FontSize.m3TitleLarge_size,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    flex: 1,
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  button: {
    height: 40,
    width: 120,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.32)",
    shadowRadius: 2,
    elevation: 2,
  },
  applyButton: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  payButton: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  claimButton: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  vectorIcon: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },
  eligibility: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xl,
    marginBottom: 0,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#F4F4F4",
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: Color.black,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#F4F4F4",
  },
});

export default HealthInsuranceScreen2;
