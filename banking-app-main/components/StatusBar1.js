import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Gap, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBar1 = ({
  statusBarPosition,
  statusBarWidth,
  statusBarHeight,
  statusBarTop,
  statusBarLeft,
  statusBarBackgroundColor,
  statusBarRight,
  statusBarBottom,
  notch,
  statusIconsWidth,
  statusIconsHeight,
  showNetworkSignalLight,
  wiFiSignalLight,
  showWiFiSignalLight,
  showBatteryLight,
  showTimeLight,
}) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusBarPosition),
      ...getStyleValue("width", statusBarWidth),
      ...getStyleValue("height", statusBarHeight),
      ...getStyleValue("top", statusBarTop),
      ...getStyleValue("left", statusBarLeft),
      ...getStyleValue("backgroundColor", statusBarBackgroundColor),
      ...getStyleValue("right", statusBarRight),
      ...getStyleValue("bottom", statusBarBottom),
    };
  }, [
    statusBarPosition,
    statusBarWidth,
    statusBarHeight,
    statusBarTop,
    statusBarLeft,
    statusBarBackgroundColor,
    statusBarRight,
    statusBarBottom,
  ]);

  const statusIconsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", statusIconsWidth),
      ...getStyleValue("height", statusIconsHeight),
    };
  }, [statusIconsWidth, statusIconsHeight]);

  return (
    <View style={[styles.statusBar, styles.statusBarPosition, statusBarStyle]}>
      <Image
        style={[styles.notchIcon, styles.statusBarPosition]}
        contentFit="cover"
        source={notch}
      />
      <View style={[styles.statusIcons, statusIconsStyle]}>
        {showNetworkSignalLight && (
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
        )}
        {showWiFiSignalLight && (
          <Image
            style={styles.wifiSignalLight}
            contentFit="cover"
            source={wiFiSignalLight}
          />
        )}
        {showBatteryLight && (
          <Image
            style={styles.batteryLight}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        )}
      </View>
      <Image
        style={styles.indicatorIcon}
        contentFit="cover"
        source={require("../assets/indicator.png")}
      />
      {showTimeLight && (
        <Image
          style={[styles.timeLight, styles.statusBarPosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    height: 14,
  },
  batteryLight: {
    width: 25,
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    width: 69,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_18xs,
    height: 14,
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
  },
  statusBar: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 390,
    height: 95,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
});

export default StatusBar1;
