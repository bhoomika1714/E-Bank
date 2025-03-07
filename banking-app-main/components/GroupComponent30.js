import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent30 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      {/* Life Insurance */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ChildScheme")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-79.png")}
        />
        <Text style={styles.iconLabel}>Life Insurance</Text>
      </Pressable>

      {/* Health Insurance */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HealthInsuranceScreen2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-82.png")}
        />
        <Text style={styles.iconLabel}>Health Insurance</Text>
      </Pressable>

      {/* Vehicle Insurance */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("VehicleInsuranceScreen2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-83.png")}
        />
        <Text style={styles.iconLabel}>Vehicle Insurance</Text>
      </Pressable>

      {/* Home Insurance */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeInsuranceScreen2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-80.png")}
        />
        <Text style={styles.iconLabel}>Home Insurance</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParent: {
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#F2F2F2", // Light gray background
    borderRadius: 20, // Small circular border radius
    alignSelf: "center", // Center the container in its parent
    margin: 10,
    top:"520",
  },
  wrapper: {
    alignItems: "center",
    margin: 15, // Adjusted margin for spacing
    width: "40%", // Adjust width as necessary for layout
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  iconLabel: {
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
});

export default GroupComponent30;
