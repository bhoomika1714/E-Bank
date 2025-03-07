import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
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

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.payment, styles.paymentShadowBox]}>
      <View style={[styles.quoteParent, styles.quoteParentPosition]}>
        <Text style={[styles.quote, styles.quoteClr]}>Quote</Text>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.rectangle, styles.rectangleParentPosition]} />
          <View style={styles.personalInfoParent}>
            <Text style={[styles.personalInfo, styles.quoteClr]}>
              Personal Info
            </Text>
            <View style={styles.ellipseParent}>
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <View style={styles.check}>
                <Image
                  style={[styles.ellipseIcon, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/path.png")}
                />
                <Text style={[styles.text, styles.textPosition]}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.idvehicleDetailsParent}>
            <Text style={[styles.personalInfo, styles.quoteClr]}>
              ID/Vehicle Details
            </Text>
            <Image
              style={[styles.groupChild, styles.groupPosition1]}
              contentFit="cover"
              source={require("../assets/group-936.png")}
            />
          </View>
          <View style={[styles.ellipseGroup, styles.groupPosition1]}>
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse1.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.upgradeToComprehensiveMotorParent}>
        <Text
          style={[styles.upgradeToComprehensive, styles.ellipseWrapperPosition]}
        >{`Upgrade to Comprehensive 
Motor Insurance Plan`}</Text>
        <Text
          style={[styles.fillOrUpdate, styles.quoteClr]}
        >{`Fill or Update your information and we’ll get your vehicle covered in no time.
`}</Text>
      </View>
      <View style={[styles.categoryBgSelectedParent, styles.categoryLayout]}>
        <View style={[styles.categoryBgSelected, styles.groupChild4Position]} />
        <Image
          style={styles.iconoutlinenewspaper}
          contentFit="cover"
          source={require("../assets/iconoutlinenewspaper.png")}
        />
      </View>
      <View style={[styles.iconoutlinedownloadParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconoutlinedownload}
          contentFit="cover"
          source={require("../assets/iconoutlinedownload.png")}
        />
        <Text style={[styles.downloadQuote, styles.insuranceClr]}>
          Download Quote
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Pay1")}
      >
        <Text style={[styles.proceedToPay, styles.timeTypo]}>
          Proceed to Pay
        </Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.quoteParentPosition]}>
        <View style={[styles.rectangle1, styles.rectangleParentPosition]} />
        <View style={[styles.benzParent, styles.benzGroupPosition]}>
          <Text style={[styles.benz, styles.benzTypo]}>Benz</Text>
          <Text style={[styles.n19000030, styles.benzTypo]}>N190,000.30</Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.benzGroup, styles.benzGroupPosition]}>
          <Text style={[styles.benz, styles.benzTypo]}>{`Benz `}</Text>
          <Text style={[styles.n19000030, styles.benzTypo]}>N190,000.30</Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.benzContainer, styles.benzGroupPosition]}>
          <Text style={[styles.benz, styles.benzTypo]}>Benz</Text>
          <Text style={[styles.n19000030, styles.benzTypo]}>N190,000.30</Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.groupView, styles.benzGroupPosition]}>
          <Text style={[styles.benz, styles.benzTypo]}>Benz</Text>
          <Text style={[styles.n19000030, styles.benzTypo]}>N190,000.30</Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={styles.comprehensivePlanParent}>
          <Text style={[styles.benz, styles.benzTypo]}>Comprehensive Plan</Text>
          <Text style={[styles.n19000030, styles.benzTypo]}>N190,000.30</Text>
          <Image
            style={[styles.groupChild2, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <Text style={[styles.total, styles.benzGroupPosition]}>Total</Text>
        <Text style={[styles.n723000030, styles.textTypo]}>N7,230,000.30</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild3Bg]} />
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("Info4")}
        >
          <View style={[styles.ellipseWrapper, styles.paymentInnerFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-21.png")}
            />
          </View>
          <Image
            style={[styles.leadwayAssuranceNewLogo768Icon, styles.textPosition]}
            contentFit="cover"
            source={require("../assets/leadwayassurancenewlogo768x480-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.paymentInner, styles.paymentInnerFlexBox]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Info4")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.rectangleParent1, styles.textPosition]}>
        <View style={[styles.groupChild3, styles.groupChild3Bg]} />
        <View
          style={[styles.homeIndicatorwhite, styles.statusBarwhitePosition]}
        >
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.buttonPosition]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
            <View style={[styles.groupChild4, styles.groupChild4Layout]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport.png")}
              />
              <Text style={[styles.insurance, styles.insuranceClr]}>
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
            source={require("../assets/iconoutlinequestionmarkcircle.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarwhite, styles.statusBarwhitePosition]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  quoteParentPosition: {
    left: "6.4%",
    position: "absolute",
  },
  quoteClr: {
    color: Color.gray3,
    position: "absolute",
  },
  rectangleParentPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textPosition: {
    display: "none",
    position: "absolute",
  },
  groupPosition1: {
    bottom: "58.51%",
    height: "41.49%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ellipseWrapperPosition: {
    left: 0,
    top: 0,
  },
  categoryLayout: {
    height: 64,
    width: 64,
  },
  groupChild4Position: {
    backgroundColor: Color.secondary,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  insuranceClr: {
    color: Color.secondary,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  buttonFlexBox: {
    backgroundColor: Color.colorGoldenrod_100,
    alignItems: "center",
    flexDirection: "row",
  },
  timeTypo: {
    fontWeight: "700",
    textAlign: "center",
  },
  benzGroupPosition: {
    left: "3.98%",
    position: "absolute",
  },
  benzTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    color: Color.gray3,
  },
  groupPosition: {
    bottom: "30.56%",
    right: "25.25%",
    height: "2.78%",
    top: "66.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 92,
    width: 375,
    left: 0,
    top: 0,
  },
  groupChild3Bg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  paymentInnerFlexBox: {
    paddingRight: Padding.p_10xs,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  statusBarwhitePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  buttonPosition: {
    left: 24,
    justifyContent: "center",
    position: "absolute",
  },
  groupChild4Layout: {
    width: 122,
    height: 36,
  },
  quote: {
    left: "76.99%",
    textAlign: "center",
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.size_3xs,
    top: "61.34%",
    color: Color.gray3,
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
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.size_3xs,
    top: "61.34%",
    color: Color.gray3,
  },
  ellipseIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  text: {
    top: "-79.59%",
    left: "16.67%",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
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
  groupChild: {
    width: "18.3%",
    right: "41.25%",
    left: "40.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  text1: {
    top: "9.32%",
    left: "31.06%",
    color: Color.white,
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  ellipseGroup: {
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
  },
  upgradeToComprehensive: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    color: Color.text,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
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
    fontFamily: FontFamily.mobileBody3Regular,
  },
  upgradeToComprehensiveMotorParent: {
    top: 100,
    left: 23,
    width: 328,
    height: 111,
    position: "absolute",
  },
  categoryBgSelected: {
    shadowColor: "rgba(17, 17, 17, 0.04)",
    shadowRadius: 13.38,
    elevation: 13.38,
    borderRadius: 32,
    opacity: 0.1,
    height: 64,
    width: 64,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconoutlinenewspaper: {
    top: 22,
    left: 22,
    width: 21,
    height: 21,
    overflow: "hidden",
    position: "absolute",
  },
  categoryBgSelectedParent: {
    top: 312,
    left: 156,
    position: "absolute",
  },
  iconoutlinedownload: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  downloadQuote: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
  },
  iconoutlinedownloadParent: {
    top: 640,
    left: 124,
    gap: Gap.gap_15xs,
  },
  proceedToPay: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
  },
  button: {
    top: 677,
    borderRadius: Border.br_base,
    width: 327,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    left: 24,
    justifyContent: "center",
    position: "absolute",
  },
  rectangle1: {
    height: "81.59%",
    bottom: "18.41%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray6,
    opacity: 0.45,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  benz: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.mobileBody3Regular,
    position: "absolute",
  },
  n19000030: {
    left: "76.74%",
    top: "0%",
    fontFamily: FontFamily.mobileBody3Regular,
    position: "absolute",
  },
  groupItem: {
    width: "47.84%",
    left: "26.91%",
  },
  benzParent: {
    top: "6.97%",
    bottom: "84.08%",
    right: "3.98%",
    width: "92.05%",
    height: "8.96%",
    left: "3.98%",
  },
  benzGroup: {
    top: "21.89%",
    bottom: "69.15%",
    right: "3.98%",
    width: "92.05%",
    height: "8.96%",
    left: "3.98%",
  },
  benzContainer: {
    top: "36.82%",
    bottom: "54.23%",
    right: "3.98%",
    width: "92.05%",
    height: "8.96%",
    left: "3.98%",
  },
  groupView: {
    top: "51.74%",
    bottom: "39.3%",
    right: "3.98%",
    width: "92.05%",
    height: "8.96%",
    left: "3.98%",
  },
  groupChild2: {
    width: "31.23%",
    left: "43.52%",
  },
  comprehensivePlanParent: {
    bottom: "24.38%",
    top: "66.67%",
    left: "3.98%",
    right: "3.98%",
    width: "92.05%",
    height: "8.96%",
    position: "absolute",
  },
  total: {
    top: "90.05%",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    color: Color.gray3,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  n723000030: {
    top: "89.55%",
    left: "65.75%",
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "right",
    color: Color.gray3,
    position: "absolute",
  },
  rectangleGroup: {
    height: "24.75%",
    width: "87.2%",
    top: "49.26%",
    right: "6.4%",
    bottom: "25.99%",
  },
  rectangleView: {
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
  },
  frameParent: {
    top: 55,
    left: 21,
    width: 36,
    height: 33,
    position: "absolute",
  },
  rectangleContainer: {
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
  paymentInner: {
    top: 51,
    left: 61,
  },
  groupChild3: {
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
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupChild4: {
    borderRadius: Border.br_xl,
    opacity: 0.15,
    height: 36,
    backgroundColor: Color.secondary,
    left: 0,
    top: 0,
    position: "absolute",
  },
  insurance: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
  },
  rectangleParent2: {
    height: 36,
  },
  iconoutlinehomeParent: {
    top: 20,
    gap: Gap.gap_8xl,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
  },
  rectangleParent1: {
    height: "11.82%",
    top: "88.18%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    top: 2,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    height: 36,
    backgroundColor: Color.colorGoldenrod_100,
    alignItems: "center",
    flexDirection: "row",
  },
  payment: {
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

export default Payment;
