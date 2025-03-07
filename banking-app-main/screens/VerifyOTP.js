// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

// const VerifyOTP = ({ route, navigation }) => {
//   const { phoneNumber } = route.params;
//   const [otp, setOtp] = useState("");

//   const BACKEND_URL = "http://192.168.29.36:5000/api/user";
//   const VERIFY_OTP_ENDPOINT = "/verifyOtp";

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await fetch(`${BACKEND_URL}${VERIFY_OTP_ENDPOINT}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ phoneNumber, otp }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         Alert.alert("Success", "OTP verified successfully!");
//         navigation.navigate("SetUpiPin", { phoneNumber });
//       } else {
//         Alert.alert("Error", data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "An error occurred while verifying OTP.");
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>Enter the OTP sent to {phoneNumber}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         keyboardType="number-pad"
//         value={otp}
//         onChangeText={setOtp}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
//         <Text style={styles.buttonText}>Verify</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     backgroundColor: Color.white,
//   },
//   title: {
//     fontSize: FontSize.size_lg,
//     fontFamily: FontFamily.montserratBold,
//     color: Color.black,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: FontSize.size_md,
//     fontFamily: FontFamily.montserratRegular,
//     color: Color.gray,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: Color.lightGray10,
//     padding: 10,
//     borderRadius: Border.br_3xs,
//     borderWidth: 1,
//     marginVertical: 10,
//     fontSize: FontSize.size_md,
//     fontFamily: FontFamily.montserratRegular,
//     color: Color.black,
//   },
//   button: {
//     backgroundColor: "#e0a340",
//     padding: 15,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: Color.white,
//     fontSize: FontSize.size_md,
//     fontFamily: FontFamily.montserratBold,
//   },
// });

// export default VerifyOTP;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const VerifyOTP = ({ navigation, route }) => {
  const { phoneNumber } = route.params; // Receive phone number from LoginPage
  const [otp, setOtp] = useState("");

  const BACKEND_URL = "http://192.168.29.36:5000/api/user";
  const VERIFY_OTP_ENDPOINT = "/verifyOtp";

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}${VERIFY_OTP_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      const data = await response.json();
      if (data.success) {
        Alert.alert("Success", "OTP verified successfully.");
        navigation.navigate("SetPin", { phoneNumber });
      } else {
        Alert.alert("Error", data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while verifying OTP.");
      console.error("Verify OTP Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.instruction}>
        Please enter the OTP sent to {phoneNumber}.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
    marginBottom: 10,
  },
  instruction: {
    textAlign: "center",
    fontSize: FontSize.size_md,
    marginBottom: 20,
  },
  input: {
    backgroundColor: Color.lightGray10,
    padding: 10,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    marginVertical: 10,
    fontSize: FontSize.size_1xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
  },
  button: {
    backgroundColor: "#e0a340",
    padding: 15,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratBold,
  },
});

export default VerifyOTP;

