// screens/EducationLoanForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EducationLoanForm() {
  const navigation = useNavigation(); // Corrected: Declared navigation using useNavigation hook
  const [hasSBIAccount, setHasSBIAccount] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to manage form submission

  // State for SBI Account Holder Details
  const [accountNumber, setAccountNumber] = useState('');
  const [relationWithBank, setRelationWithBank] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // State for Non-SBI Account Holder Details
  const [purpose, setPurpose] = useState('');
  const [courseDetails, setCourseDetails] = useState('');
  
  // Applicant Details
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');

  // Contact Details
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  
  const [captcha, setCaptcha] = useState('');
  
  const handleFormSubmit = () => {
    if (hasSBIAccount === true) {
      if (!accountNumber || !relationWithBank || !mobileNumber) {
        Alert.alert('Please fill in all the required fields');
        return;
      }
    } else {
      if (!purpose || !courseDetails || !name || !dob || !location || !contactEmail || !contactPhone || !captcha) {
        Alert.alert('Please fill in all the required fields');
        return;
      }
    }
    // Alert.alert('Application Submitted Successfully!');
    setFormSubmitted(true); // Navigate to Loan screen
  };
  const goToHome = () => {
    setFormSubmitted(false); // Reset form submission state
    navigation.navigate('Home'); // Navigate to Home screen
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education Loan Application Form</Text>

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
          {/* Purpose of Loan */}
          <Text style={styles.sectionTitle}>Purpose of Loan</Text>
          <TextInput
            placeholder="Purpose of Loan"
            style={styles.input}
            value={purpose}
            onChangeText={setPurpose}
          />
          <TextInput
            placeholder="Course Details"
            style={styles.input}
            value={courseDetails}
            onChangeText={setCourseDetails}
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
            placeholder="Location (City, State)"
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />

          {/* Contact Details */}
          <Text style={styles.sectionTitle}>Contact Details</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.submissionMessage}>Your claim has been submitted successfully!</Text>
            <Button title="Go to Home" onPress={goToHome} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  submissionMessage: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
});
