import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const Transactions1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactions}>
      <View style={styles.title}>
        <Text style={styles.label}>Transactions</Text>
      </View>
      <View style={styles.users}>
        <Pressable
          style={[styles.setareh, styles.setarehLayout]}
          onPress={() => navigation.navigate("SendMoneyHome")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan10.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>{`
Send 
money`}</Text>
        </Pressable>
        <Pressable
          style={[styles.setareh, styles.setarehLayout]}
          onPress={() => navigation.navigate("RequestMoney")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan11.png")}
          />
          <View style={styles.nameWrapper}>
            <Text style={styles.nameTypo}>{`
Request
money`}</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.setareh, styles.setarehLayout]}
          onPress={() => navigation.navigate("CheckBalance")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan12.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>{`
Check
Balance`}</Text>
        </Pressable>
        <Pressable
          style={[styles.newSendButton, styles.alexFlexBox]}
          onPress={() => navigation.navigate("PayBills")}
        >
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan13.png")}
          />
          <Text style={styles.nameTypo}>Pay Bills</Text>
        </Pressable>
        <View style={[styles.alex, styles.alexFlexBox]}>
          <Image
            style={[styles.profilePictureIcon3, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture1.png")}
          />
          <Text style={styles.nameTypo}>Alex</Text>
        </View>
        <View style={[styles.alex, styles.alexFlexBox]}>
          <Image
            style={[styles.profilePictureIcon3, styles.profileIconLayout]}
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
  setarehLayout: {
    height: 76,
    width: 54,
  },
  profileIconLayout: {
    height: 55,
    width: 55,
    borderRadius: Border.br_sm,
    overflow: "hidden",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  alexFlexBox: {
    gap: Gap.gap_12xs,
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
    width: 184,
    alignItems: "center",
    flexDirection: "row",
  },
  profilePictureIcon: {
    display: "none",
    overflow: "hidden",
  },
  goldLoanIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  name: {
    marginTop: -7,
  },
  setareh: {
    alignItems: "center",
  },
  nameWrapper: {
    justifyContent: "center",
    marginTop: -7,
    alignItems: "center",
    flexDirection: "row",
  },
  newSendButton: {
    height: 76,
    width: 54,
  },
  profilePictureIcon3: {
    overflow: "hidden",
  },
  alex: {
    display: "none",
  },
  users: {
    width: 351,
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  transactions: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.white,
    paddingLeft: Padding.p_10xl,
    paddingRight: Padding.p_5xl,
    gap: Gap.gap_2xs,
  },
});

export default Transactions1;
