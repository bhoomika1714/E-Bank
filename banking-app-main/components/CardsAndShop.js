import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardsAndShop = ({ propTop, propLeft, icon8 }) => {
  const cardsAndShopStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.cardsAndShop, cardsAndShopStyle]}>
      <View style={styles.title}>
        <Text style={styles.label}>{`Cards & Shop`}</Text>
      </View>
      <View style={styles.users}>
        <Pressable
          style={styles.creditCard}
          onPress={() => navigation.navigate("MyCards")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture3.png")}
          />
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/gold-loan6.png")}
          />
          <View style={[styles.nameWrapper, styles.nameFlexBox]}>
            <Text style={[styles.name, styles.nameTypo]}>Credit card</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.gst, styles.gstLayout]}
          onPress={() => navigation.navigate("Gst")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/gold-loan7.png")}
          />
          <Text style={styles.nameTypo}>{`GST &
Taxes`}</Text>
        </Pressable>
        <Pressable
          style={[styles.shop, styles.gstLayout]}
          onPress={() => navigation.navigate("ShopList")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/gold-loan8.png")}
          />
          <Text style={styles.nameTypo}>Shop</Text>
        </Pressable>
        <Pressable
          style={[styles.gst, styles.gstLayout]}
          onPress={() => navigation.navigate("Shares")}
        >
          <Image
            style={styles.profilePictureIcon}
            contentFit="cover"
            source={require("../assets/profile-picture.png")}
          />
          <Image style={styles.icon5} contentFit="cover" source={icon8} />
          <Text style={styles.nameTypo}>Invest</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  gstLayout: {
    width: 54,
    height: 76,
    alignItems: "center",
  },
  label: {
    fontSize: 19,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
    marginLeft:-3,
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  profilePictureIcon: {
    borderRadius: Border.br_sm,
    width: 55,
    height: 55,
    display: "none",
    overflow: "hidden",
  },
  icon5: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  name: {
    display: "flex",
    width: 63,
    justifyContent: "center",
    alignItems: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  creditCard: {
    width: 61,
    gap: Gap.gap_18xs,
    height: 76,
    alignItems: "center",
  },
  gst: {
    gap: Gap.gap_17xs,
  },
  shop: {
    gap: Gap.gap_18xs,
  },
  users: {
    marginLeft:-10,
    width: 339,
    gap: Gap.gap_6xl,
    flexDirection: "row",
  },
  cardsAndShop: {
    position: "absolute",
    top: 152,
    left: 5,
    backgroundColor: Color.white,
    paddingLeft: Padding.p_8xl,
    paddingRight: Padding.p_5xl,
    gap: Gap.gap_2xs,
  },
});

export default CardsAndShop;
