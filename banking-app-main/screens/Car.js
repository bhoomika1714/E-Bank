import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent27 from "../components/GroupComponent27";
import GroupComponent28 from "../components/GroupComponent28";
import GroupComponent29 from "../components/GroupComponent29";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Car = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.car}>
      <View style={[styles.recentClaimsParent, styles.chatsParentFlexBox]}>
        <Text style={styles.recentClaims}>Recent Claims</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <Text style={styles.welcomeBack}>Welcome back,</Text>
      <GroupComponent27 />
      <GroupComponent28 />
      <GroupComponent29 />
      <View style={[styles.chatsParent, styles.chatsParentFlexBox]}>
        <View style={[styles.chats, styles.chatsParentFlexBox]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/chats1.png")}
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
            source={require("../assets/group-51.png")}
          />
        </Pressable>
        <Image
          style={[styles.weuilocationFilledIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/weuilocationfilled1.png")}
        />
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.groupItemPosition}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-63.png")}
        />
        <View style={[styles.groupItem, styles.groupItemPosition]} />
      </View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Insuarance")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <View style={styles.statusBarwhite}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  groupItemPosition: {
    height: 78,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  recentClaims: {
    fontSize: FontSize.m3TitleMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.text,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.mobileBody3Regular_size,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorPeru_200,
    textAlign: "right",
  },
  recentClaimsParent: {
    top: 461,
    left: 25,
    gap: 182,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  welcomeBack: {
    top: -125,
    left: 24,
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.mobileBody3Regular,
    color: "#3e3e3e",
    textAlign: "left",
    position: "absolute",
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowRadius: 16,
    elevation: 16,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: -1,
    left: 9,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 362,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupChild: {
    top: 78,
    left: 26,
    width: 326,
    maxHeight: "100%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorGray_100,
    height: 78,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  container: {
    left: "4.8%",
    top: "4.43%",
    right: "84%",
    bottom: "90.64%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 36,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    width: 375,
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  car: {
    shadowColor: "rgba(88, 88, 88, 0.1)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Car;
