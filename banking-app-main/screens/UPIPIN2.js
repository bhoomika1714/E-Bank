import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const UPIPIN2 = () => {
  const navigation = useNavigation();
  const [pin, setPin] = React.useState("");

  // Function to handle input change and limit the length to 4 digits
  const handlePinChange = (value) => {
    if (value.length <= 4) {
      setPin(value);
    }
  };

  // Function to handle the continue button press
  const handleContinue = () => {
    if (pin.length === 4) {
      navigation.navigate("BalanceDisplay"); // Navigate to the info16 page
    } else {
      alert("Please enter a valid 4-digit UPI PIN.");
    }
  };

  return (
    <View style={styles.upiPin}>
      <View style={styles.body}>
        <View style={styles.codeNumber}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={4}
            value={pin}
            onChangeText={handlePinChange}
            secureTextEntry={true} // Mask the input for security
            autoFocus={true}
          />
        </View>
        <Text style={styles.otpAuthentication}>Enter UPI PIN</Text>
      </View>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={412}
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

      {/* Pressable for Check Balance */}
      {/* <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CheckBalance")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable> */}
      <Text style={[styles.checkBalance, styles.label2]}>Check Balance</Text>

      {/* Pressable button for Continue */}
      <Pressable style={styles.buttonSend} onPress={handleContinue}>
        <Text style={[styles.label, styles.labelTypo]}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here...
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.white, //header and continue button text color
    fontWeight: "700",
  },
  label2: {
    textAlign: "center",
    color: Color.black, //header and continue button text color
    fontWeight: "700",
  },
  codeNumber: {
    height: "9.8%",
    width: "83.2%",
    top: "19.16%",
    right: "7.47%",
    bottom: "71.04%",
    left: "9.33%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 60,
    fontSize: 32,
    borderBottomWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    letterSpacing: 8,
  },
  otpAuthentication: {
    marginTop: -331.5,
    width: "81.33%",
    top: "50%",
    left: 40,
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  body: {
    height: "81.65%",
    top: "18.35%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 28,
    top: 30,
    width: 40,
    height: 40,
    position: "absolute",
  },
  checkBalance: {
    top: 33,
    left: 120,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    position: "absolute",
    textAlign:"center",
    
  },
  label: {
    fontSize: FontSize.font_size,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratBold,
  },
  buttonSend: {
    top: 406,
   // left: 27,
   alignSelf:"center",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    width: 327,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  upiPin: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UPIPIN2;
