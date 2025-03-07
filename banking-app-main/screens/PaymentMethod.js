import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

const PaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Select Payment Method</Text> */}

      {/* UPI Payment Option */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('UPIPIN')}
      >
        <Text style={styles.optionText}>Pay with UPI</Text>
      </TouchableOpacity>

      {/* Credit/Debit Card Payment Option */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('CardPayment')}
      >
        <Text style={styles.optionText}>Pay with Credit/Debit Card</Text>
      </TouchableOpacity>

      {/* Net Banking Payment Option */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('NetBanking')}
      >
        <Text style={styles.optionText}>Pay with Net Banking</Text>
      </TouchableOpacity>
      
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
      <Text style={styles.insurance}>Slect Payment Method</Text>
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("AmountEntry")}
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
    paddingTop: 120,
    paddingHorizontal: 50,
    backgroundColor: '#fff',
  },
  optionButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#e0a340',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
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
    top: "5%",
    left: "32.27%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },  
  container1: {
    left: "8.27%",
    top: "5%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.95%",
    height: "6.45%",
    position: "absolute",
  },
  icon2: {
    maxHeight: "130%",
    maxWidth: "135%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "60%",
    width: "90%",
    top:0,
  },  
});

export default PaymentMethod;
