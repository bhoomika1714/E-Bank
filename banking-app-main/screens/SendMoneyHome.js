import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView, Pressable, Alert, PermissionsAndroid } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import Contacts from 'react-native-contacts';
import { FontSize, FontFamily, Color, Padding, Gap, Border } from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { useTransaction } from '../screens/TransactionContext'; // Adjust the path

const SendMoneyHome = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Use useRoute to access the route parameters
  const { contactName, amount } = route.params || {}; // Destructure parameters, handle case when they might be undefined
  const { transactionHistory, addTransaction } = useTransaction();

  const [contacts, setContacts] = useState([]);

  // Request permission and fetch contacts
  useEffect(() => {
    const requestContactsPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: "Contacts Permission",
            message: "This app would like to access your contacts.",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Permission denied", "You need to grant contacts permission to use this feature.");
          return;
        }
      }

      // Fetch contacts
      Contacts.getAll()
        .then(contacts => {
          setContacts(contacts.slice(0, 5));
        })
        .catch(e => console.log('Error fetching contacts', e));
    };

    requestContactsPermission();
  }, []);

  // Function to send transaction data to backend
  const sendTransactionToBackend = async (transaction) => {
    try {
      const response = await fetch('https://your-backend-url.com/transactions', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error('Failed to save transaction to backend');
      }

      console.log('Transaction saved successfully:', transaction);
    } catch (error) {
      console.error('Error saving transaction:', error);
      Alert.alert('Error', 'Failed to save transaction to backend. Please try again later.');
    }
  };

  // Transaction handling
  useEffect(() => {
    if (contactName && amount) {
      const transaction = { contactName, amount };
      addTransaction(contactName, amount);
      sendTransactionToBackend(transaction); // Send to backend
    }
  }, [contactName, amount]);

  // Frequent Contacts logic
  const contactCountMap = transactionHistory.reduce((acc, transaction) => {
    acc[transaction.contactName] = (acc[transaction.contactName] || 0) + 1;
    return acc;
  }, {});

  const frequentContacts = [...new Set(transactionHistory
    .filter(transaction => contactCountMap[transaction.contactName] > 2)
    .map(transaction => transaction.contactName)
  )];

  return (
    <View style={styles.sendMoneyHome}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <LinearGradient
              style={styles.headerSection}
              locations={[0, 0.8]}
              colors={["#e0a340", "#7a5923"]}
            >
              <View style={styles.statusBar} />
              <View style={styles.title}>
                <Text style={styles.label}>
                  <Text style={styles.welcomeBack}>
                    <Text style={styles.welcomeBack1}>Welcome Back</Text>
                    <Text style={styles.text}>{`, `}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.name1}>Name!</Text>
                  </Text>
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.frame3}>
              <View style={styles.header} />
            </View>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.flexBoxHeading}>Send Money</Text>
      {/* Flexbox container */}
      <View style={styles.flexContainer}>
        {/* Move the Pressable inside the flex container */}
        <Pressable
          style={styles.alexFlexBox}
          onPress={() => navigation.navigate("SendMoney")}
        >
          <View style={styles.iconButton}>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={require("../assets/button.png")}
            />
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.newSend}>Your</Text>
            <Text style={styles.newSend}>Contact</Text>
          </View>
        </Pressable>

        {/* Frequent Contacts Section */}
        {frequentContacts.length > 0 && (
          <View style={styles.frequentContactsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {frequentContacts.map((contact, index) => (
                <View key={index} style={styles.frequentContactBox}>
                  <Image
                    style={styles.userIcon}
                    source={require("../assets/user2.png")}
                  />
                  <Text style={styles.transactionText} numberOfLines={2}>{contact}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/* Transaction History Section */}
      <View style={styles.transactionHistoryContainer}>
        <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
        {transactionHistory.map((transaction, index) => (
          <View key={index} style={styles.transactionBox}>
            <Text style={styles.transactionText}>{transaction.contactName}</Text>
            <Text style={styles.transactionText}>₹{transaction.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    left:-22,
    flexDirection: 'row',
   // justifyContent: 'space-between', // Space between the Pressable and Frequent Contacts
    alignItems: 'center', // Align items vertically
    padding: 8,
  },
  flexBoxHeading:{
    fontFamily:FontFamily.montserratMedium,
    fontSize:20,
    top:260,
    left:20,
  },
  sendMoneyHome: {
    position: "relative",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
    height: "100%",
  },
  alexFlexBox: {
    top:250,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    margin: 20, // Adjust this to ensure visibility
    backgroundColor: '#f6f6f6', // Add background color for visibility
    borderRadius: Border.br_5xl,
    elevation: 0, // For some shadow effect
  },
  iconButton: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  buttonIcon: {
    width: "100%",
    height: "100%",
  },
  contactContainer: {
    flexDirection: 'column',
  },
  userIcon:{
    width:50,
    height:50,
  },
  newSend: {
    fontSize: 14,
    textAlign:"center",
    color: Color.blackB100,
  },
  frequentContactsContainer: {
    marginTop: 20,
    padding: 20,
    top:240,
    height:110,
    width:310,
    // marginRight:0,
    backgroundColor: "#F6F6F6",
    borderRadius: Border.br_5xl,
    flexDirection: 'row',
  },
  frequentContactBox: {
    paddingLeft: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal: -5,
    width: 100,
  },
  transactionHistoryContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#F3ECE1",
    borderRadius: Border.br_5xl,
    top:220,
  },
  transactionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 8,
  },
  transactionHistoryTitle:{
    fontSize:20,
    paddingBottom:10,
    fontFamily: FontFamily.montserratMedium,
 },
  transactionText: {
    fontSize: 15,
    color: Color.blackB100,
    textAlign: "center",
  },
  frame: {
    position: "absolute",
    top: 45,
    left: -6,
    width: 476,
    height: 390,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_7xs,
  },
  frame2: {
    width: 458,
    height: 204,
    overflow: "hidden",
    marginLeft: 18,
  },
 
  frame1: {
    width: 476,
    height: 340,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
    gap: Gap.gap_4xs,
  },
  headerSection: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_7xl,
    width: 385,
    height: 204,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: Padding.p_5xl,
    backgroundColor: "transparent",
  },
  statusBar: {
    alignSelf: "stretch",
    height: 36,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  welcomeBack1: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  welcomeBack: {
    color: Color.colorGray_1400,
  },
  name1: {
    color: Color.white,
  },
  label: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width: 203,
    height: 134,
  },
  title: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    height: 209,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_7xs,
    marginTop: -24,
  },
  header: {
    alignSelf: "stretch",
    height: 43,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 155,
    width: 303,
    height: 57,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon: {
    position: "absolute",
    top: 10, //back button
    left: 21,
    width: 40,
    height: 55,
    overflow: "hidden",
  },
});

export default SendMoneyHome;
