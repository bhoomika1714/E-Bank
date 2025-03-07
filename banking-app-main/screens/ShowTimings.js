import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ShowTimings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.showTimings, styles.showLayout1]}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.showTimingsChild, styles.vectorIconPosition]} />
      <View style={styles.topBar}>
        <BarsTopBarsV2
          capIconBackgroundColor="#fff"
          capIconHeight={100}
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
        onPress={() => navigation.navigate("MovieTicket")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-66.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.movieTicket, styles.timeTypo]}>Movie Ticket</Text>
      </View>
      <Text style={styles.kalki2898Ad}>Kalki 2898 AD 3D(Hinidi) - Hindi</Text>
      <View style={styles.showTimingsItem} />
      <View style={[styles.showTimingsInner, styles.showLayout]} />
      <Text style={[styles.tue13Aug, styles.augTypo]}>{`Tue
13
AUG`}</Text>
      <View style={[styles.rectangleView, styles.showLayout]} />
      <View style={[styles.showTimingsChild1, styles.showChildLayout1]} />
      <Text style={[styles.thr15Aug, styles.augTypo]}>{`Thr
15
AUG`}</Text>
      <View style={[styles.showTimingsChild2, styles.showLayout]} />
      <Text style={[styles.wed14Aug, styles.augTypo]}>{`Wed
14
AUG`}</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.showTimingsChild3, styles.lineViewLayout]} />
      <Text style={[styles.inoxMallHubli, styles.mallTypo]}>
        Inox mall, Hubli
      </Text>
      <Text style={[styles.uMallHubli, styles.mallTypo]}>U-mall, Hubli</Text>
      <Text style={[styles.am, styles.amTypo]}>9:30am</Text>
      <View style={[styles.showTimingsChild4, styles.showChildLayout1]} />
      <Text style={[styles.pm, styles.amTypo]}>6:00pm</Text>
      <View style={[styles.showTimingsChild5, styles.showChildLayout1]} />
      <Text style={[styles.pm1, styles.amTypo]}>2:30pm</Text>
      <Text style={[styles.ticket, styles.ticketTypo]}>Ticket</Text>
      <Text
        style={[styles.foodBevarage, styles.ticketTypo]}
      >{` Food & Bevarage`}</Text>
      <View style={[styles.showTimingsChild6, styles.showChildLayout]} />
      <Text style={[styles.am1, styles.am1Typo]}>9:30am</Text>
      <View style={[styles.showTimingsChild7, styles.showChildLayout]} />
      <Text style={[styles.pm2, styles.am1Typo]}>6:00pm</Text>
      <View style={[styles.showTimingsChild8, styles.showChildLayout]} />
      <Text style={[styles.pm3, styles.am1Typo]}>2:30pm</Text>
      <Text style={[styles.ticket1, styles.ticket1Typo]}>Ticket</Text>
      <Text
        style={[styles.foodBevarage1, styles.ticket1Typo]}
      >{` Food & Bevarage`}</Text>
      <View style={[styles.statusBarwhite, styles.buttonBg]}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonBg]}
        onPress={() => navigation.navigate("PaymentMethod2")}
      >
        <Text style={[styles.proceed, styles.timeTypo]}>Proceed</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  showLayout1: {
    width: "100%",
    backgroundColor: Color.white,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  showLayout: {
    height: 62,
    width: 53,
    top: 201,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  augTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    top: 213,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  showChildLayout1: {
    height: 24,
    width: 63,
    borderRadius: Border.br_8xs,
    top: 364,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_800,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  mallTypo: {
    textAlign: "left",
    left: 21,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    color: Color.lightGray11,
    position: "absolute",
  },
  amTypo: {
    color: Color.colorLimegreen_100,
    top: 369,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    position: "absolute",
  },
  ticketTypo: {
    color: Color.colorGoldenrod_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 343,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  showChildLayout: {
    top: 457,
    height: 24,
    width: 63,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  am1Typo: {
    top: 462,
    color: Color.colorLimegreen_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    position: "absolute",
  },
  ticket1Typo: {
    top: 436,
    color: Color.colorGoldenrod_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  buttonBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  showTimingsChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    width: "100%",
    backgroundColor: Color.white,
  },
  topBar: {
    top: -35,
    height: 100,
    width: 375,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: "3.73%",
    top: "5.3%",
    right: "85.6%",
    bottom: "89.96%",
    width: "10.67%",
    height: "4.74%",
    position: "absolute",
  },
  movieTicket: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightGray11,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    lineHeight: 28,
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
  kalki2898Ad: {
    marginLeft: -139.5,
    top: 130,
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.mobileBody3Regular,
    left: "50%",
    textAlign: "center",
    color: Color.lightGray11,
    lineHeight: 28,
    position: "absolute",
  },
  showTimingsItem: {
    marginLeft: -186.5,
    top: 121,
    width: 374,
    height: 45,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  showTimingsInner: {
    backgroundColor: "#f8ad33",
    marginLeft: -166.5,
  },
  tue13Aug: {
    left: 33,
  },
  rectangleView: {
    marginLeft: -32.5,
  },
  showTimingsChild1: {
    marginLeft: -166.5,
  },
  thr15Aug: {
    left: 167,
  },
  showTimingsChild2: {
    marginLeft: -103.5,
  },
  wed14Aug: {
    left: 96,
  },
  lineView: {
    top: 280,
  },
  showTimingsChild3: {
    top: 187,
  },
  inoxMallHubli: {
    top: 315,
    fontSize: FontSize.m3TitleMedium_size,
  },
  uMallHubli: {
    top: 410,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  am: {
    left: 28,
  },
  showTimingsChild4: {
    marginLeft: -24.5,
  },
  pm: {
    left: 170,
  },
  showTimingsChild5: {
    marginLeft: -95.5,
  },
  pm1: {
    left: 99,
  },
  ticket: {
    left: 21,
  },
  foodBevarage: {
    left: 70,
  },
  showTimingsChild6: {
    marginLeft: -166.5,
  },
  am1: {
    left: 28,
  },
  showTimingsChild7: {
    marginLeft: -24.5,
  },
  pm2: {
    left: 170,
  },
  showTimingsChild8: {
    marginLeft: -95.5,
  },
  pm3: {
    left: 99,
  },
  ticket1: {
    left: 21,
  },
  foodBevarage1: {
    left: 70,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    top: "50%",
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  statusBarwhite: {
    height: 36,
    top: 0,
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    left: 0,
  },
  proceed: {
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    top: 714,
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
  showTimings: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ShowTimings;
