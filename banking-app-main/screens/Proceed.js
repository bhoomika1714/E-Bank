import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent24 from "../components/GroupComponent24";
import GroupComponent25 from "../components/GroupComponent25";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Proceed = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.proceed, styles.proceedShadowBox]}>
      <View style={styles.idvehicleDetailsParent}>
        <Text style={[styles.idvehicleDetails, styles.quoteTypo]}>
          ID/Vehicle Details
        </Text>
        <Text style={[styles.quote, styles.quoteTypo]}>Quote</Text>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.rectangle, styles.rectangleParentPosition]} />
          <Pressable
            style={styles.personalInfoParent}
            onPress={() => navigation.navigate("InsurancePlan")}
          >
            <Text style={[styles.personalInfo, styles.quoteTypo]}>
              Personal Info
            </Text>
            <View style={styles.ellipseParent}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse2.png")}
              />
              <View style={styles.check}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseIconLayout]}
                  contentFit="cover"
                  source={require("../assets/path1.png")}
                />
                <Text style={[styles.text, styles.textPosition]}>1</Text>
              </View>
            </View>
          </Pressable>
          <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse3.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.ellipseContainer, styles.ellipsePosition]}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse4.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>3</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.upgradeToComprehensiveMotorParent, styles.buttonLayout]}
      >
        <Text style={styles.upgradeToComprehensive}>{`Upgrade to Comprehensive 
Motor Insurance Plan`}</Text>
        <Text
          style={[styles.fillOrUpdate, styles.text3Typo1]}
        >{`Fill or Update your information and we’ll get your vehicle covered in no time.
`}</Text>
      </View>
      <View style={styles.frameParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-845.png")}
        />
        <View style={styles.frameGroup}>
          <View style={[styles.rectangleGroup, styles.shapeLayout]}>
            <View style={[styles.frameChild, styles.framePosition1]} />
            <View style={[styles.frameItem, styles.framePosition1]} />
          </View>
          <View
            style={[
              styles.driversLicensedamiBensonParent,
              styles.rectangleParentPosition,
            ]}
          >
            <Text style={[styles.driversLicensedamiBenson, styles.text3Typo]}>
              Driver’s License/Dami-Benson
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>87%</Text>
          </View>
        </View>
      </View>
      <View style={[styles.iconoutlineplusParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconoutlineplus}
          contentFit="cover"
          source={require("../assets/iconoutlineplus.png")}
        />
        <Text style={[styles.uploadMore, styles.text3Typo1]}>Upload more</Text>
      </View>
      <Image
        style={[
          styles.leadwayAssuranceNewLogo768Icon,
          styles.leadwayIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/leadwayassurancenewlogo768x480-1.png")}
      />
      <View style={[styles.rectangleContainer, styles.textPosition]}>
        <View style={[styles.groupItem, styles.rectangleParentPosition]} />
        <View
          style={[styles.homeIndicatorwhite, styles.statusBarwhitePosition]}
        >
          <View style={[styles.shape, styles.shapeLayout]} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.timePosition]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.ioncarSportParent, styles.framePosition]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport1.png")}
              />
              <Text style={[styles.insurance, styles.text3Typo]}>
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
          source={require("../assets/connections2.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      </View>
      <Image
        style={[styles.proceedChild, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-22.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.frameContainer}>
          <View style={[styles.ellipseWrapper, styles.frameViewPosition]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/ellipse-21.png")}
            />
          </View>
          <Image
            style={[
              styles.leadwayAssuranceNewLogo768Icon1,
              styles.leadwayIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/leadwayassurancenewlogo768x480-1.png")}
          />
        </View>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("InsurancePlan")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628259.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.frame1}>
        <GroupComponent24 />
        <GroupComponent25 />
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Info4")}
          >
            <Text style={[styles.continue, styles.timeTypo]}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  proceedShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  quoteTypo: {
    textAlign: "center",
    top: "61.34%",
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleParentPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  ellipseIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textPosition: {
    display: "none",
    position: "absolute",
  },
  ellipsePosition: {
    bottom: "58.51%",
    width: "4.94%",
    height: "41.49%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    left: "31.06%",
    top: "9.32%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
    textAlign: "center",
    position: "absolute",
  },
  buttonLayout: {
    width: 328,
    position: "absolute",
  },
  text3Typo1: {
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.gray3,
  },
  shapeLayout: {
    height: 5,
    position: "absolute",
  },
  framePosition1: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    borderRadius: Border.br_xs,
    right: "98.24%",
    top: "100%",
    width: "1.76%",
    backgroundColor: Color.colorGoldenrod_100,
    left: "0%",
    position: "absolute",
  },
  text3Typo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  leadwayIconLayout: {
    height: 55,
    width: 47,
    display: "none",
    position: "absolute",
  },
  statusBarwhitePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    left: 24,
    position: "absolute",
  },
  groupLayout: {
    width: 122,
    height: 36,
  },
  framePosition: {
    left: 15,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "700",
    textAlign: "center",
  },
  frameViewPosition: {
    paddingRight: Padding.p_10xs,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 100,
    width: 465,
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  idvehicleDetails: {
    left: "36.81%",
    color: Color.gray3,
  },
  quote: {
    left: "76.99%",
    color: Color.colorSilver_100,
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
    color: Color.gray3,
  },
  ellipseIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  text: {
    top: "-79.59%",
    left: "16.67%",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
    display: "none",
    textAlign: "center",
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
  text1: {
    color: Color.white,
  },
  ellipseGroup: {
    right: "47.33%",
    left: "47.73%",
  },
  text2: {
    color: Color.colorGreyGrey6,
  },
  ellipseContainer: {
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
  idvehicleDetailsParent: {
    height: "4.78%",
    width: "86.93%",
    top: "28.08%",
    right: "6.67%",
    bottom: "67.14%",
    left: "6.4%",
    position: "absolute",
  },
  upgradeToComprehensive: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    fontFamily: FontFamily.interSemiBold,
    color: Color.text,
    textAlign: "left",
    left: 0,
    top: 0,
    fontWeight: "600",
    position: "absolute",
  },
  fillOrUpdate: {
    height: "37.84%",
    width: "99.39%",
    top: "62.16%",
    left: "0.61%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.gray3,
    position: "absolute",
  },
  upgradeToComprehensiveMotorParent: {
    height: 111,
    left: 23,
    top: 100,
  },
  groupChild: {
    top: 1,
    width: 34,
    height: 34,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    height: "5680%",
    bottom: "-5680%",
    opacity: 0.4,
  },
  frameItem: {
    height: "4760%",
    bottom: "-4760%",
  },
  rectangleGroup: {
    top: 25,
    width: 284,
    left: 0,
  },
  driversLicensedamiBenson: {
    left: "0%",
    top: "0%",
    color: Color.gray3,
    fontFamily: FontFamily.mobileBody3Regular,
    position: "absolute",
  },
  text3: {
    left: "91.58%",
    top: "0%",
    color: Color.gray3,
    fontFamily: FontFamily.mobileBody3Regular,
    position: "absolute",
  },
  driversLicensedamiBensonParent: {
    height: "60%",
    bottom: "40%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frameGroup: {
    left: 44,
    width: 285,
    height: 30,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 300,
    width: 329,
    height: 35,
    left: 23,
    position: "absolute",
  },
  iconoutlineplus: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  uploadMore: {
    textAlign: "left",
    color: Color.gray3,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.mobileBody3Regular,
  },
  iconoutlineplusParent: {
    top: 340,
    left: 269,
    gap: Gap.gap_17xs,
    position: "absolute",
  },
  leadwayAssuranceNewLogo768Icon: {
    top: 43,
    left: 158,
  },
  groupItem: {
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowRadius: 15,
    elevation: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ioncarSportParent: {
    top: 6,
    gap: Gap.gap_16xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupView: {
    height: 36,
  },
  iconoutlinehomeParent: {
    gap: Gap.gap_8xl,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleContainer: {
    height: "11.82%",
    top: "88.18%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
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
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    left: 24,
    position: "absolute",
  },
  statusBarwhite: {
    height: 36,
    backgroundColor: Color.colorGoldenrod_100,
    top: 0,
  },
  proceedChild: {
    height: "0.06%",
    width: "89.33%",
    top: "45.07%",
    right: "5.33%",
    bottom: "54.86%",
    left: "5.33%",
  },
  frameInner: {
    width: 33,
    height: 33,
  },
  ellipseWrapper: {
    left: 0,
  },
  leadwayAssuranceNewLogo768Icon1: {
    top: -8,
    left: 143,
  },
  frameContainer: {
    width: 36,
    height: 33,
    left: 0,
    top: 0,
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
  frameView: {
    left: 18,
  },
  frame: {
    top: 51,
    width: 63,
    height: 40,
    overflow: "hidden",
  },
  rectangleView: {
    backgroundColor: Color.white,
    top: 100,
  },
  continue: {
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
  },
  button: {
    left: 57,
    borderRadius: Border.br_base,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.colorGoldenrod_100,
    width: 328,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent1: {
    top: 348,
  },
  frame1: {
    top: 380,
    left: -24,
    height: 526,
    width: 465,
    overflow: "hidden",
    position: "absolute",
  },
  proceed: {
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

export default Proceed;
