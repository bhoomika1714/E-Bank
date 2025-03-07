import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent4 from "../components/GroupComponent4";
import { useNavigation } from "@react-navigation/native";
import GroupComponent5 from "../components/GroupComponent5";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Livechat4 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.livechat, styles.iconLayout]}>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={styles.frameWrapper}>
            <View style={styles.welcomeToLivechatIWasMadeWrapper}>
              <Text
                style={[styles.welcomeToLivechat, styles.remindMeToTypo]}
              >{`Welcome to LiveChat
I was made with  Pick a topic from the list or type down a question!`}</Text>
            </View>
          </View>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-9.png")}
          />
        </View>
        <GroupComponent3 group6={require("../assets/group-6.png")} />
        <GroupComponent4
          propTop={265}
          propLeft={275}
          propBackgroundColor="#e0a340"
        />
      </View>
      <View style={styles.livechatInner}>
        <View
          style={[
            styles.remindMeToPayEletricityBiParent,
            styles.remindPosition,
          ]}
        >
          <Text
            style={[styles.remindMeTo, styles.remindPosition]}
          >{`Remind me to pay
Eletricity bill at 1 pm`}</Text>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={[styles.frameIcon, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Image
            style={[
              styles.vuesaxlinearpaperclip2Icon,
              styles.frameIconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/vuesaxlinearpaperclip2.png")}
          />
          <Pressable
            style={[styles.frame, styles.frameIconPosition]}
            onPress={() => navigation.navigate("Livechat5")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/vector26.png")}
        />
        <View style={[styles.recentBillsFileParent, styles.frameIconPosition]}>
          <Text style={[styles.recentBillsFile, styles.remindMeToTypo]}>
            Recent Bills file
          </Text>
          <Image
            style={[styles.frameIcon1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
      </View>
      <GroupComponent5
        propTop="0"
        propLeft="25"
        propWidth="53"
        propHeight="26"
        propMarginTop="-3.95"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  remindMeToTypo: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  groupChildLayout: {
    height: 25,
    position: "absolute",
  },
  remindPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition: {
    height: 30,
    top: 17,
    position: "absolute",
  },
  welcomeToLivechat: {
    display: "flex",
    width: 251,
    fontSize: FontSize.font_size,
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    alignItems: "center",
  },
  welcomeToLivechatIWasMadeWrapper: {
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameWrapper: {
    top: 87,
    left: 35,
    width: 295,
    height: 148,
    position: "absolute",
  },
  groupChild: {
    width: 28,
    left: 0,
    top: 0,
  },
  groupContainer: {
    width: 330,
    height: 235,
    position: "absolute",
  },
  groupParent: {
    left: -43,
    width: 397,
    height: 597,
    top: 1,
    position: "absolute",
  },
  remindMeTo: {
    marginTop: -30,
    marginLeft: -173,
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  groupItem: {
    height: "80%",
    width: "13.87%",
    top: "13.33%",
    right: "12.72%",
    bottom: "6.67%",
    left: "73.41%",
    display: "none",
  },
  frameIcon: {
    left: 209,
    width: 30,
    height: 30,
    top: 17,
    overflow: "hidden",
  },
  vuesaxlinearpaperclip2Icon: {
    left: 263,
    width: 30,
    height: 30,
    top: 17,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 316,
    width: 30,
    height: 30,
    top: 17,
  },
  remindMeToPayEletricityBiParent: {
    marginTop: -29.5,
    marginLeft: -163,
    width: 346,
    height: 60,
  },
  livechatInner: {
    marginLeft: -225.5,
    bottom: 0,
    width: 450,
    height: 75,
    left: "50%",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "24.62%",
    width: "5.88%",
    top: "35.38%",
    right: "90.07%",
    bottom: "40%",
    left: "4.04%",
  },
  recentBillsFile: {
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameIcon1: {
    left: 170,
    width: 25,
    top: 1,
    overflow: "hidden",
  },
  recentBillsFileParent: {
    left: 48,
    width: 195,
    height: 30,
    top: 17,
  },
  vectorParent: {
    top: 621,
    left: 96,
    borderRadius: Border.br_xl,
    width: 272,
    height: 65,
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  livechat: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Livechat4;
