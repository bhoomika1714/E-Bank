import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  Border,
  Color,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Content = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={[styles.socialLogin, styles.signInWithFlexBox]}>
        <View style={[styles.continueWithAppleLeftAli, styles.withFlexBox]}>
          <Image
            style={styles.path4Icon}
            contentFit="cover"
            source={require("../assets/path4.png")}
          />
        </View>
        <Pressable
          style={[styles.continueWithAppleLeftAli, styles.withFlexBox]}
          onPress={() => navigation.navigate("SignInWithGoogle")}
        >
          <Image
            style={styles.logoGoogleg48dp}
            contentFit="cover"
            source={require("../assets/logo-googleg-48dp.png")}
          />
        </Pressable>
        <View style={[styles.continueWithAppleLeftAli, styles.withFlexBox]}>
          <Image
            style={styles.logoGoogleg48dp}
            contentFit="cover"
            source={require("../assets/path14.png")}
          />
        </View>
      </View>
      <View style={[styles.signInWith, styles.withFlexBox]}>
        <View style={styles.liner} />
        <Text style={styles.label}>or sign in with</Text>
        <View style={styles.liner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInWithFlexBox: {
    gap: Gap.gap_8xs,
    alignSelf: "stretch",
  },
  withFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  path4Icon: {
    width: 19,
    height: 23,
  },
  continueWithAppleLeftAli: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_300,
    borderWidth: 1,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xs,
    flex: 1,
  },
  logoGoogleg48dp: {
    width: 23,
    height: 23,
  },
  socialLogin: {
    flexDirection: "row",
    gap: Gap.gap_8xs,
    alignSelf: "stretch",
  },
  liner: {
    backgroundColor: Color.colorGainsboro_500,
    height: 1,
    flex: 1,
  },
  label: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.lightGray7,
    textAlign: "center",
  },
  signInWith: {
    gap: Gap.gap_8xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  content: {
    position: "absolute",
    marginTop: 246,
    top: "50%",
    right: 11,
    left: -11,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
});

export default Content;
