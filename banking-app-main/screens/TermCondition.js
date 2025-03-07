import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame9 from "../components/Frame9";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const TermCondition = () => {
  return (
    <View style={styles.termCondition}>
      <Text
        style={styles.l151ThankYou}
      >{`L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member.

15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy relates to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.

15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.

15.4 By using this Application, you agree to the terms of this Privacy Policy.`}</Text>
      <Frame9 />
    </View>
  );
};

const styles = StyleSheet.create({
  l151ThankYou: {
    position: "absolute",
    top: 126,
    left: 24,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    textAlign: "left",
    width: 327,
    height: 648,
  },
  termCondition: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TermCondition;
