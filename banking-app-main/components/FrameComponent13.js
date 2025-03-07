import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Gap, Padding } from "../GlobalStyles";

const FrameComponent13 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.chatsFlexBox]}>
      <View style={styles.chatsWrapper}>
        <View style={[styles.chats, styles.chatsFlexBox]}>
          <Image
            style={styles.chatsIcon}
            contentFit="cover"
            source={require("../assets/chats.png")}
          />
          <View style={styles.line} />
        </View>
      </View>
      <Pressable
        style={styles.chatsIcon}
        onPress={() => navigation.navigate("ScanCamera")}
      >
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/group-5.png")}
      />
      </Pressable>
      <Pressable
        style={styles.chatsIcon}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/weuilocationfilled.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chatsIcon}
        onPress={() => navigation.navigate("Profile2")}
      >
      <Image
        style={styles.chatsIcon}
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
    position: "absolute",
  },
  chatsIcon: {
    height: 24,
    width: 24,
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
    top: 0,
    left: 0,
    gap: Gap.gap_18xs,
    height: 32,
  },
  chatsWrapper: {
    height: 32,
    width: 24,
  },
  componentChild: {
    top:3,
    width: 17,
    height: 16,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  frameParent: {  //nav bar
    bottom: 2,
    left: 22,
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

export default FrameComponent13;
