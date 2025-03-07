import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.helloNice, styles.helloNiceLayout]}>
          Hello Nice
        </Text>
        <View
          style={[
            styles.welcomeToLivechatIWasMadeWrapper,
            styles.groupChildBorder,
          ]}
        >
          <Text
            style={[styles.welcomeToLivechat, styles.helloNiceFlexBox]}
          >{`Welcome to LiveChat
I was made with  Pick a topic from the list or type down a question!`}</Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.helloNiceLayout]}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-9.png")}
        />
        <Text style={[styles.livechat0210Pm, styles.helloNiceLayout]}>
          Livechat 02:10 PM
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  helloNiceLayout: {
    height: 27,
    position: "absolute",
  },
  helloNiceFlexBox: {
    display: "flex",
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    alignItems: "center",
  },
  groupChild: {
    width: 154,
    height: 54,
    top: 0,
  },
  helloNice: {
    marginLeft: -146.5,
    top: 14,
    width: 87,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    left: "50%",
    height: 27,
  },
  welcomeToLivechat: {
    width: 251,
    alignItems: "center",
    fontSize: FontSize.font_size,
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  welcomeToLivechatIWasMadeWrapper: {
    top: 61,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
  rectangleParent: {
    top: 27,
    left: 35,
    width: 295,
    height: 209,
    position: "absolute",
  },
  groupItem: {
    top: 1,
    width: 28,
    height: 25,
    left: 0,
    position: "absolute",
  },
  livechat0210Pm: {
    marginLeft: -51,
    fontSize: FontSize.mobileBody3Regular_size,
    width: 105,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    left: "50%",
    height: 27,
    top: 0,
  },
  groupContainer: {
    width: 108,
    left: 0,
    top: 0,
  },
  groupParent: {
    width: 330,
    height: 236,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default GroupComponent1;
