import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame12 from "../components/Frame12";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const InsurancePlan = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState(""); // State for First Name

  return (
    <View style={styles.insurancePlan}>
      <Pressable
        style={[styles.personalInfoParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Car")}
      >
        <Text style={[styles.personalInfo, styles.firstNameClr]}>
          Personal Info
        </Text>
        <Text style={[styles.idvehicleDetails, styles.quoteTypo]}>
          ID/Vehicle Details
        </Text>
        <Text style={[styles.quote, styles.quoteTypo]}>Quote</Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition1]}>
          <View style={[styles.rectangle, styles.rectanglePosition1]} />
          <View style={styles.groupParent}>
            <View style={styles.ellipseParent}>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse6.png")}
              />
              <View style={styles.check}>
                <Image
                  style={[styles.pathIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/path.png")}
                />
                <Text style={[styles.text, styles.textClr]}>1</Text>
              </View>
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse7.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>2</Text>
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse8.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>3</Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={[styles.insurancePlanChild, styles.insuranceBg]} />

      {/* Input field for First Name */}
      <View style={[styles.component223Parent, styles.parentPosition]}>
        <View style={[styles.component223, styles.componentPosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <TextInput
            style={[styles.input, { color: "black", backgroundColor: "white", padding: 10 }]} // Ensure text is visible and input is styled
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter First Name"
            placeholderTextColor={Color.gray4}
            editable={true} // Ensure the input is editable
          />
        </View>
        <Text style={[styles.firstName, styles.firstNameTypo]}>First Name</Text>
      </View>

      <View style={[styles.rectangleGroup, styles.frameLayout]}>
        <View style={[styles.rectangle2, styles.groupItemPosition]}>
          <View style={[styles.rectangle3, styles.rectanglePosition]} />
        </View>
        <View style={[styles.typeHere, styles.typePosition]}>
          <Text style={[styles.january1890, styles.damolaTypo]}>
            25 - January - 1890
          </Text>
        </View>
        <Text style={[styles.dateOfBirth, styles.firstNameTypo]}>
          Date of Birth
        </Text>
      </View>

      <View style={[styles.insurancePlanItem, styles.insuranceBg]} />

      <View style={styles.comprehensiveMotorInsuranceParent}>
        <Text
          style={[styles.comprehensiveMotorInsurance, styles.groupItemPosition]}
        >{`Comprehensive 
Motor Insurance Plan`}</Text>
        <Text
          style={[styles.fillOrUpdate, styles.damolaTypo]}
        >{`Fill or Update your information and we’ll get your vehicle covered in no time.
        `}</Text>
      </View>

      <Pressable
        style={[styles.button, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Proceed")}
      >
        <Text style={[styles.continue, styles.textClr]}>Continue</Text>
      </Pressable>

      <View style={[styles.rectangleContainer, styles.componentPosition]}>
        <View style={[styles.groupChild, styles.componentPosition]} />
        <View style={[styles.homeIndicatorwhite, styles.groupItemPosition]}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={styles.groupLayout}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport3.png")}
              />
              <Text style={[styles.insurance, styles.firstNameTypo]}>
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
            source={require("../assets/iconoutlinequestionmarkcircle2.png")}
          />
        </View>
      </View>

      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.typeHere1, styles.typePosition]} />
        <View style={[styles.component224Parent, styles.componentPosition]}>
          <View style={[styles.component224, styles.componentPosition]}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <Text style={[styles.damola, styles.damolaTypo]}>Benson-Okoh</Text>
          </View>
          <Text style={[styles.dateOfBirth, styles.firstNameTypo]}>
            Last Name
          </Text>
        </View>
      </View>

      <Frame12 />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  firstNameClr: {
    color: Color.gray3,
    fontWeight: "500",
    position: "absolute",
  },
  quoteTypo: {
    color: Color.colorSilver_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: "61.34%",
    position: "absolute",
  },
  rectanglePosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  insuranceBg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  componentPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  rectanglePosition: {
    borderRadius: Border.br_5xs,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  damolaTypo: {
    fontFamily: FontFamily.mobileBody3Regular,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.gray3,
    position: "absolute",
  },
  firstNameTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
  },
  frameLayout: {
    height: 74,
    width: 327,
    left: 24,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    position: "absolute",
  },
  typePosition: {
    height: 21,
    left: 12,
    top: 41,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 122,
  },
  personalInfo: {
    left: "7.95%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.gray3,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: "61.34%",
  },
  idvehicleDetails: {
    left: "36.7%",
  },
  quote: {
    left: "76.76%",
  },
  rectangle: {
    height: "11.36%",
    top: "45.45%",
    bottom: "43.18%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGreyGrey6,
    left: "0%",
  },
  ellipseIcon: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  pathIcon: {
    height: "37.69%",
    width: "165%",
    top: "30%",
    right: "-37.5%",
    bottom: "32.31%",
    left: "-27.5%",
    display: "none",
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  check: {
    height: "73.86%",
    width: "22.73%",
    top: "12.5%",
    right: "37.5%",
    bottom: "13.64%",
    left: "39.77%",
    position: "absolute",
  },
  ellipseParent: {
    width: 18,
    height: 18,
  },
  text1: {
    top: "9.32%",
    left: "31.06%",
    color: Color.colorGreyGrey6,
    textTransform: "capitalize",
    fontSize: FontSize.size_4xs_8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    textAlign: "center",
  },
  ellipseGroup: {
    width: 16,
    height: 16,
  },
  groupParent: {
    left: 51,
    gap: 87,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    height: "45.36%",
    bottom: "54.64%",
    left: "0%",
    top: "0%",
  },
  personalInfoParent: {
    height: "4.78%",
    top: "28.08%",
    bottom: "67.14%",
  },
  insurancePlanChild: {
    top: 1143,
    left: 110,
    width: 155,
    height: 42,
    opacity: 0,
  },
  rectangle1: {
    backgroundColor: Color.lightestGrey,
  },
  damola: {
    top: "27.78%",
    left: "3.67%",
    textAlign: "left",
  },
  component223: {
    height: "62.5%",
    top: "37.5%",
    position: "absolute",
  },
  firstName: {
    fontFamily: FontFamily.interMedium,
    left: "0%",
    top: "0%",
    color: Color.gray3,
    fontWeight: "500",
    position: "absolute",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  component223Parent: {
    height: "8.87%",
    top: "36.82%",
    bottom: "54.31%",
  },
  rectangle3: {
    borderStyle: "solid",
    borderColor: Color.gray4,
    borderWidth: 1,
  },
  rectangle2: {
    top: 29,
    height: 45,
    width: 327,
  },
  january1890: {
    textAlign: "left",
    left: "0%",
    top: "0%",
  },
  typeHere: {
    width: 116,
  },
  dateOfBirth: {
    left: "0%",
    top: "0%",
    color: Color.gray3,
    fontWeight: "500",
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
  },
  rectangleGroup: {
    top: 487,
  },
  insurancePlanItem: {
    top: 1444,
    left: 157,
    width: 62,
    height: 37,
    display: "none",
  },
  comprehensiveMotorInsurance: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    fontFamily: FontFamily.interBold,
    color: Color.text,
    fontWeight: "700",
    textAlign: "left",
    top: 0,
    left: 0,
  },
  fillOrUpdate: {
    height: "37.84%",
    width: "99.39%",
    top: "62.16%",
    left: "0.61%",
    textAlign: "left",
  },
  comprehensiveMotorInsuranceParent: {
    top: 100,
    left: 23,
    width: 328,
    height: 111,
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  button: {
    top: 600,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    height: 54,
    paddingHorizontal: Padding.p_89xl,
    paddingVertical: Padding.p_sm,
    width: 327,
    left: 24,
    alignItems: "center",
  },
  groupChild: {
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowRadius: 15,
    elevation: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
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
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.secondary,
    opacity: 0.15,
    left: 0,
    position: "absolute",
    top: 0,
  },
  insurance: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
  },
  iconoutlinehomeParent: {
    top: 20,
    gap: Gap.gap_8xl,
    left: 24,
    alignItems: "center",
  },
  rectangleContainer: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
    position: "absolute",
  },
  typeHere1: {
    width: 80,
  },
  component224: {
    height: "60.81%",
    top: "39.19%",
    position: "absolute",
  },
  component224Parent: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  frame: {
    top: 392,
    overflow: "hidden",
  },
  insurancePlan: {
    shadowColor: "rgba(88, 88, 88, 0.1)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default InsurancePlan; 
