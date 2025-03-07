import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CurrentPlan from "../components/CurrentPlan";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import {
  Padding,
  Border,
  FontSize,
  Color,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const MyPlan = ({ targetAmount }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { balance, daysToTarget } = route.params;

  return (
    <View style={styles.myPlan}>
      <Text style={styles.resultText}>
        Balance: {balance !== undefined ? balance : 0} {/* Displaying 0 if undefined */}
      </Text>
      <Text style={styles.resultText}>
        Days to reach target: {daysToTarget !== undefined ? daysToTarget : 'N/A'} {/* Displaying N/A if undefined */}
      </Text>

      {/* Plans List */}
      <View style={styles.plans}>
        {[
          { month: "APR", plan: "Plan 25", dates: "Apr 1 - Apr 30, 2024", amount: "INR 2,500" },
          { month: "MAR", plan: "Plan 10", dates: "Mar 1 - Mar 31, 2024", amount: "INR 150.40" },
          { month: "FEB", plan: "Plan 25%", dates: "Feb 1 - Feb 28, 2024", amount: "INR 150.40" },
          { month: "JAN", plan: "Plan 5%", dates: "Jan 1 - Jan 31, 2024", amount: "INR 150.40" },
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

      <CurrentPlan />
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft7.png")}
        />
      </View>

      <View style={styles.parent}>
        <View style={[styles.amount, styles.infoFlexBox]}>
          <Text style={styles.label}>{targetAmount}</Text>
          <View style={styles.liner} />
        </View>
      </View>

      <Pressable
        style={[styles.wrapper, styles.exitPosition]}
        onPress={() => navigation.navigate("SavingPlan")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
  
    </View>
  );
};

const styles = StyleSheet.create({
  myPlan: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    top: 350,
    left: 15,
  },
  plans: {
    top: 400,
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

export default MyPlan;
