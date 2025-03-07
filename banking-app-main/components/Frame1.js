import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame2}>
        <LinearGradient
          style={styles.headerSection}
          locations={[0, 0.8]}
          colors={["#e0a340", "#7a5923"]}
        >
          <View style={styles.statusBar} />
          <View style={styles.title}>
            <Text style={styles.label}>
              <Text style={styles.welcomeBack}>
                <Text style={styles.welcomeBack1}>Welcome Back</Text>
                <Text style={styles.text}>{`, 
`}</Text>
              </Text>
              <Text style={styles.text}>
                <Text style={styles.name1}>Name!</Text>
              </Text>
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.frame3}>
          <View style={styles.header} />
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    alignSelf: "stretch",
    height: 36,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  welcomeBack1: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  welcomeBack: {
    color: Color.colorGray_1400,
  },
  name1: {
    color: Color.white,
  },
  label: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width: 203,
    height: 134,
  },
  title: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    height: 209,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_7xs,
    marginTop: -24,
  },
  headerSection: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_7xl,
    width: 351,
    height: 204,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: Padding.p_5xl,
    backgroundColor: "transparent",
  },
  header: {
    alignSelf: "stretch",
    height: 43,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 155,
    width: 303,
    height: 57,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 21,
    width: 40,
    height: 55,
    overflow: "hidden",
  },
  frame2: {
    width: 458,
    height: 204,
    overflow: "hidden",
    marginLeft: 18,
  },
  frame: {
    width: 476,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame1;
