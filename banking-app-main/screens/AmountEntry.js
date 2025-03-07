import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
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

const AmountEntry = () => {
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleProceed = () => {
    if (parseFloat(amount) > 0) {
      navigation.navigate('PaymentMethod', { amount }); // Navigate to PaymentMethods with the entered amount
    } else {
      Alert.alert('Error', 'Please enter a valid amount.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Amount to Pay</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Pressable
        style={[styles.rectangleGroup, styles.payPremiumButton]} // Using your provided style
        onPress={handleProceed} // Call handleProceed on press
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.applyForPolicy, styles.detailsClr]}>
          Proceed to Payment
        </Text>
      </Pressable>
      
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
      <Text style={styles.insurance}>Payment</Text>
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("Insuarance")}
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
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  rectangleGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  payPremiumButton: {
    backgroundColor: '#e0a340',
    padding: 15,
    borderRadius: 8,
    alignSelf: 'center',
    width: '80%',
  },
  groupItem: {
    borderRadius: 8,
  },
  groupLayout: {
    // Any additional styles for layout
  },
  applyForPolicy: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  detailsClr: {
    color: '#ffffff',
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
    left: "9.27%",
    top: "5%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.44%",
    height: "6.66%",
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

export default AmountEntry;
