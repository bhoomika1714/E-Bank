import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusDefaultStyleprimarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleprimarySizeLargeIconfalseTexttrue";
import Frame14 from "../components/Frame14";
import {
  Gap,
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";

const SendMoney1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendMoney}>
      <View style={[styles.content, styles.infoFlexBox]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user5.png")}
        />
        <View style={styles.userInfo}>
          <View style={styles.nameInfo}>
            <Text style={[styles.label, styles.sendTypo]}>Alex</Text>
            <Text style={[styles.whoIsHe, styles.label2Typo]}>Your Friend</Text>
          </View>
        </View>
        <View style={styles.activityGroup}>
          <View style={styles.selectCardFlexBox}>
            <View style={styles.amount}>
              <Text style={[styles.label1, styles.labelTypo]}>
                <Text style={styles.text}>$</Text>
                <Text style={styles.text1}> 3,000</Text>
              </Text>
              <View style={styles.liner} />
            </View>
            <Pressable
              style={[styles.currencyUnit, styles.iconSpaceBlock]}
              onPress={() => navigation.navigate("Money")}
            >
              <Text style={[styles.label2, styles.label2Typo]}>USD</Text>
              <Image
                style={styles.flagIcon}
                contentFit="cover"
                source={require("../assets/flag1.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.selectCard, styles.selectCardFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.icon, styles.iconFlexBox]}>
                <Image
                  style={styles.cardIcon}
                  contentFit="cover"
                  source={require("../assets/card1.png")}
                />
              </View>
              <View style={styles.nameCardBalance}>
                <View style={styles.nameCard}>
                  <Text style={[styles.visa, styles.labelTypo]}>Visa</Text>
                  <Image
                    style={styles.dotsIcon}
                    contentFit="cover"
                    source={require("../assets/dots.png")}
                  />
                  <Text style={[styles.visa, styles.labelTypo]}>1234</Text>
                </View>
                <Text style={[styles.balanceAmount, styles.label2Typo]}>
                  $ 5,353.11
                </Text>
              </View>
            </View>
            <View style={[styles.dropButton, styles.dropButtonFlexBox]}>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown1.png")}
              />
            </View>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>1</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>2</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>4</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>5</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>6</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>7</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>8</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>9</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>.</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label3, styles.labelTypo]}>0</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon24.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonSendParent}>
          <StatusDefaultStyleprimarySizeLargeIconfalseTexttrue
            statusDefaultStyleprimaryPosition="absolute"
            statusDefaultStyleprimaryBackgroundColor="#e0a340"
            statusDefaultStyleprimaryTop={0}
            statusDefaultStyleprimaryLeft={0}
            statusDefaultStyleprimaryWidth={327}
            statusDefaultStyleprimaryHeight={54}
            statusDefaultStyleprimaryAlignSelf="unset"
            label="send"
            labelFontWeight="500"
            labelFontFamily="Montserrat-Medium"
            labelColor="#fff"
          />
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
        </View>
      </View>
      <Frame14 />
    </View>
  );
};

const styles = StyleSheet.create({
  infoFlexBox: {
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
  sendTypo: {
    textAlign: "left",
    fontSize: FontSize.font_size,
  },
  label2Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  labelTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "left",
    fontWeight: "600",
  },
  iconSpaceBlock: {
    paddingVertical: 0,
    flexDirection: "row",
  },
  selectCardFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconFlexBox: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  dropButtonFlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 105,
    height: 123,
  },
  label: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightGray11,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.font_size,
  },
  whoIsHe: {
    color: Color.darkWhiteGrey60,
  },
  nameInfo: {
    gap: Gap.gap_18xs,
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center",
  },
  text: {
    color: Color.colorPeru_200,
  },
  text1: {
    color: Color.lightGray11,
  },
  label1: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.montserratSemiBold,
  },
  liner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryMain,
    width: 1,
    height: 28,
    opacity: 0.5,
  },
  amount: {
    gap: Gap.gap_17xs,
    flexDirection: "row",
    alignItems: "center",
  },
  label2: {
    color: Color.blackWhiteGray90,
  },
  flagIcon: {
    width: 23,
    height: 17,
    overflow: "hidden",
  },
  currencyUnit: {
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_xs,
    gap: Gap.gap_12xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  cardIcon: {
    width: 26,
    height: 26,
  },
  icon: {
    backgroundColor: Color.colorMediumblue_200,
    width: 46,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    flexDirection: "row",
    overflow: "hidden",
  },
  visa: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
  },
  dotsIcon: {
    width: 18,
    height: 4,
  },
  nameCard: {
    gap: Gap.gap_16xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    color: Color.blackWhiteGray50,
  },
  nameCardBalance: {
    justifyContent: "center",
    gap: Gap.gap_17xs,
  },
  info: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  arrowDownIcon: {
    width: 24,
    height: 24,
  },
  dropButton: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  selectCard: {
    borderRadius: Border.br_base,
    height: 70,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_xs,
    backgroundColor: Color.colorAliceblue_400,
    paddingTop: Padding.p_xs,
    overflow: "hidden",
  },
  label3: {
    color: Color.blackWhiteGray100,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.montserratSemiBold,
  },
  number1: {
    padding: Padding.p_3xs,
    backgroundColor: Color.colorAliceblue_400,
    flex: 1,
  },
  row1: {
    gap: Gap.gap_15xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  icon1: {
    width: 34,
    height: 34,
    overflow: "hidden",
  },
  numberPad: {
    height: 267,
    gap: Gap.gap_10xs,
    alignSelf: "stretch",
  },
  activityGroup: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  send: {
    top: 16,
    left: 140,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  buttonSendParent: {
    width: 327,
    height: 54,
  },
  content: {
    right: 0,
    bottom: 9,
    left: 0,
    height: 687,
    paddingHorizontal: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    paddingTop: Padding.p_xs,
    justifyContent: "flex-end",
    position: "absolute",
    gap: Gap.gap_8xs,
  },
  sendMoney: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default SendMoney1;
