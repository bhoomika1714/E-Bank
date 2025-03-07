import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import TimeStyle from "../components/TimeStyle";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const LivechatAnalyze = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livechatAnalyze}>
      <View
        style={[
          styles.analyseMyThisMonthExpensesWrapper,
          styles.frameViewPosition,
        ]}
      >
        <Text
          style={[styles.analyseMyThis, styles.analyseMyThisTypo]}
        >{`Analyse my this 
month expenses`}</Text>
      </View>
      <View
        style={[styles.generateAPersonalizedFinancWrapper, styles.exitFlexBox]}
      >
        <Text
          style={styles.generateAPersonalized}
        >{`“Generate a personalized financial
 health score that considers spending 
 habits, savings, debt levels`}</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.frameViewBg]} />
        </View>
        <Text
          style={[styles.generateDetailedOf, styles.chatWithUsFlexBox]}
        >{`"Generate detailed of my spending
 patterns over different periods"`}</Text>
        <Text
          style={[styles.generateAPersonalized1, styles.monitorMyCreditTypo]}
        >{`“Generate a personalized financial
 health score that considers spending 
 habits, savings, debt levels, and 
 credit score.”`}</Text>
        <Text
          style={[styles.monitorMyCredit, styles.monitorMyCreditTypo]}
        >{` "Monitor my credit score and 
  provide tips to improve it"


 `}</Text>
      </View>
      <Image
        style={styles.screenshot202408071154501}
        contentFit="cover"
        source={require("../assets/screenshot-20240807-115450-1.png")}
      />
      <View
        style={[styles.livechatAnalyzeInner, styles.livechatAnalyzeInnerLayout]}
      >
        <View
          style={[
            styles.suggestionsForImprovementSpWrapper,
            styles.livechatAnalyzeInnerLayout,
          ]}
        >
          <Text
            style={[styles.suggestionsForImprovement, styles.chatWithUsFlexBox]}
          >{`Suggestions for Improvement
Spending Habits:
Track Spending: Use a budgeting app to monitor daily expenses and identify areas to cut back.
 2. Set Spending Limits: Create spending  
     limits for different categories such as
     dining out, entertainment, and shopping. Savings:
Increase Savings Rate: Aim to increase the savings rate to  at least 15% by setting up automatic transfers to a savings account.
Debt Levels:
Debt Repayment Plan: Create a plan to pay down high-interest debts first, such as credit card debt.
Credit Score:
Timely Payments: Ensure all bills and loan payments are made on time to avoid late fees and negative impacts on your credit score.






`}</Text>
        </View>
      </View>
      <View style={[styles.livechatAnalyzeChild, styles.capacityPosition]} />
      <Text style={[styles.chatWithUs, styles.chatWithUsFlexBox]}>
        Chat with us!
      </Text>
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft1.png")}
        />
      </View>
      <TimeStyle
        propTop={0}
        propLeft={20}
        propWidth={54}
        propHeight={21}
        propMarginTop={-3.5}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection2.png")}
      />
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap2.png")}
        />
        <View style={[styles.capacity, styles.capacityPosition]} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi3.png")}
      />
      <View style={[styles.frameView, styles.frameViewBg]}>
        <View style={[styles.writeAMessageParent, styles.frameViewPosition]}>
          <Text style={[styles.writeAMessage, styles.analyseMyThisTypo]}>
            Write a message
          </Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Pressable
            style={[styles.vuesaxlinearpaperclip2, styles.frameIconLayout]}
            onPress={() => navigation.navigate("Livechat1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearpaperclip2.png")}
            />
          </Pressable>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewPosition: {
    left: "50%",
    position: "absolute",
  },
  analyseMyThisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  exitFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameViewBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  chatWithUsFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    lineHeight: 30,
    position: "absolute",
  },
  monitorMyCreditTypo: {
    left: 24,
    display: "flex",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    position: "absolute",
  },
  livechatAnalyzeInnerLayout: {
    height: 780,
    width: 354,
    position: "absolute",
  },
  capacityPosition: {
    top: 2,
    position: "absolute",
  },
  frameIconLayout: {
    height: 30,
    width: 30,
    top: 2,
    position: "absolute",
  },
  analyseMyThis: {
    marginTop: -30,
    marginLeft: -70.5,
    color: Color.white,
  },
  analyseMyThisMonthExpensesWrapper: {
    marginTop: -305,
    marginLeft: -162.5,
    width: 141,
    height: 60,
    top: "50%",
    left: "50%",
  },
  generateAPersonalized: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
  },
  generateAPersonalizedFinancWrapper: {
    top: 88,
    left: 74,
    width: 295,
    height: 111,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_3xs,
  },
  groupChild: {
    height: 376,
    width: 308,
    left: 0,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  groupChildPosition: {
    height: 376,
    width: 308,
    left: 0,
    top: 0,
    position: "absolute",
  },
  generateDetailedOf: {
    top: 127,
    left: 20,
    width: 300,
    height: 126,
    color: Color.lightGray11,
    display: "flex",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  generateAPersonalized1: {
    top: 29,
    width: 276,
    height: 118,
  },
  monitorMyCredit: {
    top: 234,
    width: 217,
    height: 147,
  },
  groupParent: {
    top: 760,
    left: 17,
    width: 320,
    height: 381,
    position: "absolute",
  },
  screenshot202408071154501: {
    top: 212,
    width: 386,
    height: 418,
    left: 10,
    position: "absolute",
  },
  suggestionsForImprovement: {
    top: 10,
    left: 13,
    width: 329,
    color: Color.lightGray11,
    display: "flex",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  suggestionsForImprovementSpWrapper: {
    backgroundColor: Color.white,
    overflow: "hidden",
    left: 0,
    height: 780,
    width: 354,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  livechatAnalyzeInner: {
    top: 648,
    left: 10,
  },
  livechatAnalyzeChild: {
    left: -16,
    borderBottomWidth: 1,
    width: 390,
    height: 95,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    top: 2,
    backgroundColor: Color.colorGoldenrod_100,
  },
  chatWithUs: {
    top: 41,
    left: 94,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 230,
    color: Color.white,
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  exit: {
    top: 38,
    left: 25,
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightGray11,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    position: "absolute",
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightGray11,
    width: 18,
    height: 7,
  },
  battery: {
    top: 11,
    right: 27,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  writeAMessage: {
    marginTop: -16,
    marginLeft: -173,
    color: Color.iPFTGreyText,
  },
  groupItem: {
    height: "150%",
    width: "13.87%",
    top: "-21.87%",
    right: "12.72%",
    bottom: "-28.12%",
    left: "73.41%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon: {
    left: 209,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vuesaxlinearpaperclip2: {
    left: 263,
  },
  frameIcon1: {
    left: 316,
    overflow: "hidden",
  },
  writeAMessageParent: {
    marginTop: -14.5,
    marginLeft: -163,
    width: 346,
    height: 32,
    top: "50%",
    left: "50%",
  },
  frameView: {
    marginLeft: -225.5,
    bottom: 0,
    width: 450,
    height: 75,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  livechatAnalyze: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default LivechatAnalyze;
