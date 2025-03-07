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

const Transactions2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactions}>
      <View style={styles.title}>
        <Text style={styles.label}>Transactions</Text>
      </View>
      <View style={styles.users}>
        <Pressable
          style={styles.payBillLayout}
          onPress={() => navigation.navigate("SendMoneyHome")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon13.png")}
          />
          <Text style={[styles.name, styles.nameFlexBox]}>{`
Send 
money`}</Text>
        </Pressable>
        <Pressable
          style={styles.payBillLayout}
          onPress={() => navigation.navigate("RequestMoney")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/gold-loan11.png")}
          />
          <View style={[styles.nameWrapper, styles.nameFlexBox]}>
            <Text style={styles.nameTypo}>{`
Request
money`}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.payBillLayout}
          onPress={() => navigation.navigate("CheckBalance")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/gold-loan12.png")}
          />
          <Text style={[styles.name2, styles.nameTypo]}>{`
Check
Balance`}</Text>
        </Pressable>
        <Pressable
          style={[styles.payBill, styles.payBillLayout]}
          onPress={() => navigation.navigate("BillsNotification")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/gold-loan13.png")}
          />
          <Text style={styles.nameTypo}>Pay Bills</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    justifyContent: "center",
    marginTop: -7,
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  payBillLayout: {
    height: 76,
    width: 54,
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
    borderRadius: Border.br_sm,
    width: 55,
    height: 55,
    display: "none",
    overflow: "hidden",
  },
  icon1: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  name: {
    display: "flex",
    width: 50,  //changed from 39 to 50 to adjust 'send money' text
    marginTop: -7,
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  nameWrapper: {
    marginTop: -7,
    flexDirection: "row",
  },
  name2: {
    marginTop: -7,
  },
  payBill: {
    gap: Gap.gap_12xs,
  },
  users: {
    left:2,  //this will gaive space for trasaction section
    width: 351,
    gap: Gap.gap_6xl,
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

export default Transactions2;
