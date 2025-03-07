import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, Button, Modal ,Pressable} from 'react-native';
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

const ApplyForPolicy3 = () => {
  const navigation = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true); // Show confirmation modal upon submission
  };

  const goToHome = () => {
    setFormSubmitted(false); // Reset submission state
    navigation.navigate('Insuarance'); // Navigate back to Insurance screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      {/* <Text style={styles.header}>Life Insurance Application Form</Text> */}

      {/* Personal Information */}
      <Text style={styles.sectionHeader}>1. Personal Information</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" />
      <TextInput style={styles.input} placeholder="Gender" />
      <TextInput style={styles.input} placeholder="Marital Status" />
      <TextInput style={styles.input} placeholder="Social Security Number" />

      {/* Contact Information */}
      <Text style={styles.sectionHeader}>2. Contact Information</Text>
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput style={styles.input} placeholder="Email Address" />

      {/* Occupation and Income */}
      <Text style={styles.sectionHeader}>3. Occupation and Income</Text>
      <TextInput style={styles.input} placeholder="Occupation" />
      <TextInput style={styles.input} placeholder="Annual Income" />
      <TextInput style={styles.input} placeholder="Job Duties" />

      {/* Health Information */}
      <Text style={styles.sectionHeader}>4. Health Information</Text>
      <TextInput style={styles.input} placeholder="Medical History" />
      <TextInput style={styles.input} placeholder="Current Health Status" />
      <TextInput style={styles.input} placeholder="Medications" />
      <TextInput style={styles.input} placeholder="Family Medical History" />

      {/* Lifestyle Information */}
      <Text style={styles.sectionHeader}>5. Lifestyle Information</Text>
      <TextInput style={styles.input} placeholder="Smoking Status" />
      <TextInput style={styles.input} placeholder="Alcohol Consumption" />
      <TextInput style={styles.input} placeholder="Hobbies" />
      <TextInput style={styles.input} placeholder="Travel Plans" />

      {/* Coverage Details */}
      <Text style={styles.sectionHeader}>6. Coverage Details</Text>
      <TextInput style={styles.input} placeholder="Type of Policy" />
      <TextInput style={styles.input} placeholder="Coverage Amount" />
      <TextInput style={styles.input} placeholder="Beneficiary Information" />

      {/* Financial Information */}
      <Text style={styles.sectionHeader}>7. Financial Information</Text>
      <TextInput style={styles.input} placeholder="Net Worth" />
      <TextInput style={styles.input} placeholder="Existing Insurance Policies" />

      {/* Submit Button */}
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
            <Text style={styles.submissionMessage}>Your life insurance application has been submitted successfully!</Text>
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
        onPress={() => navigation.navigate("ChildScheme")}
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
    padding: 88,
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
    marginTop: 15,
    marginBottom: 5,
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
    width: "17.8%",
    height: "3.93%",
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

export default ApplyForPolicy3;
