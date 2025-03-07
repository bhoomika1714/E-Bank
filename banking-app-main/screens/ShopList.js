import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShopList = () => {
  const navigation = useNavigation();

  // Function to open app or website
  const openAppOrWebsite = async (url, appUrl) => {
    try {
      const supported = await Linking.canOpenURL(appUrl);
      if (supported) {
        await Linking.openURL(appUrl); // Opens the app if installed
      } else {
        await Linking.openURL(url); // Opens the website if app is not installed
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open the link");
    }
  };

  return (
    <View style={styles.shopList}>
      {/* StatusBar */}
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={500}
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
      />

      {/* Title Section */}
      <Text style={styles.title}>Shopping</Text>

      {/* Flipkart Section */}
      <Pressable
        style={styles.iconContainer}
        onPress={() =>
          openAppOrWebsite("https://www.flipkart.com", "flipkart://")
        }
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/flipkart-iconicons-1.png")}
        />
        <Text style={styles.iconText}>Flipkart</Text>
      </Pressable>

      {/* Amazon Section */}
      <Pressable
        style={styles.iconContainer}
        onPress={() => openAppOrWebsite("https://www.amazon.com", "amazon://")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          //source={require("../assets/amazon.jpg")}
        />
        <Text style={styles.iconText}>Amazon</Text>
      </Pressable>

      {/* Back to Home Navigation */}
      <Pressable
        style={styles.navigationWrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shopList: {
    flex: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingTop: 20, // Adjusted padding for better spacing
  },
  title: {
    //fontSize: FontSize.size_2xl,
    size_2xl: 70,
    fontWeight: "bold",
    color: Color.blackB100,
    textAlign: "center",
    marginBottom: 67, // Adjusted margin for spacing
    fontFamily: FontFamily.dMSansBold,
    top: 45,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
  },
  iconLayout: {
    height: 50,
    width: 50,
    borderRadius: Border.br_3xs,
    marginRight: 20,
  },
  iconText: {
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "left", // Fixed text alignment
  },
  navigationWrapper: {
    position: "absolute",
    bottom: 10,
    left: 20,
    width: 40,
    height: 50,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
});

export default ShopList;