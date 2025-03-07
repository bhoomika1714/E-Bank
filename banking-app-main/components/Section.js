import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Section = () => {
  return (
    <View style={[styles.section, styles.text3Position]}>
      <View style={[styles.rectangle, styles.maskPosition]} />
      <View style={styles.logo}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <Text style={[styles.text, styles.textFlexBox]}>
        <Text style={styles.text1}>₹</Text>
        <Text style={styles.text2}>36,500.00</Text>
      </Text>
      <View style={[styles.text3, styles.text3Position]}>
        <View style={styles.rectangle1} />
        <Text style={[styles.text4, styles.textFlexBox]}>+%32.56</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text3Position: {
    overflow: "hidden",
    position: "absolute",
  },
  maskPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 1,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  mask: {
    backgroundColor: Color.colorAliceblue_200,
    borderRadius: Border.br_3xs,
  },
  logo: {
    height: "42.78%",
    width: "25.91%",
    top: "7.49%",
    right: "37.05%",
    bottom: "49.73%",
    left: "37.05%",
    position: "absolute",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  text2: {
    fontFamily: FontFamily.interRegular,
  },
  text: {
    marginTop: 14.5,
    top: "50%",
    left: "37.56%",
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.colorDarkolivegreen,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.colorBurlywood_100,
    width: 142,
    height: 36,
    borderRadius: Border.br_3xs,
  },
  text4: {
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    marginTop: -17,
  },
  text3: {
    height: "22.46%",
    width: "36.79%",
    top: "73.26%",
    right: "31.61%",
    bottom: "4.28%",
    left: "31.61%",
    alignItems: "center",
    paddingBottom: Padding.p_7xs,
  },
  section: {
    top: 113,
    left: 0,
    width: 386,
    height: 187,
  },
});

export default Section;
