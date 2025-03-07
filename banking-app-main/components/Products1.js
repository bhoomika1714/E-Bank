import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Products1 = () => {
  return (
    <View style={styles.products}>
      <View style={[styles.item, styles.itemLayout]}>
        <Image
          style={[styles.baseIcon, styles.item3Position]}
          contentFit="cover"
          source={require("../assets/base3.png")}
        />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/-image4.png")}
        />
        <Text style={[styles.beoplayH, styles.item3Position]}>Beoplay H…</Text>
      </View>
      <View style={[styles.item1, styles.itemLayout]}>
        <Image
          style={[styles.baseIcon, styles.item3Position]}
          contentFit="cover"
          source={require("../assets/base3.png")}
        />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/-image5.png")}
        />
        <Text style={[styles.beoplayH, styles.item3Position]}>Beoplay A9</Text>
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Image
          style={[styles.baseIcon, styles.item3Position]}
          contentFit="cover"
          source={require("../assets/base3.png")}
        />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/-image6.png")}
        />
        <Text style={[styles.beoplayH, styles.item3Position]}>Beosound…</Text>
      </View>
      <View style={[styles.item3, styles.item3Position]}>
        <Image
          style={[styles.baseIcon, styles.item3Position]}
          contentFit="cover"
          source={require("../assets/base3.png")}
        />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/-image7.png")}
        />
        <Text style={[styles.beoplayH, styles.item3Position]}>Beosound 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    width: 64,
    top: 0,
    height: 92,
    position: "absolute",
  },
  item3Position: {
    left: 0,
    width: 64,
    position: "absolute",
  },
  baseIcon: {
    borderRadius: Border.br_base,
    height: 64,
    top: 0,
    left: 0,
  },
  imageIcon: {
    top: 8,
    left: 8,
    borderRadius: Border.br_5xs,
    width: 48,
    height: 48,
    position: "absolute",
  },
  beoplayH: {
    top: 72,
    fontSize: FontSize.mobileBody3Regular_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
  },
  item: {
    left: 162,
  },
  item1: {
    left: 243,
  },
  item2: {
    left: 81,
  },
  item3: {
    top: 0,
    left: 0,
    height: 92,
  },
  products: {
    top: 245,
    left: 34,
    width: 307,
    height: 92,
    position: "absolute",
  },
});

export default Products1;
