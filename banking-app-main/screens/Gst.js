import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Text,
} from "react-native";
import StatusBar1 from "../components/StatusBar1"; // Importing StatusBar1

const Gst = () => {
  // Function to open GST Payment Portal
  const openGSTPaymentPortal = () => {
    const url = "https://payment.gst.gov.in/payment/"; // GST Payment Portal
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't open the link: ", err)
    );
  };

  // Function to open Income Tax Payment Portal
  const openTaxPaymentPortal = () => {
    const url = "https://www.incometax.gov.in/iec/foportal/"; // Income Tax Payment Portal
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't open the link: ", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* StatusBar1 Component */}
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={900}
        statusBarHeight={90}
        statusBarTop={0}
        statusBarLeft={0}
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
        title="GST and Taxes" // StatusBar1 Title
        titleStyle={styles.statusBarTitle}
      />

      {/* Title Section */}
      <Text style={styles.titleSection}>GST and Taxes</Text>

      {/* Buttons for GST Payment and Online Tax Payment */}
      <TouchableOpacity style={styles.button} onPress={openGSTPaymentPortal}>
        <Text style={styles.buttonText}>Pay GST</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openTaxPaymentPortal}>
        <Text style={styles.buttonText}>Online Tax Payment</Text>
      </TouchableOpacity>

      {/* Advertisement Section */}
      <View style={styles.advertisement}>
        <Text style={styles.adTitle}>Need Help with GST?</Text>
        <Text style={styles.adText}>
          Get professional assistance for GST filing and compliance. Call us at
          1800-123-GST or visit{" "}
          <Text
            style={styles.adLink}
            onPress={() =>
              Linking.openURL("https://www.gsthelp.com").catch((err) =>
                console.error("Couldn't open the link: ", err)
              )
            }
          >
            gsthelp.com
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
  },
  statusBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    // marginTop: , // Adjust positioning inside the status bar
  },
  titleSection: {
    top: -190,
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 20, // Adds space around the title
    marginTop: 1,
  },
  button: {
    backgroundColor: "#e0a340",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    top: -130,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  advertisement: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#ffeeba",
    borderRadius: 10,
    alignItems: "center",
  },
  adTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#856404",
    marginBottom: 100,
  },
  adText: {
    fontSize: 16,
    color: "#856404",
    textAlign: "center",
  },
  adLink: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});

export default Gst;