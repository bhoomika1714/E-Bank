import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import CompanyLogo from "./CompanyLogo";
import { FontSize, Color, FontFamily, Gap, Padding } from "../GlobalStyles";

const Header = ({ prop }) => {
  return (
    <View style={[styles.header, styles.headerFlexBox]}>
      <CompanyLogo />
      <View style={[styles.headerText, styles.headerFlexBox]}>
        <Text style={[styles.chooseAnAccount, styles.chooseAnAccountFlexBox]}>
          Choose an account
        </Text>
        <Text
          style={[styles.toContinueToContainer, styles.chooseAnAccountFlexBox]}
        >
          <Text style={styles.toContinueToClr}>to continue to</Text>
          <Text style={styles.company}> Company</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  chooseAnAccountFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  chooseAnAccount: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    color: Color.colorGray_500,
    fontFamily: FontFamily.m3TitleLarge,
  },
  toContinueToClr: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.m3TitleLarge,
  },
  company: {
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.colorRoyalblue_100,
  },
  toContinueToContainer: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
  },
  headerText: {
    gap: Gap.gap_12xs,
  },
  header: {
    height: 228,
    paddingHorizontal: Padding.p_21xl,
    paddingTop: Padding.p_9xs,
    gap: Gap.gap_9xs,
  },
});

export default Header;
