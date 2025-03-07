import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import Frame6 from "../components/Frame6";
import Frame7 from "../components/Frame7";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile2 = ({ route }) => {
  const { userName, upiId } = route.params || {}; // Destructure the passed parameters
  const [storedUserName, setStoredUserName] = useState("");
  const [storedUpiId, setStoredUpiId] = useState("");
  const navigation = useNavigation();

  // Function to store the values in AsyncStorage
  const storeProfileData = async (userName, upiId) => {
    try {
      await AsyncStorage.setItem("userName", userName);
      await AsyncStorage.setItem("upiId", upiId);
      Alert.alert("Profile Saved", "Your profile has been saved successfully.");
    } catch (e) {
      Alert.alert("Error", "Failed to save profile data.");
    }
  };

  // Function to retrieve the values from AsyncStorage
  const retrieveProfileData = async () => {
    try {
      const savedUserName = await AsyncStorage.getItem("userName");
      const savedUpiId = await AsyncStorage.getItem("upiId");
      if (savedUserName !== null && savedUpiId !== null) {
        setStoredUserName(savedUserName);
        setStoredUpiId(savedUpiId);
      }
    } catch (e) {
      Alert.alert("Error", "Failed to retrieve profile data.");
    }
  };

  useEffect(() => {
    // If new parameters are passed, store them; otherwise, retrieve saved data
    if (userName && upiId) {
      storeProfileData(userName, upiId);
    } else {
      retrieveProfileData();
    }
  }, [userName, upiId]);

  return (
    <View style={styles.profile}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.statusBarParent}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.1}
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
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.tabBar}>
          {/* <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.replace("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628274.png")}
            />
          </Pressable> */}
          <Text style={styles.profile1}>Profile</Text>
          {/* <Pressable
            style={[styles.editIcon, styles.wrapperLayout]}
            onPress={() => useNavigation.replace("EditProfile")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/editicon.png")}
            />
          </Pressable> */}
        </View>
      </View>

      {/* Display the stored userName and upiId in Frame6 */}
      <Frame6 userName={storedUserName || userName} upiId={storedUpiId || upiId} />
      <Frame7 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    position: "absolute",
    //overflow: "hidden",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  wrapperLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarParent: {
    width: 390,
    height: 95,
  },
  frame: {
    left: -15,
    width: 405,
    alignItems: "flex-end",
    top: 0,
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  profile1: {
    top: 4,
    left: 140,
    fontSize: FontSize.size_5xl,
   // lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    width: 88,
    height: 50,
    position: "absolute",
  },
  editIcon: {
    left: 295,
  },
  tabBar: {
    width: 335,
    height: 40,
  },
  frame1: {
    top: 35,
    left: 16,
    width: 358,
  },
  profile: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile2;
