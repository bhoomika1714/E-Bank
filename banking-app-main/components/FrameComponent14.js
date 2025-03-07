import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderSection from "./HeaderSection";
import { Color, FontSize, FontFamily, Border, Padding, Gap } from "../GlobalStyles";

const FrameComponent14 = () => {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.headerSectionWrapper}>
      <HeaderSection
        propTop={0}
        propLeft={0}
        onMenuPress={toggleDropdown} // Toggle dropdown instead of navigating
        hours="9"
        minutes="41"
        showLocation={false}
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
      />

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <Pressable
            style={[styles.dropdownItem, styles.helpPosition]}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate("Help");
            }}
          >
            <Text style={styles.language1}>Help</Text>
          </Pressable>
          <Pressable
            style={[styles.dropdownItem, styles.helpPosition]}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate("Settings");
            }}
          >
            <Text style={styles.language1}>Settings</Text>
          </Pressable>
          <Pressable
            style={[styles.dropdownItem, styles.helpPosition]}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate("About1");
            }}
          >
            <Text style={styles.language1}>About us</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerSectionWrapper: {
    position: "absolute",
    top: 12,
    left: 13,
    width: 371,
    height: 261,
  },
  dropdown: {
    position: "absolute",
    top: 100, // Adjust this based on where you want the dropdown to appear
    left: 0,
    backgroundColor: Color.colorGray_1700,
    width: 353,
    height: 180,
    borderRadius: Border.br_5xl,
    padding: Padding.p_5xs,
    gap: Gap.gap_16xs,
   
  },
  dropdownItem: {
    marginBottom: 20,
  },
  language1: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "left",
  },
  helpPosition: {
    left: 20,
    position: "relative",
  },
});

export default FrameComponent14;
