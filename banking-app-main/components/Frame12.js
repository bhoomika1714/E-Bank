import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Frame12 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.framePosition1]}>
      <View style={[styles.frameChild, styles.framePosition]} />
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={[styles.frameInner, styles.framePosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Car")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628259.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.statusBarwhite, styles.frameChildPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.frame1Layout]}
          contentFit="cover"
          source={require("../assets/connections6.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    overflow: "hidden",
    left: 0,
  },
  framePosition: {
    backgroundColor: Color.white,
    top: 0,
    position: "absolute",
  },
  frame1Layout: {
    width: 68,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    width: 375,
  },
  frameChild: {
    height: 92,
    width: 375,
    left: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 42,
    height: 40,
  },
  frameInner: {
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: Padding.p_10xs,
  },
  frame1: {
    top: 59,
    height: 40,
    overflow: "hidden",
    left: 0,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    height: 16,
  },
  time: {
    marginTop: -10,
    top: "50%",
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    position: "absolute",
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 36,
    width: 375,
    top: 0,
    position: "absolute",
  },
  frame: {
    height: 99,
    width: 375,
    top: 0,
    position: "absolute",
  },
});

export default Frame12;
