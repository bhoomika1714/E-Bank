import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Time from "./Time";
import {
  Padding,
  Border,
  Gap,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const Frame13 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.statusBar}>
          <View style={[styles.gruopStatus, styles.tabBarFlexBox]}>
            <Time
              hours="9"
              minutes="41"
              showLocation={false}
              propColor="#000"
              propColor1="#000"
              propColor2="#000"
              locationArrow={require("../assets/location-arrow2.png")}
            />
            <View style={[styles.icons, styles.frameFlexBox]}>
              <Image
                style={styles.cellularSignalIcon}
                contentFit="cover"
                source={require("../assets/cellular-signal3.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/wifi12.png")}
              />
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/battery3.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.tabBar, styles.tabBarFlexBox]}>
          <View style={[styles.exit, styles.exitFlexBox]}>
            <Image
              style={styles.arrowLeftIcon}
              contentFit="cover"
              source={require("../assets/arrowleft9.png")}
            />
          </View>
          <View style={[styles.title, styles.titleLayout]}>
            <Text style={styles.label}>Sign Up</Text>
          </View>
          <View style={[styles.hiddenShape, styles.titleLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    overflow: "hidden",
    width: 375,
  },
  tabBarFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  iconLayout: {
    height: 12,
    overflow: "hidden",
  },
  exitFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleLayout: {
    height: 36,
    borderRadius: Border.br_5xs,
  },
  cellularSignalIcon: {
    width: 18,
    height: 10,
  },
  wifiIcon: {
    width: 16,
  },
  batteryIcon: {
    width: 24,
  },
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_13xs,
    alignItems: "center",
  },
  gruopStatus: {
    alignItems: "center",
  },
  statusBar: {
    padding: Padding.p_5xl,
    width: 375,
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  exit: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
    justifyContent: "center",
  },
  label: {
    fontSize: FontSize.font_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.lightGray11,
    textAlign: "left",
  },
  title: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  hiddenShape: {
    width: 36,
  },
  tabBar: {
    paddingLeft: Padding.p_8xs,
  },
  frame1: {
    height: 158,
    alignItems: "center",
  },
  frame: {
    height: 121,
    alignItems: "center",
    overflow: "hidden",
    width: 375,
  },
});

export default Frame13;
