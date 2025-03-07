import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import StatusBar1 from "../components/StatusBar1"; // Importing StatusBar component
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const interestRates = [
  { minAmount: 0, maxAmount: 9999, rate: 5 },
  { minAmount: 10000, maxAmount: 49999, rate: 6 },
  { minAmount: 50000, maxAmount: 99999, rate: 7 },
  { minAmount: 100000, maxAmount: Infinity, rate: 8 },
];

export default function ApplyFDScreen({ navigation, setFdHistory }) {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');

  const calculateInterestAndMaturity = (amount, tenure) => {
    const rateObject = interestRates.find(
      rate => amount >= rate.minAmount && amount <= rate.maxAmount
    );
    const rate = rateObject ? rateObject.rate : 0;
    const interest = (amount * rate * tenure) / (12 * 100); // Simple Interest Formula
    const maturityAmount = amount + interest;
    return { interest, maturityAmount, rate };
  };

  const handleApply = () => {
    const fdAmount = parseFloat(amount);
    const fdTenure = parseInt(tenure, 10);

    if (isNaN(fdAmount) || isNaN(fdTenure) || fdAmount <= 0 || fdTenure <= 0) {
      alert('Please enter valid values for amount and tenure.');
      return;
    }

    // Calculate interest, maturity amount, and rate
    const { interest, maturityAmount, rate } = calculateInterestAndMaturity(
      fdAmount,
      fdTenure
    );

    // Get current date as Apply Date
    const applyDate = new Date();

    // Calculate End Date by adding tenure (in months)
    const endDate = new Date(applyDate);
    endDate.setMonth(applyDate.getMonth() + fdTenure);

    // Add new FD to history
    setFdHistory(prevHistory => [
      ...prevHistory,
      {
        amount: fdAmount,
        tenure: fdTenure,
        interest,
        maturityAmount,
        rate,
        applyDate: applyDate.toLocaleDateString(), // Format as string
        endDate: endDate.toLocaleDateString(), // Format as string
      },
    ]);

    navigation.goBack(); // Navigate back to FD history
  };


  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBarContainer}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth="100%"
          statusBarHeight={50}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
        <Text style={styles.headerText}>Apply Fixed Deposit</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* <Text style={styles.title}>Apply for New Fixed Deposit</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Tenure (in months)"
          keyboardType="numeric"
          value={tenure}
          onChangeText={setTenure}
        />

        <Button title="Apply FD" onPress={handleApply} color="#e0a340" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  // Status Bar Styles
  statusBarContainer: {
    backgroundColor: "#e0a340",
    height: 100,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    top: "15",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "center",
    left: "100",
  },
  backButton: {
    width: 42,
    height: 40,
  },
  icon: {
    width: "90%",
    height: "90%",
    right: "350",
    top: "18",
  },
  // Form Section Styles
  formContainer: {
    flex: 1,
    padding: 36,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
