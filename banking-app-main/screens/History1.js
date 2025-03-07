import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import HeaderSection2 from "../components/HeaderSection2";
import { useNavigation } from "@react-navigation/native";
import Info10 from "../components/Info10";
import SuperMarketShopping1 from "../components/SuperMarketShopping1";
import SuperMarketShopping from "../components/SuperMarketShopping";
import {
  Padding,
  Color,
  FontFamily,
  Border,
  FontSize,
  Gap,
} from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.history}>
      <HeaderSection2 />
      <View style={styles.frame}>
        <Pressable
          style={[styles.history1, styles.buttonSpaceBlock]}
          onPress={() => navigation.navigate("SendMoneyHome")}
        >
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={styles.label}>History</Text>
            <View style={[styles.buttonSort, styles.buttonFlexBox]}>
              <Text style={[styles.label1, styles.timeTypo]}>Sort</Text>
              <Image
                style={styles.menuIcon}
                contentFit="cover"
                source={require("../assets/menu1.png")}
              />
            </View>
          </View>
          <View style={styles.historyList}>
            <View style={[styles.aliSender, styles.aliSenderFlexBox]}>
              <Info10
                propWidth="unset"
                propFontWeight="500"
                propFontFamily="Poppins-Medium"
              />
              <View style={[styles.amount, styles.amountSpaceBlock]}>
                <Text style={styles.label1Typo}>
                  <Text style={styles.text}>
                    <Text style={styles.timeTypo}>{`+ `}</Text>
                    <Text style={styles.text2Typo}>₹</Text>
                  </Text>
                  <Text style={styles.timeTypo}>
                    <Text style={styles.text}>100</Text>
                    <Text style={styles.text5}>.00</Text>
                  </Text>
                </Text>
              </View>
            </View>
            <SuperMarketShopping1
              bagTick={require("../assets/bagtick1.png")}
              reason="Super Market"
              time="Today, at 8:23am"
              prop="- "
              prop1="36"
              prop2=".83"
            />
            <SuperMarketShopping1
              propBackgroundColor="rgba(237, 6, 119, 0.1)"
              bagTick={require("../assets/gift.png")}
              reason="Gift For You!"
              time="Yesterday, at 10:12am"
              propBackgroundColor1="rgba(53, 201, 90, 0.1)"
              propColor="#35c95a"
              prop="+ "
              prop1="60"
              propColor1="#35c95a"
              prop2=".00"
              propColor2="rgba(53, 201, 90, 0.5)"
            />
            <View style={[styles.aliSender, styles.aliSenderFlexBox]}>
              <View style={[styles.icon, styles.iconFlexBox]}>
                <View style={[styles.cardSendWrapper, styles.aliSenderFlexBox]}>
                  <Image
                    style={styles.cardSendIcon}
                    contentFit="cover"
                    source={require("../assets/cardsend.png")}
                  />
                </View>
                <View>
                  <Text style={[styles.reason, styles.reasonTypo]}>
                    Send Money
                  </Text>
                  <Text style={[styles.time, styles.timeTypo]}>
                    <Text style={styles.text6}>{`2024 `}</Text>
                    <Text style={styles.text7}>/</Text>
                    <Text style={styles.text6}>{` 02 `}</Text>
                    <Text style={styles.text7}>/</Text>
                    <Text style={styles.text6}> 02, at 10:12am</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.amount1, styles.amountSpaceBlock]}>
                <Text style={styles.label1Typo}>
                  <Text style={styles.text10}>
                    <Text style={styles.timeTypo}>{`- `}</Text>
                    <Text style={styles.text2Typo}>₹</Text>
                  </Text>
                  <Text style={styles.timeTypo}>
                    <Text style={styles.text10}>35</Text>
                    <Text style={styles.text15}>.00</Text>
                  </Text>
                </Text>
              </View>
            </View>
            <SuperMarketShopping1
              propBackgroundColor="rgba(250, 193, 83, 0.1)"
              bagTick={require("../assets/gasstation.png")}
              reason="Gas Station"
              time="2024 / 02 / 01, at 3:24pm"
              propBackgroundColor1="rgba(255, 59, 48, 0.1)"
              propColor="#ff3b30"
              prop="- "
              prop1="12"
              propColor1="#ff3b30"
              prop2=".28"
              propColor2="rgba(255, 59, 48, 0.5)"
            />
            <SuperMarketShopping1
              propBackgroundColor="rgba(30, 215, 96, 0.1)"
              bagTick={require("../assets/spotify.png")}
              reason="Premium Spotify"
              time="2024 / 01 / 29, at 5:38pm"
              propBackgroundColor1="rgba(255, 59, 48, 0.1)"
              propColor="#ff3b30"
              prop="- "
              prop1="10"
              propColor1="#ff3b30"
              prop2=".99"
              propColor2="rgba(255, 59, 48, 0.5)"
            />
            <SuperMarketShopping1
              propBackgroundColor="rgba(211, 211, 254, 0.1)"
              bagTick={require("../assets/user7.png")}
              reason="Morteza Send"
              time="2024 / 01 / 29, at 1:59pm"
              propBackgroundColor1="rgba(53, 201, 90, 0.1)"
              propColor="#35c95a"
              prop="+ "
              prop1="96"
              propColor1="#35c95a"
              prop2=".00"
              propColor2="rgba(53, 201, 90, 0.5)"
            />
            <SuperMarketShopping
              propWidth="unset"
              propBackgroundColor="rgba(81, 208, 236, 0.1)"
              bagTick={require("../assets/pet.png")}
              reason="Cat Food"
              time="2024 / 01 / 28, at 8:09pm"
              prop="- $8"
              prop1=".99"
            />
          </View>
          <View style={styles.buttonGroup}>
            <LinearGradient
              style={styles.lighting}
              locations={[0, 0.65, 1]}
              colors={["rgba(255, 255, 255, 0)", "#fff", "#fff"]}
            />
            <View style={styles.buttonMore}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.label2, styles.reasonTypo]}>More</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    backgroundColor: Color.colorAntiquewhite,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  aliSenderFlexBox: {
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  amountSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignItems: "center",
  },
  iconFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  reasonTypo: {
    fontSize: FontSize.font_size,
    textAlign: "center",
  },
  label: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
  },
  label1: {
    color: Color.colorPeru_300,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  menuIcon: {
    width: 17,
    height: 17,
  },
  buttonSort: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    gap: Gap.gap_18xs,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  text2Typo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  text: {
    color: Color.colorLimegreen_200,
  },
  text5: {
    color: Color.colorLimegreen_300,
  },
  label1Typo: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  amount: {
    backgroundColor: Color.colorLimegreen_400,
  },
  aliSender: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  cardSendIcon: {
    width: 28,
    height: 28,
  },
  cardSendWrapper: {
    backgroundColor: Color.colorMediumblue_200,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  reason: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_800,
    fontWeight: "500",
    fontSize: FontSize.font_size,
  },
  text6: {
    fontSize: FontSize.mobileBody3Regular_size,
  },
  text7: {
    fontSize: FontSize.size_5xs,
  },
  time: {
    color: Color.darkWhiteGrey60,
    textAlign: "center",
  },
  icon: {
    gap: Gap.gap_8xs,
  },
  text10: {
    color: Color.colorTomato_100,
  },
  text15: {
    color: Color.colorTomato_200,
  },
  amount1: {
    backgroundColor: Color.colorTomato_300,
  },
  historyList: {
    alignSelf: "stretch",
  },
  lighting: {
    backgroundColor: "transparent",
    height: 102,
    width: 375,
  },
  label2: {
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorPeru_300,
  },
  button: {
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  buttonMore: {
    padding: Padding.p_5xl,
    marginTop: -102,
    width: 375,
  },
  buttonGroup: {
    width: 351,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: 0,
    height: 102,
  },
  history1: {
    shadowColor: "#fff",
    shadowRadius: 199.6,
    elevation: 199.6,
    borderRadius: Border.br_13xl,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    paddingVertical: Padding.p_13xl,
    gap: Gap.gap_4xs,
    height: 713,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    paddingHorizontal: Padding.p_5xl,
  },
  frame: {
    marginTop: -190,
    height: 713,
    width: 375,
    alignItems: "center",
  },
  history: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowRadius: 44.8,
    elevation: 44.8,
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 812,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
});

export default History1;
