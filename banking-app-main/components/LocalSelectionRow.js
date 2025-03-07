import * as React from "react";
import { StyleSheet, View } from "react-native";
import BuildingBlocksMenuButton from "./BuildingBlocksMenuButton";
import IconButton from "./IconButton";
import { Padding } from "../GlobalStyles";

const LocalSelectionRow = () => {
  return (
    <View style={styles.localSelectionRow}>
      <BuildingBlocksMenuButton labelText="August 2023" />
      <View style={styles.controls}>
        <IconButton icon={require("../assets/icon18.png")} />
        <IconButton icon={require("../assets/icon19.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
  },
  localSelectionRow: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
  },
});

export default LocalSelectionRow;
