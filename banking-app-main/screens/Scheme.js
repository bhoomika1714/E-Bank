import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Scheme = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.scheme, styles.schemeShadowBox]}>
      <View style={[styles.categoryBgSelectedParent, styles.categoryLayout]}>
        <View style={[styles.categoryBgSelected, styles.groupChild2Position]} />
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
          source={require("../assets/iconoutlinedownload1.png")}
        />
        <Text style={styles.downloadQuote}>Download Quote</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Pay")}
      >
        <Text style={[styles.proceedToPay, styles.timeTypo]}>
          Proceed to Pay
        </Text>
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.rectangle, styles.rectanglePosition1]} />
        <View style={[styles.stMonthParent, styles.monthParentPosition]}>
          <Text style={[styles.stMonth, styles.totalTypo]}>1st month</Text>
          <Text style={[styles.n1000030, styles.totalTypo]}>N10,000.30</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.ndMonthParent, styles.monthParentPosition]}>
          <Text style={[styles.stMonth, styles.totalTypo]}>{`2nd month `}</Text>
          <Text style={[styles.n1000030, styles.totalTypo]}>N10,000.30</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.rdMonthParent, styles.monthParentPosition]}>
          <Text style={[styles.stMonth, styles.totalTypo]}>3rd month</Text>
          <Text style={[styles.n1000030, styles.totalTypo]}>N10,000.30</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={[styles.thMonthParent, styles.monthParentPosition]}>
          <Text style={[styles.stMonth, styles.totalTypo]}>4th month</Text>
          <Text style={[styles.n1000030, styles.totalTypo]}>N10,000.30</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <View style={styles.comprehensivePlanParent}>
          <Text style={[styles.stMonth, styles.totalTypo]}>
            Comprehensive Plan
          </Text>
          <Text style={[styles.n1000030, styles.totalTypo]}>N10,000.30</Text>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <Text style={[styles.total, styles.textTypo]}>Total</Text>
        <Text style={[styles.text, styles.textTypo]}>50,000.30</Text>
      </View>
      <View style={[styles.statusBarwhite, styles.rectanglePosition1]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ApplyForPolicy2")}
      >
        <Image
          style={[styles.icon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <View style={styles.homeIndicatorwhite}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={styles.groupChild2Layout}>
            <View style={[styles.groupChild2, styles.groupChild2Layout]} />
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
            source={require("../assets/iconoutlinequestionmarkcircle.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  schemeShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  categoryLayout: {
    height: 64,
    width: 64,
  },
  groupChild2Position: {
    backgroundColor: Color.secondary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    position: "absolute",
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
  rectanglePosition1: {
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  monthParentPosition: {
    right: "6.42%",
    width: "89.6%",
    height: "8.96%",
    left: "3.98%",
    position: "absolute",
  },
  totalTypo: {
    textAlign: "left",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rectanglePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild2Layout: {
    height: 36,
    width: 122,
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
    width: 21,
    height: 21,
    overflow: "hidden",
    left: 22,
    position: "absolute",
  },
  categoryBgSelectedParent: {
    top: 129,
    left: 144,
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
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.secondary,
  },
  iconoutlinedownloadParent: {
    top: 506,
    left: 120,
    gap: Gap.gap_15xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  proceedToPay: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
  },
  button: {
    top: 561,
    borderRadius: Border.br_base,
    width: 327,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    position: "absolute",
    left: 22,
  },
  rectangle: {
    height: "81.59%",
    bottom: "18.41%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray6,
    opacity: 0.45,
    left: "0%",
  },
  stMonth: {
    color: Color.gray3,
    position: "absolute",
    fontFamily: FontFamily.mobileBody3Regular,
    textAlign: "left",
    top: "0%",
    left: "0%",
  },
  n1000030: {
    left: "78.84%",
    color: Color.gray3,
    position: "absolute",
    fontFamily: FontFamily.mobileBody3Regular,
    textAlign: "left",
    top: "0%",
  },
  groupChild: {
    width: "49.15%",
    left: "27.65%",
    bottom: "30.56%",
    right: "23.21%",
    height: "2.78%",
    maxWidth: "100%",
    top: "66.67%",
    position: "absolute",
  },
  stMonthParent: {
    top: "6.97%",
    bottom: "84.08%",
    left: "3.98%",
  },
  ndMonthParent: {
    top: "21.89%",
    bottom: "69.15%",
    left: "3.98%",
  },
  rdMonthParent: {
    top: "36.82%",
    bottom: "54.23%",
    left: "3.98%",
  },
  thMonthParent: {
    top: "51.74%",
    bottom: "39.3%",
    left: "3.98%",
  },
  groupChild1: {
    width: "32.08%",
    left: "44.71%",
    bottom: "30.56%",
    right: "23.21%",
    height: "2.78%",
    maxWidth: "100%",
    top: "66.67%",
    position: "absolute",
  },
  comprehensivePlanParent: {
    bottom: "24.38%",
    top: "66.67%",
    left: "3.98%",
    right: "6.42%",
    width: "89.6%",
    height: "8.96%",
    position: "absolute",
  },
  total: {
    top: "90.05%",
    textAlign: "left",
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.gray3,
    position: "absolute",
    left: "3.98%",
  },
  text: {
    top: "89.55%",
    left: "74.62%",
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "right",
    color: Color.gray3,
    position: "absolute",
  },
  rectangleParent: {
    height: "24.75%",
    width: "87.2%",
    top: "31.65%",
    right: "7.47%",
    bottom: "43.6%",
    left: "5.33%",
    position: "absolute",
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
    height: "4.43%",
    bottom: "95.57%",
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    left: "0%",
    backgroundColor: Color.colorGoldenrod_100,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "4%",
    top: "5.67%",
    right: "85.33%",
    bottom: "89.41%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  rectangleView: {
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowRadius: 15,
    elevation: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    height: "100%",
    top: "0%",
    bottom: "0%",
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
    width: 375,
    height: 34,
    left: 0,
    position: "absolute",
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupChild2: {
    borderRadius: Border.br_xl,
    opacity: 0.15,
    backgroundColor: Color.secondary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  insurance: {
    textAlign: "left",
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.secondary,
    fontWeight: "600",
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconoutlinehomeParent: {
    top: 20,
    left: 24,
    gap: Gap.gap_8xl,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  rectangleGroup: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
  },
  scheme: {
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

export default Scheme;
