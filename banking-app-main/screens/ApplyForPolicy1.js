import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import GroupComponent7 from "../components/GroupComponent7";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  Border,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const ApplyForPolicy1 = () => {
  const navigation = useNavigation();
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [spouseName, setSpouseName] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [birthPlace, setBirthPlace] = React.useState('');
  const [country, setCountry] = React.useState('');

  return (
    <View style={styles.applyForPolicy3}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={styles.applyForPolicy3Child} />
      <View style={styles.groupParent}>
        <View style={[styles.maritalStatusParent, styles.countryParentPosition]}>
          <Text style={[styles.maritalStatus, styles.professionClr]}>
            Marital Status
          </Text>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <TextInput
            style={styles.inputField}
            value={maritalStatus}
            onChangeText={setMaritalStatus}
            placeholder="Select Marital Status"
          />
        </View>
        <View style={[styles.spouseNameIfAnyParent, styles.countryParentPosition]}>
          <Text style={[styles.spouseNameIf, styles.professionClr]}>
            Spouse Name (If any)
          </Text>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <TextInput
            style={styles.inputField}
            value={spouseName}
            onChangeText={setSpouseName}
            placeholder="Enter Spouse Name"
          />
        </View>
        <View style={[styles.professionParent, styles.countryParentPosition]}>
          <Text style={[styles.profession, styles.professionClr]}>
            Profession
          </Text>
          <View style={styles.groupPosition} />
          <TextInput
            style={styles.inputField}
            value={profession}
            onChangeText={setProfession}
            placeholder="Enter Your Profession"
          />
        </View>
        <View style={[styles.nationalityParent, styles.countryParentPosition]}>
          <Text style={[styles.nationality, styles.professionClr]}>
            Nationality
          </Text>
          <View style={styles.groupPosition} />
          <TextInput
            style={styles.inputField}
            value={nationality}
            onChangeText={setNationality}
            placeholder="Enter Your Nationality"
          />
        </View>
        <View style={[styles.birthPlaceParent, styles.countryParentPosition]}>
          <Text style={[styles.birthPlace, styles.professionClr]}>
            Birth Place
          </Text>
          <View style={styles.groupPosition} />
          <TextInput
            style={styles.inputField}
            value={birthPlace}
            onChangeText={setBirthPlace}
            placeholder="Enter Your Birth Place"
          />
        </View>
        <View style={[styles.countryParent, styles.countryParentPosition]}>
          <Text style={[styles.country, styles.countryTypo]}>
            Country
          </Text>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <TextInput
            style={styles.inputField}
            value={country}
            onChangeText={setCountry}
            placeholder="Enter Your Country"
          />
        </View>
        <View style={[styles.contactNumberParent, styles.countryParentPosition]}>
          <Text style={[styles.contactNumber, styles.professionClr]}>
            Contact Number
          </Text>
          <View style={styles.groupPosition} />
          <TextInput
            style={styles.inputField}
            value={contactNumber}
            onChangeText={setContactNumber}
            placeholder="Enter Your Contact Number"
          />
        </View>
        <View style={[styles.emailParent, styles.countryParentPosition]}>
          <Text style={[styles.contactNumber, styles.professionClr]}>
            Email
          </Text>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Your Email"
          />
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ApplyForPolicy")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Pressable
        style={styles.applyForPolicy3Inner}
        onPress={() => navigation.navigate("ApplyForPolicy2")}
      >
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild3, styles.groupChild3Position]} />
          <Text style={styles.next}>Next</Text>
        </View>
      </Pressable>
      <View style={[styles.statusBarwhite, styles.groupChild3Position]}>
        <Text style={[styles.time, styles.professionClr]}>9:41</Text>
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  countryParentPosition: {
    left: "0%",
    position: "absolute",
  },
  professionClr: {
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  groupChildShadowBox: {
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  vectorIconLayout: {
    left: "89.99%",
    right: "3.03%",
    width: "6.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  enterPosition: {
    opacity: 0.6,
    left: "3.03%",
  },
  countryTypo: {
    height: "27.62%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  bangladeshPosition: {
    top: "56.8%",
    position: "absolute",
  },
  enterTypo: {
    width: "51.19%",
    opacity: 0.6,
    left: "3.03%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    position: "absolute",
  },
  groupChild3Position: {
    backgroundColor: Color.colorGoldenrod_100,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "111.08%",
    width: "102.51%",
    right: "-1.12%",
    bottom: "-11.08%",
    left: "-1.39%",
    top: "0%",
    position: "absolute",
  },
  applyForPolicy3Child: {
    height: "92.52%",
    top: "9.2%",
    right: "-0.27%",
    bottom: "-1.72%",
    left: "0.27%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  maritalStatus: {
    width: "29.99%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    bottom: "0%",
    top: "37.5%",
    height: "62.5%",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
  },
  vectorIcon1: {
    height: "23.58%",
    bottom: "20.45%",
    top: "55.97%",
    position: "absolute",
  },
  selectMaritalStatus: {
    height: "27.7%",
    width: "46.04%",
    top: "55.97%",
    position: "absolute",
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  maritalStatusParent: {
    bottom: "88.31%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
    top: "0%",
  },
  spounseNameIf: {
    height: "27.82%",
    width: "50.9%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  groupItem: {
    height: "62.77%",
    top: "37.38%",
    bottom: "-0.14%",
  },
  enterSpouseName: {
    height: "28.25%",
    width: "61.52%",
    top: "56.21%",
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  spounseNameIfAnyParent: {
    height: "11.64%",
    top: "14.49%",
    bottom: "73.87%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  profession: {
    width: "29.7%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "0.14%",
    top: "37.36%",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourProfession: {
    height: "29.26%",
    width: "47.88%",
    top: "55.54%",
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  professionParent: {
    top: "29.05%",
    bottom: "59.25%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
  },
  country: {
    width: "19.69%",
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  rectangleView: {
    height: "62.32%",
    top: "37.68%",
    bottom: "0%",
  },
  vectorIcon2: {
    height: "23.51%",
    bottom: "19.69%",
    left: "89.99%",
    right: "3.03%",
    width: "6.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bangladesh: {
    width: "29.09%",
    height: "27.62%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    opacity: 0.6,
    left: "3.03%",
  },
  countryParent: {
    height: "11.73%",
    top: "58.6%",
    bottom: "29.67%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  contactNumber: {
    width: "35.75%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  enterYourDistric: {
    top: "56.11%",
  },
  contactNumberParent: {
    top: "73.26%",
    bottom: "15.05%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
  },
  groupChild2: {
    bottom: "0%",
    top: "37.5%",
    height: "62.5%",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
  },
  enterYourMail: {
    top: "56.25%",
  },
  emailParent: {
    top: "88.31%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
  },
  groupParent: {
    height: "74.14%",
    width: "91.68%",
    top: "11.56%",
    right: "4.16%",
    bottom: "14.3%",
    left: "4.16%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "2.4%",
    top: "5.67%",
    right: "86.93%",
    bottom: "89.41%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  groupChild3: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    borderRadius: Border.br_base,
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Color.colorGoldenrod_100,
    bottom: "0%",
  },
  next: {
    height: "33.33%",
    width: "15.9%",
    top: "33.33%",
    left: "42.2%",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    width: 327,
    height: 54,
  },
  applyForPolicy3Inner: {
    height: "6.65%",
    width: "87.2%",
    top: "87.56%",
    right: "6.67%",
    bottom: "5.79%",
    left: "6.13%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    position: "absolute",
  },
  time: {
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    fontWeight: "700",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    height: "4.43%",
    bottom: "95.57%",
    flexDirection: "row",
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    alignItems: "center",
  },
  applyForPolicy3: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  nationalityParent: {
    top: "29.05%", // Adjust this value based on your layout
    bottom: "59.25%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
  },
  nationality: {
    width: "29.7%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  birthPlaceParent: {
    top: "40%", // Adjust this value based on your layout
    bottom: "59.25%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "11.69%",
  },
  birthPlace: {
    width: "29.7%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
});

export default ApplyForPolicy1;
