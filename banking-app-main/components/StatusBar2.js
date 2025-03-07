import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Time from "./Time";
import {
  Padding,
  Border,
  Gap,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const StatusBar2 = ({
  hours,
  minutes,
  showLocation,
  propColor,
  propColor1,
  propColor2,
}) => {
  return (
    <View style={styles.statusBar}>
      <View style={[styles.gruopStatus, styles.headerFlexBox]}>
        <Time
          hours={hours}
          minutes={minutes}
          showLocation={showLocation}
          propColor={propColor}
          propColor1={propColor1}
          propColor2={propColor2}
          locationArrow={require("../assets/location-arrow.png")}
        />
        <View style={styles.icons}>
          <Image
            style={styles.cellularSignalIcon}
            contentFit="cover"
            source={require("../assets/cellular-signal.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
      <View style={styles.headerFlexBox}>
        <View style={[styles.menu, styles.menuFlexBox]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon8.png")}
          />
        </View>
        <View style={[styles.title, styles.menuFlexBox]}>
          <Text style={styles.label}>
            <Text style={styles.welcomeBackName}>
              <Text style={styles.welcomeBack}>Welcome Back</Text>
              <Text style={styles.name}>, ‘Name’</Text>
            </Text>
            <Text style={styles.name}>
              <Text style={styles.text1}>!</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.notification, styles.menuFlexBox]}>
          <Image
            style={[styles.notificationBingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/notificationbing.png")}
          />
          <Image
            style={styles.badgeIcon}
            contentFit="cover"
            source={require("../assets/badge.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  menuFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  cellularSignalIcon: {
    width: 18,
    height: 10,
  },
  wifiIcon: {
    width: 16,
    overflow: "hidden",
    height: 12,
  },
  batteryIcon: {
    width: 24,
    overflow: "hidden",
    height: 12,
  },
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_13xs,
    alignItems: "center",
    flexDirection: "row",
  },
  gruopStatus: {
    alignItems: "center",
  },
  icon: {
    overflow: "hidden",
  },
  menu: {
    backgroundColor: Color.colorAliceblue_500,
    padding: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  welcomeBack: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  name: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  welcomeBackName: {
    color: Color.colorGray_1400,
  },
  text1: {
    color: Color.white,
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  title: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  notificationBingIcon: {
    zIndex: 0,
  },
  badgeIcon: {
    position: "absolute",
    top: 6,
    left: 21,
    width: 7,
    height: 7,
    zIndex: 1,
  },
  notification: {
    backgroundColor: Color.colorAliceblue_500,
    padding: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  statusBar: {
    gap: Gap.gap_4xs,
    alignSelf: "stretch",
  },
});

export default StatusBar2;
