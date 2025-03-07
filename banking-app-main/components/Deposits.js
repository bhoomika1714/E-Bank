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

const Deposits = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deposits}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={styles.label}>{`Cards & Shop`}</Text>
      </View>
      <View style={styles.users}>
        <Pressable
          style={styles.setareh}
          onPress={() => navigation.navigate("MyCards")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture3.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan6.png")}
          />
          <View style={[styles.nameWrapper, styles.nameFlexBox]}>
            <Text style={[styles.name, styles.nameTypo]}>Credit card</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.setareh1, styles.setarehLayout]}
          onPress={() => navigation.navigate("Gst")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan7.png")}
          />
          <Text style={styles.nameTypo}>{`GST &
Taxes`}</Text>
        </Pressable>
        <Pressable
          style={[styles.setareh2, styles.setarehLayout]}
          onPress={() => navigation.navigate("ShopList")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan8.png")}
          />
          <Text style={styles.nameTypo}>Shop</Text>
        </Pressable>
        <Pressable
          style={[styles.setareh1, styles.setarehLayout]}
          onPress={() => navigation.navigate("Shares")}
        >
          <Image
            style={[styles.profilePictureIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan9.png")}
          />
          <Text style={styles.nameTypo}>Invest</Text>
        </Pressable>
        <View style={styles.alex}>
          <Image
            style={[styles.profilePictureIcon4, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile-picture1.png")}
          />
          <Text style={styles.nameTypo}>Alex</Text>
        </View>
        <View style={styles.alex}>
          <Image
            style={[styles.profilePictureIcon4, styles.profileIconLayout]}
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
  titleFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  profileIconLayout: {
    height: 55,
    width: 55,
    borderRadius: Border.br_sm,
    overflow: "hidden",
  },
  nameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  setarehLayout: {
    width: 54,
    height: 76,
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
    display: "flex",
    width: 63,
    justifyContent: "center",
    alignItems: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  setareh: {
    width: 61,
    gap: Gap.gap_18xs,
    height: 76,
    alignItems: "center",
  },
  setareh1: {
    gap: Gap.gap_17xs,
  },
  setareh2: {
    gap: Gap.gap_18xs,
  },
  profilePictureIcon4: {
    overflow: "hidden",
  },
  alex: {
    gap: Gap.gap_12xs,
    display: "none",
    alignItems: "center",
  },
  users: {
    width: 339,
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  deposits: {
    position: "absolute",
    top: 152,
    left: 0,
    backgroundColor: Color.white,
    paddingLeft: Padding.p_8xl,
    paddingRight: Padding.p_5xl,
    gap: Gap.gap_2xs,
  },
});

export default Deposits;
