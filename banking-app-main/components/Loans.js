import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Loans = ({ propTop, propLeft }) => {
  const loansStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.loans, loansStyle]}>
      <View style={styles.title}>
        <Text style={styles.label}>{`Loans & Schemes`}</Text>
      </View>
      <View style={styles.users}>
        <Pressable
          style={[styles.insuarance, styles.loanLayout]}
          onPress={() => navigation.navigate("Insuarance")}
        >
          <Image
            style={styles.insuranceIcon}
            contentFit="cover"
            source={require("../assets/gold-loan.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>Insurance</Text>
        </Pressable>

        <Pressable
          style={[styles.loan, styles.loanLayout]}
          onPress={() => navigation.navigate("LoanApply")}
        >
          <Image
            style={styles.insuranceIcon}
            contentFit="cover"
            source={require("../assets/gold-loan1.png")}
          />
          <Text style={[styles.name1, styles.nameTypo]}>Loans</Text>
        </Pressable>

        <Pressable
          style={[styles.schemes, styles.schemesLayout]}
          onPress={() => navigation.navigate("SchemesOptions")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
          <Text style={[styles.name2, styles.schemesLayout]}>Schemes</Text>
        </Pressable>

        <Pressable
          style={[styles.schemes1, styles.schemesLayout]}
          onPress={() => navigation.navigate("FixedDepositScreen")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector23.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>{`Check \nDeposit`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loanLayout: {
    height: 76,
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  schemesLayout: {
    width: 56,
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  insuranceIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  name: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  insuarance: {
    width: 60,
    gap: Gap.gap_12xs,
  },
  name1: {
    fontSize: FontSize.size_2xs,
  },
  loan: {
    width: 54,
    gap: Gap.gap_10xs,
  },
  vectorIcon: {
    width: 30,
    height: 38,
  },
  name2: {
    display: "flex",
    justifyContent: "center",
    height: 28,
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  schemes: {
    height: 80,
    gap: Gap.gap_17xs,
  },
  vectorIcon1: {
    width: 38,
    height: 38,
  },
  schemes1: {
    gap: Gap.gap_9xs,
  },
  users: {
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  loans: {
    position: "absolute",
    top: 456,
    left: 7,
    backgroundColor: Color.white,
    width: 387,
    height: 126,
    paddingLeft: Padding.p_7xl,
    paddingRight: Padding.p_5xl,
    gap: Gap.gap_2xs,
  },
});

export default Loans;

