import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame6 = ({ userName = "Name", upiId = "name@gmail.com" }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.profile}>
          <View style={styles.rectangleParent}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
          <View style={styles.tanyaMyroniukParent}>
            {/* Displaying the passed userName */}
            <Text style={styles.tanyaMyroniuk}>{userName}</Text>
            <Text style={styles.seniorDesigner}>{upiId}</Text>
          </View>
        </View>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    borderRadius: Border.br_26xl,
    width: 70,
    height: 70,
  },
  frameChild: {
    display: "none",
  },
  frameItem: {
    backgroundColor: Color.colorAntiquewhite,
    borderStyle: "solid",
    borderColor: Color.colorMoccasin,
    borderWidth: 1,
    opacity: 0.12,
  },
  rectangleParent: {
    width: 70,
    alignItems: "center",
  },
  tanyaMyroniuk: {  //NAME
    fontSize: FontSize.font_size,
    lineHeight: 19,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_600,
    width: 179,
    height: 25,
    textAlign: "left",
  },
  seniorDesigner: { //upi id
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorSlategray_100,
    height: 14,
    textAlign: "left",
    width: 219,
  },
  tanyaMyroniukParent: {
    height: 43,
    paddingTop: Padding.p_11xs,
    gap: Gap.gap_18xs, //gap btw name and UPI ID
    width: 219,
  },
  profile: {
    gap: Gap.gap_md,
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    width: 311,
  },
  userIcon: {
    width: 63,
    height: 62,
    marginLeft: -308,
  },
  frame1: {
    flexDirection: "row",
    height: 70,
    width: 311,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 128,
    left: 20,
    width: 335,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame6;
