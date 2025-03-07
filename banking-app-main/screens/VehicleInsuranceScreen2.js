import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const VehicleInsuranceScreen2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.childScheme, styles.timeLightLayout]}>
        {/* Status Bar */}
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={430}
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
          <Text style={styles.policyDetails}> Vehicle Insurance</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.applyButton]}
            onPress={() => navigation.navigate("VehicleInsuranceForm")}
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
            onPress={() => navigation.navigate("VehicleClaimForm")}
          >
            <Text style={styles.buttonText}>Claim Policy</Text>
          </Pressable>
        </View>

        {/* Main Image */}
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/VehicleInsuranceImg01.png")}
        />

        {/* Key Features */}
        <Text style={styles.eligibility}>Benefits</Text>
        <Text style={styles.details}>
          * Compulsory third party liability with personal accident cover. {"\n"}
          * Multiple covers with additional premiums: NCB, key replacement cover, bi-fuel kit, loss of belongings. {"\n"}
          * Legal liability for paid driver and employees. {"\n"}
          * Nil depreciation. {"\n"}
          </Text>
          <Text style={styles.eligibility}>What's Covered</Text>
          <Text style={styles.details}>
          * Third party liability in case of injury/death of the person, or any damage caused to the property of the third party. {"\n"}
          * Loss or damage to your car due to fire, self-ignition, accidental damage, explosion. {"\n"}
          * Your car is covered against natural disasters like lightning, earthquake, hurricanes, cyclones, landslides, etc. {"\n"}
          * Personal accident cover up to Rs 15 lakh for individual owners while driving. Passengers can also get coverage up to Rs 2 lakh per person. {"\n"}
          * Coverage for CNG/LPG bi-fuel kit. {"\n"}
          </Text>
          <Text style={styles.eligibility}>What's Not Covered</Text>
          <Text style={styles.details}>
          * Driving without a valid licence. {"\n"}
          * Driving under the influence of drugs and alcohol. {"\n"}
          * We do not offer coverage for damage, theft or loss due to incidents related to the war, invasion, foreign enemy acts, mutiny, rebellion, etc. Any claims made must be proved to be an act not related to any of these conditions. {"\n"}          
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
    marginRight: 3,
  },
  backIcon: {
    width: 40,
    height: 40,
    left: 20,
    top: 0.05,
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

export default VehicleInsuranceScreen2;
