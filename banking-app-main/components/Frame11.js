import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation();
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsBiometricEnabled(!isBiometricEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security</Text>

      <Pressable
        style={styles.menuItem}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={styles.menuText}>Change Password</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <Pressable
        style={styles.menuItem}
        onPress={() => navigation.navigate("TermCondition")}
      >
        <Text style={styles.menuText}>Privacy Policy</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Biometric</Text>
        <Pressable
          style={[styles.toggle, isBiometricEnabled && styles.toggleActive]}
          onPress={toggleSwitch}
        >
          <View
            style={[
              styles.toggleSwitch,
              isBiometricEnabled && styles.toggleSwitchActive,
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    top: -60,
    backgroundColor: Color.backgroundLight,
    borderRadius: 10,
  },
  header: {
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.m3LabelLarge_size,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  menuText: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.m3LabelLarge_size,
  },
  arrowIcon: {
    right:30,
    width: 24,
    height: 24,
  },
  toggle: {
    right:30,
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro_500,
    justifyContent: "center",
    padding: 2,
  },
  toggleActive: {
    backgroundColor: "black", // Turns black when active
  },
  toggleSwitch: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Color.white,
    transform: [{ translateX: 0 }],
  },
  toggleSwitchActive: {
    transform: [{ translateX: 20 }], // Moves switch to the right when active
  },
});

export default Frame11;
