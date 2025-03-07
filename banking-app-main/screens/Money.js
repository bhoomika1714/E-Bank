import * as React from "react";
import { Image, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import StatusBar1 from "../components/StatusBar1"; // Import your StatusBar1 component

// Mock Database to store transactions
let mockDB = [];

const Money = ({ navigation }) => {
  const route = useRoute();
  const { contactName, contactNumber } = route.params;

  const [amount, setAmount] = React.useState("");

  const handleSendMoney = () => {
    if (parseFloat(amount) > 0) {
      // Store the contact and amount in mockDB
      storeTransaction(contactName, contactNumber, amount);
      
      // Navigate to UPIPIN4 with the stored data
      navigation.navigate("UPIPIN4", { contactName, contactNumber, amount });
    } else {
      console.log("Enter a valid amount greater than 0.");
    }
  };

  const isAmountValid = parseFloat(amount) > 0;

  // Function to store transaction in mockDB
  const storeTransaction = (name, number, amount) => {
    mockDB.push({ contactName: name, contactNumber: number, amount });
    console.log("Transaction Stored:", { contactName: name, contactNumber: number, amount });
    console.log("MockDB:", mockDB); // You can view the mockDB contents in the console for debugging
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.money}>
        <View style={styles.statusBarParent}>
          <StatusBar1
            statusBarPosition="absolute"
            statusBarWidth={412}
            statusBarHeight={80}
            statusBarTop={0}
            statusBarLeft={0}
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

        <View style={styles.centerContent}>
          <Image
            style={styles.userIcon}
            source={require("../assets/user5.png")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.label}>{contactName}</Text>
            <Text style={styles.contactNumber}>{contactNumber}</Text>
          </View>

          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor="#a9a9a9"
          />

          <Pressable
            style={[styles.sendButton, { backgroundColor: isAmountValid ? "#e0a340" : "#d3d3d3" }]}
            onPress={handleSendMoney}
            disabled={!isAmountValid}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  money: { 
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  statusBarParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 95,
    zIndex: 1,
  },
  centerContent: {
    alignItems: "center",
    marginTop: 130,
  },
  userIcon: {
    width: 105,
    height: 123,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    color: Color.lightGray11,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  contactNumber: {
    color: Color.darkWhiteGrey60,
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  amountInput: {
    height: 50,
    width: 220,
    borderColor: Color.gray3,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: "#e0a340",
    paddingVertical: 20, // Increased padding for height
    paddingHorizontal: 50, // Increased padding for width
    borderRadius: Border.br_xs,
    marginTop: 20,
  },
  sendButtonText: {
    width: 120,
    height: 26,
    textAlign: "center",
    color: Color.white,
    fontSize: 20, // Increased font size
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "bold",
  },
});

export default Money;
