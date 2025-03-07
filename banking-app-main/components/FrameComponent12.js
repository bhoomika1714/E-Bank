import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Gap, Padding } from "../GlobalStyles";

const FrameComponent12 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chatsParent, styles.chatsFlexBox]}>
      <View style={[styles.chats, styles.chatsFlexBox]}>
        <Image
          style={styles.chatsIcon}
          contentFit="cover"
          source={require("../assets/chats.png")}
        />
        <View style={styles.line} />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("QRCode")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chatsIcon}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/weuilocationfilled.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chatsIcon}
        onPress={() => navigation.navigate("Profile2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
      <Image
        style={styles.chatsIcon}
        contentFit="cover"
        source={require("../assets/frame-1272628294.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  chatsIcon: {
    width: 24,
    height: 24,
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
    overflow: "hidden",
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  icon1: {
    overflow: "hidden",
  },
  chatsParent: {
    position: "absolute",
    bottom: 2,
    left: 5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 362,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_11xl,
    overflow: "hidden",
  },
});

export default FrameComponent12;
