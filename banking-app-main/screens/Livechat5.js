import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent5 from "../components/GroupComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Livechat5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechat}>
      <View style={styles.frameParent}>
        <View style={styles.groupChild} />
        <Text
          style={[styles.generateDetailedOf, styles.generateTypo]}
        >{`"Generate detailed of my spending
 patterns over different periods"`}</Text>
        <Text
          style={[styles.monitorMyCredit, styles.generateTypo]}
        >{` "Monitor my credit score and 
  provide tips to improve it" `}</Text>
        <Pressable
          style={[
            styles.generateAPersonalizedContainer,
            styles.generatePosition,
          ]}
          onPress={() => navigation.navigate("LivechatAnalyze")}
        >
          <Text
            style={[styles.generateAPersonalizedFinanc, styles.generateTypo]}
          >{`“Generate a personalized financial
 health score that considers spending 
 habits, savings, debt levels, and 
 credit score.”`}</Text>
        </Pressable>
      </View>
      <View style={styles.livechatInner}>
        <View style={[styles.sureWrapper, styles.wrapperBorder]}>
          <Text style={[styles.sure, styles.generateTypo]}>Sure</Text>
        </View>
      </View>
      <View style={[styles.vectorParent, styles.groupItemBg]}>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector30.png")}
        />
        <View style={styles.recentBillsFileParent}>
          <Text style={[styles.recentBillsFile, styles.remindMeToTypo]}>
            Recent Bills file
          </Text>
          <Image
            style={[styles.frameIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/frame6.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text
          style={[styles.remindMeTo, styles.remindMeToTypo]}
        >{`Remind me to pay
Eletricity bill at 1 pm`}</Text>
      </View>
      <View style={[styles.livechatChild, styles.livechatLayout]}>
        <View
          style={[
            styles.welcomeToLivechatIWasMadeWrapper,
            styles.livechatLayout,
          ]}
        >
          <Text
            style={[styles.welcomeToLivechat, styles.generateTypo]}
          >{`Welcome to LiveChat
I was made with  Pick a topic from the list or type down a question!`}</Text>
        </View>
      </View>
      <GroupComponent5
        propTop={-3}
        propLeft={-15}
        propTop="0"
        propLeft="25"
        propWidth="53"
        propHeight="26"
        propMarginTop="-3.95"
      />
      <FrameComponent4 />
    </View>
  );
};

const styles = StyleSheet.create({
  generateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  generatePosition: {
    left: 20,
    position: "absolute",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupItemBg: {
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_xl,
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  remindMeToTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  groupItemLayout: {
    height: 81,
    width: 201,
    position: "absolute",
  },
  livechatLayout: {
    height: 145,
    position: "absolute",
  },
  groupChild: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 374,
    width: 354,
    position: "absolute",
  },
  generateDetailedOf: {
    top: 187,
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    left: 20,
    position: "absolute",
  },
  monitorMyCredit: {
    top: 270,
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    left: 20,
    position: "absolute",
  },
  generateAPersonalizedFinanc: {
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  generateAPersonalizedContainer: {
    top: 44,
  },
  frameParent: {
    top: 480,
    left: 3,
    height: 374,
    width: 354,
    position: "absolute",
  },
  sure: {
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  sureWrapper: {
    position: "absolute",
  },
  livechatInner: {
    top: 406,
    left: 9,
    width: 83,
    height: 58,
    position: "absolute",
  },
  vectorIcon: {
    height: "24.62%",
    width: "5.88%",
    top: "35.38%",
    right: "90.07%",
    bottom: "40%",
    left: "4.04%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  recentBillsFile: {
    left: 0,
    top: 0,
  },
  frameIcon: {
    top: 1,
    left: 170,
    width: 25,
    height: 25,
  },
  recentBillsFileParent: {
    top: 17,
    left: 48,
    width: 195,
    height: 30,
    position: "absolute",
  },
  vectorParent: {
    top: 248,
    left: 95,
    width: 272,
    height: 65,
    overflow: "hidden",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  remindMeTo: {
    marginTop: -28.5,
    marginLeft: -86.5,
    top: "50%",
    left: "50%",
  },
  rectangleParent: {
    top: 325,
    left: 162,
  },
  welcomeToLivechat: {
    color: Color.iPFTGreyText,
    display: "flex",
    width: 251,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    alignItems: "center",
  },
  welcomeToLivechatIWasMadeWrapper: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  livechatChild: {
    top: 99,
    left: 14,
    width: 295,
  },
  livechat: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Livechat5;
