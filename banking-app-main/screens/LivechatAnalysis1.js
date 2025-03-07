import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent4 from "../components/GroupComponent4";
import { useNavigation } from "@react-navigation/native";
import TimeStyle from "../components/TimeStyle";
import FrameComponent4 from "../components/FrameComponent4";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const LivechatAnalysis1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechatAnalysis1}>
      <View style={styles.groupParent}>
        <GroupComponent1 />
        <GroupComponent3
          propTop={477}
          group6={require("../assets/group-64.png")}
        />
        <GroupComponent4
          propTop={266}
          propLeft={275}
          propBackgroundColor="#e0a340"
        />
      </View>
      <View
        style={[styles.generateDetailedOfMySpendiWrapper, styles.exitFlexBox]}
      >
        <Text
          style={styles.generateDetailedOf}
        >{`"Generate detailed of my spending
 patterns"`}</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildBg]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <View style={[styles.frameChild1, styles.capIconLayout]} />
        <Text
          style={styles.groceriesUtilitiesMiscellane}
        >{`          Groceries   Utilities  Miscellaneous  
  
Mon      ₹3,750    ₹500       ₹2,500                             
Tue       ₹3,500     ₹700       ₹1,500                         
Wed     ₹3,000     ₹600       ₹2,000                              
Thu      ₹2,750     ₹600       ₹1,750                                
Fri        ₹2,500     ₹800       ₹2,500                               
Sat      ₹2,750      ₹900       ₹500                                  
Sun      ₹2,500     ₹400       ₹500                              `}</Text>
        <Text style={[styles.youCanSaveContainer, styles.generateTypo]}>
          <Text
            style={styles.youCanSave}
          >{`You can save your spending through below methods:

`}</Text>
          <Text style={styles.utilitiesEnergyEfficiency}>{`Utilities:
Energy Efficiency:
Use energy-efficient appliances and light bulbs to reduce electricity consumption.
Optimize Heating and Cooling:
Use fans or space heaters instead of central heating and cooling when possible.
Entertainment:
Look for Free or Low-Cost Activities:
Attend free community events, outdoor concerts, or local festivals.`}</Text>
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Text
          style={[styles.generateDetailedOf1, styles.generateFlexBox]}
        >{`"Generate detailed of my spending
 patterns over different periods"`}</Text>
        <Pressable
          style={[
            styles.generateAPersonalizedContainer,
            styles.monitorMyCreditPosition,
          ]}
          onPress={() => navigation.navigate("LivechatAnalyze")}
        >
          <Text
            style={[styles.generateAPersonalizedFinanc, styles.generateFlexBox]}
          >{`“Generate a personalized financial
 health score that considers spending 
 habits, savings, debt levels, and 
 credit score.”`}</Text>
        </Pressable>
        <Text
          style={[styles.monitorMyCredit, styles.monitorMyCreditPosition]}
        >{` "Monitor my credit score and 
  provide tips to improve it"


 `}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.capacityPosition]} />
        <Text style={[styles.chatWithUs, styles.generateFlexBox]}>
          Chat with us!
        </Text>
        <View style={[styles.exit, styles.exitFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft11.png")}
          />
        </View>
        <TimeStyle
          propTop={0}
          propLeft={20}
          propWidth={55}
          propHeight={27}
          propMarginTop={-4.5}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection11.png")}
        />
        <View style={[styles.battery, styles.borderLayout]}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/cap8.png")}
          />
          <View style={[styles.capacity, styles.capacityPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi15.png")}
        />
      </View>
      <FrameComponent4 />
    </View>
  );
};

const styles = StyleSheet.create({
  exitFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupChildBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  frameLayout: {
    height: 145,
    top: 9,
    width: 1,
    backgroundColor: Color.colorDimgray_100,
    position: "absolute",
  },
  capIconLayout: {
    width: 1,
    position: "absolute",
  },
  generateTypo: {
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
  },
  groupChildPosition: {
    height: 376,
    width: 308,
    left: 0,
    top: 0,
    position: "absolute",
  },
  generateFlexBox: {
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    alignItems: "center",
  },
  monitorMyCreditPosition: {
    left: 24,
    position: "absolute",
  },
  groupLayout: {
    width: 390,
    left: 0,
  },
  capacityPosition: {
    top: 3,
    position: "absolute",
  },
  borderLayout: {
    height: 15,
    position: "absolute",
  },
  groupParent: {
    top: -52,
    left: -435,
    width: 397,
    height: 598,
    display: "none",
    position: "absolute",
  },
  generateDetailedOf: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.size_mini,
  },
  generateDetailedOfMySpendiWrapper: {
    top: 88,
    left: 88,
    width: 281,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGoldenrod_100,
  },
  frameChild: {
    left: 47,
  },
  frameItem: {
    left: 112,
  },
  frameInner: {
    left: 163,
  },
  rectangleView: {
    left: 259,
  },
  frameChild1: {
    top: 35,
    left: 10,
    height: 270,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    backgroundColor: Color.colorDimgray_100,
    width: 1,
  },
  groceriesUtilitiesMiscellane: {
    top: 12,
    left: 19,
    fontSize: FontSize.mobileBody3Regular_size,
    width: 241,
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  youCanSave: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  utilitiesEnergyEfficiency: {
    fontFamily: FontFamily.interRegular,
  },
  youCanSaveContainer: {
    top: 169,
    left: 11,
    width: 259,
    color: Color.lightGray11,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 198,
    left: 14,
    width: 297,
    height: 548,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 308,
    left: 0,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  generateDetailedOf1: {
    top: 127,
    left: 20,
    width: 300,
    height: 126,
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  generateAPersonalizedFinanc: {
    width: 276,
    height: 118,
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  generateAPersonalizedContainer: {
    top: 29,
  },
  monitorMyCredit: {
    top: 234,
    width: 217,
    height: 147,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    alignItems: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  groupContainer: {
    top: 760,
    left: 17,
    width: 320,
    height: 381,
    position: "absolute",
  },
  groupItem: {
    borderBottomWidth: 1,
    height: 92,
    width: 390,
    left: 0,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGoldenrod_100,
    top: 3,
  },
  chatWithUs: {
    top: 38,
    left: 94,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 234,
    height: 38,
    color: Color.white,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    top: 34,
    left: 25,
    borderRadius: Border.br_5xs,
    width: 37,
    height: 46,
    padding: Padding.p_7xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  cellularConnectionIcon: {
    width: 17,
    height: 14,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 15,
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIcon: {
    top: 5,
    right: 0,
    height: 5,
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 9,
  },
  battery: {
    top: 14,
    right: 35,
    width: 25,
  },
  wifiIcon: {
    width: 16,
    height: 14,
  },
  rectangleGroup: {
    top: -2,
    height: 95,
    position: "absolute",
  },
  livechatAnalysis1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default LivechatAnalysis1;
