import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SetPin = ({ navigation, route }) => {
  const { phoneNumber } = route.params; // Receive phone number from VerifyOTP
  const [atmPin, setAtmPin] = useState("");
  const [upiPin, setUpiPin] = useState("");

  const BACKEND_URL = "http://192.168.29.36:5000/api/user";
  const SET_UPI_PIN_ENDPOINT = "/setUpiPin";

  const handleSetUpiPin = async () => {
    if (atmPin.length === 4 && upiPin.length === 4) {
      const upiId = `${phoneNumber}@bank`;

      try {
        const response = await fetch(`${BACKEND_URL}${SET_UPI_PIN_ENDPOINT}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber, atmPin, upiPin, upiId }),
        });
        const data = await response.json();
        if (data.success) {
          Alert.alert("Success", "UPI PIN set successfully!");
          navigation.navigate("Home", { upiId });
        } else {
          Alert.alert("Error", data.message || "Failed to set UPI PIN.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred while setting UPI PIN.");
        console.error("Set UPI PIN Error:", error);
      }
    } else {
      Alert.alert("Error", "Please enter valid 4-digit ATM and UPI PINs.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set ATM and UPI PIN</Text>
      <TextInput
        style={styles.input}
        placeholder="ATM PIN"
        keyboardType="number-pad"
        secureTextEntry={true}
        value={atmPin}
        onChangeText={setAtmPin}
      />
      <TextInput
        style={styles.input}
        placeholder="UPI PIN"
        keyboardType="number-pad"
        secureTextEntry={true}
        value={upiPin}
        onChangeText={setUpiPin}
      />
      <TouchableOpacity style={styles.button} onPress={handleSetUpiPin}>
        <Text style={styles.buttonText}>Set UPI PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
    marginBottom: 10,
  },
  input: {
    backgroundColor: Color.lightGray10,
    padding: 10,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    marginVertical: 10,
    fontSize: FontSize.size_1xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
  },
  button: {
    backgroundColor: "#e0a340",
    padding: 15,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratBold,
  },
});

export default SetPin;
