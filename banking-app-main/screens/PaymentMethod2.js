import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Provider from "../components/Provider";
import FrameComponent1 from "../components/FrameComponent1";
import Card4 from "../components/Card4";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const PaymentMethod2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod3}>
      <Text style={[styles.paymentMethod, styles.paymentFlexBox]}>
        Payment Method
      </Text>
      <View style={styles.savedPayment}>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon26.png")}
          />
          <Provider
            propPaddingLeft={1}
            image19={require("../assets/image-191.png")}
            image22={require("../assets/image-221.png")}
          />
        </View>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon27.png")}
          />
          <View style={[styles.provider, styles.methodFlexBox]}>
            <View style={styles.payment}>
              <Text style={[styles.upiPaypal, styles.upiPaypalTypo]}>
                UPI_Paypal
              </Text>
              <Text style={[styles.paypal, styles.paypalFlexBox]}>
                **** **** 889@paypal
              </Text>
            </View>
          </View>
          <View style={[styles.iconPaymentPaypal, styles.paymentFlexBox]}>
            <Image
              style={styles.image20Icon}
              contentFit="cover"
              source={require("../assets/image-201.png")}
            />
          </View>
        </View>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon28.png")}
          />
          <View style={[styles.provider, styles.methodFlexBox]}>
            <View style={styles.payment}>
              <Text style={[styles.upiPaypal, styles.upiPaypalTypo]}>
                Paytm
              </Text>
              <Text style={[styles.paypal, styles.paypalFlexBox]}>
                **** **** 0582 4672
              </Text>
            </View>
          </View>
          <Image
            style={styles.paytmLogosvgIcon}
            contentFit="cover"
            source={require("../assets/paytm-logosvg.png")}
          />
        </View>
      </View>
      <Text style={[styles.selectAmount, styles.continueClr]}>
        Select Amount
      </Text>
      <FrameComponent1 prop="200" propTop={7} propHeight="unset" />
      <Card4 />
      <Pressable
        style={[styles.paymentMethod3Inner, styles.paymentFlexBox]}
        onPress={() => navigation.navigate("UPIPIN4")}
      >
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <Text style={[styles.continue, styles.continueClr]}>continue</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ShowTimings")}
      >
        <Image
          style={styles.icon3Layout}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.statusBarwhite, styles.groupChildBg]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  methodFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  upiPaypalTypo: {
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 18,
    fontSize: FontSize.size_smi_5,
    fontWeight: "600",
  },
  paypalFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.lightGray11,
  },
  continueClr: {
    color: Color.white,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  paymentMethod: {
    top: 61,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 286,
    height: 31,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "600",
    left: 49,
    position: "absolute",
  },
  icon: {
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  method: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 0.9,
    width: 293,
    padding: 14,
    gap: Gap.gap_6xs,
  },
  upiPaypal: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.lightGray11,
  },
  paypal: {
    fontSize: FontSize.size_2xs_7,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  payment: {
    gap: Gap.gap_14xs,
    flex: 1,
  },
  provider: {
    flex: 1,
  },
  image20Icon: {
    height: 7,
    width: 29,
  },
  iconPaymentPaypal: {
    height: 29,
    width: 29,
    overflow: "hidden",
  },
  paytmLogosvgIcon: {
    width: 31,
    height: 9,
    overflow: "hidden",
  },
  savedPayment: {
    top: 372,
    gap: Gap.gap_3xs,
    left: 49,
    position: "absolute",
  },
  selectAmount: {
    top: 662,
    left: 149,
    width: 94,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 18,
    fontSize: FontSize.size_smi_5,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: "100%",
    width: "100%",
    borderRadius: Border.br_base,
  },
  continue: {
    height: "33.33%",
    width: "44.97%",
    top: "33.33%",
    left: "27.51%",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
  },
  rectangleParent: {
    height: 54,
    width: 189,
  },
  paymentMethod3Inner: {
    top: 705,
    left: 100,
    width: 189,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  icon3Layout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 16,
    top: 57,
    width: 40,
    height: 40,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "center",
    color: Color.lightGray11,
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    top: 0,
    left: 0,
    width: 375,
    height: 36,
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    flexDirection: "row",
    alignItems: "center",
  },
  paymentMethod3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PaymentMethod2;
