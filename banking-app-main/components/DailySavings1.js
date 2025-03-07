import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const DailySavings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dailySavings}>
      <View style={styles.title}>
        <Text style={styles.label}>{`Daily Savings & Lifestyle`}</Text>
      </View>
      <View style={styles.users}>
        <View style={[styles.users1, styles.users1Layout]}>
          <View style={styles.newSendButtonWrapper}>
            <Pressable
              style={[styles.newSendButton, styles.newSendButtonPosition]}
              onPress={() => navigation.navigate("SavingPlan")}
            >
              <Image
                style={styles.goldLoanIcon}
                contentFit="cover"
                source={require("../assets/gold-loan2.png")}
              />
              <Text style={[styles.dailySavings1, styles.nameTypo]}>
                Daily Savings
              </Text>
            </Pressable>
          </View>
          <View style={styles.alex}>
            <Image
              style={styles.profileIconLayout}
              contentFit="cover"
              source={require("../assets/profile-picture1.png")}
            />
            <Text style={styles.nameTypo}>Alex</Text>
          </View>
          <View style={styles.alex}>
            <Image
              style={styles.profileIconLayout}
              contentFit="cover"
              source={require("../assets/profile-picture2.png")}
            />
            <Text style={styles.nameTypo}>Hamed</Text>
          </View>
        </View>
        <Pressable
          style={[styles.setareh, styles.users1Layout]}
          onPress={() => navigation.navigate("Donate")}
        >
          <Image
            style={[styles.profilePictureIcon2, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan3.png")}
          />
          <Text style={styles.nameTypo}>Donate</Text>
        </Pressable>
        <Pressable
          style={[styles.setareh, styles.users1Layout]}
          onPress={() => navigation.navigate("EmptyFriendlist")}
        >
          <Image
            style={[styles.profilePictureIcon2, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan4.png")}
          />
          <Text style={styles.nameTypo}>{`Virtual
Pool `}</Text>
        </Pressable>
        <Pressable
          style={[styles.setareh, styles.users1Layout]}
          onPress={() => navigation.navigate("BookTicket")}
        >
          <Image
            style={[styles.profilePictureIcon2, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan5.png")}
          />
          <Text style={styles.nameTypo}>{`Book 
Ticket`}</Text>
        </Pressable>
        <View style={styles.alex1}>
          <Image
            style={[styles.profilePictureIcon5, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture1.png")}
          />
          <Text style={[styles.name5, styles.nameTypo]}>Alex</Text>
        </View>
        <View style={styles.alex}>
          <Image
            style={styles.profileIconLayout}
            contentFit="cover"
            source={require("../assets/profile-picture2.png")}
          />
          <Text style={styles.nameTypo}>Hamed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  users1Layout: {
    height: 76,
    width: 54,
  },
  newSendButtonPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  profileIconLayout: {
    height: 55,
    borderRadius: Border.br_sm,
    width: 55,
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  goldLoanIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  dailySavings1: {
    display: "flex",
    justifyContent: "center",
    width: 53,
    alignItems: "center",
  },
  newSendButton: {
    gap: Gap.gap_19xs,
    height: 15,
    alignItems: "center",
  },
  newSendButtonWrapper: {
    height: 15,
    width: 53,
  },
  alex: {
    gap: Gap.gap_12xs,
    display: "none",
    alignItems: "center",
  },
  users1: {
    gap: Gap.gap_7xl,
    flexDirection: "row",
  },
  profilePictureIcon2: {
    display: "none",
  },
  setareh: {
    gap: Gap.gap_16xs,
    alignItems: "center",
  },
  profilePictureIcon5: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  name5: {
    top: 63,
    left: 15,
    position: "absolute",
  },
  alex1: {
    height: 78,
    width: 55,
    display: "none",
  },
  users: {
    width: 339,
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  dailySavings: {
    top: 304,
    left: 5,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
});

export default DailySavings1;
