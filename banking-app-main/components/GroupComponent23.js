import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponent23 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.groupWrapper, styles.groupFlexBox]}>
        <View style={styles.attachASacreenshortParent}>
          <Text style={[styles.attachASacreenshort, styles.sendFileTypo]}>
            {" "}
            Attach a sacreenshort
          </Text>
          <Image
            style={[
              styles.vuesaxlineargalleryExportIcon,
              styles.groupContainerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/vuesaxlineargalleryexport.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.groupContainer, styles.groupContainerPosition]}
        onPress={() => navigation.navigate("Livechat3")}
      >
        <View style={styles.vuesaxlineardocumentParent}>
          <Image
            style={[
              styles.vuesaxlineargalleryExportIcon,
              styles.groupContainerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/vuesaxlineardocument.png")}
          />
          <Text style={[styles.sendFile, styles.sendFileTypo]}> Send File</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  sendFileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
    left: 34,
    top: 1,
    position: "absolute",
  },
  groupContainerPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 91,
    left: 175,
    width: 48,
    height: 29,
    position: "absolute",
  },
  attachASacreenshort: {
    color: Color.iPFTGreyText,
  },
  vuesaxlineargalleryExportIcon: {
    width: 24,
    height: 24,
  },
  attachASacreenshortParent: {
    width: 232,
    height: 24,
  },
  groupWrapper: {
    top: 51,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    left: 0,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  sendFile: {
    color: Color.white,
    display: "flex",
    width: 194,
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.font_size,
    left: 34,
    top: 1,
  },
  vuesaxlineardocumentParent: {
    width: 228,
    height: 24,
  },
  groupContainer: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_3xl,
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    width: 276,
  },
  vectorParent: {
    top: 612,
    left: 132,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 120,
    width: 276,
    position: "absolute",
  },
});

export default GroupComponent23;
