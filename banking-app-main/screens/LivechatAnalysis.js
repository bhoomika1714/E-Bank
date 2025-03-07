import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent38 from "../components/GroupComponent38";
import { useNavigation } from "@react-navigation/native";
import TimeStyle from "../components/TimeStyle";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const LivechatAnalysis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechatAnalysis2}>
      <View style={[styles.livechatAnalysis2Child, styles.livechatBorder]} />
      <View style={[styles.writeAMessgeParent, styles.borderBorder]}>
        <Text style={[styles.writeAMessge, styles.writeAMessgeTypo]}>
          Write a messge
        </Text>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={[styles.vuesaxlinearpaperclip2Icon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearpaperclip2.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
      </View>
      <GroupComponent38 />
      <View style={[styles.livechatAnalysis2Inner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Text style={[styles.helloNice, styles.helloNiceFlexBox]}>
              Hello Nice
            </Text>
            <View
              style={[
                styles.welcomeToLivechatIWasMadeWrapper,
                styles.groupInnerBorder,
              ]}
            >
              <Text
                style={[styles.welcomeToLivechat, styles.helloNiceFlexBox]}
              >{`Welcome to LiveChat
I was made with . Pick a topic from the list or type down a question!`}</Text>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.frameIconLayout]}>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/group-64.png")}
            />
            <Text style={[styles.livechat0210Pm, styles.writeAMessgeTypo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={[styles.arrowLeftIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleft8.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Pressable
          style={[styles.generateDetailedOfContainer, styles.generatePosition]}
          onPress={() => navigation.navigate("LivechatAnalysis1")}
        >
          <Text
            style={[
              styles.generateDetailedOfMySpendi,
              styles.monitorMyCreditTypo,
            ]}
          >{`"Generate detailed of my spending
 patterns over different periods"`}</Text>
        </Pressable>
        <Text
          style={[styles.monitorMyCredit, styles.monitorMyCreditTypo]}
        >{` "Monitor my credit score and 
  provide tips to improve it" `}</Text>
        <Text
          style={[styles.generateAPersonalized, styles.generatePosition]}
        >{`“Generate a personalized financial
 health score that considers spending 
 habits, savings, debt levels, and 
 credit score.”`}</Text>
      </View>
      <View style={[styles.livechatAnalysis2Item, styles.livechatBorder]} />
      <Text style={[styles.chatWithUs, styles.helloNiceFlexBox]}>
        Chat with us!
      </Text>
      <View style={[styles.exit1, styles.exitFlexBox]}>
        <Image
          style={styles.arrowIconLayout}
          contentFit="cover"
          source={require("../assets/arrowleft2.png")}
        />
      </View>
      <TimeStyle
        propTop={0}
        propLeft={18}
        propWidth={55}
        propHeight={20}
        propMarginTop={-4}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection8.png")}
      />
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap6.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  livechatBorder: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  writeAMessgeTypo: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    left: "50%",
    position: "absolute",
  },
  frameIconLayout: {
    height: 30,
    position: "absolute",
  },
  groupParentLayout: {
    height: 248,
    width: 256,
    position: "absolute",
  },
  helloNiceFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
  },
  groupInnerBorder: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  exitFlexBox: {
    padding: Padding.p_7xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  arrowIconLayout: {
    height: 24,
    width: 24,
  },
  groupInnerLayout: {
    height: 302,
    width: 341,
    position: "absolute",
  },
  generatePosition: {
    left: 13,
    position: "absolute",
  },
  monitorMyCreditTypo: {
    height: 52,
    alignItems: "center",
    display: "flex",
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  livechatAnalysis2Child: {
    top: 79,
    width: 375,
    height: 98,
    backgroundColor: Color.white,
    borderStyle: "solid",
    left: 0,
  },
  writeAMessge: {
    marginTop: -12.5,
    marginLeft: -160,
    top: "50%",
    fontSize: FontSize.font_size,
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  frameIcon: {
    left: 272,
    width: 30,
    top: 25,
    height: 30,
    overflow: "hidden",
  },
  vuesaxlinearpaperclip2Icon: {
    left: 325,
    width: 30,
    top: 25,
    height: 30,
  },
  frameIcon1: {
    left: 378,
    width: 30,
    top: 25,
    height: 30,
    overflow: "hidden",
  },
  writeAMessgeParent: {
    marginLeft: -231.5,
    bottom: -2,
    width: 450,
    height: 75,
    left: "50%",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  groupChild: {
    width: 134,
    height: 59,
    borderRadius: Border.br_3xs,
    top: 0,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    position: "absolute",
  },
  helloNice: {
    marginLeft: -107,
    top: 14,
    width: 124,
    color: Color.lightGray11,
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
    height: 30,
    position: "absolute",
    left: "50%",
  },
  welcomeToLivechat: {
    width: 232,
    color: Color.lightGray11,
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
  },
  welcomeToLivechatIWasMadeWrapper: {
    top: 67,
    height: 147,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    justifyContent: "center",
    width: 256,
    position: "absolute",
  },
  rectangleParent: {
    top: 34,
    height: 214,
    width: 256,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    width: 28,
    height: 28,
    top: 0,
    position: "absolute",
  },
  livechat0210Pm: {
    marginLeft: -36,
    fontSize: FontSize.mobileBody3Regular_size,
    top: 0,
  },
  groupContainer: {
    width: 138,
    top: 0,
    left: 0,
  },
  groupParent: {
    top: 0,
    left: 0,
  },
  livechatAnalysis2Inner: {
    top: 177,
    left: 15,
  },
  arrowLeftIcon: {
    display: "none",
  },
  exit: {
    top: 27,
    left: 27,
    width: 36,
    height: 36,
  },
  groupInner: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    overflow: "hidden",
    top: 0,
  },
  generateDetailedOfMySpendi: {
    width: 296,
  },
  generateDetailedOfContainer: {
    top: 157,
  },
  monitorMyCredit: {
    top: 236,
    width: 257,
    left: 13,
    position: "absolute",
  },
  generateAPersonalized: {
    top: 26,
    width: 326,
    height: 104,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
  },
  frameParent: {
    top: 437,
    left: 22,
  },
  livechatAnalysis2Item: {
    left: -1,
    backgroundColor: Color.colorGoldenrod_100,
    width: 390,
    height: 95,
    top: 0,
  },
  chatWithUs: {
    top: 40,
    left: 100,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    width: 174,
    height: 27,
    position: "absolute",
  },
  exit1: {
    top: 37,
    left: 25,
    height: 33,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 10,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 22,
    opacity: 0.35,
    height: 10,
    top: 0,
  },
  capIcon: {
    top: 3,
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
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 10,
    right: 24,
    width: 25,
    height: 10,
    position: "absolute",
  },
  wifiIcon: {
    width: 16,
    height: 10,
  },
  livechatAnalysis2: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LivechatAnalysis;
