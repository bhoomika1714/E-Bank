import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Content from "../components/Content";
import StatusDefaultStyleprimarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleprimarySizeLargeIconfalseTexttrue";
import StatusDefaultStyleTertiarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleTertiarySizeLargeIconfalseTexttrue";
import Time from "../components/Time";
import {
  Color,
  Gap,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const FirstPage = () => {
  return (
    <View style={styles.firstPage}>
      <Content />
      <View style={styles.buttons}>
        <StatusDefaultStyleprimarySizeLargeIconfalseTexttrue label="Login" />
        <StatusDefaultStyleTertiarySizeLargeIconfalseTexttrue label="Sign Up" />
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/1052854-2.png")}
      />
      <Text style={[styles.smartPaymentApp, styles.labelClr]}>
        Smart Payment app
      </Text>
      <Text style={[styles.label, styles.labelClr]}>{`AllBank `}</Text>
      <View style={styles.homeIndicator} />
      <View style={styles.statusBar}>
        <View style={[styles.gruopStatus, styles.iconsFlexBox]}>
          <Time
            hours="9"
            minutes="41"
            showLocation
            locationArrow={require("../assets/location-arrow.png")}
          />
          <View style={[styles.icons, styles.iconsFlexBox]}>
            <Image
              style={styles.cellularSignalIcon}
              contentFit="cover"
              source={require("../assets/cellular-signal2.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/wifi9.png")}
            />
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/battery2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelClr: {
    color: Color.lightGray11,
    position: "absolute",
  },
  iconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 12,
    overflow: "hidden",
  },
  buttons: {
    top: 434,
    left: 24,
    width: 311,
    gap: Gap.gap_xs,
    position: "absolute",
  },
  icon: {
    top: 166,
    left: 106,
    width: 153,
    height: 167,
    position: "absolute",
  },
  smartPaymentApp: {
    top: 382,
    left: 93,
    fontSize: FontSize.font_size,
    lineHeight: 22,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
  },
  label: {
    top: 331,
    left: 121,
    fontSize: 34,
    fontFamily: FontFamily.mobileBody3Regular,
    textAlign: "left",
  },
  homeIndicator: {
    bottom: 0,
    height: 98,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  cellularSignalIcon: {
    width: 18,
    height: 10,
  },
  wifiIcon: {
    width: 16,
  },
  batteryIcon: {
    width: 24,
  },
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_13xs,
  },
  gruopStatus: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  statusBar: {
    top: 0,
    padding: Padding.p_5xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  firstPage: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FirstPage;
