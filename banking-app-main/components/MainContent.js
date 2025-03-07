import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "./ProfilePicture";
import AnotherAccountOption from "./AnotherAccountOption";
import { Padding, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const MainContent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContent}>
      <Header prop=" $" />
      <View style={styles.accountsWrapper}>
        <Pressable
          style={styles.accountOption}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <View
            style={[styles.accountDetails, styles.accountDetailsSpaceBlock]}
          >
            <ProfilePicture />
            <View style={styles.accountInfo}>
              <Text style={[styles.accountName, styles.accountNameFlexBox]}>
                Account Name
              </Text>
              <Text style={[styles.emailgmailcom, styles.accountNameFlexBox]}>
                email@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={[styles.pxBorderBottom, styles.accountDetailsSpaceBlock]}
          >
            <View style={styles.pxBorderBottomChild} />
          </View>
        </Pressable>
        <View style={styles.accountOption}>
          <View
            style={[styles.accountDetails, styles.accountDetailsSpaceBlock]}
          >
            <ProfilePicture />
            <View style={styles.accountInfo}>
              <Text style={[styles.accountName, styles.accountNameFlexBox]}>
                Account Name
              </Text>
              <Text style={[styles.emailgmailcom, styles.accountNameFlexBox]}>
                email@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={[styles.pxBorderBottom, styles.accountDetailsSpaceBlock]}
          >
            <View style={styles.pxBorderBottomChild} />
          </View>
        </View>
        <AnotherAccountOption />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountDetailsSpaceBlock: {
    paddingHorizontal: Padding.p_21xl,
    alignSelf: "stretch",
  },
  accountNameFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  accountName: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.colorDarkslategray_500,
  },
  emailgmailcom: {
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 16,
    fontFamily: FontFamily.m3TitleLarge,
    color: Color.colorDimgray_500,
  },
  accountInfo: {
    flex: 1,
  },
  accountDetails: {
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
  pxBorderBottomChild: {
    backgroundColor: Color.colorGainsboro_300,
    height: 1,
    alignSelf: "stretch",
  },
  pxBorderBottom: {
    paddingVertical: 0,
  },
  accountOption: {
    alignSelf: "stretch",
  },
  accountsWrapper: {
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  mainContent: {
    justifyContent: "center",
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default MainContent;
