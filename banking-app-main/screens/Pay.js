import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import {
  Gap,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const Pay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pay}>
      <View style={[styles.content, styles.infoFlexBox]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <View style={styles.currencyUnitParent}>
          <View style={[styles.currencyUnit, styles.iconSpaceBlock]}>
            <Text style={[styles.label, styles.labelTypo]}>INR</Text>
            <Text style={[styles.hindi, styles.hindiTypo]}>{`🇮🇳 `}</Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={styles.text}>₹</Text>
            <View style={styles.amount}>
              <Text style={[styles.label1, styles.visaTypo]}> 190,000</Text>
              <View style={styles.liner} />
            </View>
          </View>
        </View>
        <View style={styles.activityGroup}>
          <View style={[styles.selectCard, styles.buttonLayout1]}>
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
                  <Text style={[styles.visa, styles.visaTypo]}>Visa</Text>
                  <Image
                    style={styles.dotsIcon}
                    contentFit="cover"
                    source={require("../assets/dots.png")}
                  />
                  <Text style={[styles.visa, styles.visaTypo]}>1234</Text>
                </View>
                <Text style={[styles.balanceAmount, styles.labelTypo]}>
                  $ 5,353.11
                </Text>
              </View>
            </View>
            <View style={[styles.dropButton, styles.titleFlexBox]}>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown.png")}
              />
            </View>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>1</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>2</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>3</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>4</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>5</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>6</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>7</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>8</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>9</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>.</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={styles.label2}>0</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon10.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonLayout]}
          onPress={() => navigation.navigate("Info5")}
        >
          <Text style={[styles.send, styles.sendClr]}>Send</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBarParent, styles.parentPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={390}
          statusBarHeight={95}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light3.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
        <Image
          style={[styles.batteryLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/battery--light1.png")}
        />
        <Image
          style={[styles.networkSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/network-signal-light1.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/wifi-signal--light1.png")}
        />
        <Image
          style={[styles.timeLight, styles.contentPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.buttonLayout]}>
        <View style={[styles.title, styles.titleLayout]}>
          <Text style={[styles.label13, styles.sendClr]}>Pay</Text>
        </View>
        <View style={[styles.hiddenShape, styles.titleLayout]} />
      </View>
      <View style={styles.payInner}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Scheme")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/group-12726282591.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoFlexBox: {
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
  iconSpaceBlock: {
    paddingVertical: 0,
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.m3LabelLarge_size,
  },
  hindiTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  parentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  visaTypo: {
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  buttonLayout1: {
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  iconFlexBox: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  titleFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLayout: {
    width: 327,
    flexDirection: "row",
  },
  sendClr: {
    color: Color.white,
    fontWeight: "700",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  contentPosition: {
    left: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 36,
    borderRadius: Border.br_5xs,
  },
  userIcon: {
    width: 105,
    height: 123,
  },
  label: {
    color: Color.blackWhiteGray90,
  },
  hindi: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorsFont,
    width: 24,
  },
  currencyUnit: {
    top: 11,
    left: 216,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 29,
    paddingHorizontal: Padding.p_xs,
    gap: Gap.gap_12xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 48,
    fontFamily: FontFamily.interBold,
    color: Color.colorPeru_200,
    fontWeight: "700",
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  label1: {
    fontSize: FontSize.size_9xl,
    color: Color.lightGray11,
  },
  liner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryMain,
    width: 1,
    height: 28,
    opacity: 0.5,
  },
  amount: {
    top: 8,
    left: 20,
    width: 150,
    gap: Gap.gap_17xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  parent: {
    width: 170,
    height: 48,
  },
  currencyUnitParent: {
    width: 298,
    height: 48,
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
    color: Color.lightGray11,
    fontSize: FontSize.m3LabelLarge_size,
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
    gap: Gap.gap_17xs,
    justifyContent: "center",
  },
  info: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  arrowDownIcon: {
    height: 24,
    width: 24,
  },
  dropButton: {
    borderRadius: Border.br_5xs,
  },
  selectCard: {
    height: 70,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_xs,
    justifyContent: "space-between",
    backgroundColor: Color.colorAliceblue_400,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: Padding.p_xs,
    overflow: "hidden",
  },
  label2: {
    color: Color.blackWhiteGray100,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_9xl,
    textAlign: "left",
  },
  number1: {
    padding: Padding.p_3xs,
    backgroundColor: Color.colorAliceblue_400,
    flex: 1,
  },
  row1: {
    gap: Gap.gap_15xs,
    alignSelf: "stretch",
    flexDirection: "row",
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
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_base,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    right: 0,
    bottom: 9,
    height: 687,
    paddingHorizontal: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    paddingTop: Padding.p_xs,
    justifyContent: "flex-end",
    left: 0,
    position: "absolute",
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    overflow: "hidden",
  },
  statusBarParent: {
    width: 390,
    height: 95,
  },
  label13: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  title: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  hiddenShape: {
    width: 36,
  },
  tabBar: {
    top: 32,
    left: 138,
    justifyContent: "space-between",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 42,
    height: 40,
  },
  payInner: {
    top: 30,
    left: 30,
    backgroundColor: Color.colorGray_1800,
    width: 40,
    paddingRight: Padding.p_10xs,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  pay: {
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
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Pay;
