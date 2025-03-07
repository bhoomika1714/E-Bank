import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NetBanking = () => {
  const [upiId, setUpiId] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const navigation = useNavigation();

  const handleNetBankingPayment = () => {
    // Validate inputs
    if (!upiId || upiId.length < 5) {
      Alert.alert('Error', 'Please enter a valid UPI ID.');
      return;
    }

    if (!bankAccount || bankAccount.length < 10) {
      Alert.alert('Error', 'Please enter a valid Bank Account Number.');
      return;
    }

    // Simulate a payment gateway call after validation
    Alert.alert('Payment', 'Proceeding with Net Banking Payment...');
    setTimeout(() => {
      // Simulate success/failure based on some condition
      const isSuccess = Math.random() > 0.5; // Random success/failure
      if (isSuccess) {
        Alert.alert('Payment Success', 'Your payment has been successfully processed.');
      } else {
        Alert.alert('Payment Failed', 'There was an error processing your payment.');
      }
    }, 2000);

    // Navigate to success screen after payment processing
    navigation.navigate('PaymentSuccess');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Net Banking Payment</Text>

      {/* UPI ID Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter UPI ID"
        value={upiId}
        onChangeText={setUpiId}
        keyboardType="numeric"
      />

      {/* Bank Account Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Bank Account Number"
        value={bankAccount}
        onChangeText={setBankAccount}
        keyboardType="numeric"
        maxLength={16} // Optional: you can limit the bank account number length
      />

      {/* Custom Styled Button using TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={handleNetBankingPayment}>
        <Text style={styles.buttonText}>Proceed with Net Banking</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#e0a340', // Custom button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NetBanking;
