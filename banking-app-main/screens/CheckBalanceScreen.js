// CheckBalanceScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CheckBalanceScreen = ({ route }) => {
  const { selectedBank } = route.params;
  const [upiId, setUpiId] = useState(""); // Normally, this will be pre-saved or fetched
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false); // To show loading state

  // Mock API function
  const fetchBalance = async () => {
    setLoading(true); // Set loading while fetching balance
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock balance fetch logic (replace this with actual API call)
      const fetchedBalance = Math.floor(Math.random() * 10000); // Random balance for demo
      setBalance(fetchedBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <View style={styles.container}>
      <Text>Bank: {selectedBank}</Text>

      <Text>Enter your UPI ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="example@upi"
        value={upiId}
        onChangeText={setUpiId}
      />

      <Button title="Check Balance" onPress={fetchBalance} disabled={!upiId || loading} />

      {loading && <Text>Fetching balance...</Text>}

      {balance !== null && (
        <Text style={styles.balanceText}>Your Account Balance: ₹{balance}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 20,
    width: "100%",
  },
  balanceText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CheckBalanceScreen;
