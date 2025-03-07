import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import GroupComponent21 from "../components/GroupComponent21";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import {
  Gap,
  Border,
  FontFamily,
  Padding,
  Color,
  FontSize,
} from "../GlobalStyles";

const Pay1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pay}>
      <View style={[styles.content, styles.infoFlexBox]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user5.png")}
        />
        <GroupComponent21 labelWidth={170} propWidth={150} label=" 190,000" />
        <View style={styles.activityGroup}>
          <View style={[styles.selectCard, styles.buttonFlexBox]}>
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
                <Text style={styles.balanceAmount}>$ 5,353.11</Text>
              </View>
            </View>
            <View style={[styles.dropButton, styles.titleFlexBox]}>
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
                <Text style={[styles.label, styles.visaTypo]}>1</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>2</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>4</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>5</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>6</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>7</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>8</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>9</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>.</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label, styles.visaTypo]}>0</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon11.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Info7")}
        >
          <Text style={[styles.proceedToPay, styles.label11Clr]}>
            Proceed to Pay
          </Text>
        </Pressable>
      </View>
      <View style={[styles.payInner, styles.contentPosition]}>
        <View style={[styles.payInner, styles.contentPosition]}>
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
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={[styles.title, styles.titleLayout]}>
          <Text style={[styles.label11, styles.label11Clr]}>Pay</Text>
        </View>
        <View style={[styles.hiddenShape, styles.titleLayout]} />
      </View>
      <View style={[styles.payChild, styles.tabBarPosition]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Payment")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
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
  buttonFlexBox: {
    borderRadius: Border.br_base,
    flexDirection: "row",
    alignItems: "center",
  },
  iconFlexBox: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  visaTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  titleFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  label11Clr: {
    color: Color.white,
    fontWeight: "700",
  },
  contentPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  tabBarPosition: {
    top: 32,
    flexDirection: "row",
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
  cardIcon: {
    width: 26,
    height: 26,
  },
  icon: {
    backgroundColor: Color.colorMediumblue_200,
    width: 46,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  visa: {
    color: Color.lightGray11,
    textAlign: "left",
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
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.blackWhiteGray50,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
  },
  nameCardBalance: {
    gap: Gap.gap_17xs,
    justifyContent: "center",
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
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
  },
  selectCard: {
    height: 70,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_xs,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.colorAliceblue_400,
    alignSelf: "stretch",
    paddingTop: Padding.p_xs,
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.size_9xl,
    color: Color.blackWhiteGray100,
    textAlign: "left",
  },
  number1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
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
  proceedToPay: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    width: 327,
    justifyContent: "center",
    flexDirection: "row",
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
  payInner: {
    top: 0,
    width: 390,
    height: 95,
  },
  label11: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
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
    left: 138,
    width: 327,
    justifyContent: "space-between",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 42,
    height: 40,
  },
  payChild: {
    left: 22,
    backgroundColor: Color.colorGray_1800,
    paddingRight: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
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

export default Pay1;
