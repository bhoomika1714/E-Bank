import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text ,Linking} from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import GroupComponent37 from "../components/GroupComponent37";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
//changed page
const BookTicket = () => {
  const openOlaWebsite = () => {
    Linking.openURL('https://www.olacabs.com');
  };
  const navigation = useNavigation();

  return (
    <View style={styles.bookTicket}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.bookTicketChild, styles.vectorIconPosition]} />
      <Image
        style={[styles.image119Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1191.png")}
      />
      <View style={[styles.groupParent, styles.timeLightPosition]}>
        <View style={[styles.groupParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
          
          
        </View>
        <View style={[styles.groupParent, styles.timeLightPosition]}>
          <StatusBar1
            statusBarPosition="absolute"
            statusBarWidth={390}
            statusBarHeight={95}
            statusBarTop={0}
            statusBarLeft={0}
            statusBarBackgroundColor="#e0a340"
            statusBarRight="unset"
            statusBarBottom="unset"
            notch={require("../assets/notch.png")}
            statusIconsWidth={69}
            statusIconsHeight={14}
            showNetworkSignalLight={false}
            wiFiSignalLight={require("../assets/wifi-signal--light.png")}
            showWiFiSignalLight={false}
            showBatteryLight={false}
            showTimeLight={false}
          />
          {/* <Image
            style={[styles.batteryLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={[styles.timeLight, styles.timeLightPosition]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          /> */}
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={styles.bookTicket1}>Book Ticket</Text>
      <GroupComponent37 />
      <Pressable style={[styles.groupView, styles.rectanglePosition]} onPress={openOlaWebsite}>
      <View style={[styles.groupChild, styles.iconLayout]} />
        <Image
          style={[styles.fluentvehicleCab24FilledIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/fluentvehiclecab24filled.png")}
        />
      </Pressable>
      <Image
        style={[styles.image142Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-142.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupView: {
    // Add or adjust height and width to ensure visibility
    height: 70,
    width: 72,
    position: "absolute",
    top: "54%",  // Adjust based on where you want the image
    left: "80%", // Adjust accordingly
    transform: [{ translateX: -30 }, { translateY: -30 }] // Center the image
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    width: 380,
    left: 8,
    position: "absolute",
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    height: "111.01%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  bookTicketChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
    left: "0.27%",
    right: "-0.27%",
  },
  image119Icon: {
    top: 159,
    height: 100,
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    overflow: "hidden",
  },
  groupParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "6.67%",
    top: "4.06%",
    right: "82.67%",
    bottom: "91.01%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  bookTicket1: {
    height: "4.84%",
    width: "55.28%",
    top: "4.19%",
    left: "29.07%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_700,
    top: "0%",
    position: "absolute",
  },
  fluentvehicleCab24FilledIcon: {
    height: "58.33%",
    width: "58.33%",
    top: "16.67%",
    right: "21.67%",
    bottom: "25%",
    left: "20%",
    position: "absolute",
  },
  rectangleParent: {
    height: "7.39%",
    width: "16%",
    top: "50.99%",
    right: "11.47%",
    bottom: "41.63%",
    left: "72.53%",
    position: "absolute",
  },
  image142Icon: {
    top: 550,
    height: 211,
  },
  bookTicket: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BookTicket;
