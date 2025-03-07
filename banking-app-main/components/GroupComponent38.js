import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const GroupComponent38 = () => {
  return (
    <View style={[styles.frameParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/group-63.png")}
          />
          <View style={styles.chatbotParent}>
            <Text style={[styles.chatbot, styles.chatbotTypo]}>Chatbot</Text>
            <Text style={[styles.supportAgent, styles.chatbotTypo]}>
              Support Agent
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 374,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 55,
    left: 0,
    position: "absolute",
  },
  chatbotTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  groupChild: {
    marginLeft: -187,
    borderStyle: "solid",
    borderColor: Color.colorSlategray_200,
    borderBottomWidth: 1,
    height: 1,
    overflow: "hidden",
    top: 0,
  },
  groupItem: {
    top: 12,
    left: 275,
    width: 90,
    height: 30,
    position: "absolute",
  },
  groupInner: {
    top: 4,
    width: 48,
    height: 48,
    left: 0,
    position: "absolute",
  },
  chatbot: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
  },
  supportAgent: {
    fontSize: FontSize.font_size,
    color: Color.iPFTGreyText,
    opacity: 0.8,
    marginTop: -5,
  },
  chatbotParent: {
    left: 81,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    width: 206,
    top: 0,
  },
  groupParent: {
    top: 22,
    width: 365,
  },
  frameParent: {
    marginLeft: -186.5,
    top: 78,
    height: 77,
  },
});

export default GroupComponent38;
