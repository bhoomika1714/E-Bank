// screens/VehicleLoanForm.js
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VehicleLoanForm = () => {
  const navigation = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false); // State to manage form submission
  
  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleFormSubmit = () => {
    if (!name || !phone || !loanAmount || !vehicleType || !employmentStatus) {
      Alert.alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true); // Show confirmation modal
  };

  const goToHome = () => {
    setFormSubmitted(false); // Close the modal
    navigation.navigate("Home"); // Navigate back to Home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Loan Application Form</Text>

      {/* Form Fields */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Loan Amount (in USD)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter desired loan amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <Text style={styles.label}>Vehicle Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter vehicle type (e.g., Car, Motorcycle)"
        value={vehicleType}
        onChangeText={setVehicleType}
      />

      <Text style={styles.label}>Employment Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your employment status"
        value={employmentStatus}
        onChangeText={setEmploymentStatus}
      />

      <Button title="Submit Application" onPress={handleFormSubmit} />

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.submissionMessage}>Your vehicle loan application has been submitted successfully!</Text>
            <Button title="Go to Home" onPress={goToHome} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  submissionMessage: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    
    textAlign: "center",
  },
});

export default VehicleLoanForm;
