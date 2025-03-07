import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Linking } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MovieTicket = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.movieTicket}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.movieTicketChild, styles.vectorIconPosition]} />
      <View style={[styles.topBar, styles.topBarLayout]}>
        <BarsTopBarsV2
          capIconBackgroundColor="#fff"
          capIconHeight={100}
          capIconTop={0}
          capIconLeft={0}
          capIconWidth={375}
          propMarginTop={10}
          wifi={require("../assets/wifi.png")}
          cellularConnection={require("../assets/cellular-connection.png")}
          showBattery
          barsStatusBariPhoneLightPosition="absolute"
          barsStatusBariPhoneLightBackground="unset"
          barsStatusBariPhoneLightHeight="44%"
          barsStatusBariPhoneLightTop="0%"
          barsStatusBariPhoneLightRight="0%"
          barsStatusBariPhoneLightBottom="56%"
          barsStatusBariPhoneLightLeft="0%"
          wifiIconHeight="11"
          wifiIconWidth="15"
          cellularConnectionIconHeight="11"
          cellularConnectionIconWidth="17"
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("BookMyshow")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.movieTicket1, styles.timeTypo]}>Movie Ticket</Text>
      </View>
      <Image
        style={styles.image124Icon}
        contentFit="cover"
        source={require("../assets/image-124.png")}
      />
      <Text style={[styles.trailers, styles.trailersTypo]}>Trailers</Text>
      <Image
        style={[styles.rimovieFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rimoviefill.png")}
      />
      <View style={[styles.movieTicketItem, styles.groupChildBorder]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.rateNow, styles.textTypo]}>Rate now</Text>
      </View>
      <Text style={[styles.h1mactionsciFithrillerua, styles.textTypo]}>
        3h 1m•
        <Text style={styles.action}>Action</Text>,
        <Text style={styles.action}>Sci-Fi</Text>,
        <Text style={styles.action}>Thriller</Text>•UA•27 Jun, 2024
      </Text>
      <Pressable
        style={[styles.button, styles.buttonBg]}
        onPress={() => navigation.navigate("ShowTimings")}
      >
        <Text style={[styles.bookTicket, styles.trailersTypo]}>
          Book Ticket
        </Text>
      </Pressable>
      <View style={[styles.statusBarwhite, styles.buttonBg]}>
        <Image
          style={[styles.connectionsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      </View>
      <View style={[styles.movieTicketInner, styles.movieTicketInnerLayout]}>
        <View
          style={[
            styles.telugukannadahindimalayalamParent,
            styles.movieTicketInnerLayout,
          ]}
        >
          <Text style={[styles.telugukannadahindimalayalam, styles.textTypo]}>
            <Text style={styles.action}>Telugu</Text>,
            <Text style={styles.action}>Kannada</Text>,
            <Text style={styles.action}>Hindi</Text>,
            <Text style={styles.action}>Malayalam</Text>,
            <Text style={styles.action}>Tamil</Text>
          </Text>
          <Text style={[styles.d3dimax2dimax3dContainer, styles.textTypo]}>
            {` `}
            <Text style={styles.action}>2D</Text>,
            <Text style={styles.action}>3D</Text>,
            <Text style={styles.action}>IMAX 2D</Text>,
            <Text style={styles.action}>IMAX 3D</Text>
          </Text>
          <Text style={[styles.kVotes, styles.textTypo]}>(717.8K Votes)</Text>
          <Text style={[styles.text, styles.textTypo]}>8.6/10</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  topBarLayout: {
    width: 375,
    left: 0,
  },
  timeTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "700",
    position: "absolute",
  },
  trailersTypo: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  iconLayout: {
    height: 16,
    position: "absolute",
  },
  groupChildBorder: {
    borderStyle: "solid",
    left: 0,
  },
  groupChildLayout: {
    width: 91,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.lightGray11,
    lineHeight: 28,
    position: "absolute",
  },
  buttonBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  movieTicketInnerLayout: {
    height: 102,
    width: 299,
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  movieTicketChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
  },
  topBar: {
    top: -35,
    height: 100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "3.73%",
    top: "5.3%",
    right: "85.6%",
    bottom: "89.78%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  movieTicket1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    lineHeight: 28,
    color: Color.lightGray11,
    fontWeight: "700",
    top: 0,
    left: 0,
  },
  header: {
    top: 51,
    left: 110,
    width: 155,
    height: 28,
    position: "absolute",
  },
  image124Icon: {
    top: 122,
    left: 84,
    borderRadius: Border.br_3xs,
    width: 160,
    height: 223,
    position: "absolute",
  },
  trailers: {
    top: 236,
    left: 120,
    width: 109,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.white,
    fontFamily: FontFamily.poppinsBold,
    lineHeight: 28,
    position: "absolute",
  },
  rimovieFillIcon: {
    top: 242,
    left: 127,
    width: 16,
    overflow: "hidden",
  },
  movieTicketItem: {
    top: 396,
    borderColor: Color.colorWhitesmoke_800,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.02%",
    width: "4.56%",
    top: "54.19%",
    right: "91.44%",
    bottom: "43.79%",
    left: "4%",
    position: "absolute",
  },
  groupChild: {
    top: 3,
    borderColor: Color.lightGray11,
    borderWidth: 0.5,
    height: 22,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.white,
  },
  rateNow: {
    left: 11,
    top: 0,
  },
  rectangleParent: {
    top: 437,
    left: 260,
    height: 28,
  },
  action: {
    textDecoration: "underline",
  },
  h1mactionsciFithrillerua: {
    top: 562,
    left: 37,
  },
  bookTicket: {
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.montserratBold,
  },
  button: {
    top: 717,
    left: 25,
    borderRadius: Border.br_base,
    width: 327,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    overflow: "hidden",
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
  },
  time: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    left: 24,
    color: Color.lightGray11,
    fontWeight: "700",
  },
  statusBarwhite: {
    height: 36,
    top: 0,
    width: 375,
    left: 0,
  },
  telugukannadahindimalayalam: {
    top: 74,
    left: 13,
    width: 286,
  },
  d3dimax2dimax3dContainer: {
    top: 37,
    left: 8,
    width: 171,
  },
  kVotes: {
    left: 79,
    width: 100,
    top: 0,
  },
  text: {
    width: 74,
    top: 0,
    left: 0,
  },
  telugukannadahindimalayalamParent: {
    top: 0,
    left: 0,
  },
  movieTicketInner: {
    top: 440,
    left: 24,
  },
  movieTicket: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MovieTicket;
