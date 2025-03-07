import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding, Gap } from "../GlobalStyles";

const Theme = () => {
  return (
    <View style={styles.theme0}>
      <Image
        style={styles.theme0Child}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.theme0Child}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.theme0Child}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.theme0Child}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  theme0Child: {
    width: 40,
    height: 40,
  },
  theme0: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    gap: Gap.gap_10xs,
  },
});

export default Theme;
