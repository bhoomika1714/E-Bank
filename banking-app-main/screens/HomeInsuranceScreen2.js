import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const HomeInsuranceScreen2 = () => {
  const navigation = useNavigation();

  return (
    // <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.childScheme, styles.timeLightLayout]}>
        {/* Status Bar */}
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={420}
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
          <Text style={styles.policyDetails}> Home Insurance</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.applyButton]}
            onPress={() => navigation.navigate("HomeInsuranceForm")}
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
            onPress={() => navigation.navigate("HomeClaimForm")}
          >
            <Text style={styles.buttonText}>Claim Policy</Text>
          </Pressable>
        </View>

        {/* Main Image */}
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/HomeInsuranceImg.png")}
        />

        {/* Key Features */}
        <Text style={styles.eligibility}>Key Features</Text>
        <Text style={styles.details}>
          * Policy available from 1 year to 10 years. {"\n"}
          * Coverage for building (structure) and/or contents. {"\n"}
          * Home contents are automatically covered at 20% of Sum Insured amount for the building (subject to maximum of Rs 10 lacs). {"\n"}
          * Flexible options for coverage of home contents. {"\n"}
          * Optional cover for personal accident of Rs 5 lakh each for self and spouse (arising out of fire and allied perils). {"\n"}
          * Inbuilt cover for fee payable to architect/surveyor/consulting engineer (5% of claim amount). {"\n"}
          * Inbuilt cover for removal of debris (2% of claim amount). {"\n"}
          * Inbuilt cover for loss of rent/ rent for alternative accommodation. {"\n"}
          * Auto-escalation of sum insured by 10% for annual policies and for long term policies. {"\n"}
          * Valuable contents insured on agreed value basis. {"\n"}
          * Home Structure Cover {"\n"}
          * Cover for Owners, Tenants, Landlords {"\n"}
          * Policy Tenure - 1 to 10 years {"\n"}
          * Cover for Loss of Rent {"\n"}
        </Text>
      </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  // scrollContainer: {
  //   flexGrow: 1,
  //   backgroundColor: Color.white,
  // },
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
    marginBottom: 20,
  },
  backButton: {
    marginRight: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  policyDetails: {
    fontSize: FontSize.m3TitleLarge_size,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    flex: 2,
    
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
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: Color.black,
  },
});

export default HomeInsuranceScreen2;
