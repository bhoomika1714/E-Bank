import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const FdSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fdSuccess}>
      <View style={[styles.fdSuccessChild, styles.successBg]} />
      <View style={[styles.fdSuccessItem, styles.successBg]} />
      <Pressable
        style={[styles.fdSuccessInner, styles.parentFlexBox]}
        onPress={() => navigation.navigate("CheckDeposit")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View
          style={[styles.homeIndicatorwhite, styles.statusBarwhitePosition]}
        >
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupLayout1]}>
            <View style={[styles.groupInner, styles.groupLayout1]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport1.png")}
              />
              <Text style={[styles.insurance, styles.insuranceTypo]}>
                Insurance
              </Text>
            </View>
          </View>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinesmviewgridadd.png")}
          />
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinequestionmarkcircle1.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarwhite, styles.statusBarwhitePosition]}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-33721.png")}
        />
        <Text style={[styles.successful, styles.timeFlexBox]}>Successful!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successBg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupPosition: {
    height: 92,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarwhitePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupLayout1: {
    width: 122,
    height: 36,
  },
  insuranceTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    width: 112,
    position: "absolute",
  },
  fdSuccessChild: {
    top: 1143,
    left: 110,
    width: 155,
    height: 42,
    opacity: 0,
  },
  fdSuccessItem: {
    top: 1444,
    left: 157,
    width: 62,
    height: 37,
    display: "none",
  },
  frameChild: {
    width: 42,
    height: 40,
  },
  fdSuccessInner: {
    top: 55,
    left: 10,
    backgroundColor: Color.colorGray_1800,
    paddingRight: Padding.p_10xs,
  },
  groupChild: {
    backgroundColor: Color.colorGoldenrod_300,
  },
  groupItem: {
    height: "100%",
    top: "0%",
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_600,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorwhite: {
    top: 62,
    height: 34,
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.secondary,
    opacity: 0.15,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  insurance: {
    color: Color.secondary,
    textAlign: "left",
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
  },
  rectangleGroup: {
    height: 36,
  },
  iconoutlinehomeParent: {
    top: 20,
    gap: Gap.gap_8xl,
    left: 24,
  },
  rectangleParent: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    left: 24,
  },
  statusBarwhite: {
    top: 2,
    backgroundColor: Color.colorGoldenrod_100,
    height: 36,
  },
  groupIcon: {
    height: 112,
    left: 0,
    top: 0,
  },
  successful: {
    top: "87.84%",
    left: "18.75%",
    color: Color.text,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  groupParent: {
    top: 361,
    left: 132,
    height: 148,
  },
  fdSuccess: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default FdSuccess;
