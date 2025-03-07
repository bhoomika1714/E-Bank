// import * as React from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
// import { StyleSheet } from "react-native";
// import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

// const LoginPage = ({ navigation }) => {
//   const [phoneNumber, setPhoneNumber] = React.useState("");
//   const [userName, setUserName] = React.useState("");
//   const [otp, setOtp] = React.useState("");
//   const [atmPin, setAtmPin] = React.useState("");
//   const [upiPin, setUpiPin] = React.useState("");
//   const [isOtpSent, setIsOtpSent] = React.useState(false);
//   const [isOtpVerified, setIsOtpVerified] = React.useState(false);

//   // Backend URL and Endpoints
//   const BACKEND_URL = "http://192.168.29.36:5000/api/user";

//   const SEND_OTP_ENDPOINT = "/sendOtp";
//   const VERIFY_OTP_ENDPOINT = "/verifyOtp";
//   const SET_UPI_PIN_ENDPOINT = "/setUpiPin";

//   const handleSendOtp = async () => {
//     if (phoneNumber.length !== 13) {
//       Alert.alert("Error", "Please enter a valid 10-digit phone number.");
//       return;
//     }

//     try {
//       const response = await fetch(`${BACKEND_URL}${SEND_OTP_ENDPOINT}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ phoneNumber }),
//       });
//       const data = await response.json();
//       if (data.success) {
//         setIsOtpSent(true);
//         Alert.alert("OTP Sent", `An OTP has been sent to ${phoneNumber}`);

//         // Navigate to VerifyOTP page, passing necessary data
//         navigation.navigate("VerifyOTP", { phoneNumber });
//       } else {
//         Alert.alert("Error", data.message || "Failed to send OTP.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "An error occurred while sending OTP.");
//       console.error(error);
//     }
//   };

//   // const handleVerifyOtp = async () => {
//   //   try {
//   //     const response = await fetch(`${BACKEND_URL}${VERIFY_OTP_ENDPOINT}`, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ phoneNumber, otp }),
//   //     });
//   //     const data = await response.json();
//   //     if (data.success) {
//   //       setIsOtpVerified(true);
//   //       Alert.alert("Success", "OTP verified successfully.");
//   //     } else {
//   //       Alert.alert("Error", data.message || "Invalid OTP. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     Alert.alert("Error", "An error occurred while verifying OTP.");
//   //     console.error(error);
//   //   }
//   // };


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
//       console.log("OTP Verification Response:", data);
  
//       if (data.success) {
//         setIsOtpVerified(true);
//         Alert.alert("Success", "OTP verified successfully.");
//       } else {
//         Alert.alert("Error", data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "An error occurred while verifying OTP.");
//       console.error("OTP Verification Error:", error);
//     }
//   };
  
//   const handleSetUpiPin = async () => {
//     if (atmPin.length === 4 && upiPin.length === 4) {
//       const upiId = `${phoneNumber}@bank`;

//       try {
//         const response = await fetch(`${BACKEND_URL}${SET_UPI_PIN_ENDPOINT}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phoneNumber, atmPin, upiPin, userName, upiId }),
//         });
//         const data = await response.json();
//         if (data.success) {
//           // Navigate to Profile2 with userName and upiId as params
//           navigation.navigate("Profile2", { userName, upiId });

//           setTimeout(() => {
//             // Reset navigation stack and navigate to Home screen
//             navigation.reset({
//               index: 0,
//               routes: [{ name: "Home" }], // Reset the stack to just the Home screen
//             });
//           }, 0);
//         } else {
//           Alert.alert("Error", data.message || "Failed to set UPI PIN.");
//         }
//       } catch (error) {
//         Alert.alert("Error", "An error occurred while setting UPI PIN.");
//         console.error(error);
//       }
//     } else {
//       Alert.alert("Error", "Please enter valid ATM and UPI PINs.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.frame}>
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/LoginImg.png")}
//         />
//       </View>
//       <View style={[styles.content, styles.contentLayout]}>
//         <View style={styles.start}>
//           <View style={styles.textGroup}>
//             <Text style={[styles.title, styles.titleTypo]}>Welcome</Text>
//             <Text style={styles.description}>
//               EasyPay, Paving the Way to Your Financial Future
//             </Text>
//           </View>
//         </View>
//       </View>

//       {!isOtpSent && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Your Name"
//             value={userName}
//             onChangeText={setUserName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {isOtpSent && !isOtpVerified && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             keyboardType="number-pad"
//             value={otp}
//             onChangeText={setOtp}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
//             <Text style={styles.buttonText}>Continue</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {isOtpVerified && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="ATM PIN"
//             keyboardType="number-pad"
//             secureTextEntry={true}
//             value={atmPin}
//             onChangeText={setAtmPin}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="New UPI PIN"
//             keyboardType="number-pad"
//             secureTextEntry={true}
//             value={upiPin}
//             onChangeText={setUpiPin}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSetUpiPin}>
//             <Text style={styles.buttonText}>Set UPI PIN</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   titleTypo: {
//     textAlign: "center",
//     fontSize: 24,
//     paddingBottom: 10,
//   },
//   description: {
//     textAlign: "center",
//     paddingBottom: 30,
//   },
//   input: {
//     backgroundColor: Color.lightGray10,
//     padding: 10,
//     borderRadius: Border.br_3xs,
//     borderWidth: 1,
//     marginVertical: 10,
//     fontSize: FontSize.size_1xs,
//     fontFamily: FontFamily.montserratRegular,
//     color: Color.black,
//   },
//   button: {
//     backgroundColor: "#e0a340",
//     padding: 15,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: Color.white,
//     fontSize: FontSize.size_sm,
//     fontFamily: FontFamily.montserratBold,
//   },
//   icon: {
//     height: 60,
//     width: 60,
//     paddingTop: 70,
//   },
//   frame: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
// });

// export default LoginPage;


// import * as React from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
// import { StyleSheet } from "react-native";
// import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
// import { VerifyOTP } from './VerifyOTP';
// const LoginPage = ({ navigation }) => {
//   const [phoneNumber, setPhoneNumber] = React.useState("");
//   const [userName, setUserName] = React.useState("");
//   const [otp, setOtp] = React.useState("");
//   const [atmPin, setAtmPin] = React.useState("");
//   const [upiPin, setUpiPin] = React.useState("");
//   const [isOtpSent, setIsOtpSent] = React.useState(false);
//   const [isOtpVerified, setIsOtpVerified] = React.useState(false);

//   const BACKEND_URL = "http://192.168.29.36:5000/api/user";
//   const SEND_OTP_ENDPOINT = "/sendOtp";
//   const VERIFY_OTP_ENDPOINT = "/verifyOtp";
//   const SET_UPI_PIN_ENDPOINT = "/setUpiPin";

//   const handleSendOtp = async () => {
//     if (phoneNumber.length !== 13) {
//       Alert.alert("Error", "Please enter a valid 10-digit phone number.");
//       return;
//     }

//     try {
//       const response = await fetch(`${BACKEND_URL}${SEND_OTP_ENDPOINT}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ phoneNumber }),
//       });
//       const data = await response.json();
//       if (data.success) {
//         // setIsOtpSent(true); // Ensure state updates correctly
//         Alert.alert("OTP Sent", `An OTP has been sent to ${phoneNumber}`);
//         setIsOtpSent(true);
//         navigation.navigate('VerifyOTP');
//       } else {
//         Alert.alert("Error", data.message || "Failed to send OTP.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "An error occurred while sending OTP.");
//       console.error("Send OTP Error:", error);
//     }
//   };

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
//         setIsOtpVerified(true);
//         Alert.alert("Success", "OTP verified successfully.");
//       } else {
//         Alert.alert("Error", data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "An error occurred while verifying OTP.");
//       console.error("Verify OTP Error:", error);
//     }
//   };

//   const handleSetUpiPin = async () => {
//     if (atmPin.length === 4 && upiPin.length === 4) {
//       const upiId = `${phoneNumber}@bank`;

//       try {
//         const response = await fetch(`${BACKEND_URL}${SET_UPI_PIN_ENDPOINT}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phoneNumber, atmPin, upiPin, userName, upiId }),
//         });
//         const data = await response.json();
//         if (data.success) {
//           navigation.navigate("Profile2", { userName, upiId });
//           navigation.reset({
//             index: 0,
//             routes: [{ name: "Home" }],
//           });
//         } else {
//           Alert.alert("Error", data.message || "Failed to set UPI PIN.");
//         }
//       } catch (error) {
//         Alert.alert("Error", "An error occurred while setting UPI PIN.");
//         console.error("Set UPI PIN Error:", error);
//       }
//     } else {
//       Alert.alert("Error", "Please enter valid ATM and UPI PINs.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.frame}>
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/LoginImg.png")}
//         />
//       </View>
//       <View style={[styles.content, styles.contentLayout]}>
//         <View style={styles.start}>
//           <View style={styles.textGroup}>
//             <Text style={[styles.title, styles.titleTypo]}>Welcome</Text>
//             <Text style={styles.description}>
//               EasyPay, Paving the Way to Your Financial Future
//             </Text>
//           </View>
//         </View>
//       </View>

//       {!isOtpSent && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Your Name"
//             value={userName}
//             onChangeText={setUserName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {isOtpSent && !isOtpVerified && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             keyboardType="number-pad"
//             value={otp}
//             onChangeText={setOtp}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
//             <Text style={styles.buttonText}>Continue</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {isOtpVerified && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="ATM PIN"
//             keyboardType="number-pad"
//             secureTextEntry={true}
//             value={atmPin}
//             onChangeText={setAtmPin}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="New UPI PIN"
//             keyboardType="number-pad"
//             secureTextEntry={true}
//             value={upiPin}
//             onChangeText={setUpiPin}
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSetUpiPin}>
//             <Text style={styles.buttonText}>Set UPI PIN</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   titleTypo: {
//     textAlign: "center",
//     fontSize: 24,
//     paddingBottom: 10,
//   },
//   description: {
//     textAlign: "center",
//     paddingBottom: 30,
//   },
//   input: {
//     backgroundColor: Color.lightGray10,
//     padding: 10,
//     borderRadius: Border.br_3xs,
//     borderWidth: 1,
//     marginVertical: 10,
//     fontSize: FontSize.size_1xs,
//     fontFamily: FontFamily.montserratRegular,
//     color: Color.black,
//   },
//   button: {
//     backgroundColor: "#e0a340",
//     padding: 15,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: Color.white,
//     fontSize: FontSize.size_sm,
//     fontFamily: FontFamily.montserratBold,
//   },
//   icon: {
//     height: 60,
//     width: 60,
//     paddingTop: 70,
//   },
//   frame: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
// });

// export default LoginPage;


import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const BACKEND_URL = "http://192.168.29.36:5000/api/user";
  const SEND_OTP_ENDPOINT = "/sendOtp";

  const handleSendOtp = async () => {
    // if (phoneNumber.length !== 13) {
    //   Alert.alert("Error", "Please enter a valid 10-digit phone number.");
    //   return;
    // }
    if (!/^\+91\d{10}$/.test(phoneNumber)) {
      Alert.alert("Error", "Please enter a valid phone number with country code (e.g., +918073481121).");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}${SEND_OTP_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();
      if (data.success) {
        Alert.alert("OTP Sent", `An OTP has been sent to ${phoneNumber}`);
        navigation.navigate("VerifyOTP", { phoneNumber }); // Pass phoneNumber for OTP verification
      } else {
        Alert.alert("Error", data.message || "Failed to send OTP.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while sending OTP.");
      console.error("Send OTP Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/LoginImg.png")}
        />
      </View>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.start}>
          <View style={styles.textGroup}>
            <Text style={[styles.title, styles.titleTypo]}>Welcome</Text>
            <Text style={styles.description}>
              EasyPay, Paving the Way to Your Financial Future
            </Text>
          </View>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  titleTypo: {
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 10,
  },
  description: {
    textAlign: "center",
    paddingBottom: 30,
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
  icon: {
    height: 60,
    width: 60,
    paddingTop: 70,
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default LoginPage;
