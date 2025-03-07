import * as React from "react";
import { StyleSheet, View } from "react-native";
import DailySavings from "./DailySavings";

const FrameComponent17 = () => {
  return (
    <View style={styles.dailySavingsWrapper}>
      <DailySavings usersTop={0} usersLeft={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  dailySavingsWrapper: {
    position: "absolute",
    top: 304,
    left: 13,
    width: 387,
    height: 118,
  },
});

export default FrameComponent17;
