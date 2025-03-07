import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Provider = ({ propPaddingLeft, image19, image22 }) => {
  const iconPaymentMastercardStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingLeft", propPaddingLeft),
    };
  }, [propPaddingLeft]);

  return (
    <View style={styles.provider}>
      <View style={styles.payment}>
        <Text style={[styles.debitcard, styles.textFlexBox]}>DebitCard</Text>
        <Text style={[styles.text, styles.textFlexBox]}>
          **** **** 0783 7873
        </Text>
      </View>
      <View style={[styles.iconPaymentMastercard, iconPaymentMastercardStyle]}>
        <Image style={styles.image19Icon} contentFit="cover" source={image19} />
        <Image style={styles.image22Icon} contentFit="cover" source={image22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.lightGray11,
    alignSelf: "stretch",
  },
  debitcard: {
    fontSize: FontSize.size_smi_5,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  text: {
    fontSize: FontSize.size_2xs_7,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
  },
  payment: {
    gap: Gap.gap_14xs,
    flex: 1,
  },
  image19Icon: {
    height: 27,
    display: "none",
    width: 27,
  },
  image22Icon: {
    height: 20,
    width: 27,
  },
  iconPaymentMastercard: {
    width: 29,
    height: 29,
    overflow: "hidden",
    justifyContent: "flex-end",
    paddingTop: 1,
    paddingRight: 1,
    paddingBottom: 1,
  },
  provider: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_6xs,
    flex: 1,
  },
});

export default Provider;
