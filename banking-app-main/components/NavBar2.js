import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const NavBar2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628270.png")}
          />
        </Pressable>
        <View style={[styles.vectorParent, styles.titleFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-65.png")}
          />
          <Text style={styles.middleTitletext}>June 2023</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-52.png")}
          />
        </View>
        <View style={styles.placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  frameChild: {
    width: 6,
    height: 12,
  },
  middleTitletext: {
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.font,
    color: Color.textBigTitle,
    textAlign: "center",
  },
  vectorParent: {
    gap: Gap.gap_8xs,
    justifyContent: "center",
  },
  placeholder: {
    width: 42,
    height: 23,
  },
  title: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  navbar: {
    position: "absolute",
    marginLeft: -188.5,
    top: 36,
    left: "50%",
    backgroundColor: Color.white,
    width: 390,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavBar2;
