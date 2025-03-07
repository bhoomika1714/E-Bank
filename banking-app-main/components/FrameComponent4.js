import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent4 = () => {
  return (
    <View style={styles.livechatAnalysis1Inner}>
      <View style={[styles.writeAMessageParent, styles.writePosition]}>
        <Text style={[styles.writeAMessage, styles.writePosition]}>
          Write a message
        </Text>
        <Image
          style={styles.groupChild}
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
          source={require("../assets/frame3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameIconLayout: {
    height: 30,
    width: 30,
    top: 2,
    position: "absolute",
  },
  writeAMessage: {
    marginTop: -16,
    marginLeft: -173,
    fontSize: FontSize.font_size,
    lineHeight: 30,
    fontFamily: FontFamily.interRegular,
    color: Color.iPFTGreyText,
    textAlign: "left",
  },
  groupChild: {
    height: "150%",
    width: "13.87%",
    top: "-21.87%",
    right: "12.72%",
    bottom: "-28.12%",
    left: "73.41%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon: {
    left: 209,
    overflow: "hidden",
  },
  vuesaxlinearpaperclip2Icon: {
    left: 263,
  },
  frameIcon1: {
    left: 316,
    overflow: "hidden",
  },
  writeAMessageParent: {
    marginTop: -14.5,
    marginLeft: -163,
    width: 346,
    height: 32,
  },
  livechatAnalysis1Inner: {
    marginLeft: -225.5,
    bottom: 0,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 450,
    height: 75,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
});

export default FrameComponent4;
