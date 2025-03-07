import React, { useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView, Modal, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useSelectedContacts } from "../screens/SelectedContactsContext"; // Import context for contacts
import { useRooms } from "../screens/RoomContext"; // Import Room context

const RoomSettings1 = () => {
  const navigation = useNavigation();
  const { selectedContacts } = useSelectedContacts(); // Access selected contacts from context
  const { addRoom } = useRooms(); // Access the addRoom function from RoomContext

  const [roomName, setRoomName] = useState(""); // State for Room Name
  const [totalAmount, setTotalAmount] = useState(""); // State for Total Amount
  const [selectedFrequency, setSelectedFrequency] = useState("Select Frequency");
  const [frequencyModalVisible, setFrequencyModalVisible] = useState(false);
  const [targetDate, setTargetDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Frequency Options
  const frequencyOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

  // Handle start button press to add the room
  const handleStart = () => {
    if (roomName && totalAmount) {
      addRoom(roomName, totalAmount); // Add room to context
      navigation.navigate("RoomCreated"); // Navigate to RoomCreated screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={[styles.navbar, styles.navbarPosition]}>
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
        <Text style={styles.header}>Room Settings</Text>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.backgroundImage}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />

        {/* Room Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Room Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter room name"
            value={roomName}
            onChangeText={setRoomName}
          />
        </View>

        {/* Total Amount Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Total Amount:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter total amount"
            keyboardType="numeric"
            value={totalAmount}
            onChangeText={setTotalAmount}
          />
        </View>

        {/* Room Members Section */}
        <Text style={styles.label}>Room members:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contactListContainer}
        >
          {selectedContacts.length > 0 ? (
            selectedContacts.map((contact) => (
              <View key={contact.id} style={styles.contactItem}>
                <Image
                  source={contact.icon ? { uri: contact.icon } : require("../assets/user.png")}
                  style={styles.contactIcon}
                />
                <Text style={styles.contactName}>{contact.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noContactsText}>No contacts selected</Text>
          )}
        </ScrollView>

        {/* Reminder Dropdown */}
        <View style={styles.reminderContainer}>
          <Text style={styles.label}>Reminder:</Text>
          <Pressable
            style={styles.dropdown}
            onPress={() => setFrequencyModalVisible(true)}
          >
            <Text style={styles.dropdownText}>{selectedFrequency}</Text>
          </Pressable>
        </View>

        {/* Target Date */}
        <View style={styles.targetDateContainer}>
          <Text style={styles.label}>Target Date:</Text>
          <Pressable
            style={styles.datePicker}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateText}>
              {targetDate.toDateString()}
            </Text>
          </Pressable>
        </View>

        {/* DateTimePicker for Target Date */}
        {showDatePicker && (
          <DateTimePicker
            value={targetDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setTargetDate(date);
            }}
          />
        )}

        {/* Start Button */}
        <Pressable
          style={styles.startButton}
          onPress={handleStart}
        >
          <Text style={styles.startButtonText}>Start</Text>
        </Pressable>
      </View>

      {/* Frequency Selection Modal */}
      <Modal
        visible={frequencyModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setFrequencyModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {frequencyOptions.map((option) => (
              <Pressable
                key={option}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedFrequency(option);
                  setFrequencyModalVisible(false);
                }}
              >
                <Text style={styles.modalOptionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_base,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.white,
    elevation: 2, // Optional: Adds shadow for Android
  },
  navbarPosition: {
    position: "absolute",
    top: 30,
    left: 0,
  },
  wrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60, // Adjust this to create space for the navbar
  },
  backgroundImage: {
    width: "100%",
    height: 160,
    marginBottom: 20,
  },
  header: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.font_size,
    color: Color.textBigTitle,
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textBigTitle,
    marginBottom: 8,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Color.colorLightGray,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: Border.br_8xs,
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsRegular,
  },
  contactListContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  contactItem: {
    alignItems: "center",
    marginRight: 15,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.colorLightGray,
  },
  contactName: {
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
    fontSize: FontSize.font_size,
    marginTop: 4,
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: Color.colorLightGray,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  dropdownText: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    fontSize: FontSize.font_size,
  },
  targetDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  datePicker: {
    borderWidth: 1,
    borderColor: Color.colorLightGray,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  dateText: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    fontSize: FontSize.font_size,
  },
  startButton: {
    backgroundColor: Color.colorGoldenrod_100,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: Border.br_5xs,
    marginTop: 30,
  },
  startButtonText: {
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.font_size,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    width: 250,
    padding: 20,
    alignItems: "center",
  },
  modalOption: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  modalOptionText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.font_size,
    color: Color.textBigTitle,
  },
});

export default RoomSettings1;

