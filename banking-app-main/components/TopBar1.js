import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import BarsStatusBariPhoneLight from "./BarsStatusBariPhoneLight";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TopBar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.basePosition}>
      <View style={[styles.base, styles.basePosition]} />
      <View style={[styles.base, styles.basePosition]}>
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
        <Image
          style={[styles.iconsbuttonsmoreAlt, styles.iconsbuttonsmoreAltLayout]}
          contentFit="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
        <Pressable
          style={[
            styles.iconsarrowsarrowLongLeft,
            styles.iconsbuttonsmoreAltLayout,
          ]}
          onPress={() => navigation.navigate("Cart")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconsarrowsarrowlongleft.png")}
          />
        </Pressable>
        <Text style={styles.title}>Shipping</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconsbuttonsmoreAltLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  base: {
    backgroundColor: Color.yellowY100,
  },
  iconsbuttonsmoreAlt: {
    right: 35,
    marginTop: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    marginTop: 10,
  },
  iconsarrowsarrowLongLeft: {
    left: 35,
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
    top: "50%",
    position: "absolute",
  },
});

export default TopBar1;
