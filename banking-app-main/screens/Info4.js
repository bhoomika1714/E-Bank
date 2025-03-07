import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Padding,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const Info4 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.info9, styles.info9ShadowBox]}
      onPress={() => navigation.navigate("Payment")}
    >
      <View style={styles.quoteParent}>
        <Text style={[styles.quote, styles.quoteClr]}>Quote</Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <View style={styles.personalInfoParent}>
            <Text style={[styles.personalInfo, styles.quoteClr]}>
              Personal Info
            </Text>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse5.png")}
              />
              <View style={styles.check}>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/path.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.idvehicleDetailsParent}>
            <Text style={[styles.personalInfo, styles.quoteClr]}>
              ID/Vehicle Details
            </Text>
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/group-9361.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-3346.png")}
          />
        </View>
      </View>
      <View style={[styles.info9Child, styles.info9Bg]} />
      <View style={[styles.info9Item, styles.info9Bg]} />
      <View style={styles.upgradeToComprehensiveMotorParent}>
        <Text
          style={[styles.upgradeToComprehensive, styles.groupChild1Position]}
        >{`Upgrade to Comprehensive 
Motor Insurance Plan`}</Text>
        <Text
          style={[styles.fillOrUpdate, styles.quoteClr]}
        >{`Fill or Update your information and we’ll get your vehicle covered in no time.
`}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupInner, styles.groupInnerBg]} />
        <Pressable
          style={[styles.frameParent, styles.info9InnerPosition]}
          onPress={() => navigation.navigate("Proceed")}
        >
          <View style={[styles.ellipseWrapper, styles.info9InnerFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-21.png")}
            />
          </View>
          <Image
            style={styles.leadwayAssuranceNewLogo768Icon}
            contentFit="cover"
            source={require("../assets/leadwayassurancenewlogo768x480-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.info9Inner, styles.info9InnerFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Proceed")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.groupInnerBg]} />
        <View style={styles.homeIndicatorwhite}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupChild1, styles.groupLayout]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport1.png")}
              />
              <Text style={[styles.insurance, styles.textTypo]}>Insurance</Text>
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
      <View style={styles.statusBarwhite}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  info9ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  quoteClr: {
    color: Color.gray3,
    fontFamily: FontFamily.mobileBody3Regular,
    position: "absolute",
  },
  rectanglePosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupPosition: {
    bottom: "58.51%",
    height: "41.49%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  info9Bg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  groupChild1Position: {
    left: 0,
    top: 0,
  },
  groupLayout1: {
    height: 92,
    width: 375,
    left: 0,
    top: 0,
  },
  groupInnerBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  info9InnerPosition: {
    left: 21,
    top: 55,
  },
  info9InnerFlexBox: {
    paddingRight: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    width: 122,
    height: 36,
  },
  quote: {
    left: "76.99%",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    top: "61.34%",
    color: Color.gray3,
    fontFamily: FontFamily.mobileBody3Regular,
  },
  rectangle: {
    height: "5.15%",
    top: "20.62%",
    bottom: "74.23%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGreyGrey6,
    left: "0%",
    position: "absolute",
  },
  personalInfo: {
    left: "0%",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    top: "61.34%",
    color: Color.gray3,
    fontFamily: FontFamily.mobileBody3Regular,
  },
  ellipseIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text: {
    top: "-79.59%",
    left: "16.67%",
    fontSize: FontSize.size_4xs_8,
    textTransform: "capitalize",
    color: Color.white,
    display: "none",
    textAlign: "center",
    position: "absolute",
  },
  check: {
    height: "27.84%",
    width: "37.5%",
    top: "34.66%",
    right: "28.98%",
    bottom: "37.5%",
    left: "33.52%",
    position: "absolute",
  },
  ellipseParent: {
    height: "45.36%",
    width: "27.08%",
    right: "36%",
    bottom: "54.64%",
    left: "36.92%",
    top: "0%",
    position: "absolute",
  },
  personalInfoParent: {
    width: "19.94%",
    right: "71.78%",
    left: "8.28%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    width: "18.3%",
    right: "41.25%",
    left: "40.45%",
  },
  idvehicleDetailsParent: {
    width: "26.99%",
    right: "36.2%",
    left: "36.81%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupItem: {
    width: "4.94%",
    right: "15.71%",
    left: "79.36%",
  },
  rectangleParent: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  quoteParent: {
    height: "4.78%",
    width: "86.93%",
    top: "28.08%",
    right: "6.67%",
    bottom: "67.14%",
    left: "6.4%",
    position: "absolute",
  },
  info9Child: {
    top: 1143,
    left: 110,
    width: 155,
    height: 42,
    opacity: 0,
  },
  info9Item: {
    top: 1444,
    left: 157,
    width: 62,
    height: 37,
    display: "none",
  },
  upgradeToComprehensive: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    fontFamily: FontFamily.interSemiBold,
    color: Color.text,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  fillOrUpdate: {
    height: "37.84%",
    width: "99.39%",
    top: "62.16%",
    left: "0.61%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  upgradeToComprehensiveMotorParent: {
    top: 100,
    left: 23,
    width: 328,
    height: 111,
    position: "absolute",
  },
  groupInner: {
    height: 92,
    width: 375,
    left: 0,
    top: 0,
  },
  frameChild: {
    width: 33,
    height: 33,
  },
  ellipseWrapper: {
    left: 0,
    top: 0,
  },
  leadwayAssuranceNewLogo768Icon: {
    top: -8,
    left: 143,
    width: 47,
    height: 55,
    display: "none",
    position: "absolute",
  },
  frameParent: {
    width: 36,
    height: 33,
    position: "absolute",
  },
  rectangleGroup: {
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 42,
    height: 40,
  },
  info9Inner: {
    left: 21,
    top: 55,
  },
  rectangleView: {
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowRadius: 15,
    elevation: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupChild1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.secondary,
    opacity: 0.15,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  insurance: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.secondary,
    textAlign: "left",
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
  },
  groupView: {
    height: 36,
  },
  iconoutlinehomeParent: {
    top: 20,
    left: 24,
    gap: Gap.gap_8xl,
  },
  rectangleContainer: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
    left: "0%",
    bottom: "0%",
    position: "absolute",
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
    left: 0,
    position: "absolute",
  },
  info9: {
    shadowColor: "rgba(88, 88, 88, 0.1)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Info4;
