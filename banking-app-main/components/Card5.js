import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card5 = ({
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
  propWidth6,
  propWidth7,
  propWidth8,
  propLeft,
  propWidth9,
  propLeft1,
  propWidth10,
}) => {
  const card1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const aRJonsonStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth4),
    };
  }, [propWidth4]);

  const expiryDate1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth5),
    };
  }, [propWidth5]);

  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth6),
    };
  }, [propWidth6]);

  const cVVStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth7),
    };
  }, [propWidth7]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth8),
    };
  }, [propWidth8]);

  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth9),
    };
  }, [propLeft, propWidth9]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const mastercardStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth10),
    };
  }, [propWidth10]);

  return (
    <View style={[styles.cardPosition, card1Style]}>
      <LinearGradient
        style={[styles.cardChild, styles.cardPosition]}
        locations={[0.56, 1]}
        colors={["#d59541", "#6f4e22"]}
      />
      <Image
        style={styles.cardPosition}
        contentFit="cover"
        source={require("../assets/worldmap2x-1.png")}
      />
      <View style={[styles.groupParent, rectangleViewStyle]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-1000000882.png")}
        />
        <Text style={[styles.text, text3Style]}>4562 1122 4595 7852</Text>
        <Text style={[styles.arJonson, styles.text2Layout1, aRJonsonStyle]}>
          AR Jonson
        </Text>
        <View
          style={[
            styles.expiryDateParent,
            styles.expiryPosition,
            groupView3Style,
          ]}
        >
          <Text style={[styles.expiryDate, styles.cvvLayout, expiryDate1Style]}>
            Expiry Date
          </Text>
          <Text style={[styles.text1, styles.cvvTypo]}>24/2000</Text>
        </View>
        <View style={[styles.cvvParent, styles.text2Layout, groupView4Style]}>
          <Text style={[styles.cvv, styles.cvvTypo, cVVStyle]}>CVV</Text>
          <Text style={[styles.text2, styles.text2Layout, text4Style]}>
            6986
          </Text>
        </View>
      </View>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <View
        style={[
          styles.groupContainer,
          styles.mastercardLayout,
          groupView5Style,
        ]}
      >
        <Image
          style={[styles.groupItem, groupIconStyle]}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
        <Text
          style={[styles.mastercard, styles.mastercardLayout, mastercardStyle]}
        >
          Mastercard
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    height: 199,
    width: 335,
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
  },
  groupChild: {
    width: 29,
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
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
});

export default Card5;
