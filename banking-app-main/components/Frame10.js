import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import LanguageDropdown from "./LanguageDropdown";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>General</Text>

      <Pressable
        style={styles.menuItem}
        onPress={() => navigation.navigate("Language")}
      >
        <Text style={styles.menuText}>Language</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <Pressable
        style={styles.menuItem}
        onPress={() => navigation.navigate("About1")}
      >
        <Text style={styles.menuText}>Contact Us</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Notifications</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </View>

      <Pressable
        style={styles.menuItem}
        onPress={() => navigation.navigate("Profile2")}
      >
        <Text style={styles.menuText}>My Profile</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <LanguageDropdown arrow={require("../assets/arrow.png")} showArrowIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 120, // Space at the top of the container
    backgroundColor: Color.backgroundLight,
    borderRadius: 10,
    alignItems: "flex-start",
    left:10,
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
    width: "100%",
    paddingVertical: 15,
  },
  menuText: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.m3LabelLarge_size,
  },
  arrowIcon: {
    right:20,
    width: 24,
    height: 24,
  },
});

export default Frame10;
