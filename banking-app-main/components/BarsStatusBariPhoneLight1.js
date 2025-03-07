import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const BarsStatusBariPhoneLight1 = () => {
  return (
    <View style={styles.barsstatusBariphonelight}>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap2.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi3.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection2.png")}
      />
      <View style={[styles.timeStyle, styles.timeLayout]}>
        <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
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
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 11,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.lightGray11,
    textAlign: "center",
  },
  timeStyle: {
    top: -4,
    left: 7,
    height: 21,
  },
  barsstatusBariphonelight: {
    height: "44%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "56%",
    left: "0%",
    position: "absolute",
  },
});

export default BarsStatusBariPhoneLight1;
