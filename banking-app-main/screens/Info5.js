import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const Info5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.info13}>
      <View style={[styles.info13Child, styles.info13Bg]} />
      <View style={[styles.info13Item, styles.info13Bg]} />
      <View style={[styles.groupParent, styles.groupParentFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Products")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
        <Pressable
          style={styles.frameParentLayout}
          onPress={() => navigation.navigate("Pay")}
        >
          <View style={[styles.ellipseWrapper, styles.groupPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-21.png")}
            />
          </View>
          <Image
            style={styles.leadwayAssuranceNewLogo768Icon}
            contentFit="cover"
            source={require("../assets/leadwayassurancenewlogo768x480-11.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.info13Inner, styles.info13InnerPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.homeIndicatorwhite, styles.info13InnerPosition]}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupLayout1]}>
            <View style={[styles.groupItem, styles.groupLayout1]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport2.png")}
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
      <View style={[styles.statusBarwhite, styles.info13InnerPosition]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-3372.png")}
        />
        <Text style={[styles.successful, styles.insuranceTypo]}>
          Successful!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info13Bg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  groupParentFlexBox: {
    paddingRight: Padding.p_10xs,
    backgroundColor: Color.colorGray_1800,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  info13InnerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  groupLayout: {
    width: 112,
    position: "absolute",
  },
  info13Child: {
    top: 1143,
    left: 110,
    width: 155,
    height: 42,
    opacity: 0,
  },
  info13Item: {
    top: 1444,
    left: 157,
    width: 62,
    height: 37,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 42,
    height: 40,
  },
  frameChild: {
    width: 33,
    height: 33,
  },
  ellipseWrapper: {
    width: 40,
    height: 40,
    paddingRight: Padding.p_10xs,
    backgroundColor: Color.colorGray_1800,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  leadwayAssuranceNewLogo768Icon: {
    top: -10,
    left: 159,
    width: 52,
    height: 67,
    display: "none",
    position: "absolute",
  },
  frameParentLayout: {
    width: 40,
    height: 40,
  },
  groupParent: {
    top: 55,
    left: 10,
    gap: 273,
  },
  info13Inner: {
    backgroundColor: Color.colorGoldenrod_300,
    height: 92,
    top: 0,
    width: 375,
  },
  groupChild: {
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
    height: "100%",
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
  groupItem: {
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
    left: 24,
    gap: Gap.gap_8xl,
  },
  rectangleParent: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    top: 2,
    backgroundColor: Color.colorGoldenrod_100,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    height: 36,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
  groupInner: {
    height: 112,
    left: 0,
    top: 0,
  },
  successful: {
    top: "87.84%",
    left: "18.75%",
    color: Color.text,
    textAlign: "center",
    position: "absolute",
  },
  groupContainer: {
    top: 361,
    left: 132,
    height: 148,
  },
  info13: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Info5;
