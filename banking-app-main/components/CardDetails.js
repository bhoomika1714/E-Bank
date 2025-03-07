import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import GroupComponent8 from "./GroupComponent8";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CardDetails = () => {
  return (
    <View style={styles.cardDetails}>
      <View style={[styles.cardholderNameParent, styles.parentLayout]}>
        <Text style={[styles.cardholderName, styles.cardNumberTypo]}>
          Cardholder Name
        </Text>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.tanyaMyroniukParent, styles.parentPosition]}>
            <Text style={[styles.tanyaMyroniuk, styles.textTypo]}>Name</Text>
            <Image
              style={[styles.useruserprofileIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/useruserprofile.png")}
            />
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <GroupComponent8 expiryDate="Expiry Date" prop="09/06/2024" />
        <GroupComponent8
          propLeft={215}
          expiryDate="4-digit CVV"
          propWidth={81}
          prop="6986"
          propFontFamily="Poppins-Regular"
          propWidth1={36}
        />
      </View>
      <View style={[styles.cardNumberParent, styles.parentLayout]}>
        <Text style={[styles.cardNumber, styles.cardNumberTypo]}>
          Card Number
        </Text>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>
              4562 1122 4595 7852
            </Text>
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/group-2.png")}
            />
            <Image
              style={[styles.useruserprofileIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/payments-financecreditcards.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 63,
    left: 0,
    width: 335,
    position: "absolute",
  },
  cardNumberTypo: {
    height: 16,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    width: 335,
    position: "absolute",
  },
  parentPosition: {
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    top: 3,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  cardholderName: {
    width: 126,
  },
  tanyaMyroniuk: {
    left: 38,
    width: 110,
  },
  useruserprofileIcon: {
    width: 22,
    overflow: "hidden",
  },
  tanyaMyroniukParent: {
    width: 148,
  },
  groupChild: {
    top: 32,
    maxHeight: "100%",
  },
  groupParent: {
    top: 31,
    height: 32,
  },
  cardholderNameParent: {
    top: 0,
    height: 63,
  },
  groupContainer: {
    top: 84,
    height: 55,
  },
  cardNumber: {
    width: 96,
  },
  text: {
    left: 34,
    width: 181,
  },
  groupInner: {
    top: 2,
    left: 301,
    width: 30,
    height: 18,
    position: "absolute",
  },
  parent: {
    width: 331,
  },
  cardNumberParent: {
    top: 160,
  },
  cardDetails: {
    top: 356,
    left: 20,
    height: 223,
    width: 335,
    position: "absolute",
  },
});

export default CardDetails;
