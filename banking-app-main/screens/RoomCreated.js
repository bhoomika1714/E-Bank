import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const RoomCreated = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.roomcreated}>
      {/* Home Button */}
      <Pressable
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628270.png")} // Home icon path
        />
      </Pressable>

      <Text style={[styles.hoorayNewRoom, styles.textCenter]}>{`Hooray!\nNew Room Created`}</Text>
      <Text style={[styles.comeExploreYour, styles.textCenter]}>
        Come explore your new room
      </Text>
      <Image
        style={[styles.confettiIcon, styles.confettiIconPosition]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.roomcreatedChild, styles.roomcreatedChildPosition]}
        contentFit="cover"
        source={require("../assets/frame-110.png")}
      />
      <Image
        style={[styles.teenyiconstickCircleSolid, styles.roomcreatedChildPosition]}
        contentFit="cover"
        source={require("../assets/teenyiconstickcirclesolid.png")}
      />
      <Button
        style={styles.goToRoomButton}
        mode="contained"
        labelStyle={styles.goToRoomButtonText}
        onPress={() => navigation.navigate("EmptyRoomlist")}
        contentStyle={styles.goToRoomButtonContent}
      >
        Go to room
      </Button>
      <View style={[styles.statusBarwhite, styles.statusBarwhiteFlexBox]}>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  statusBarwhiteFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },

  textCenter: {
    textAlign: "center",
    fontWeight: "700",
  },
  confettiIconPosition: {
    left: 0,
    top: 0,
  },
  roomcreatedChildPosition: {
    left: "50%",
    position: "absolute",
  },
  hoorayNewRoom: {
    marginLeft: -112.5,
    top: 436,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.font,
    left: "50%",
    position: "absolute",
  },
  comeExploreYour: {
    marginLeft: -121.5,
    top: 510,
    fontSize: FontSize.m3LabelLarge_size,
    color: "#b98141",
    width: 244,
    fontFamily: FontFamily.font,
    left: "50%",
    position: "absolute",
    backgroundColor: "transparent", // Ensures no background color
  },
  confettiIcon: {
    width: 390,
    height: 844,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
  roomcreatedChild: {
    marginLeft: -108.5,
    top: 263,
    width: 218,
    height: 129,
  },
  teenyiconstickCircleSolid: {
    marginLeft: -21.5,
    top: 381,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  goToRoomButton: {
    top:600,
    marginTop: 30, // Adjusts the vertical spacing
    marginLeft: 'auto',
    marginRight: 'auto', // Centers the button horizontally
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  goToRoomButtonText: {
    color: "white", // Change text color to white for better contrast
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "NotoSansTC-Bold",
  },
  goToRoomButtonContent: {
    paddingHorizontal: 30, // Adjust the padding for desired button size
    paddingVertical: 12,
    borderRadius: 30,
    width: 272,
  },
  roomcreated: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 17,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  homeButton: {
    position: "absolute",
    top: 48,
    right: 17,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    right:320,
    width: 24,
    height: 24,
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 400,
    height: 36,
    alignItems: "center",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    left: 0,
    top: 0,
  },
});

export default RoomCreated;

