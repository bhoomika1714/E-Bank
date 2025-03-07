import * as React from "react";
import { StyleSheet, View } from "react-native";
import Loans from "./Loans";

const FrameComponent15 = () => {
  return (
    <View style={styles.loansWrapper}>
      <Loans propTop={0} propLeft={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  loansWrapper: {
    position: "absolute",
    top: 456,
    left: 7,
    width: 387,
    height: 126,
  },
});

export default FrameComponent15;
