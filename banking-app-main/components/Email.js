import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Email = ({ label = "name@gmail.com", title = "Email" }) => {
  return (
    <View style={styles.email}>
      <View style={styles.text}>
        <Text style={[styles.titleLabel, styles.labelTypo]}>{title}</Text>
        <Text style={[styles.label, styles.labelTypo]}>{label}</Text>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon20.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  titleLabel: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.darkWhiteGrey60,
  },
  label: {
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.blackWhiteGray100,
  },
  text: {
    gap: Gap.gap_18xs,
  },
  icon: {
    width: 24,
    height: 24,
  },
  email: {
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
  },
});

export default Email;
