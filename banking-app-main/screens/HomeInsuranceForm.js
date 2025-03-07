import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  Text, 
  View, 
  Button, 
  Modal , Pressable
} from 'react-native';
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

const HomeInsuranceForm = () => {
  const navigation = useNavigation(); // Use navigation
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    ssn: '',
    address: '',
    phoneNumber: '',
    email: '',
    propertyType: '',
    yearOfConstruction: '',
    squareFootage: '',
    numberOfStories: '',
    roofType: '',
    heatingSystem: '',
    additionalStructures: '',
    homeValue: '',
    mortgageBalance: '',
    claimsHistory: '',
    currentInsurance: '',
    typeOfCoverage: '',
    deductible: '',
    paymentMethod: '',
    billingInfo: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false); // State to manage form submission

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., sending data to an API)
    // For demonstration, we'll just show a modal
    setFormSubmitted(true);
  };

  const goToHome = () => {
    setFormSubmitted(false); // Reset form submission state
    navigation.navigate('Insuarance'); // Navigate to the Home screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Home Insurance Application Form</Text>
      
      {/* Policyholder Information */}
      <Text style={styles.sectionHeader}>1. Personal Information</Text>
      {['fullName', 'dateOfBirth', 'gender', 'maritalStatus', 'ssn'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      {/* Contact Information */}
      <Text style={styles.sectionHeader}>2. Contact Information</Text>
      {['address', 'phoneNumber', 'email'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      {/* Property Information */}
      <Text style={styles.sectionHeader}>3. Property Information</Text>
      {['propertyType', 'yearOfConstruction', 'squareFootage', 'numberOfStories', 'roofType', 'heatingSystem', 'additionalStructures'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      {/* Financial Information */}
      <Text style={styles.sectionHeader}>4. Financial Information</Text>
      {['homeValue', 'mortgageBalance', 'claimsHistory', 'currentInsurance'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      {/* Coverage Information */}
      <Text style={styles.sectionHeader}>5. Coverage Information</Text>
      {['typeOfCoverage', 'deductible'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      {/* Payment Information */}
      <Text style={styles.sectionHeader}>6. Payment Information</Text>
      {['paymentMethod', 'billingInfo'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onChangeText={(value) => handleChange(field, value)}
        />
      ))}

      <Button title="Submit" onPress={handleSubmit} />

      {/* Submission Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.submissionMessage}>Your home insurance application has been submitted successfully!</Text>
            <Button title="Back" onPress={goToHome} />
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
      <Text style={styles.insurance}>Application Form</Text>
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
    left: "10.27%",
    top: "3.02%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.10%",
    height: "3.06%",
    position: "absolute",
  },
  icon2: {
    maxHeight: "130%",
    maxWidth: "135%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "60%",
    width: "90%",
    top:0,
  },  
});

export default HomeInsuranceForm;
