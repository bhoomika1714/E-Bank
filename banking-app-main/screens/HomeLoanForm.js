// screens/HomeLoanForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function HomeLoanForm() {
  const [hasSBIAccount, setHasSBIAccount] = useState(null);

  // State for SBI Account Holder Details
  const [accountNumber, setAccountNumber] = useState('');
  const [relationWithBank, setRelationWithBank] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // State for Non-SBI Account Holder Details
  const [propertyLocation, setPropertyLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [estimatedValue, setEstimatedValue] = useState('');
  
  // Applicant Details
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  // Loan Purpose
  const [loanPurpose, setLoanPurpose] = useState('');

  // Contact Information
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const [captcha, setCaptcha] = useState('');
  
  const handleFormSubmit = () => {
    // Basic validation to check if all required fields are filled
    if (hasSBIAccount === true) {
      if (!accountNumber || !relationWithBank || !mobileNumber) {
        Alert.alert('Please fill in all the required fields');
        return;
      }
    } else {
      if (!propertyLocation || !propertyType || !estimatedValue || !name || !dob || !address || !loanPurpose || !contactEmail || !contactPhone || !captcha) {
        Alert.alert('Please fill in all the required fields');
        return;
      }
    }
    Alert.alert('Application Submitted Successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Loan Application Form</Text>

      <Text style={styles.label}>Do you have an account in SBI Bank?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, hasSBIAccount === true && styles.selectedButton]}
          onPress={() => setHasSBIAccount(true)}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, hasSBIAccount === false && styles.selectedButton]}
          onPress={() => setHasSBIAccount(false)}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {hasSBIAccount === true && (
        <>
          <TextInput
            placeholder="Account Number"
            style={styles.input}
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Relation with Bank"
            style={styles.input}
            value={relationWithBank}
            onChangeText={setRelationWithBank}
          />
          <TextInput
            placeholder="Mobile Number"
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </>
      )}

      {hasSBIAccount === false && (
        <>
          {/* Property Details */}
          <Text style={styles.sectionTitle}>Property Details</Text>
          <TextInput
            placeholder="Property Location"
            style={styles.input}
            value={propertyLocation}
            onChangeText={setPropertyLocation}
          />
          <TextInput
            placeholder="Property Type (e.g., Residential, Commercial)"
            style={styles.input}
            value={propertyType}
            onChangeText={setPropertyType}
          />
          <TextInput
            placeholder="Estimated Property Value"
            style={styles.input}
            value={estimatedValue}
            onChangeText={setEstimatedValue}
            keyboardType="numeric"
          />

          {/* Applicant Details */}
          <Text style={styles.sectionTitle}>Applicant Details</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Date of Birth (DD/MM/YYYY)"
            style={styles.input}
            value={dob}
            onChangeText={setDob}
            keyboardType="default"
          />
          <TextInput
            placeholder="Address"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          {/* Loan Purpose */}
          <Text style={styles.sectionTitle}>Loan Purpose</Text>
          <TextInput
            placeholder="Purpose of Loan (e.g., Buy a New Home)"
            style={styles.input}
            value={loanPurpose}
            onChangeText={setLoanPurpose}
          />

          {/* Contact Information */}
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            value={contactEmail}
            onChangeText={setContactEmail}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            value={contactPhone}
            onChangeText={setContactPhone}
            keyboardType="phone-pad"
          />

          {/* Captcha */}
          <TextInput
            placeholder="Enter Captcha"
            style={styles.input}
            value={captcha}
            onChangeText={setCaptcha}
          />
        </>
      )}

      <Button title="Submit Application" onPress={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, padding: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  button: { padding: 10, borderRadius: 5, backgroundColor: '#ddd' },
  selectedButton: { backgroundColor: '#4CAF50' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
