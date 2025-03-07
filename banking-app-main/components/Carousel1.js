import * as React from "react";
import { StyleSheet, View } from "react-native";
import Item1Icon from "./Item1Icon";
import { Padding, Gap } from "../GlobalStyles";

const Carousel1 = ({ textContent = false }) => {
  return (
    <View style={styles.carousel}>
      <Item1Icon item1={require("../assets/item1.png")} showLabel />
      <Item1Icon
        item1={require("../assets/itemlast.png")}
        propWidth={56}
        showLabel={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    position: "absolute",
    top: 113,
    left: 9,
    width: 412,
    height: 221,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    gap: Gap.gap_12xs,
  },
});

export default Carousel1;
