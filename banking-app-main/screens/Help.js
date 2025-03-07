import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
const Help = () => {
  const [search, setSearch] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null); // Track selected FAQ to show answer

  const faqs = [
    {
      question: "What if payment is successful but the money has not reached the receiver?",
      answer: "If the payment was successful but the money has not reached the receiver, please check your transaction history and contact customer support."
    },
    {
      question: "When will I receive a refund for a failed UPI payment?",
      answer: "Refunds for failed UPI payments are typically processed within 7-10 business days. You will receive a notification once the refund is issued."
    },
    {
      question: "Can I add more than one Bank Account?",
      answer: "Yes, you can add multiple bank accounts to your profile and choose your preferred account for transactions."
    },
    {
      question: "How do I change my account details?",
      answer: "You can change your account details in the 'Bank Details' section of the app."
    },
    {
      question: "Is my transaction history secure?",
      answer: "Yes, your transaction history is secured with the highest level of encryption to protect your privacy."
    },
    {
      question: "How can I reset my bank account password?",
      answer:
        "To reset your bank account password, go to the login screen and click on the 'Forgot Password' link. You will be asked to enter your registered email or mobile number to receive a reset link.",
    },
    {
      question: "How do I check my account balance?",
      answer:
        "You can check your account balance by logging into your online banking portal or mobile banking app. Additionally, you can check your balance by visiting an ATM or calling customer service.",
    },
    {
      question: "How can I block my lost or stolen debit card?",
      answer:
        "To block your lost or stolen debit card, contact customer service immediately through the banking app or call our helpline. Alternatively, you can log into your account and report the lost card.",
    },
    {
      question: "What should I do if I suspect fraud on my account?",
      answer:
        "If you suspect fraud, immediately contact customer support and report the unauthorized transaction. You can also block your debit or credit card from the mobile app to prevent further issues.",
    },
    {
      question: "How do I apply for a loan?",
      answer:
        "To apply for a loan, log in to your account on the bank's official website or app. Navigate to the 'Loan Services' section, choose the loan type, and submit your application with the necessary documents.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
       <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.1}
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
      <Text style={styles.title}>Help</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search FAQs..."
        value={search}
        onChangeText={setSearch}
      />
      <ScrollView contentContainerStyle={styles.faqContainer}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <Pressable 
              key={index} 
              style={styles.faqItem} 
              onPress={() => setSelectedFAQ(selectedFAQ === index ? null : index)} // Toggle FAQ answer
            >
              <Text style={styles.faqText}>{faq.question}</Text>
              {selectedFAQ === index && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </Pressable>
          ))
        ) : (
          <Text style={styles.noResults}>No FAQs found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    color:"#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  searchBar: {
    
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  faqContainer: {
    paddingBottom: 20,
  },
  faqItem: {
    backgroundColor: "#f9f9f9", // Question background color
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  faqText: {
    fontSize: 16,
    color: "#333",
  },
  faqAnswerContainer: {
     // Different background color for the answer
    
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  faqAnswer: {
    
    paddingTop:10,
    backgroundColor: "#ffffff",
    fontSize: 16, // Increased font size for the answer
    color: "#555",
  },
  noResults: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});



export default Help;
