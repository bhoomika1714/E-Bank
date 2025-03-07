import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CheckBalance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkBalance}>
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

      {/* Bank of Baroda Pressable */}
      <Pressable
        onPress={() => navigation.navigate("UPIPIN2")}
        style={styles.bankContainer}
      >
        <Text style={styles.bankText}>Check Balance</Text>
      </Pressable>

      {/* SBI Bank Pressable */}
      <Pressable
        onPress={() => navigation.navigate("MiniStatement")}
        style={styles.bankContainer}
      >
        <Text style={styles.bankText}>Mini statement</Text>
      </Pressable>

      {/* Canara Bank Pressable
      <Pressable
        onPress={() => navigation.navigate("UPIPIN2")}
        style={styles.bankContainer}
      >
        <Text style={styles.bankText}>Check Bank Holiday</Text>
      </Pressable> */}

      {/* <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.homeText}>Home</Text>
      </Pressable> */}

      <Text style={[styles.checkBalance1, styles.wrapperPosition]}>
        Check Balance
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  bankContainer: {
    top:120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderRadius: Border.br_xl,
    width: 350,
    height: 60,
    alignSelf: "center",
  },
  bankText: {
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  wrapperPosition: {
    top: 40,
    position: "absolute",
  },
  checkBalance1: {
    left: 125,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    textAlign: "center",
    letterSpacing: 0,
  },
  checkBalance: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CheckBalance;
