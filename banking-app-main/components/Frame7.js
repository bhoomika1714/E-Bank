import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gap, FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame7 = () => {
  const navigation = useNavigation();

  const handleNavigation = (page) => {
    if (page === "Logout") {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginPage" }], // Replace "Login" with your actual login page route name
      });
    } else {
      navigation.navigate(page);
    }
  };

  return (
    <View style={[styles.frame, styles.frameFlexBox2]}>
      <View style={styles.information}>
        <Pressable onPress={() => handleNavigation("PersonalInformation")}>
          <View style={styles.frameParent}>
            <View style={[styles.frameGroup, styles.frameFlexBox1]}>
              <View style={[styles.frame1, styles.frameFlexBox]}>
                <Image
                  style={[styles.useruserprofileIcon, styles.frameLayout1]}
                  contentFit="cover"
                  source={require("../assets/useruserprofile1.png")}
                />
                <Text style={[styles.personalInformation, styles.logoutTypo]}>
                  Personal Information
                </Text>
              </View>
              <Image
                style={styles.arrowsIconLayout}
                contentFit="cover"
                source={require("../assets/arrows-diagramsarrow1.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-1051.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => handleNavigation("PaymentPreferences")}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameView, styles.frameFlexBox1]}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <Image
                  style={[styles.useruserprofileIcon, styles.frameLayout1]}
                  contentFit="cover"
                  source={require("../assets/payments-financecreditcards1.png")}
                />
                <Text style={[styles.personalInformation, styles.logoutTypo]}>
                  Payment Preferences
                </Text>
              </View>
              <Image
                style={styles.arrowsIconLayout}
                contentFit="cover"
                source={require("../assets/arrows-diagramsarrow1.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-1052.png")}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => handleNavigation("Card")}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={styles.banksAndCardsParent}>
              <Text style={[styles.banksAndCards, styles.settingsPosition]}>
                Banks and Cards
              </Text>
              <Image
                style={[styles.arrowsDiagramsarrowIcon2, styles.arrowsIconLayout]}
                contentFit="cover"
                source={require("../assets/arrows-diagramsarrow2.png")}
              />
              <Image
                style={[styles.paymentsFinancecreditCard, styles.frameLayout1]}
                contentFit="cover"
                source={require("../assets/payments-financecredit-card-edit.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-1051.png")}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => handleNavigation("Help")}>
          <View style={styles.frameLayout}>
            <View style={styles.banksAndCardsParent}>
              <Text style={[styles.messageCenter, styles.settingsPosition]}>
                Message Center
              </Text>
              <Image
                style={[styles.arrowsDiagramsarrowIcon2, styles.arrowsIconLayout]}
                contentFit="cover"
                source={require("../assets/arrows-diagramsarrow3.png")}
              />
              <Image
                style={[styles.paymentsFinancecreditCard, styles.frameLayout1]}
                contentFit="cover"
                source={require("../assets/interface-essentialchat-messages-bubble-circle.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-108.png")}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => handleNavigation("TermCondition")}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameParent4, styles.parentFlexBox]}>
              <View style={[styles.frame3, styles.frameLayout1]}>
                <Image
                  style={[styles.useruserprofileIcon, styles.frameLayout1]}
                  contentFit="cover"
                  source={require("../assets/navigation-mapspin-location.png")}
                />
                <Text style={[styles.address, styles.logoutTypo]}>About</Text>
              </View>
              <Image
                style={styles.arrowsIconLayout}
                contentFit="cover"
                source={require("../assets/arrows-diagramsarrow4.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/vector-109.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => handleNavigation("Logout")}>
          <View style={[styles.frame4, styles.frameFlexBox2]}>
            <View style={[styles.image102Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image102Icon}
                contentFit="cover"
                source={require("../assets/image-102.png")}
              />
              <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  frameFlexBox2: {
    justifyContent: "center",
    overflow: "hidden",
  },
  frameFlexBox1: {
    gap: Gap.gap_14xl,
    flexDirection: "row",
    alignItems: "center",
    width: 332,
  },
  frameFlexBox: {
    gap: Gap.gap_4xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout1: {
    height: 22,
    overflow: "hidden",
  },
  logoutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 15.5,
    fontSize: FontSize.m3LabelLarge_size,
  },
  frameLayout: {
    gap: Gap.gap_11xs,
    height: 34,
    alignItems: "center",
    width: 332,
  },
  settingsPosition: {
    left: 38,
    top: 4,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 15,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  arrowsIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  useruserprofileIcon: {
    width: 22,
    height: 22,
  },
  personalInformation: {
    width: 189,
    height: 16,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  frame1: {
    paddingBottom: 2,
    height: 24,
    width: 227,
    gap: Gap.gap_4xs,
    overflow: "hidden",
  },
  frameGroup: {
    height: 25,
  },
  frameChild: {
    maxHeight: "100%",
    width: 332,
  },
  frameParent: {
    gap: Gap.gap_12xs,
    paddingBottom: 0,
    height: 34,
    alignItems: "center",
    width: 332,
  },
  frame2: {
    gap: Gap.gap_4xs,
    flexDirection: "row",
    alignItems: "center",
    width: 227,
  },
  frameView: {
    height: 24,
  },
  frameContainer: {
    paddingBottom: 0,
  },
  banksAndCards: {
    width: 157,
    height: 16,
  },
  arrowsDiagramsarrowIcon2: {
    top: 0,
    left: 308,
    position: "absolute",
  },
  paymentsFinancecreditCard: {
    top: 1,
    left: 0,
    width: 22,
    height: 22,
    position: "absolute",
  },
  banksAndCardsParent: {
    height: 24,
    width: 332,
  },
  messageCenter: {
    width: 148,
    height: 15,
  },
  address: {
    width: 87,
    height: 16,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  frame3: {
    width: 125,
    gap: Gap.gap_4xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent4: {
    gap: Gap.gap_18xl,
    height: 24,
    width: 332,
  },
  settings: {
    width: 57,
    height: 16,
  },
  image102Icon: {
    width: 15,
    height: 16,
  },
  logout: {
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
  },
  image102Parent: {
    width: 86,
    gap: Gap.gap_xs,
    height: 16,
  },
  frame4: {
    width: 327,
  },
  information: {
    height: 364,
    gap: Gap.gap_sm,
    alignItems: "center",
    width: 332,
  },
  frame: {
    top: 230,
    left: 20,
    width: 335,
    position: "absolute",
  },
});

export default Frame7;
