import * as React from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const ApplyForPolicy2 = () => {
  const navigation = useNavigation();
  
  // State variables for inputs
  const [nidNumber, setNidNumber] = React.useState("");
  const [documentType, setDocumentType] = React.useState("");
  
  // Placeholder function for document upload
  const handleDocumentUpload = () => {
    // Implement document upload logic here
    console.log("Upload Document clicked");
  };

  return (
    <View style={styles.applyForPolicy4}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <View style={styles.applyForPolicy4Child} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        
        {/* Document Type Selection */}
        <View style={[styles.chooseDocumentTypeParent, styles.parentPosition]}>
          <Text style={[styles.chooseDocumentType, styles.uploadYourPhotoTypo]}>
            Choose Document Type
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Document Type"
            value={documentType}
            onChangeText={setDocumentType}
          />
        </View>

        {/* NID Number Input */}
        <View style={[styles.nidNumberParent, styles.parentPosition]}>
          <Text style={[styles.nidNumber, styles.nidNumberTypo]}>
            NID Number
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter NID Number"
            value={nidNumber}
            onChangeText={setNidNumber}
            keyboardType="numeric"
          />
        </View>

        {/* Document Upload */}
        <View style={[styles.uploadDocumentParent, styles.uploadParentPosition]}>
          <Text style={[styles.uploadDocument, styles.nidNumberTypo]}>
            Upload Document
          </Text>
          <Pressable onPress={handleDocumentUpload}>
            <Text style={[styles.clickToUpload, styles.clickFlexBox]}>
              Click to Upload Document
            </Text>
          </Pressable>
        </View>

        {/* Signature Upload */}
        <View style={[styles.uploadSignatureParent, styles.uploadParentPosition]}>
          <Text style={[styles.uploadDocument, styles.nidNumberTypo]}>
            Upload Signature
          </Text>
          <Pressable onPress={handleDocumentUpload}>
            <Text style={[styles.clickToUpload1, styles.clickFlexBox]}>
              Click to Upload Signature
            </Text>
          </Pressable>
        </View>

        {/* Photo Upload */}
        <View style={[styles.uploadYourPhotoParent, styles.vectorIcon1Layout]}>
          <Text style={[styles.uploadYourPhoto, styles.uploadYourPhotoTypo]}>
            Upload Your Photo
          </Text>
          <Pressable onPress={handleDocumentUpload}>
            <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          </Pressable>
        </View>
      </View>

      <Image
        style={[styles.upload1Icon, styles.groupParentPosition]}
        contentFit="cover"
        source={require("../assets/upload-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ApplyForPolicy1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-67.png")}
        />
      </Pressable>
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user6.png")}
      />
      <Pressable
        style={styles.applyForPolicy4Inner}
        onPress={() => navigation.navigate("Scheme")}
      >
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild2, styles.groupChild2Position]} />
          <Text style={styles.next}>Next</Text>
        </View>
      </Pressable>
      <View style={[styles.statusBarwhite, styles.groupChild2Position]}>
        <Text style={[styles.time, styles.clickFlexBox]}>9:41</Text>
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
  groupParentPosition: {
    bottom: "18.69%",
    position: "absolute",
  },
  parentPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  uploadYourPhotoTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupShadowBox: {
    borderRadius: Border.br_8xs,
    bottom: "-0.14%",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  vectorIcon1Layout: {
    height: "23.75%",
    position: "absolute",
  },
  enterNidNumberTypo: {
    opacity: 0.6,
    left: "3.03%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  nidNumberTypo: {
    width: "50.9%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  uploadParentPosition: {
    height: "19.92%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  clickFlexBox: {
    textAlign: "center",
    color: Color.lightGray11,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    bottom: "0%",
  },
  groupChild2Position: {
    backgroundColor: Color.colorGoldenrod_100,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "111.08%",
    width: "103.6%",
    right: "-1.95%",
    bottom: "-11.08%",
    left: "-1.65%",
    top: "0%",
    position: "absolute",
  },
  applyForPolicy4Child: {
    height: "92.52%",
    top: "9.2%",
    right: "-0.27%",
    bottom: "-1.72%",
    left: "0.27%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  chooseDocumentType: {
    width: "53.32%",
    height: "27.9%",
  },
  groupChild: {
    height: "62.95%",
    top: "37.2%",
  },
  vectorIcon1: {
    width: "6.98%",
    right: "3.03%",
    bottom: "20.46%",
    left: "89.99%",
    top: "55.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chooseDocumentType1: {
    width: "53.64%",
    top: "55.79%",
    height: "27.9%",
  },
  chooseDocumentTypeParent: {
    height: "12.35%",
    bottom: "87.65%",
    left: "0%",
    top: "0%",
  },
  nidNumber: {
    height: "27.82%",
  },
  groupItem: {
    height: "62.77%",
    top: "37.38%",
  },
  enterNidNumber: {
    height: "28.25%",
    width: "61.52%",
    top: "56.21%",
  },
  nidNumberParent: {
    height: "12.39%",
    top: "15.32%",
    bottom: "72.29%",
    left: "0%",
  },
  uploadDocument: {
    height: "17.3%",
  },
  groupInnerPosition: {
    backgroundColor: Color.colorLinen_100,
    top: "23.07%",
    height: "76.93%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  clickToUpload: {
    width: "68.79%",
    left: "13.03%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: "50.93%",
    height: "21.21%",
    textAlign: "center",
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  uploadDocumentParent: {
    top: "30.66%",
    bottom: "49.43%",
  },
  clickToUpload1: {
    width: "66.96%",
    left: "16.67%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: "50.93%",
    height: "21.21%",
    textAlign: "center",
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  uploadSignatureParent: {
    top: "53.45%",
    bottom: "26.63%",
  },
  uploadYourPhoto: {
    height: "14.51%",
    width: "77.06%",
  },
  groupChild1: {
    height: "80.65%",
    width: "45.88%",
    top: "19.35%",
    left: "54.12%",
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 2,
    bottom: "0%",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    right: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  uploadYourPhotoParent: {
    width: "66.06%",
    top: "76.25%",
    right: "33.94%",
    bottom: "0%",
    left: "0%",
  },
  groupParent: {
    height: "69.69%",
    width: "91.68%",
    top: "11.61%",
    right: "4.16%",
    left: "4.16%",
  },
  upload1Icon: {
    height: "5.87%",
    width: "12.21%",
    top: "75.43%",
    right: "26.67%",
    left: "61.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    paddingLeft: 8,
    marginTop: 4,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "4%",
    top: "5.67%",
    right: "85.33%",
    bottom: "89.41%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  userIcon: {
    height: "10.84%",
    width: "24.27%",
    top: "68.6%",
    right: "37.07%",
    bottom: "20.57%",
    left: "38.67%",
    position: "absolute",
  },
  groupChild2: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    borderRadius: Border.br_base,
    height: "100%",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Color.colorGoldenrod_100,
  },
  next: {
    height: "33.33%",
    width: "15.9%",
    top: "33.33%",
    left: "42.2%",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    fontWeight: "700",
    fontSize: FontSize.font_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    width: 327,
    height: 54,
  },
  applyForPolicy4Inner: {
    height: "6.65%",
    width: "87.2%",
    top: "87.07%",
    right: "6.4%",
    bottom: "6.28%",
    left: "6.4%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    position: "absolute",
  },
  time: {
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "center",
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
  applyForPolicy4: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ApplyForPolicy2;    
