import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UPIPIN4 = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Using route to access params
  const { contactName, contactNumber, amount } = route.params;
  const [upiPin, setUpiPin] = React.useState("");

  const handleChange = (text) => {
    // Clean the input, remove any spaces, and limit it to 4 digits
    const cleanedText = text.replace(/\s/g, "").slice(0, 4);

    // Format the input with spaces after each digit
    const formattedText = cleanedText.replace(/(.{1})/g, "$1 ").trim();

    setUpiPin(formattedText); // Update the state with the formatted value
  };

  const isUPIPinValid = upiPin.replace(/\s/g, "").length === 4; // Check if UPI PIN has 4 digits

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS/Android
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100} // Adjust vertical offset for IOS and Android
    >
      {/* ScrollView to handle dynamic content height */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.upiPin}>
            <Text style={styles.otpAuthentication}>Enter UPI PIN</Text>
            <TextInput
              style={styles.input}
              placeholder="* * * *"
              placeholderTextColor="#000"
              keyboardType="numeric"
              maxLength={7} // 4 digits + 3 spaces
              value={upiPin.replace(/\d/g, "•")} // Replace digits with dots
              onChangeText={handleChange}
            />
            <Image
              style={styles.image111Icon}
              contentFit="cover"
              source={require("../assets/image-111.png")}
            />
            <Text style={styles.bankOfBaroda}>Bank of Baroda</Text>

            {/* Display the contact information */}
            <Text style={styles.detailsText}>Contact Name: {contactName}</Text>
            <Text style={styles.detailsText}>Contact Number: {contactNumber}</Text>
            <Text style={styles.detailsText}>Amount: ₹{amount}</Text>

            {/* Proceed to Pay Button */}
            <Pressable
              style={[
                styles.signIn,
                {
                  backgroundColor: isUPIPinValid
                    ? Color.colorGoldenrod_100
                    : Color.gray4,
                },
              ]}
              onPress={() => {
                if (isUPIPinValid) {
                  navigation.navigate("Info8", {
                    contactName,
                    contactNumber,
                    amount,
                  });

                  // Set timeout to navigate to SendMoneyHome
                  setTimeout(() => {
                    navigation.navigate("SendMoneyHome", {
                      contactName,
                      contactNumber,
                      amount,
                    });
                  }, 2000);
                } else {
                  console.log("Please enter a valid UPI PIN.");
                }
              }}
              disabled={!isUPIPinValid}
            >
              <Text style={styles.text}>Proceed to Pay</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20, // Provide enough padding at the bottom
  },
  otpAuthentication: {
    marginTop: 150,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 25,
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    fontWeight: "700",
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    marginVertical: 20,
    width: "60%",
    alignSelf: "center",
  },
  image111Icon: {
    top: 80,
    left: 180,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bankOfBaroda: {
    top: 127,
    left: 160,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
    color: Color.lightGray11,
  },
  detailsText: {
    fontSize: FontSize.size_m,
    color: Color.blackB100,
    textAlign: "center",
    marginVertical: 5,
  },
  signIn: {
    marginTop: 30,
    height: 56,
    width: "60%",
    borderRadius: Border.br_base,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    fontWeight: "700",
  },
  upiPin: {
    flex: 1,
    backgroundColor: Color.white,
    paddingVertical: 20,
    alignItems: "center",
  },
});

export default UPIPIN4;
