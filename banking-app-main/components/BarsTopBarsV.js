import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import BarsStatusBariPhoneLight from "./BarsStatusBariPhoneLight";
import IconsOthershoppingBag from "./IconsOthershoppingBag";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BarsTopBarsV = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.barstopBarsv4}>
      <BarsStatusBariPhoneLight
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackgroundColor="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        showBattery
        wifi={require("../assets/wifi.png")}
        wifiIconHeight={11}
        wifiIconWidth={15}
        cellularConnection={require("../assets/cellular-connection.png")}
        cellularConnectionIconHeight={11}
        cellularConnectionIconWidth={17}
        propTop="7"
        propLeft="21"
        propWidth="54"
        propHeight="21"
        propMarginTop="-3.5"
      />
      <IconsOthershoppingBag
        propMarginTop={10}
        propTop="50%"
        propRight={35}
        propLeft="unset"
        propWidth={24}
        propHeight={24}
        propBottom="unset"
        path={require("../assets/path2.png")}
      />
      <Pressable
        style={[styles.iconsarrowsarrowLongLeft, styles.titlePosition]}
        onPress={() => navigation.navigate("Home2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconsarrowsarrowlongleft.png")}
        />
      </Pressable>
      <Text style={[styles.title, styles.titlePosition]}>{` `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titlePosition: {
    top: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  iconsarrowsarrowLongLeft: {
    left: 35,
    width: 24,
    height: 24,
  },
  title: {
    marginTop: 12,
    width: "60%",
    left: "20%",
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
  },
  barstopBarsv4: {
    backgroundColor: Color.yellowY100,
    width: 375,
    height: 100,
    marginTop: -100,
  },
});

export default BarsTopBarsV;
