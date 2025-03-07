import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Saturday = ({ propFlex }) => {
  const sundayStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <View style={[styles.sunday, sundayStyle]}>
      <View style={styles.containerFlexBox}>
        <View style={[styles.stateLayer, styles.containerFlexBox]}>
          <View style={styles.emptyContainer} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  emptyContainer: {
    width: 22,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_3xs,
  },
  sunday: {
    alignSelf: "stretch",
    flex: 0.8333,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Saturday;
