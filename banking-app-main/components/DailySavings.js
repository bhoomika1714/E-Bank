import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DailySavings = ({ usersTop, usersLeft }) => {
  const dailySavingsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", usersTop),
      ...getStyleValue("left", usersLeft),
    };
  }, [usersTop, usersLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.dailySavings, dailySavingsStyle]}>
      <View style={styles.title}>
        <Text style={styles.label}>{`Daily Savings & Lifestyle`}</Text>
      </View>
      <View style={styles.users}>
        <View style={[styles.dailySavings1, styles.donateLayout]}>
          <Pressable
            style={styles.newSendButton}
            onPress={() => navigation.navigate("SavingPlan")}
          >
            <Image
              style={styles.icon9}
              contentFit="cover"
              source={require("../assets/gold-loan2.png")}
            />
            <Text style={[styles.dailySavings2, styles.nameTypo]}>
              Daily Savings
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.donate, styles.donateLayout]}
          onPress={() => navigation.navigate("Donate")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={[styles.icon10, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon101.png")}
          />
          <Text style={styles.nameTypo}>Donate</Text>
        </Pressable>
        <Pressable
          style={[styles.donate, styles.donateLayout]}
          onPress={() => navigation.navigate("EmptyFriendlist")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={[styles.icon11, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={styles.nameTypo}>{`Virtual
Pool `}</Text>
        </Pressable>
        <Pressable
          style={[styles.bookTicket, styles.donateLayout]}
          onPress={() => navigation.navigate("BookTicket")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon9}
            contentFit="cover"
            source={require("../assets/icon12.png")}
          />
          <Text style={styles.nameTypo}>{`Book 
Ticket`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  donateLayout: {
    height: 76,
    width: 54,
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  iconLayout: {
    height: 42,
    overflow: "hidden",
  },
  label: {
    fontSize: 19,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
    marginLeft:-6, //daily sav sec title 
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  icon9: {
    height: 40,
    overflow: "hidden",
    width: 40,
  },
  dailySavings2: {
    display: "flex",
    justifyContent: "center",
    width: 53,
    alignItems: "center",
  },
  newSendButton: {
    height: 70,
    gap: Gap.gap_19xs,
    alignItems: "center",
  },
  dailySavings1: {
    flexDirection: "row",
    marginLeft:-4,
  },
  profilePictureIcon: {
    borderRadius: Border.br_sm,
    width: 55,
    height: 55,
    display: "none",
    overflow: "hidden",
  },
  icon10: {
    width: 43,
  },
  donate: {
    gap: Gap.gap_20xs,
    alignItems: "center",
  },
  icon11: {
    width: 40,
  },
  bookTicket: {
    gap: Gap.gap_18xs,
    alignItems: "center",
  },
  users: {
    width: 339,
    gap: Gap.gap_6xl, //from 5 to 6 it is perfect!
    flexDirection: "row",
  },
  dailySavings: {
    position: "absolute",
    top: 304,
    left: 13,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    gap: Gap.gap_2xs,
  },
});

export default DailySavings;
