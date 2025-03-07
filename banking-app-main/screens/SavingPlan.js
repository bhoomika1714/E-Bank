import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import NewPlan from "../components/NewPlan";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SavingPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.savingPlan}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icon} source={require("../assets/group-1272628274.png")} />
        </Pressable>

        {/* Header Title */}
        <Text style={styles.headerText}>Saving Plan</Text>
      </View>

      {/* Insights and Statistics */}
      <View style={styles.options}>
        <Text style={styles.statistics}>Statistics</Text>
      </View>

      {/* New Plan Component */}
      <NewPlan />

      {/* Plans List */}
      <View style={styles.plans}>
        {[
          { month: "APR", plan: "Plan 25", dates: "Apr 1 - Apr 30, 2022", amount: "INR 2,500" },
          { month: "MAR", plan: "Plan 10", dates: "Mar 1 - Mar 31, 2022", amount: "INR 150.40" },
          { month: "FEB", plan: "Plan 25%", dates: "Feb 1 - Feb 28, 2022", amount: "INR 150.40" },
          { month: "JAN", plan: "Plan 5%", dates: "Jan 1 - Jan 31, 2022", amount: "INR 150.40" },
        ].map((item, index) => (
          <View key={index} style={styles.plan}>
            <View style={styles.info}>
              <View style={styles.monthWrapper}>
                <Text style={styles.month}>{item.month}</Text>
              </View>
              <Text style={styles.planDetails}>
                {item.plan}{"\n"}
                <Text style={styles.dates}>{item.dates}</Text>
              </Text>
            </View>
            <View style={styles.amountWrapper}>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savingPlan: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  headerBar: {
    width: "100%",
    height: 80,
    backgroundColor: Color.colorGoldenrod_100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30, // Adjust for status bar if needed
  },
  backButton: {
    width: 40,
    height: 40,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    flex: 1,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    marginLeft: -40, // Adjust to center the text when there's a back button
  },
  options: {
    alignItems: "center",
    marginVertical: 20,
  },
  statistics: {
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.colorGray_2400,
    fontFamily: FontFamily.helvetica,
  },
  plans: {
    top: 350,
    width: "90%",
  },
  plan: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_31xl,
    padding: 10,
    marginVertical: 5,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  monthWrapper: {
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  month: {
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.colorGoldenrod_100,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  planDetails: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_2400,
    fontFamily: FontFamily.interRegular,
  },
  dates: {
    color: Color.white,
    fontSize: FontSize.size_smi,
  },
  amountWrapper: {
    borderColor: Color.colorGray_2500,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    padding: 5,
  },
  amount: {
    color: Color.white,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
  },
});

export default SavingPlan;

