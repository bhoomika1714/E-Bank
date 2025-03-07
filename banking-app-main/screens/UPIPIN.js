import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UPIPIN = () => {
  const [upiId, setUpiId] = useState('');
  const navigation = useNavigation();

  const handleUPIPayment = () => {
    if (upiId) {
      // Navigate to PaymentSuccess page on valid UPI ID
      navigation.navigate('PaymentSuccess');
    } else {
      Alert.alert('Error', 'Please enter a valid UPI ID.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>UPI Payment</Text>
      <TextInput
  style={styles.input}
  placeholder="Enter UPI ID"
  value={upiId}
  onChangeText={setUpiId}
  keyboardType="numeric" // This sets the keyboard type to numeric
/>

      <Pressable style={styles.payButton} onPress={handleUPIPayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%', // Make input full width
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  payButton: {
    backgroundColor: '#e0a340', // Green color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%', // Make button full width
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default UPIPIN;
