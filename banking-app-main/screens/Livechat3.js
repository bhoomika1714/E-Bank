import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent40 from "../components/GroupComponent40";
import GroupComponent39 from "../components/GroupComponent39";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Livechat3 = () => {
  return (
    <View style={styles.livechat}>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.groupContainer}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.childBorder]} />
            <Text style={[styles.helloNice, styles.helloNiceTypo]}>
              Hello Nice
            </Text>
            <View
              style={[
                styles.welcomeToLivechatIWasMadeWrapper,
                styles.welcomeWrapperBorder,
              ]}
            >
              <Text style={styles.welcomeToLivechat}>{`Welcome to LiveChat
I was made with  Pick a topic from the list or type down a question!`}</Text>
            </View>
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-6.png")}
            />
            <Text style={[styles.livechat0210Pm, styles.livechat0210Typo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupParentPosition]}>
          <View style={styles.frameWrapper}>
            <View
              style={[
                styles.welcomeToLivechatWrapper,
                styles.welcomeWrapperBorder,
              ]}
            >
              <Text style={styles.helloNiceTypo}>{`Welcome to
 LiveChat`}</Text>
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupPosition]}>
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
        <GroupComponent4
          propTop={292}
          propLeft={270}
          propBackgroundColor="#003df5"
        />
      </View>
      <View style={[styles.livechatInner, styles.livechatPosition]}>
        <View style={[styles.writeAMessgeParent, styles.writePosition]}>
          <Text style={[styles.writeAMessge, styles.writePosition]}>
            Write a messge
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
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
      </View>
      <View style={[styles.livechatChild, styles.livechatPosition]}>
        <GroupComponent40 />
      </View>
      <GroupComponent39 />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    left: 0,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  helloNiceTypo: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  welcomeWrapperBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    height: 30,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    width: 28,
    left: 0,
    position: "absolute",
  },
  livechat0210Typo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  livechatPosition: {
    left: "50%",
    position: "absolute",
  },
  writePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameIconLayout: {
    width: 30,
    top: 2,
    height: 30,
    position: "absolute",
  },
  groupChild: {
    width: 154,
    height: 59,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    left: 0,
    position: "absolute",
  },
  helloNice: {
    marginLeft: -125.5,
    top: 15,
    left: "50%",
    position: "absolute",
  },
  welcomeToLivechat: {
    display: "flex",
    width: 251,
    alignItems: "center",
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  welcomeToLivechatIWasMadeWrapper: {
    top: 67,
  },
  rectangleParent: {
    top: 35,
    left: 4,
    width: 295,
    height: 215,
    position: "absolute",
  },
  groupItem: {
    top: 2,
    height: 28,
    width: 28,
  },
  livechat0210Pm: {
    marginLeft: -37.5,
  },
  groupView: {
    width: 135,
  },
  groupContainer: {
    left: 7,
    width: 299,
    height: 250,
    top: 0,
    position: "absolute",
  },
  welcomeToLivechatWrapper: {
    top: 0,
  },
  frameWrapper: {
    top: 30,
    left: 35,
    width: 145,
    height: 88,
    position: "absolute",
  },
  groupInner: {
    top: 1,
  },
  livechat0210Pm1: {
    marginLeft: -51,
  },
  groupParent2: {
    width: 108,
  },
  groupParent1: {
    top: 392,
    width: 180,
    height: 118,
  },
  groupParent: {
    top: 79,
    height: 510,
    width: 392,
  },
  writeAMessge: {
    marginTop: -16,
    marginLeft: -172.5,
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  ellipseIcon: {
    height: "150%",
    width: "13.91%",
    top: "-21.87%",
    right: "12.75%",
    bottom: "-28.12%",
    left: "73.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    left: 208,
    overflow: "hidden",
  },
  vuesaxlinearpaperclip2Icon: {
    left: 262,
  },
  frameIcon1: {
    left: 315,
    overflow: "hidden",
  },
  writeAMessgeParent: {
    marginTop: -14.5,
    marginLeft: -162,
    width: 345,
    height: 32,
  },
  livechatInner: {
    marginLeft: -233.5,
    bottom: 0,
    width: 450,
    height: 75,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  livechatChild: {
    marginLeft: -195.5,
    top: 408,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 316,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    width: 392,
    overflow: "hidden",
  },
  livechat: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Livechat3;
