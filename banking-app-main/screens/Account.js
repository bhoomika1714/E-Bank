import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import { useSelectedContacts } from "../screens/SelectedContactsContext"; // Import the context
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();
  const { selectedContacts } = useSelectedContacts(); // Access selected contacts

  return (
    <View style={styles.account}>
      <FrameComponent2
        propFontFamily="NotoSansTC-Bold"
        propFontFamily1="NotoSansTC-Bold"
      />
      <View style={[styles.newRoomWrapper, styles.newRoomWrapperFlexBox]}>
        <Text style={styles.newRoom}>New Room</Text>
      </View>
      <View style={[styles.friendListParent, styles.newRoomWrapperFlexBox]}>
        <Text style={[styles.friendList, styles.listTypo]}>Friend list</Text>
        <Pressable onPress={() => navigation.navigate("EmptyRoomlist")}>
          <Text style={[styles.roomList1, styles.listTypo]}>Room list</Text>
        </Pressable>
      </View>

      {/* Display selected contacts */}
      <View style={styles.contactsContainer}>
        {selectedContacts.map((contact, index) => (
          <View key={index} style={styles.info}>
            <Image
              style={styles.userIcon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
            <View>
              <Text style={styles.reason}>{contact.name}</Text>
              <Text style={styles.time}>{contact.number}</Text>
            </View>
          </View>
        ))}
      </View>

      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628270.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    borderRadius: Border.br_5xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
  newRoomWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  listTypo: {
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
    flex: 1,
  },
  newRoom: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
  },
  newRoomWrapper: {
    marginLeft: -178.5,
    top: 174,
    left: "50%",
    borderRadius: Border.br_mini,
    width: 358,
    height: 58,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  friendList: {
    color: Color.textBigTitle,
    textAlign: "center",
  },
  roomList1: {
    color: Color.textDescription,
    textAlign: "center",
  },
  friendListParent: {
    top: 239,
    right: 16,
    left: 16,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_xs,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contactsContainer: {
    top:300,
    paddingVertical: Padding.p_base,
    width: '100%',
    alignItems: 'center',
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_md,
    width: 351,
    marginVertical: 5,
  },
  userIcon: {
    width: 43,
    height: 45,
  },
  reason: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    fontSize: FontSize.font_size,
  },
  time: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkWhiteGrey60,
  },
  wrapperPosition: {
    left: 17,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 48,
    width: 40,
    height: 40,
  },
});

export default Account;

