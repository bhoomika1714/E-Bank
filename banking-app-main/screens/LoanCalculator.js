// screens/LoanCalculator.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
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

export default function LoanCalculator() {
  const navigation = useNavigation();  // Use navigation here

  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const term = parseFloat(loanTerm) * 12; // Convert years to months

    if (!principal || !rate || !term) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const x = Math.pow(1 + rate, term);
    const monthly = (principal * x * rate) / (x - 1);
    const total = monthly * term;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Loan Amount (in INR)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <Text style={styles.label}>Interest Rate (Annual %)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter interest rate"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
      />

      <Text style={styles.label}>Loan Term (in years)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan term"
        keyboardType="numeric"
        value={loanTerm}
        onChangeText={setLoanTerm}
      />

      <Button style={styles.Button} title="Calculate" onPress={calculateLoan} />

      {monthlyPayment && totalPayment && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Monthly Payment: ₹{monthlyPayment}</Text>
          <Text style={styles.resultText}>Total Payment: ₹{totalPayment}</Text>
        </View>
      )}

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
      <Text style={styles.insurance}>Loan Calculator</Text>
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("Loan")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#f7f7f7",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: "500",
  },
  Button: {
    backgroundColor: "#e0a340",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
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
    top: "6%",
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
    top: "1.70%",
    right: "80.53%",
    bottom: "91.01%",
    width: "10.25%",
    height: "6%",
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
    top:40,
  },  
});
