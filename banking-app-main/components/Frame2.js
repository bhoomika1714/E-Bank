import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Info10 from "./Info10";
import SuperMarketShopping from "./SuperMarketShopping";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frame1SpaceBlock]}>
        <View style={[styles.history, styles.lineShadowBox]}>
          <Pressable
            style={styles.titleFlexBox}
            onPress={() => navigation.navigate("History1")}
          >
            <Text style={styles.label}>History</Text>
            <Pressable
              style={[styles.buttonSort, styles.amountFlexBox]}
              onPress={() => navigation.navigate("History1")}
            >
              <Image
                style={styles.menuIcon}
                contentFit="cover"
                source={require("../assets/menu.png")}
              />
            </Pressable>
          </Pressable>
          <View style={styles.historyList}>
            <View style={[styles.aliSender, styles.titleFlexBox]}>
              <Info10 />
              <View style={[styles.amount, styles.amountFlexBox]}>
                <Text style={styles.number}>
                  <Text style={styles.text}>+ $100</Text>
                  <Text style={styles.text1}>.00</Text>
                </Text>
              </View>
            </View>
            <SuperMarketShopping
              bagTick={require("../assets/bagtick.png")}
              reason="Super Market"
              time="Today, at 8:23am"
              prop="- $36"
              prop1=".99"
            />
            <SuperMarketShopping
              propWidth="unset"
              propBackgroundColor="rgba(250, 193, 83, 0.1)"
              bagTick={require("../assets/gasstation.png")}
              reason="Gas Station"
              time="2024 / 02 / 01, at 3:24pm"
              prop="- $12"
              prop1=".28"
            />
          </View>
        </View>
        <View style={[styles.chatsParent, styles.amountFlexBox]}>
          <View style={styles.chats}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/chats1.png")}
            />
            <View style={[styles.line, styles.lineShadowBox]} />
          </View>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("QRCode")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-51.png")}
            />
          </Pressable>
          <Image
            style={[styles.weuilocationFilledIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/weuilocationfilled1.png")}
          />
          <Pressable
            style={styles.iconLayout}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/profile1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1SpaceBlock: {
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  lineShadowBox: {
    
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  amountFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  label: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
    marginLeft:-15,
  },
  menuIcon: {
    marginRight:5,
    height: 17,
    width: 17,
  },
  buttonSort: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAntiquewhite,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.colorLimegreen_200,
  },
  text1: {
    color: Color.colorLimegreen_300,
  },
  number: {
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "center",
  },
  amount: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorLimegreen_400,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
  },
  aliSender: {
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  historyList: {
    alignSelf: "stretch",
  },
  history: {
    shadowColor: "rgba(41, 45, 50, 0.05)",
    shadowRadius: 50,
    elevation: 50,
    borderRadius: Border.br_13xl,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    height: 350,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_13xl,
    gap: Gap.gap_4xs,
    backgroundColor: Color.white,
    alignSelf: "stretch",
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
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    height: 16,
    width: 17,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    borderRadius: Border.br_3xs,
    width: 362,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    marginTop: -89,
    alignItems: "center",
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    overflow: "hidden",
    justifyContent: "center",
  },
  frame1: { //changes made
    left:15,
    paddingTop:30,
    width: 380,
    height: 367,
    paddingVertical: 0,
  },
  frame: {
    position: "absolute",
    top: 360,  //changed
    left: -6,
    width: 381,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame2;
