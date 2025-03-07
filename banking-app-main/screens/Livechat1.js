import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent4 from "../components/GroupComponent4";
import { useNavigation } from "@react-navigation/native";
import TimeStyle from "../components/TimeStyle";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Livechat1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechat}>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.rectangleParent, styles.frameWrapperPosition]}>
            <View style={[styles.groupChild, styles.childBorder]} />
            <Text style={[styles.helloNice, styles.livechat0210Typo]}>
              Hello Nice
            </Text>
            <View
              style={[
                styles.welcomeToLivechatIWasMadeWrapper,
                styles.welcomeWrapperBorder,
              ]}
            >
              <Text
                style={[styles.welcomeToLivechat, styles.chatWithUsFlexBox]}
              >{`Welcome to LiveChat
I was made with  Pick a topic from the list or type down a question!`}</Text>
            </View>
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-61.png")}
            />
            <Text style={[styles.livechat0210Pm, styles.livechat0210Typo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupPosition]}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View
              style={[
                styles.welcomeToLivechatWrapper,
                styles.welcomeWrapperBorder,
              ]}
            >
              <Text
                style={[styles.welcomeToLivechat1, styles.livechat0210Typo]}
              >{`Welcome to
 LiveChat`}</Text>
            </View>
          </View>
          <View style={styles.groupParent2}>
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-62.png")}
            />
            <Text style={[styles.livechat0210Pm1, styles.livechat0210Typo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <GroupComponent4 />
      </View>
      <View style={[styles.writeAMessgeParent, styles.writeParentPosition]}>
        <Text style={[styles.writeAMessge, styles.livechat0210Typo]}>
          Write a messge
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Pressable
          style={[styles.vuesaxlinearpaperclip2, styles.frameIconLayout]}
          onPress={() => navigation.navigate("LivechatAnalysis")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vuesaxlinearpaperclip2.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
      </View>
      <Pressable
        style={[styles.framePressable, styles.framePosition]}
        onPress={() => navigation.navigate("Livechat2")}
      >
        <View style={[styles.dragDropFilesParent, styles.writeParentPosition]}>
          <View style={[styles.dragDropFiles, styles.dragDropFilesPosition]}>
            <Text style={styles.dragDrop}>{`Drag & drop files or Browse`}</Text>
          </View>
          <View style={[styles.supportedFormats, styles.dragDropFilesPosition]}>
            <Text style={styles.supportedFormatsPdf}>
              Supported formats: PDF, Word, and PNG
            </Text>
          </View>
          <Image
            style={[styles.uploadIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/upload-icon.png")}
          />
        </View>
        <View style={[styles.frameItem, styles.framePosition]} />
      </Pressable>
      <View style={[styles.livechatChild, styles.childBorder]} />
      <Text style={[styles.chatWithUs, styles.exitPosition]}>
        Chat with us!
      </Text>
      <View style={[styles.exit, styles.exitPosition]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft5.png")}
        />
      </View>
      <TimeStyle
        propTop={0}
        propLeft={11}
        propWidth={56}
        propHeight={20}
        propMarginTop={-4}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection6.png")}
      />
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap5.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  frameWrapperPosition: {
    left: 35,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  livechat0210Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    color: Color.iPFTGreyText,
  },
  welcomeWrapperBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  chatWithUsFlexBox: {
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
  },
  groupLayout: {
    height: 28,
    width: 28,
    left: 0,
    position: "absolute",
  },
  writeParentPosition: {
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    width: 30,
    top: 25,
    height: 30,
    position: "absolute",
  },
  framePosition: {
    borderRadius: Border.br_mini,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  dragDropFilesPosition: {
    padding: Padding.p_8xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  exitPosition: {
    top: 35,
    alignItems: "center",
    position: "absolute",
  },
  groupChild: {
    width: 154,
    height: 59,
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloNice: {
    marginLeft: -130.5,
    top: 15,
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    left: "50%",
    position: "absolute",
  },
  welcomeToLivechat: {
    width: 251,
    alignItems: "center",
    display: "flex",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
  },
  welcomeToLivechatIWasMadeWrapper: {
    top: 67,
  },
  rectangleParent: {
    top: 55,
    width: 295,
    height: 215,
  },
  groupItem: {
    top: 26,
  },
  livechat0210Pm: {
    marginLeft: -52.5,
    fontSize: FontSize.mobileBody3Regular_size,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  groupView: {
    width: 105,
    height: 54,
    top: 0,
  },
  groupContainer: {
    width: 330,
    height: 270,
    top: 0,
  },
  welcomeToLivechat1: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  welcomeToLivechatWrapper: {
    top: 0,
  },
  frameWrapper: {
    top: 30,
    width: 145,
    height: 88,
  },
  groupInner: {
    top: 1,
  },
  livechat0210Pm1: {
    marginLeft: -51,
    fontSize: FontSize.mobileBody3Regular_size,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  groupParent2: {
    width: 108,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent1: {
    top: 416,
    width: 180,
    height: 118,
  },
  groupParent: {
    top: 182,
    left: 24,
    width: 392,
    height: 534,
    position: "absolute",
  },
  writeAMessge: {
    marginTop: -14.5,
    marginLeft: -162,
    top: "50%",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    height: "64%",
    width: "10.67%",
    top: "21.33%",
    right: "19.11%",
    bottom: "14.67%",
    left: "70.22%",
  },
  frameIcon: {
    left: 271,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vuesaxlinearpaperclip2: {
    left: 325,
  },
  frameIcon1: {
    left: 378,
    overflow: "hidden",
  },
  writeAMessgeParent: {
    marginLeft: -231.5,
    bottom: 0,
    width: 450,
    height: 75,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  dragDrop: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    textAlign: "center",
    color: Color.iPFTGreyText,
  },
  dragDropFiles: {
    marginLeft: -110.5,
    top: 114,
  },
  supportedFormatsPdf: {
    lineHeight: 18,
    fontFamily: FontFamily.mulishRegular,
    color: "rgba(102, 112, 133, 0.5)",
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  supportedFormats: {
    marginLeft: -118.5,
    top: 148,
  },
  uploadIcon: {
    height: "27.51%",
    width: "31.31%",
    top: "0%",
    right: "34.6%",
    bottom: "72.49%",
    left: "34.09%",
  },
  dragDropFilesParent: {
    marginLeft: -117.5,
    top: 150,
    width: 237,
    height: 176,
  },
  frameItem: {
    marginLeft: -172.5,
    top: 5,
    borderStyle: "dashed",
    borderColor: Color.iPFTGreyText,
    width: 348,
    height: 403,
    borderWidth: 1,
  },
  framePressable: {
    marginLeft: -211.5,
    top: 318,
    backgroundColor: Color.colorAntiquewhite,
    width: 423,
    height: 414,
  },
  livechatChild: {
    top: -5,
    left: -8,
    backgroundColor: Color.colorGoldenrod_100,
    borderBottomWidth: 1,
    width: 390,
    height: 95,
    position: "absolute",
  },
  chatWithUs: {
    left: 94,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    width: 238,
    height: 27,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    left: 22,
    borderRadius: Border.br_5xs,
    width: 37,
    height: 33,
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    top: 35,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 10,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 23,
    opacity: 0.35,
    height: 10,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
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
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 19,
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
  livechat: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Livechat1;
