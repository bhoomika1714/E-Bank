import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import Time from "../components/Time";
import GroupComponent6 from "../components/GroupComponent6";
import {
  Padding,
  Border,
  FontFamily,
  Gap,
  Color,
  FontSize,
} from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      {/* Non-scrollable header */}
      
        {/* <View style={styles.statusBar}> */}
          {/* <View style={[styles.gruopStatus, styles.headerFlexBox]}>
            <Time
              hours="9"
              showLocation={false}
              minutes="41"
              timePosition="unset"
              hoursColor="#fff"
              textColor="#fff"
              minutesColor="#fff"
              locationArrow={require("../assets/location-arrow.png")}
            />
            {/* <View style={[styles.icons, styles.iconsFlexBox]}>
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
          </View> */}
          <View style={styles.headerFlexBox}>
            {/* <View style={[styles.menu, styles.menuFlexBox]}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon8.png")}
              />
            </View> */}
            <View style={[styles.title, styles.menuFlexBox]}>
              <Text style={styles.label}>
                <Text style={styles.welcomeBackName}>
                  <Text style={styles.label1Typo}>Welcome Back</Text>
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
              {/* <Image
                style={styles.badgeIcon}
                contentFit="cover"
                source={require("../assets/badge.png")}
              /> */}
            </View>
          </View>
        {/* </View> */}
     

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.homeIcons}>
          <FrameComponent17 />
          <FrameComponent16 />
          <FrameComponent15 />
          <FrameComponent6 />
        </View>
        </ScrollView>
        <FrameComponent14 />
        <FrameComponent13 /> 
        {/* <GroupComponent6 propTop={110} propLeft={70} /> */}
      
    </View>
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
  label1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    
  },
  homeIcons: {
    marginTop: 120, // Adjusted to prevent overlap with header
    width: "100%",
    height: 698,
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
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  notificationBingIcon: {
    zIndex: 0,
  },
  badgeIcon: {
    top: 6,
    left: 21,
    width: 7,
    height: 7,
    zIndex: 1,
    position: "absolute",
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
  scrollViewContent: {
    paddingTop: 150, // Provides space for the fixed header
  },
  home: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    backgroundColor: Color.white,
    width: "100%",
    height: "100%", // Full height for home container
    flex: 1,
  },
});

export default Home;
