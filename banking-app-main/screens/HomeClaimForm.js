import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Modal,Pressable } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import StatusBar1 from "../components/StatusBar1";
import { Image } from "expo-image";
import {
  Color,
  Border,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";
const HomeClaimForm = () => {
  const navigation = useNavigation();
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to manage form submission

  const handleDocumentSelection = async (documentType) => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result.type === 'success') {
      setSelectedDocuments((prevDocs) => [...prevDocs, { type: documentType, ...result }]);
      Alert.alert('Upload Successful', `${documentType} uploaded successfully!`);
    } else {
      Alert.alert('Upload Failed', `Failed to upload ${documentType}. Please try again.`);
    }
  };

  const handleSubmit = () => {
    // Show the submission message and update form submission state
    setFormSubmitted(true);
  };

  const goToHome = () => {
    setFormSubmitted(false); // Reset form submission state
    navigation.navigate('Home'); // Navigate to Home screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Home Insurance Claim Form</Text>

      {/* Policyholder Information */}
      <Text style={styles.sectionHeader}>1. Policyholder Information</Text>
      <TextInput style={styles.input} placeholder="Policy Number" />
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" />
      <TextInput style={styles.input} placeholder="Social Security Number" />
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput style={styles.input} placeholder="Email Address" />

      {/* Claim Details */}
      <Text style={styles.sectionHeader}>2. Claim Details</Text>
      <TextInput style={styles.input} placeholder="Claimant Name" />
      <TextInput style={styles.input} placeholder="Relationship to Policyholder" />
      <TextInput style={styles.input} placeholder="Date of Claim Incident (YYYY-MM-DD)" />
      <TextInput
        style={styles.textArea}
        placeholder="Description of Claim Incident"
        multiline
        numberOfLines={4}
      />
      <TextInput style={styles.input} placeholder="Claim Amount" keyboardType="numeric" />

      {/* Supporting Documents */}
      <Text style={styles.sectionHeader}>3. Supporting Documents</Text>
      <Text style={styles.note}>
        Please upload the following documents:
      </Text>

      {/* Upload buttons for each document type */}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleDocumentSelection('Damage Photos')}
      >
        <Text style={styles.uploadButtonText}>Upload Damage Photos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleDocumentSelection('Repair Estimates')}
      >
        <Text style={styles.uploadButtonText}>Upload Repair Estimates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleDocumentSelection('Police Report (if applicable)')}
      >
        <Text style={styles.uploadButtonText}>Upload Police Report (if applicable)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleDocumentSelection('Additional Documentation')}
      >
        <Text style={styles.uploadButtonText}>Upload Additional Documentation</Text>
      </TouchableOpacity>

      {selectedDocuments.map((doc, index) => (
        <Text key={index} style={styles.documentText}>
          {doc.type}: {doc.name} ({doc.size} bytes)
        </Text>
      ))}

      {/* Payment Details */}
      <Text style={styles.sectionHeader}>4. Payment Details</Text>
      <TextInput style={styles.input} placeholder="Bank Name" />
      <TextInput style={styles.input} placeholder="Account Holder Name" />
      <TextInput style={styles.input} placeholder="Account Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="IFSC Code" />

      {/* Submit Button */}
      <Button title="Submit Claim" onPress={handleSubmit} />

      {/* Submission Modal */}
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
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
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
      </View>
      <Text style={styles.insurance}>Claim Form</Text>
      <Pressable
        style={styles.container1}
        onPress={() => navigation.navigate("HomeInsuranceScreen2")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 45,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  documentText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
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
  statusBarParent: {
    top: 0,
    width: 600,
    height: 100,
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  insurance: {
    height: "6.84%",
    width: "75.28%",
    top: "3%",
    left: "32.27%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },  
  container1: {
    left: "9.27%",
    top: "3%",
    right: "80.53%",
    bottom: "91.01%",
    width: "13.12%",
    height: "4%",
    position: "absolute",
  },
  icon2: {
    maxHeight: "130%",
    maxWidth: "135%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "50%",
    width: "70%",
    top:0.02,
  },  
});

export default HomeClaimForm;
