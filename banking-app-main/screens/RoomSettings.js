import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormComponent from "../components/FormComponent";
import Theme from "../components/Theme";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Gap,
  Border,
} from "../GlobalStyles";

const RoomSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.roomsettings, styles.titleFlexBox]}>
      <View style={[styles.statusBarwhite,styles.statusBarwhiteFlexBox]}>
       
       </View>
      <View style={[styles.content, styles.navbarPosition]}>
        <Image
          style={styles.contentChild}
          contentFit="cover"
          source={require("../assets/room2.jpeg")}
        />
         
        <Pressable
          style={[styles.roomMembersParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("EditMembers")}
        >
          <Text style={[styles.roomMembers, styles.roomTypo]}>
            {`Room members            `}
          </Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-32.png")}
          />
        </Pressable>
        {/* Removed the line below Room members */}
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.title, styles.formSpaceBlock]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("EmptyFriendlist")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628270.png")}
            />
          </Pressable>
          <Text style={[styles.roomSettings, styles.roomTypo1]}>
            Room Settings
          </Text>
        </View>
        <View style={styles.navbarChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    flex: 1,
    backgroundColor: Color.white,
  },
  navbarPosition: {
    alignItems: "center",
    right: 0,
    left: 0,
    position: "absolute",
  },
  formSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    paddingRight: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  roomTypo: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  roomTypo1: {
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    top:-28,
  },
  contentChild: {
    maxWidth: "100%",
    height: 250,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    top:40,
  },
  formComponentWrapper: {
    alignSelf: "stretch",
    
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  formComponentContainer: {
    alignSelf: "stretch",
  },
  roomMembers: {
    width: 245,
    textAlign: "center",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameChild: {
    width: 6,
    height: 12,
  },
  roomMembersParent: {
    top:150,
    width: 473,
    paddingLeft: Padding.p_36xl,
    gap: Gap.gap_2xs,
  },
  content: {
    top: 111,
    height: 699,
    gap: Gap.gap_4xs,
  },
  icon: {
    top:-28,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  roomSettings: {
    fontSize: FontSize.size_5xl,
    width: 313,
    textAlign: "center",
  },
  title: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
    
  },
  navbarChild: {
    height: 0,
    alignSelf: "stretch",
  },
  navbar: {
    top: 47,
    height: 64,
    justifyContent: "center",
  },
  roomsettings: {
    borderRadius: Border.br_5xl,
    height: 812,
    width: "100%",
  },
  statusBarwhite: {
    width: 400,
    height: 80,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    top: 0,
    bottom:500,
    position: "absolute",
  },
  statusBarwhiteFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },

});

export default RoomSettings;



