import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Card4 = () => {
  return (
    <View style={[styles.card, styles.cardLayout]}>
      <LinearGradient
        style={[styles.cardChild, styles.childPosition]}
        locations={[0.56, 1]}
        colors={["#d59541", "#6f4e22"]}
      />
      <Image
        style={[styles.worldmap2x1Icon, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/worldmap2x-1.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/group-1000000882.png")}
        />
        <Text style={styles.text}>4562 1122 4595 7852</Text>
        <Text style={[styles.arJonson, styles.text2Layout1]}>AR Jonson</Text>
        <View style={[styles.expiryDateParent, styles.expiryPosition]}>
          <Text style={[styles.expiryDate, styles.cvvLayout]}>Expiry Date</Text>
          <Text style={[styles.text1, styles.cvvTypo]}>24/2000</Text>
        </View>
        <View style={[styles.cvvParent, styles.text2Layout]}>
          <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
          <Text style={[styles.text2, styles.text2Layout]}>6986</Text>
        </View>
      </View>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <View style={[styles.groupContainer, styles.mastercardLayout]}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
        <Text style={[styles.mastercard, styles.mastercardLayout]}>
          Mastercard
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 199,
    width: 335,
  },
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2Layout1: {
    height: 32,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  expiryPosition: {
    width: 73,
    left: 0,
    position: "absolute",
  },
  cvvLayout: {
    height: 22,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_4xs,
    top: 0,
  },
  cvvTypo: {
    width: 53,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 0,
    position: "absolute",
  },
  text2Layout: {
    width: 63,
    position: "absolute",
  },
  mastercardLayout: {
    width: 129,
    position: "absolute",
  },
  cardChild: {
    borderRadius: 25,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_700,
    borderWidth: 1,
    backgroundColor: "transparent",
    height: 199,
    width: 335,
  },
  worldmap2x1Icon: {
    height: 199,
    width: 335,
  },
  groupChild: {
    width: 29,
    height: 25,
  },
  text: {
    top: 51,
    fontSize: FontSize.size_5xl,
    height: 58,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    width: 301,
    left: 0,
    position: "absolute",
  },
  arJonson: {
    top: 92,
    width: 117,
    fontSize: FontSize.size_smi,
    height: 32,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  expiryDate: {
    width: 73,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_4xs,
  },
  text1: {
    height: 16,
    top: 15,
    fontSize: FontSize.size_smi,
    color: Color.white,
  },
  expiryDateParent: {
    height: 31,
    top: 124,
  },
  cvv: {
    height: 22,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_4xs,
    top: 0,
  },
  text2: {
    top: 15,
    fontSize: FontSize.size_smi,
    color: Color.white,
    height: 32,
    fontFamily: FontFamily.interRegular,
    left: 0,
    textAlign: "left",
  },
  cvvParent: {
    left: 83,
    height: 47,
    top: 124,
  },
  groupParent: {
    top: 22,
    left: 20,
    height: 171,
    width: 301,
    position: "absolute",
  },
  unionIcon: {
    top: 31,
    left: 299,
    width: 3,
    height: 8,
    position: "absolute",
  },
  groupItem: {
    left: 77,
    width: 36,
    height: 20,
    top: 0,
    position: "absolute",
  },
  mastercard: {
    top: 26,
    textAlign: "right",
    height: 32,
    fontFamily: FontFamily.interRegular,
    left: 0,
    fontSize: FontSize.size_smi,
    color: Color.white,
  },
  groupContainer: {
    top: 137,
    left: 190,
    height: 58,
  },
  card: {
    top: 140,
    left: 22,
    position: "absolute",
  },
});

export default Card4;
