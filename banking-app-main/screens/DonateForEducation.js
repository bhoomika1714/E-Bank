import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Amount from "../components/Amount";
import Donate1 from "../components/Donate1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const DonateForEducation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.donateForEducation}>
      <View style={styles.education}>
        
        <Text
          style={[styles.educationDonationForContainer, styles.educationTypo]}
        >
          <Text style={styles.educationDonationForPoor}>{`Education donation for
poor child
`}</Text>
          <Text style={styles.daysLeft}>
            <Text style={styles.daysLeft1}>{`20 days left

                        
`}</Text>
            <Text style={styles.text}>{`                           
                          `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.daysLeft}>
            <Text style={styles.text4}>{`  `}</Text>
            <Text
              style={styles.text}
            >{`                                         `}</Text>
          </Text>
          <Text style={styles.timeTypo}>{` `}</Text>
          <Text
            style={styles.text7}
          >{`                                 `}</Text>
        </Text>
      </View>
      <Amount />
      <Donate1 />
      <View style={[styles.backAndShare, styles.wrapperPosition]}>
        <Image
          style={[styles.backAndShareChild, styles.objectsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4166.png")}
        />
        <View style={[styles.objects, styles.objectsLayout]} />
      </View>
      <View style={[styles.statusBarwhite, styles.objectsPosition]}>
        
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Donate")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Pressable
        style={styles.icbaselineShare}
        onPress={() => navigation.navigate("DonateForEducation1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icbaselineshare.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  educationTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
    left: 20,
    position: "absolute",
  },
  wrapperPosition: {
    left: 21,
    position: "absolute",
  },
  objectsLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  objectsPosition: {
    left: 0,
    top: 0,
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  education1: {
    color: Color.colorGoldenrod_100,
    width: 123,
    height: 56,
    fontSize: FontSize.m3LabelLarge_size,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 24,
  },
  educationDonationForPoor: {
    fontSize: FontSize.size_xl,
    color: Color.lightGray11,
  },
  daysLeft1: {
    fontSize: FontSize.size_smi,
  },
  text: {
    fontSize: FontSize.size_3xs,
  },
  daysLeft: {
    color: Color.colorGray_900,
  },
  text2: {
    color: Color.lightGray11,
  },
  text4: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  text7: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_900,
  },
  educationDonationForContainer: {
    top: 28,
    height: 176,
    width: 316,
  },
  education: {
    top: 320,
    left: 9,
    height: 204,
    width: 316,
    position: "absolute",
  },
  backAndShareChild: {
    top: 11,
    left: 10,
    width: 330,
    height: 230,
  },
  objects: {
    width: 307,
    height: 221,
    left: 0,
    top: 0,
  },
  backAndShare: {
    top: 76,
    width: 323,
    height: 221,
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
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    position: "absolute",
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 400,
    height: 40,
    position: "absolute",
  },
  wrapper: {
    top: 36,
    width: 40,
    height: 40,
  },
  icon1: {
    overflow: "hidden",
  },
  icbaselineShare: {
    left: 319,
    top: 41,
    width: 30,
    height: 30,
    position: "absolute",
  },
  donateForEducation: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DonateForEducation;

