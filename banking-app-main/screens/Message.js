import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1"; // Your custom StatusBar component
import AsyncStorage from "@react-native-async-storage/async-storage";

const Message = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { contactName = "No Name", phoneNumber = "No Number" } = route.params || {};
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const STORAGE_KEY = `messages_${contactName}`; // Unique key for storing messages

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage = { text: inputMessage, sender: "user", timestamp: new Date() };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputMessage(""); // Clear input after sending

      // Save messages to AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
    }
  };

  // Load messages from AsyncStorage when the component mounts
  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    };

    loadMessages();
  }, [STORAGE_KEY]);

  // Function to format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    
    // Check if the date is today
    if (date.toDateString() === today.toDateString()) {
      return "Today";
    }
    
    // Check if the date is yesterday
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    // Format the date as 'DD MMM'
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
  };

  // Group messages by date
  const groupMessagesByDate = () => {
    const groupedMessages = [];
    let lastDate = "";

    messages.forEach((message) => {
      const messageDate = formatDate(message.timestamp);

      if (lastDate !== messageDate) {
        groupedMessages.push({ date: messageDate, messages: [] });
        lastDate = messageDate;
      }
      groupedMessages[groupedMessages.length - 1].messages.push(message);
    });

    return groupedMessages;
  };

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.dateText}>{item.date}</Text>
      {item.messages.map((msg, index) => (
        <View key={index} style={msg.sender === "user" ? styles.userMessage : styles.contactMessage}>
          <Text style={styles.messageText}>{msg.text}</Text>
        </View>
      ))}
    </View>
  );

  const groupedMessages = groupMessagesByDate();

  return (
    <View style={styles.container}>
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={412}
        statusBarHeight={95}
        statusBarTop={0.5}
        statusBarLeft={0.5}
        statusBarBackgroundColor="#e0a340"
        statusBarRight="unset"
        statusBarBottom="unset"
        notch={require("../assets/notch.png")}
        statusIconsWidth={69}
        statusIconsHeight={14}
        showNetworkSignalLight={false}
        wiFiSignalLight={require("../assets/wifi-signal--light.png")}
        showWiFiSignalLight={false}
        showBatteryLight={false}
        showTimeLight={false}
      />

      {/* Display the contact name and number with the image */}
      <View style={styles.contactInfo}>
        <Image source={require("../assets/LoginImg.png")} style={styles.contactImage} />
        <View>
          <Text style={styles.contactName}>{contactName}</Text>
          <Text style={styles.contactNumber}>{phoneNumber}</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={groupedMessages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messagesContainer}
      />

      {/* Message Input Area */}
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Enter message"
          placeholderTextColor="#888"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Image
            style={styles.sendIcon}
            source={require("../assets/send2.png")} // Adjust path if needed
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
  },
  contactImage: {
    top:2,
    left:10,
    width: 55, // Adjust as needed
    height: 55, // Adjust as needed
    borderRadius: 20, // Makes the image circular
    marginRight: 10, // Space between the image and text
  },
  contactName: {
    fontWeight: "bold",
    fontSize: 20,
    left:15,
    paddingTop:25,
  },
  contactNumber: {
    color: "#000000",
    paddingBottom:20,
    left:15,
    paddingTop:2,
  },
  messagesContainer: {
    flex: 1,
    padding: 5,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#F3ECE1",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  contactMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f0f0",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#F3ECE1",
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F3ECE1",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
  },
  sendIcon: {
    width: 30,
    height: 30,
  },
});

export default Message;
