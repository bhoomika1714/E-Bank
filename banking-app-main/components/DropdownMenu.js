import React, { useMemo, useState } from "react";
import { Text, StyleSheet, View, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DropdownMenu = ({ propPosition, propTop, propLeft, vector, selectedOption, setSelectedOption }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  const dropdownMenuStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propPosition, propTop, propLeft]);

  const handleSelectOption = (option) => {
    setSelectedOption(option); // Update selected option
    setIsDropdownVisible(false); // Close the dropdown
  };

  return (
    <View style={[styles.dropdownMenuContainer, dropdownMenuStyle]}>
      <Pressable style={styles.dropdownMenu} onPress={() => setIsDropdownVisible((prev) => !prev)}>
        <Text style={styles.select}>{selectedOption}</Text>
        <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
      </Pressable>

      {isDropdownVisible && (
        <View style={styles.dropdownList}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleSelectOption(item)} style={styles.option}>
                <Text style={styles.optionText}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownMenuContainer: {
    position: "relative",
    left:228,
  },
  select: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
    flex: 1,
  },
  vectorIcon: {
    width: 12,
    height: 7,
  },
  dropdownMenu: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod_100,
    width: 150, // Increased width for better display
    height: 40, // Adjusted height for proper alignment
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
  },
  dropdownList: {
    position: "absolute",
    top: 45,
    width: 150, // Match dropdown width
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    paddingVertical: Padding.p_xs,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  option: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  optionText: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDark,
  },
});

export default DropdownMenu;

