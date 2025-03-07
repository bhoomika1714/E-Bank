import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable, ScrollView, Alert, Image, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ApplyScheme = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isEligible, setIsEligible] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState({
    ageProof: null,
    retirementProof: null,
    panPhoto: null,
    bankStatement: null,
  });

  const checkEligibility = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 60 || (ageNum >= 55 && ageNum < 60)) {
      setIsEligible(true);
      Alert.alert("Eligibility Confirmed", "You meet the age eligibility requirements.");
    } else {
      Alert.alert("Eligibility Not Met", "You do not meet the age criteria for this scheme.");
    }
  };

  const handleDocumentSelection = async (documentType) => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result.type === 'success') {
      setSelectedDocuments((prevDocs) => ({ ...prevDocs, [documentType]: result }));
      Alert.alert('Upload Successful', `${documentType} uploaded successfully!`);
    } else {
      Alert.alert('Upload Failed', `Failed to upload ${documentType}. Please try again.`);
    }
  };

  const submitApplication = () => {
    // Check if all fields are filled and all documents are uploaded
    if (!name || !age || !accountNumber) {
      Alert.alert("Incomplete Details", "Please fill in all personal information fields.");
      return;
    }

    if (
      !selectedDocuments.ageProof ||
      !selectedDocuments.retirementProof ||
      !selectedDocuments.panPhoto ||
      !selectedDocuments.bankStatement
    ) {
      Alert.alert("Missing Documents", "Please upload all required documents before submitting.");
      return;
    }

    if (!isEligible) {
      Alert.alert("Eligibility Check Required", "Please check your eligibility first.");
      return;
    }

    // Submit application if all checks are passed
    Alert.alert("Application Submitted", "Your application has been successfully submitted.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={450}
        statusBarHeight={95}
        statusBarTop={0.5}
        statusBarLeft={0.5}
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

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Apply Scheme</Text>

        <Text style={styles.sectionTitle}>Step 1: Confirm Eligibility</Text>
        <Text style={styles.text}>Enter your age to check eligibility:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <Pressable style={styles.button} onPress={checkEligibility}>
          <Text style={styles.buttonText}>Check Eligibility</Text>
        </Pressable>

        {isEligible && (
          <>
            <Text style={styles.sectionTitle}>Step 2: Personal Information</Text>
            <Text style={styles.text}>Full Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.text}>Bank Account Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your bank account number"
              keyboardType="numeric"
              value={accountNumber}
              onChangeText={setAccountNumber}
            />

            <Text style={styles.sectionTitle}>Step 3: Required Documents</Text>
            <Text style={styles.text}>- Proof of age (e.g., Aadhaar, Passport, PAN Card)</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleDocumentSelection('ageProof')}
            >
              <Text style={styles.uploadButtonText}>Upload Proof of Age</Text>
            </TouchableOpacity>

            <Text style={styles.text}>- Proof of Retirement (if applicable)</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleDocumentSelection('retirementProof')}
            >
              <Text style={styles.uploadButtonText}>Upload Proof of Retirement</Text>
            </TouchableOpacity>

            <Text style={styles.text}>- PAN Card and Recent Photograph</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleDocumentSelection('panPhoto')}
            >
              <Text style={styles.uploadButtonText}>Upload PAN Card and Photograph</Text>
            </TouchableOpacity>

            <Text style={styles.text}>- Bank Account Passbook or Statement</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleDocumentSelection('bankStatement')}
            >
              <Text style={styles.uploadButtonText}>Upload Bank Account Statement</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Step 4: Submit Application</Text>
            <Pressable style={styles.submitButton} onPress={submitApplication}>
              <Text style={styles.submitButtonText}>Submit Application</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    color: Color.white,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",    
    paddingTop: 50,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
    color: "#555",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#e0a340",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#e0a340",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ApplyScheme;
