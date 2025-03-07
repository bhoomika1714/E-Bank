import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button, Modal,Pressable } from 'react-native';
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

const HealthInsuranceApplicationForm = () => {
  const navigation = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form state variables
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [ssn, setSsn] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [dependentInfo, setDependentInfo] = useState([{ name: '', dateOfBirth: '', relationship: '' }]);
  const [occupation, setOccupation] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [currentHealthStatus, setCurrentHealthStatus] = useState('');
  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState('');
  const [tobaccoUse, setTobaccoUse] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');
  const [exerciseHabits, setExerciseHabits] = useState('');
  const [typeOfCoverage, setTypeOfCoverage] = useState('');
  const [coverageLevel, setCoverageLevel] = useState('');
  const [preExistingConditions, setPreExistingConditions] = useState('');

  const handleSubmit = () => {
    // Show confirmation modal upon submission
    setFormSubmitted(true);
  };

  const goToHome = () => {
    // Reset submission state and navigate back to Insurance screen
    setFormSubmitted(false);
    navigation.navigate('Insuarance');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Health Insurance Application Form</Text>

      <Text style={styles.sectionHeader}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" value={dateOfBirth} onChangeText={setDateOfBirth} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Marital Status" value={maritalStatus} onChangeText={setMaritalStatus} />
      <TextInput style={styles.input} placeholder="Social Security Number" value={ssn} onChangeText={setSsn} />

      <Text style={styles.sectionHeader}>Contact Information</Text>
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput style={styles.input} placeholder="Email Address" value={emailAddress} onChangeText={setEmailAddress} />

      <Text style={styles.sectionHeader}>Dependent Information</Text>
      {dependentInfo.map((dependent, index) => (
        <View key={index} style={styles.dependentContainer}>
          <TextInput style={styles.input} placeholder="Dependent Name" value={dependent.name} onChangeText={(text) => {
            const newDependents = [...dependentInfo];
            newDependents[index].name = text;
            setDependentInfo(newDependents);
          }} />
          <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" value={dependent.dateOfBirth} onChangeText={(text) => {
            const newDependents = [...dependentInfo];
            newDependents[index].dateOfBirth = text;
            setDependentInfo(newDependents);
          }} />
          <TextInput style={styles.input} placeholder="Relationship" value={dependent.relationship} onChangeText={(text) => {
            const newDependents = [...dependentInfo];
            newDependents[index].relationship = text;
            setDependentInfo(newDependents);
          }} />
        </View>
      ))}

      <Text style={styles.sectionHeader}>Employment Information</Text>
      <TextInput style={styles.input} placeholder="Occupation" value={occupation} onChangeText={setOccupation} />
      <TextInput style={styles.input} placeholder="Employment Status" value={employmentStatus} onChangeText={setEmploymentStatus} />
      <TextInput style={styles.input} placeholder="Annual Income" value={annualIncome} keyboardType="numeric" onChangeText={setAnnualIncome} />

      <Text style={styles.sectionHeader}>Health History</Text>
      <TextInput style={styles.input} placeholder="Medical History" value={medicalHistory} onChangeText={setMedicalHistory} />
      <TextInput style={styles.input} placeholder="Current Health Status" value={currentHealthStatus} onChangeText={setCurrentHealthStatus} />
      <TextInput style={styles.input} placeholder="Medications" value={medications} onChangeText={setMedications} />
      <TextInput style={styles.input} placeholder="Allergies" value={allergies} onChangeText={setAllergies} />
      <TextInput style={styles.input} placeholder="Family Medical History" value={familyMedicalHistory} onChangeText={setFamilyMedicalHistory} />

      <Text style={styles.sectionHeader}>Lifestyle Information</Text>
      <TextInput style={styles.input} placeholder="Tobacco Use" value={tobaccoUse} onChangeText={setTobaccoUse} />
      <TextInput style={styles.input} placeholder="Alcohol Consumption" value={alcoholConsumption} onChangeText={setAlcoholConsumption} />
      <TextInput style={styles.input} placeholder="Exercise Habits" value={exerciseHabits} onChangeText={setExerciseHabits} />

      <Text style={styles.sectionHeader}>Insurance Coverage Information</Text>
      <TextInput style={styles.input} placeholder="Type of Coverage" value={typeOfCoverage} onChangeText={setTypeOfCoverage} />
      <TextInput style={styles.input} placeholder="Coverage Level" value={coverageLevel} onChangeText={setCoverageLevel} />
      <TextInput style={styles.input} placeholder="Pre-existing Conditions" value={preExistingConditions} onChangeText={setPreExistingConditions} />

      <Button title="Submit Application" onPress={handleSubmit} />

      {/* Submission Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.submissionMessage}>Your health insurance application has been submitted successfully!</Text>
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
        onPress={() => navigation.navigate("HealthInsuranceScreen2")}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    left: "8.27%",
    top: "3%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.25%",
    height: "3%",
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

export default HealthInsuranceApplicationForm;
