import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent4 from "../components/GroupComponent4";
import { useNavigation } from "@react-navigation/native";
import GroupComponent23 from "../components/GroupComponent23";
import TimeStyle from "../components/TimeStyle";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Livechat2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechat}>
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <Text style={[styles.helloNice, styles.helloNiceTypo]}>
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
              source={require("../assets/group-6.png")}
            />
            <Text style={[styles.livechat0210Pm, styles.livechat0210Typo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.parentPosition]}>
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
              source={require("../assets/group-6.png")}
            />
            <Text style={[styles.livechat0210Pm1, styles.livechat0210Typo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <GroupComponent4
          propTop={261}
          propLeft={212}
          propBackgroundColor="#e0a340"
        />
      </View>
      <View style={[styles.writeAMessgeParent, styles.writePosition]}>
        <Pressable
          style={[styles.writeAMessgeContainer, styles.writePosition]}
          onPress={() => navigation.navigate("LivechatAnalysis")}
        >
          <Text style={[styles.writeAMessge, styles.helloNiceTypo]}>
            Write a messge
          </Text>
        </Pressable>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
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
      <GroupComponent23 />
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangleView, styles.capacityPosition]} />
        <Text style={[styles.chatWithUs, styles.chatWithUsFlexBox]}>
          Chat with us!
        </Text>
        <View style={styles.exit}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </View>
        <TimeStyle
          propTop={0}
          propLeft={30}
          propWidth={55}
          propHeight={25}
          propMarginTop={-3.65}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={[styles.battery, styles.borderLayout]}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.capacityPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  helloNiceTypo: {
    textAlign: "left",
    lineHeight: 30,
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
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
    alignItems: "center",
    textAlign: "left",
    lineHeight: 30,
  },
  groupPosition: {
    height: 30,
    left: 0,
    top: 0,
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
  writePosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "10.67%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    width: 30,
    top: 25,
    height: 30,
    position: "absolute",
  },
  capacityPosition: {
    top: 2,
    position: "absolute",
  },
  borderLayout: {
    height: 14,
    position: "absolute",
  },
  groupChild: {
    width: 154,
    height: 59,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloNice: {
    marginLeft: -127.5,
    top: 15,
    left: "50%",
    position: "absolute",
  },
  welcomeToLivechat: {
    width: 251,
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
    display: "flex",
  },
  welcomeToLivechatIWasMadeWrapper: {
    top: 67,
  },
  rectangleParent: {
    top: 30,
    height: 215,
    width: 295,
  },
  groupItem: {
    top: 1,
  },
  livechat0210Pm: {
    marginLeft: -35,
  },
  groupView: {
    width: 140,
  },
  groupContainer: {
    left: 4,
    height: 245,
    width: 295,
    top: 0,
    position: "absolute",
  },
  welcomeToLivechatWrapper: {
    top: 0,
  },
  frameWrapper: {
    top: 29,
    left: 35,
    width: 145,
    height: 88,
    position: "absolute",
  },
  groupInner: {
    top: 0,
  },
  livechat0210Pm1: {
    marginLeft: -33.5,
  },
  groupParent2: {
    width: 143,
  },
  groupParent1: {
    top: 368,
    width: 180,
    height: 117,
  },
  groupParent: {
    top: 79,
    left: 11,
    width: 334,
    height: 485,
    position: "absolute",
  },
  writeAMessge: {
    marginTop: -12.5,
    marginLeft: -162,
  },
  writeAMessgeContainer: {
    top: "50%",
  },
  frameChild: {
    height: "64%",
    top: "21.33%",
    right: "19.11%",
    bottom: "14.67%",
    left: "70.22%",
  },
  frameItem: {
    height: "250.67%",
    top: "456%",
    right: "66.22%",
    bottom: "-606.67%",
    left: "23.11%",
  },
  frameIcon: {
    left: 271,
    overflow: "hidden",
  },
  vuesaxlinearpaperclip2Icon: {
    left: 325,
  },
  frameIcon1: {
    left: 378,
    overflow: "hidden",
  },
  writeAMessgeParent: {
    marginLeft: -221.5,
    bottom: 0,
    width: 450,
    height: 75,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  rectangleView: {
    backgroundColor: Color.colorGoldenrod_100,
    borderBottomWidth: 1,
    height: 93,
    width: 390,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    top: 2,
    left: 0,
  },
  chatWithUs: {
    top: 36,
    left: 106,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    width: 235,
    height: 36,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    top: 32,
    left: 39,
    borderRadius: Border.br_5xs,
    width: 37,
    height: 43,
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  cellularConnectionIcon: {
    width: 17,
    height: 13,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 23,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 5,
    position: "absolute",
  },
  capacity: {
    right: 5,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 9,
  },
  battery: {
    top: 13,
    right: 24,
    width: 25,
  },
  wifiIcon: {
    width: 16,
    height: 13,
  },
  rectangleGroup: {
    left: -7,
    height: 95,
    width: 390,
    top: 0,
    position: "absolute",
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

export default Livechat2;
