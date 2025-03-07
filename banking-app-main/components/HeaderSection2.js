import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Time from "./Time";
import {
  Padding,
  Border,
  FontSize,
  Gap,
  FontFamily,
  Color,
} from "../GlobalStyles";

const HeaderSection2 = () => {
  return (
    <LinearGradient
      style={styles.headerSection}
      locations={[0, 1]}
      colors={["#e0a340", "#7a5923"]}
    >
      <View style={styles.statusBar}>
        <View style={[styles.gruopStatus, styles.headerFlexBox]}>
          <Time
            hours="9"
            minutes="41"
            showLocation={false}
            propColor="#fff"
            propColor1="#fff"
            propColor2="#fff"
            locationArrow={require("../assets/location-arrow.png")}
          />
          <View style={[styles.icons, styles.iconsFlexBox]}>
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
              source={require("../assets/icon7.png")}
            />
          </View>
          <View style={[styles.title, styles.menuFlexBox]}>
            <Text style={[styles.label, styles.labelTypo1]}>
              <Text style={styles.welcomeBack}>
                <Text style={styles.labelTypo}>Welcome Back</Text>
                <Text style={styles.textTypo}>{`, `}</Text>
              </Text>
              <Text style={styles.textTypo}>
                <Text style={styles.nivo1}>Nivo!</Text>
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
      <View style={[styles.balance, styles.sendFlexBox]}>
        <Text style={[styles.label1, styles.labelTypo]}>Your Balance</Text>
        <Text style={[styles.amount, styles.textTypo]}>$8,353.11</Text>
      </View>
      <View style={[styles.activity, styles.iconsFlexBox]}>
        <View style={[styles.send, styles.sendFlexBox]}>
          <View style={[styles.icon1, styles.menuFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/send22.png")}
            />
          </View>
          <Text style={[styles.label2, styles.labelTypo]}>Send</Text>
        </View>
        <View style={[styles.send, styles.sendFlexBox]}>
          <View style={[styles.icon1, styles.menuFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/wallet3.png")}
            />
          </View>
          <Text style={[styles.label2, styles.labelTypo]}>Pay</Text>
        </View>
        <View style={[styles.send, styles.sendFlexBox]}>
          <View style={[styles.icon1, styles.menuFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/cards.png")}
            />
          </View>
          <Text style={[styles.label2, styles.labelTypo]}>cards</Text>
        </View>
        <View style={[styles.send, styles.sendFlexBox]}>
          <View style={[styles.icon1, styles.menuFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/element3.png")}
            />
          </View>
          <Text style={[styles.label2, styles.labelTypo]}>More</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuFlexBox: {
    padding: Padding.p_7xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo1: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  sendFlexBox: {
    gap: Gap.gap_16xs,
    alignItems: "center",
  },
  labelTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  cellularSignalIcon: {
    width: 18,
    height: 10,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    height: 12,
    overflow: "hidden",
  },
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_13xs,
    alignItems: "center",
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
    borderRadius: Border.br_5xs,
  },
  welcomeBack: {
    color: Color.colorGray_1400,
  },
  nivo1: {
    color: Color.white,
  },
  label: {
    textAlign: "left",
  },
  title: {
    padding: Padding.p_7xs,
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
    borderRadius: Border.br_5xs,
  },
  statusBar: {
    gap: Gap.gap_4xs,
    alignSelf: "stretch",
  },
  label1: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
  },
  amount: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    color: Color.white,
    textAlign: "left",
  },
  balance: {
    alignSelf: "stretch",
  },
  icon1: {
    backgroundColor: Color.colorAliceblue_500,
    padding: Padding.p_7xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  label2: {
    fontSize: FontSize.size_3xs,
    color: Color.white,
    textAlign: "left",
  },
  send: {
    flex: 1,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorGray_800,
    padding: Padding.p_5xs,
    justifyContent: "center",
    gap: Gap.gap_16xs,
  },
  activity: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  headerSection: {
    borderRadius: Border.br_7xl,
    width: 351,
    padding: Padding.p_5xl,
    gap: Gap.gap_7xs,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default HeaderSection2;
