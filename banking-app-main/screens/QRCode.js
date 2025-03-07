import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const QRCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qrCode}>
      <Image
        style={[styles.qrCodeChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-31.png")}
      />
      <Image
        style={[styles.qrCodeItem, styles.codeLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.qrCodeInner, styles.codeLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.scanYourQr}>Scan your QR Code</Text>
      <FrameComponent
        onFramePressablePress={() => navigation.navigate("PaymentMethod")}
        save="Scan"
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 39,
    width: 39,
    borderRadius: Border.br_12xs,
    left: 298,
    position: "absolute",
  },
  codeLayout: {
    left: 53,
    height: 39,
    width: 39,
    borderRadius: Border.br_12xs,
    position: "absolute",
  },
  qrCodeChild: {
    top: 201,
  },
  qrCodeItem: {
    top: 201,
  },
  qrCodeInner: {
    top: 474,
  },
  vectorIcon: {
    top: 513,
  },
  image1Icon: {
    top: 493,
    left: 71,
    borderRadius: Border.br_8xs,
    width: 246,
    height: 272,
    position: "absolute",
  },
  scanYourQr: {
    top: 102,
    left: 70,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    width: 254,
    height: 31,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 30,
    top: 40,
    width: 40,
    height: 40,
    position: "absolute",
  },
  qrCode: {
    borderRadius: Border.br_5xl,
    backgroundColor: "#948e8e",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default QRCode;
