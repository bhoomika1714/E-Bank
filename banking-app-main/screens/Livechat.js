import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TimeStyle from "../components/TimeStyle";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Livechat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechat}>
      <View style={[styles.livechatChild, styles.livechatBorder]} />
      <Image
        style={styles.livechatItem}
        contentFit="cover"
        source={require("../assets/group-1272628201.png")}
      />
      <Text style={styles.helloNiceTo}>
        Hello Nice to see you here! By pressing the "Start chat" button you
        agree to have your personal data processed as described in our Privacy
        Policy
      </Text>
      <View style={[styles.livechatInner, styles.livechatBorder]} />
      <Pressable
        style={[styles.button, styles.exitFlexBox]}
        onPress={() => navigation.navigate("LivechatAnalysis")}
      >
        <Text style={styles.label}>Start chat</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={styles.chatWithUs}>Chat with us!</Text>
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft2.png")}
        />
      </View>
      <TimeStyle
        propTop={-4}
        propLeft={11}
        propWidth={56}
        propHeight={20}
        propMarginTop={-4}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection3.png")}
      />
      <View style={styles.battery}>
        <View style={[styles.border, styles.livechatBorder]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap3.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  livechatBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  exitFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  livechatChild: {
    marginLeft: -193.5,
    top: 170,
    borderRadius: Border.br_mini,
    width: 387,
    height: 297,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.white,
    borderWidth: 1,
    left: "50%",
  },
  livechatItem: {
    marginLeft: -34.5,
    top: 135,
    width: 84,
    height: 70,
    left: "50%",
    position: "absolute",
  },
  helloNiceTo: {
    marginLeft: -154.5,
    top: 225,
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.interRegular,
    color: Color.iPFTGreyText,
    width: 310,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 30,
    left: "50%",
    position: "absolute",
  },
  livechatInner: {
    marginLeft: -224.5,
    bottom: 0,
    width: 450,
    height: 40,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.white,
    borderWidth: 1,
    left: "50%",
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.heeboRegular,
    color: Color.white,
    textAlign: "center",
  },
  button: {
    marginLeft: -170.5,
    top: 395,
    borderRadius: Border.br_3xs,
    width: 342,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.colorGoldenrod_100,
    left: "50%",
  },
  rectangleView: {
    top: -1,
    left: -15,
    borderBottomWidth: 1,
    width: 390,
    height: 95,
    backgroundColor: Color.colorGoldenrod_100,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  chatWithUs: {
    top: 40,
    left: 82,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 210,
    height: 29,
    color: Color.white,
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    top: 37,
    left: 24,
    borderRadius: Border.br_5xs,
    width: 38,
    height: 35,
    padding: Padding.p_7xs,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 10,
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 23,
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
    right: 5,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 19,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 11,
    right: 18,
    width: 25,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 16,
    height: 11,
  },
  livechat: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Livechat;
