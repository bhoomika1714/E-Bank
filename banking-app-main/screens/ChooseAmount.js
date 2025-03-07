import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ChooseAmount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseAmount}>
      <View style={styles.backAndShare}>
        <Image
          style={[styles.backAndShareChild, styles.objectsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41661.png")}
        />
        <View style={[styles.objects, styles.objectsPosition]} />
      </View>
      <View style={[styles.donate, styles.donateLayout]}>
        <View style={[styles.donateChild, styles.donateLayout]} />
        
        <Text style={[styles.howMuchYou, styles.textTypo1]}>
          how much you want to donate?
        </Text>
        
        <View style={[styles.donateInner, styles.donateChildShadowBox]} />
        <Text style={[styles.text1, styles.textTypo]}>₹100</Text>
        <View style={[styles.rectangleView, styles.donateChildShadowBox]} />
        <Text style={[styles.text2, styles.textTypo]}>₹150</Text>
        <View style={[styles.donateChild1, styles.donateChildShadowBox]} />
        <Text style={[styles.text3, styles.textTypo1]}>₹200</Text>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
        <View style={[styles.donateChild2, styles.donateChildShadowBox]} />
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor={Color.white}
          keyboardType="numeric" // This will ensure the user only enters numbers
           />
           <TextInput
          style={styles.input1}
          placeholder="Enter name"
          placeholderTextColor={Color.white}
          keyboardType="words" // This will ensure the user only enters numbers
           />

      </View>
      <View style={styles.statusBarwhite}>
       
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("DonateForEducation")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("PaymentMethod1")}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  objectsLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  objectsPosition: {
    left: 0,
    top: 0,
  },
  donateLayout: {
    height: 605,
    width: 360,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  donateChildShadowBox: {
    height: 54,
    width: 327,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  textTypo: {
    left: 155,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    position: "absolute",
  },
  backAndShareChild: {
    top: 11,
    left: 3,
    width: 320,
    height: 210,
  },
  objects: {
    width: 307,
    borderRadius: Border.br_xl,
    position: "absolute",
    height: 221,
  },
  backAndShare: {
    top: 37,
    left: 21,
    width: 323,
    height: 221,
    position: "absolute",
  },
  donateChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    left: 10,
    top: 0,
  },
  howMuchYou: {
    top: 125,
    left: 26,
    color: Color.lightGray11,
  },
  donateItem: {
    top: 81,
    left: 24,
  },
  text: {
    top: 98,
    left: 158,
    color: Color.white,
  },
  donateInner: {
    top: 160,
    left: 24,
  },
  text1: {
    top: 175,
  },
  rectangleView: {
    top: 239,
    left: 24,
  },
  text2: {
    top: 255,
  },
  donateChild1: {
    top: 328,
    left: 24,
  },
  text3: {
    top: 343,
    left: 151,
    color: Color.white,
  },
  or: {
    top: 398,
    left: 157,
    color: "#979797",
  },
  donateChild2: {
    top: 439,
    left: 23,
  },
  enterHere: {
    top: 455,
    left: 133,
    color: Color.white,
  },
  donate: {
    top: 235,
    left: 8,
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
    textAlign: "center",
    left: 24,
    color: Color.lightGray11,
    position: "absolute",
  },
  statusBarwhite: {
    width: 400,
    height: 36,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 14,
    top: 36,
    width: 40,
    height: 40,
    position: "absolute",
  },
  chooseAmount: {
    borderRadius: Border.br_5xl,
    backgroundColor: "rgba(213, 213, 213, 0.99)",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  input: {
    top:415,
    left:24,
    width: 327,
    height: 54,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    paddingLeft: 20,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.white,
    marginTop: 20,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center", 
  },
  input1: {
    top:-40,
    left:24,
    width: 327,
    height: 54,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    paddingLeft: 20,
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.white,
    marginTop: 20,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center", 
  },
  button: {
    top: 720,
    left: 30,
    width: 327,
    height: 54,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.m3TitleMedium_size,
  },
});

export default ChooseAmount;

