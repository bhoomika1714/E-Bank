import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={styles.monthlySpendingLimitCard}>
          <Text style={styles.monthlySpendingLimit}>
            Monthly spending limit
          </Text>
          <View style={[styles.amountCard, styles.amountCardLayout]}>
            <View style={[styles.amountCardChild, styles.amountCardLayout]} />
            <Image
              style={styles.amountCardItem}
              contentFit="cover"
              source={require("../assets/group-76.png")}
            />
            <Text style={styles.amount854500}>Amount: $8,545.00</Text>
            <View style={styles.parent}>
              <Text style={styles.text}>
                <Text style={styles.text1}>₹</Text>
                <Text style={styles.text2}>4,600</Text>
              </Text>
              <Text style={[styles.text3, styles.textLayout]}>
                <Text style={styles.text1}>₹</Text>
                <Text style={styles.text2}>0</Text>
              </Text>
              <Text style={[styles.text6, styles.textLayout]}>
                <Text style={styles.text1}>₹</Text>
                <Text style={styles.text2}>10,000</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.chatsParent, styles.frame1Layout]}>
          <View style={styles.chats}>
            <Image
              style={styles.iconLayout}
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
  frame1Layout: {
    width: 362,
    alignItems: "center",
    overflow: "hidden",
  },
  amountCardLayout: {
    height: 113,
    left: 0,
    width: 335,
    position: "absolute",
  },
  textLayout: {
    color: Color.colorDarkgray_100,
    lineHeight: 12,
    fontSize: FontSize.mobileBody3Regular_size,
    height: 14,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  monthlySpendingLimit: {
    left: 20,
    fontSize: FontSize.font_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 258,
    height: 20,
    textAlign: "left",
    color: Color.colorGray_600,
    top: 0,
    position: "absolute",
  },
  amountCardChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhitesmoke_800,
    top: 0,
    height: 113,
  },
  amountCardItem: {
    top: 49,
    height: 16,
    width: 287,
    left: 24,
    position: "absolute",
  },
  amount854500: {
    top: 23,
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    width: 121,
    height: 15,
    fontFamily: FontFamily.mobileBody3Regular,
    left: 24,
    textAlign: "left",
    color: Color.colorGray_600,
    position: "absolute",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  text2: {
    fontFamily: FontFamily.mobileBody3Regular,
  },
  text: {
    left: 79,
    width: 41,
    lineHeight: 12,
    fontSize: FontSize.mobileBody3Regular_size,
    height: 14,
    textAlign: "left",
    color: Color.colorGray_600,
    top: 0,
    position: "absolute",
  },
  text3: {
    width: 15,
    left: 0,
    color: Color.colorDarkgray_100,
  },
  text6: {
    left: 243,
    width: 44,
  },
  parent: {
    top: 76,
    height: 14,
    width: 287,
    left: 24,
    position: "absolute",
  },
  amountCard: {
    top: 39,
  },
  monthlySpendingLimitCard: {
    height: 152,
    width: 335,
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
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
  },
  frame1: {
    height: 246,
    alignItems: "center",
  },
  frame: {
    top: 556,
    left: 6,
    width: 363,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame5;
