import * as React from "react";
import { StyleSheet, View } from "react-native";
import CardsAndShop from "./CardsAndShop";

const FrameComponent16 = () => {
  return (
    <View style={styles.cardsAndShopWrapper}>
      <CardsAndShop
        propTop={0}
        propLeft={0}
        icon8={require("../assets/icon81.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsAndShopWrapper: {
    position: "absolute",
    top: 152,
    left: 5,
    width: 390,
    height: 118,
  },
});

export default FrameComponent16;
