import * as React from "react";
import { StyleSheet, View } from "react-native";
import Transactions2 from "./Transactions2";

const FrameComponent6 = () => {
  return (
    <View style={styles.transactionsWrapper}>
      <Transactions2 />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 404,
    height: 118,
  },
});

export default FrameComponent6;
