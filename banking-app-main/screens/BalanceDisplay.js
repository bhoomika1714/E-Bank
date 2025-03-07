import React, { useEffect } from "react";
import { Text, StyleSheet, View, BackHandler } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import StatusBar1 from "../components/StatusBar1";

const BalanceDisplay = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Handle back button press
    const backAction = () => {
      navigation.navigate("CheckBalance");
      return true;
    };

    // Add event listener for back press
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up event listener
    return () => backHandler.remove();
  }, [navigation]);

  const balance = "₹50,000";
  const name = "Available Balance";

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
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
      <Text style={styles.title}>Balance</Text>
      {/* Brown Gradient Balance Section */}
      <LinearGradient
        style={styles.headerSection}
        locations={[0, 0.8]}
        colors={["#e0a340", "#7a5923"]} // Brown gradient
      >
        <View style={styles.balanceSection}>
          <Text style={styles.balanceText}>{balance}</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    top: -230,
    fontSize: 24,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "700",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  statusBarParent: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 95,
  },
  headerSection: {
    top: -90,
    borderRadius: Border.br_7xl,
    width: 390,
    height: 280,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: Padding.p_5xl,
  },
  balanceSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  balanceText: {
    fontSize: 30,
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "center",
  },
  nameText: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "center",
    marginTop: 10,
  },
});

export default BalanceDisplay;
