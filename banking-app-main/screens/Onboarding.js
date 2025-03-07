import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import TimeStyle from "../components/TimeStyle";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image4.png")}
      />
      <View style={styles.content}>
        <Button1
          onButtonPress={() => navigation.navigate("SignUp")}
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Get Started"
        />
        <Text
          style={[styles.withLongExperience, styles.welcomeToCastoreFlexBox]}
        >
          With long experience in the audio industry, we create the best quality
          products
        </Text>
        <Text style={[styles.welcomeToCastore, styles.welcomeToCastoreFlexBox]}>
          Welcome to STStore !
        </Text>
      </View>
      <View
        style={[
          styles.barsHomeIndicatorIphone,
          styles.barsHomeIndicatorIphoneLayout,
        ]}
      >
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.barsstatusBariphonelight, styles.borderPosition]}>
        <View style={[styles.battery, styles.batteryLayout]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <TimeStyle />
      </View>
      <Pressable
        style={[styles.iconsarrowsarrowLongLeft, styles.batteryLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconsarrowsarrowlongleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToCastoreFlexBox: {
    textAlign: "center",
    color: Color.blackB100,
    position: "absolute",
  },
  barsHomeIndicatorIphoneLayout: {
    width: 375,
    left: 0,
  },
  capacityBg: {
    backgroundColor: Color.lightGray11,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  batteryLayout: {
    width: 24,
    position: "absolute",
  },
  imageIcon: {
    top: 60,
    left: -103,
    width: 631,
    height: 422,
    position: "absolute",
  },
  withLongExperience: {
    width: "93.44%",
    top: "25.53%",
    left: "14.75%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    opacity: 0.6,
  },
  welcomeToCastore: {
    marginTop: -94,
    left: "3.28%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    top: "50%",
    width: "100%",
  },
  content: {
    top: 554,
    left: 35,
    width: 305,
    height: 188,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    top: 778,
    height: 34,
    opacity: 0.05,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  barsstatusBariphonelight: {
    backgroundColor: Color.yellowY100,
    height: 44,
    width: 375,
    left: 0,
  },
  icon: {
    marginTop: -354,
    height: "100%",
    width: "100%",
  },
  iconsarrowsarrowLongLeft: {
    left: 17,
    height: 24,
    top: "50%",
  },
  onboarding: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding;
