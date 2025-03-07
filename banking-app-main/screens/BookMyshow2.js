import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import GroupComponent34 from "../components/GroupComponent34";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BookMyshow2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookMyshow}>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={[styles.groupParent, styles.groupPosition]}>
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
          <Image
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
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
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
            <Image
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
              style={styles.timeLight}
              contentFit="cover"
              source={require("../assets/time--light1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={[styles.movieTicket, styles.groupPosition]}>
          Movie Ticket
        </Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("BookMyshow")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Image
        style={styles.bxsbusIcon}
        contentFit="cover"
        source={require("../assets/bxsbus.png")}
      />
      <View style={[styles.bookMyshowInner, styles.groupContainerLayout]}>
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.groupContainer, styles.groupContainerLayout]}>
            <View style={[styles.groupContainer, styles.groupContainerLayout]}>
              <Image
                style={[
                  styles.interfaceEssentialsearchL,
                  styles.groupContainerLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface-essentialsearch-loupe.png")}
              />
              <Text style={styles.searchLanguage}>Search place....</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("BookMyshow")}
      />
      <Text style={[styles.popularCities, styles.citiesTypo]}>
        Popular Cities
      </Text>
      <GroupComponent34 />
      <Text style={[styles.othersCities, styles.citiesTypo]}>
        Others Cities
      </Text>
      <Text style={styles.aalo}>Aalo</Text>
      <View style={[styles.bookMyshowChild, styles.bookLayout]} />
      <View style={[styles.bookMyshowItem, styles.bookLayout]} />
      <View style={[styles.lineView, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild1, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild2, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild3, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild4, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild5, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild6, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild7, styles.bookChildBorder]} />
      <View style={[styles.bookMyshowChild8, styles.bookChildBorder]} />
      <Text style={[styles.abohar, styles.adoniTypo]}>Abohar</Text>
      <Text style={[styles.abuRoad, styles.adoniTypo]}>Abu Road</Text>
      <Text style={[styles.achampet, styles.adoniTypo]}>Achampet</Text>
      <Text style={[styles.acharapakkam, styles.adoniTypo]}>Acharapakkam</Text>
      <Text style={[styles.addanki, styles.adoniTypo]}>Addanki</Text>
      <Text style={[styles.adilabad, styles.adoniTypo]}>Adilabad</Text>
      <Text style={[styles.adimali, styles.adoniTypo]}>Adimali</Text>
      <Text style={[styles.adipur, styles.adoniTypo]}>Adipur</Text>
      <Text style={[styles.adoni, styles.adoniTypo]}>Adoni</Text>
      <Text style={[styles.agarMalwa, styles.adoniTypo]}>Agar Malwa</Text>
      <Text style={[styles.agartala, styles.adoniTypo]}>Agartala</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    top: 0,
    left: 0,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  groupContainerLayout: {
    height: 20,
    position: "absolute",
  },
  citiesTypo: {
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 14,
    position: "absolute",
  },
  bookLayout: {
    height: 1,
    width: 391,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_800,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  bookChildBorder: {
    borderColor: Color.gray6,
    height: 1,
    width: 391,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  adoniTypo: {
    left: 33,
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
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
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    width: 390,
    height: 95,
    left: 0,
    position: "absolute",
  },
  movieTicket: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  header: {
    top: 40,
    left: 117,
    width: 155,
    height: 28,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 35,
    width: 40,
    height: 40,
    left: 36,
    position: "absolute",
  },
  bxsbusIcon: {
    top: 160,
    left: 279,
    width: 75,
    height: 75,
    position: "absolute",
    overflow: "hidden",
  },
  interfaceEssentialsearchL: {
    width: 20,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  searchLanguage: {
    top: 2,
    left: 28,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  groupContainer: {
    width: 152,
    height: 20,
    left: 0,
    top: 0,
  },
  bookMyshowInner: {
    top: 129,
    left: 32,
    width: 152,
    height: 20,
  },
  searchButton: {
    top: 118,
    borderRadius: Border.br_3xs,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 351,
    height: 42,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  popularCities: {
    top: 198,
    fontSize: FontSize.m3TitleMedium_size,
    left: 20,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  othersCities: {
    top: 422,
    left: 21,
    fontSize: FontSize.font_size,
  },
  aalo: {
    top: 456,
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 36,
    position: "absolute",
  },
  bookMyshowChild: {
    top: 479,
  },
  bookMyshowItem: {
    top: 515,
  },
  lineView: {
    top: 551,
  },
  bookMyshowChild1: {
    top: 584,
  },
  bookMyshowChild2: {
    top: 743,
  },
  bookMyshowChild3: {
    top: 772,
  },
  bookMyshowChild4: {
    top: 804,
  },
  bookMyshowChild5: {
    top: 711,
  },
  bookMyshowChild6: {
    top: 682,
  },
  bookMyshowChild7: {
    top: 650,
  },
  bookMyshowChild8: {
    top: 619,
  },
  abohar: {
    top: 489,
  },
  abuRoad: {
    top: 524,
  },
  achampet: {
    top: 560,
  },
  acharapakkam: {
    top: 594,
  },
  addanki: {
    top: 628,
  },
  adilabad: {
    top: 660,
  },
  adimali: {
    top: 691,
  },
  adipur: {
    top: 721,
  },
  adoni: {
    top: 752,
  },
  agarMalwa: {
    top: 781,
  },
  agartala: {
    top: 813,
  },
  bookMyshow: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default BookMyshow2;
