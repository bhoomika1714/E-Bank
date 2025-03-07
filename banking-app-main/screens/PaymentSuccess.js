import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccess = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home'); // Adjust to your main/home screen route
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.successIcon}
        source={require('../assets/group-65@3x.png')} // Add a success icon in your assets
      /> */}
      <Text style={styles.header}>Payment Successful!</Text>
      <Text style={styles.message}>Thank you for your payment.</Text>
      <Button title="Go to Home" onPress={handleHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default PaymentSuccess;
