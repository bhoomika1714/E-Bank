import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent1 from "../components/FrameComponent1";
import Card4 from "../components/Card4";
import { useNavigation } from "@react-navigation/native";
import { Gap, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentMethod1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <Text style={[styles.paymentMethod1, styles.selectAmountFlexBox]}>
        Payment Method
      </Text>
      <View style={styles.savedPayment}>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon21.png")}
          />
          <View style={[styles.provider, styles.methodFlexBox]}>
            <View style={styles.payment}>
              <Text style={[styles.debitcard, styles.debitcardTypo]}>
                DebitCard
              </Text>
              <Text style={[styles.text, styles.textFlexBox]}>
                **** **** 0783 7873
              </Text>
            </View>
            <View style={styles.iconPaymentMastercard}>
              <Image
                style={[styles.image19Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-192.png")}
              />
              <Image
                style={[styles.image22Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-222.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon22.png")}
          />
          <View style={styles.provider1}>
            <View style={styles.payment}>
              <Text style={[styles.debitcard, styles.debitcardTypo]}>
                UPI_Paypal
              </Text>
              <Text style={[styles.text, styles.textFlexBox]}>
                **** **** 889@paypal
              </Text>
            </View>
          </View>
          <View style={styles.iconPaymentMastercard}>
            <Image
              style={styles.image20Icon}
              contentFit="cover"
              source={require("../assets/image-20.png")}
            />
          </View>
        </View>
        <View style={[styles.method, styles.methodFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon30.png")}
          />
          <View style={styles.provider1}>
            <View style={styles.payment}>
              <Text style={[styles.debitcard, styles.debitcardTypo]}>
                Paytm
              </Text>
              <Text style={[styles.text, styles.textFlexBox]}>
                **** **** 0582 4672
              </Text>
            </View>
          </View>
          <Image
            style={styles.paytmLogosvgIcon}
            contentFit="cover"
            source={require("../assets/paytm-logosvg1.png")}
          />
        </View>
      </View>
      <Text style={[styles.selectAmount, styles.debitcardTypo]}>
        Select Amount
      </Text>
      <FrameComponent1 prop="200" propTop={7} propHeight="unset" />
      <Card4 />
      <Pressable
        style={styles.paymentMethodInner}
        onPress={() => navigation.navigate("UPIPIN1")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <Text style={[styles.continue, styles.timeTypo]}>continue</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("EmptyRoomlist")}
      >
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.statusBarwhite, styles.groupChildBg]}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectAmountFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  methodFlexBox: {
    gap: Gap.gap_6xs,
    flexDirection: "row",
    alignItems: "center",
  },
  debitcardTypo: {
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 18,
    fontSize: FontSize.size_smi_5,
    fontWeight: "600",
  },
  textFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.lightGray11,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "3.15%",
    right: "3.15%",
    width: "93.71%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChildBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "700",
    position: "absolute",
  },
  paymentMethod1: {
    top: 61,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 286,
    height: 31,
    color: Color.lightGray11,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    left: 49,
  },
  icon: {
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  debitcard: {
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.lightGray11,
  },
  text: {
    fontSize: FontSize.size_2xs_7,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  payment: {
    gap: Gap.gap_14xs,
    flex: 1,
  },
  image19Icon: {
    height: "93.71%",
    top: "3.15%",
    bottom: "3.15%",
    display: "none",
  },
  image22Icon: {
    height: "68.88%",
    top: "15.73%",
    bottom: "15.38%",
  },
  iconPaymentMastercard: {
    height: 29,
    width: 29,
    overflow: "hidden",
  },
  provider: {
    flex: 1,
  },
  method: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 0.9,
    width: 293,
    padding: 14,
  },
  provider1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image20Icon: {
    top: 11,
    height: 7,
    left: 0,
    width: 29,
    position: "absolute",
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
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
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
    color: Color.white,
    textAlign: "left",
  },
  rectangleParent: {
    position: "absolute",
  },
  paymentMethodInner: {
    top: 705,
    left: 100,
    width: 189,
    height: 54,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  icon3: {
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
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    fontWeight: "700",
    color: Color.lightGray11,
  },
  statusBarwhite: {
    top: 0,
    width: 400,
    height: 36,
    left: 0,
  },
  paymentMethod: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PaymentMethod1;

