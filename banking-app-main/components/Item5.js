import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Item5 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("SingleProduct")}
    >
      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <View style={styles.title}>
        <Text style={[styles.speakers, styles.productPosition]}>Speakers</Text>
        <Text style={[styles.product, styles.productPosition]}>
          100+ Product
        </Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  productPosition: {
    textAlign: "center",
    color: Color.blackB100,
    letterSpacing: 0,
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  bgIcon: {
    height: "80.65%",
    top: "19.35%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  speakers: {
    fontSize: FontSize.m3TitleMedium_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    top: "0%",
  },
  product: {
    marginTop: 4,
    top: "50%",
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    opacity: 0.6,
  },
  title: {
    height: "19.35%",
    width: "84.39%",
    top: "70.97%",
    right: "7.8%",
    bottom: "9.68%",
    left: "7.8%",
    position: "absolute",
  },
  imageIcon: {
    height: "64.52%",
    bottom: "35.48%",
    top: "0%",
  },
  item: {
    height: "100%",
    width: "48.12%",
    right: "51.88%",
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
});

export default Item5;
