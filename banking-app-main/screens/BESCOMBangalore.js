import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import BarsStatusBariPhoneLight1 from "../components/BarsStatusBariPhoneLight1";
import { useNavigation } from "@react-navigation/native";
import Login from "../components/Login";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BESCOMBangalore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bescomBangalore}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.bescomBangaloreChild, styles.vectorIconPosition]} />
      <View style={styles.topBarPosition}>
        <View style={[styles.barstopBarsv4, styles.topBarPosition]}>
          <BarsStatusBariPhoneLight1 />
          <Image
            style={styles.iconL}
            contentFit="cover"
            source={require("../assets/-icon--l4.png")}
          />
        </View>
      </View>
      <View style={[styles.bescomBangaloreItem, styles.searchButtonBorder]} />
      <View style={[styles.searchButton, styles.searchButtonBorder]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ElectricityBill")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Text style={[styles.bescomBangalore1, styles.accountIdRapdrpFlexBox]}>
        BESCOM Bangalore
      </Text>
      <Text
        style={[styles.accountIdRapdrp, styles.accountIdRapdrpFlexBox]}
      >{`Account ID (RAPDRP) OR Cunsumer Number / 
Connestion ID (Non-RAPDRP)`}</Text>
      <Login
        propTop={678}
        propLeft={30}
        propBorderRadius={16}
        propWidth={311}
        propBackgroundColor="#e0a340"
        propBorderStyle="unset"
        propBorderColor="unset"
        confirm1="Confirm"
        propColor="#fff"
        propFontSize={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  topBarPosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchButtonBorder: {
    borderColor: Color.colorPeru_200,
    borderStyle: "solid",
    position: "absolute",
  },
  accountIdRapdrpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  bescomBangaloreChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    width: "100%",
    backgroundColor: Color.white,
    left: "0.27%",
    right: "-0.27%",
  },
  iconL: {
    marginTop: 10,
    top: "50%",
    left: 316,
    width: 24,
    height: 24,
    display: "none",
    position: "absolute",
  },
  barstopBarsv4: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  bescomBangaloreItem: {
    top: 99,
    left: -1,
    borderTopWidth: 2,
    width: 377,
    height: 2,
  },
  searchButton: {
    top: 398,
    left: 3,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    width: 355,
    height: 43,
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: "5.6%",
    top: "4.19%",
    right: "83.2%",
    bottom: "90.89%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  bescomBangalore1: {
    top: 41,
    left: 87,
    fontSize: FontSize.m3TitleLarge_size,
    letterSpacing: 0.3,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.white,
  },
  accountIdRapdrp: {
    top: 326,
    left: 18,
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.2,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.lightGray11,
  },
  bescomBangalore: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BESCOMBangalore;
