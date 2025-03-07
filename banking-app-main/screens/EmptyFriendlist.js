import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const EmptyFriendlist = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emptyFriendlist}>
      <View style={styles.emptyFriendWrapper}>
        <View style={[styles.emptyFriend, styles.chatsFlexBox]}>
          <View style={styles.noFriendsHereParent}>
            <Text style={[styles.noFriendsHere, styles.timeTypo]}>
              No friends here
            </Text>
            <Text style={[styles.inviteYourFriends, styles.roomList1Typo]}>
              Invite your friends to unlock more features!
            </Text>
          </View>
        </View>
      </View>
      <FrameComponent2 />
      <Pressable
        style={[styles.newRoomWrapper, styles.parentFlexBox]}
        onPress={() => navigation.navigate("RoomSettings")}
      >
        <Text style={styles.newRoom}>New Room</Text>
      </Pressable>
      <View style={[styles.friendListParent, styles.parentFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Account")}>
          <Text style={[styles.friendList1, styles.timeTypo]}>Friend list</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("EmptyRoomlist")}>
          <Text style={[styles.roomList1, styles.roomList1Typo]}>
            Room list
          </Text>
        </Pressable>
      </View>
      <View style={[styles.statusBarwhite, styles.searchButtonPosition]}>
        
      </View>
     
      
      <View style={[styles.searchButtonParent, styles.searchLayout]}>
        <View style={[styles.searchButton, styles.searchLayout]} />
        <View
          style={[
            styles.interfaceEssentialsearchLParent,
            styles.interfaceLayout,
          ]}
        >
          <Image
            style={[styles.interfaceEssentialsearchL, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/interface-essentialsearch-loupe.png")}
          />
          <Text style={styles.searchLanguage}>Search....</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  roomList1Typo: {
    color: Color.textDescription,
    textAlign: "center",
    fontWeight: "700",
  },
  parentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  searchButtonPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  searchLayout: {
    height: 42,
    width: 351,
    position: "absolute",
  },
  interfaceLayout: {
    height: 20,
    position: "absolute",
  },
  noFriendsHere: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.font_size,
  },
  inviteYourFriends: {
    fontFamily: FontFamily.font,
    fontSize: FontSize.m3LabelLarge_size,
  },
  noFriendsHereParent: {
    alignItems: "center",
  },
  emptyFriend: {
    alignSelf: "stretch",
  },
  emptyFriendWrapper: {
    top: 339,
    right: 16,
    left: 16,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorFloralwhite,
    height: 436,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  newRoom: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.font_size,
  },
  newRoomWrapper: {
    marginLeft: -178.5,
    top: 174,
    left: "50%",
    borderRadius: Border.br_mini,
    borderColor: Color.colorGoldenrod_100,
    width: 358,
    height: 58,
    padding: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.colorGoldenrod_100,
  },
  friendList1: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.font_size,
    alignSelf: "stretch",
    flex: 1,
  },
  roomList1: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.font_size,
    alignSelf: "stretch",
    flex: 1,
  },
  friendListParent: {
    top: 243,
    right: 17,
    left: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderColor: Color.textBigTitle,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.white,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -10,
    top: "50%",
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    position: "absolute",
  },
  statusBarwhite: {
    width: 400,
    height: 36,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
    overflow: "hidden",
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: 11,
    left: 7,
    width: 362,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  container: {
    left: 23,
    top: 52,
    width: 40,
    height: 40,
    position: "absolute",
  },
  searchButton: {
    backgroundColor: Color.colorWhitesmoke_800,
    borderRadius: Border.br_3xs,
    left: 10,
    top: 0,
  },
  interfaceEssentialsearchL: {
    width: 20,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  searchLanguage: {
    top: 5,
    left: 28,
    lineHeight: 18,  // Adjusted lineHeight for more space
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 140,  // Increased width to avoid clipping
    height: 18,  // Adjusted height to match lineHeight
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  
  interfaceEssentialsearchLParent: {
    top: 11,
    left: 17,
    width: 152,
  },
  searchButtonParent: {
    top: 293,
    left: 12,
  },
  emptyFriendlist: {
    borderRadius: Border.br_5xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default EmptyFriendlist;

