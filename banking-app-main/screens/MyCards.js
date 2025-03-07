import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { Color, Border } from "../GlobalStyles"; // Global styles for colors and borders

const MyCards = () => {
  // State for modal visibility and input values
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [lastFourDigits, setLastFourDigits] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Sample bank data
  const banks = [
    { name: "Axis Bank" },
    { name: "HDFC Bank" },
    { name: "SBI" },
    { name: "Canara Bank" },
  ];

  // Function to handle bank selection
  const handleBankPress = (bankName) => {
    setSelectedBank(bankName);
    setModalVisible(true);
  };

  // Function to handle payment
  const handlePayment = () => {
    Alert.alert(
      "Payment",
      `Proceeding with payment through ${selectedBank}\n +
        Last 4 Digits: ${lastFourDigits}\n +
        Phone Number: ${phoneNumber}`
    ); //the above line should be in  ``
    // Here, you can add functionality to connect with the bank's payment gateway
    setModalVisible(false);
    // Reset fields
    setLastFourDigits("");
    setPhoneNumber("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credit Card Payments</Text>
      <ScrollView>
        {banks.map((bank, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bankContainer}
            onPress={() => handleBankPress(bank.name)}
          >
            <Text style={styles.bankName}>{bank.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for entering payment details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Payment Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Last 4 Digits of Card"
              value={lastFourDigits}
              onChangeText={setLastFourDigits}
              keyboardType="numeric"
              maxLength={4} // Limit to 4 digits
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10} // Limit to 10 digits
            />
            <Button title="Proceed to Payment" onPress={handlePayment} />
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: Color.blackB100,
  },
  bankContainer: {
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: Border.gray,
    borderRadius: 8,
    backgroundColor: Color.lightGray, // Optional background color for better visual
  },
  bankName: {
    fontSize: 18,
    color: Color.blackB100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
  },
  modalView: {
    width: "80%",
    backgroundColor: Color.white,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: Border.gray,
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    width: "100%",
    borderRadius: 5,
  },
});

export default MyCards;