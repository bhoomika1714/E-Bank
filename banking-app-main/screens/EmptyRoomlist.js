import * as React from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import { useRooms } from "../screens/RoomContext"; // Import the useRooms hook
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const EmptyRoomlist = () => {
  const navigation = useNavigation();
  const { rooms } = useRooms(); // Access the rooms from context

  return (
    <View style={styles.emptyRoomlist}>
      <FrameComponent2
        propFontFamily="NotoSansTC-Bold"
        propFontFamily1="NotoSansTC-Bold"
      />

      {/* Navigation Arrow at the top left corner */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628270.png")}
        />
      </Pressable>

      {/* Friend List and Room List heading */}
      <View style={[styles.friendListParent1, styles.parentFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Account")}>
          <Text style={styles.friendList1}>Friend list</Text>
        </Pressable>
        <Text style={styles.roomList}>Room list</Text>
      </View>

      {/* Room List section */}
      <View style={styles.roomListContainer}>
        <FlatList
          data={rooms} // Use FlatList to display rooms
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.roomItemContainer}>
              <View style={styles.roomInfo}>
                <Text style={styles.roomName}>{item.name}</Text>
                <Text style={styles.roomAmount}>Amount: {item.amount}</Text>
              </View>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("PaymentMethod1")}
              >
                <Text style={styles.buttonText}>Pay Now</Text>
              </Pressable>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyRoomlist: {
    borderRadius: Border.br_5xl,
    height: "100%", // Full height
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_base,
    justifyContent: "flex-start", // Adjust vertical centering
    alignItems: "center", // Center content horizontally
  },
  wrapper: {
    position: "absolute",
    left: 20,
    top: 20, // Position it at the top left corner
    width: 40,
    height: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  
  friendList1: {
    color: Color.textDescription,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
    textAlign: "left",
  },
  roomList: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
    textAlign: "right",
  },
  roomListContainer: {
    top:300,
    height: '50%', // Set height to 50% of the screen
    width: '100%', // Full width for the room list
  },
  flatListContent: {
    paddingTop: 20,
    alignItems: "center", // Center items in the FlatList
  },
  roomItemContainer: {
    backgroundColor: Color.colorFloralwhite,
    padding: Padding.p_lg,
    borderRadius: Border.br_3xs,
    borderColor: Color.textBigTitle,
    borderWidth: 1,
    marginVertical: 5, // Space between room items
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '90%', // Set width to control the size
   
  },
  roomInfo: {
    flex: 1,
  },
  roomName: {
    fontSize: FontSize.font_size,
    fontWeight: 'bold',
    color: Color.textBigTitle,
  },
  roomAmount: {
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.textDescription,
  },
  button: {
    borderRadius: Border.br_5xs,
    width: 80,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorGoldenrod_100,
  },
  buttonText: {
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.white,
  },
  textTypo: {
    fontFamily: FontFamily.font,
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontWeight: "700",
  },
  friendListParent1: {
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
  friendListParent: {
    top: 43,
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
  parentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default EmptyRoomlist;



