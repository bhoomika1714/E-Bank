import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable } from 'react-native';
import StatusBar1 from "../components/StatusBar1";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export default function FixedDepositScreen({ navigation, fdHistory }) {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBarContainer}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth="100%"
          statusBarHeight={50}
          statusBarTop={0}
          statusBarLeft={0}
          statusBarBackgroundColor="#e0a340"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
        <Text style={styles.headerText}>Fixed Deposit</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-1272628259.png")}
          />
        </Pressable>
      </View>

      {/* Fixed Deposit History */}
      <View style={styles.historyContainer}>
      {fdHistory && fdHistory.length > 0 ? (
        <FlatList
          data={fdHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.fdItem}>
              <Text style={styles.fdText}>Amount: ₹{item.amount.toFixed(2)}</Text>
              <Text style={styles.fdText}>Tenure: {item.tenure} months</Text>
              <Text style={styles.fdText}>Interest: ₹{item.interest.toFixed(2)}</Text>
              <Text style={styles.fdText}>Maturity Amount: ₹{item.maturityAmount.toFixed(2)}</Text>
              <Text style={styles.fdText}>Rate: {item.rate}%</Text>
              <Text style={styles.fdText}>Apply Date: {item.applyDate}</Text>
              <Text style={styles.fdText}>End Date: {item.endDate}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noHistoryText}>No Fixed Deposits Found</Text>
      )}
        <Button
          title="Apply New FD"
          onPress={() => navigation.navigate('ApplyFDScreen')}
          color="#e9a340"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  // Status Bar Styles
  statusBarContainer: {
    backgroundColor: "#e0a340",
    height: 100,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    top: "15",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "center",
    left: "120",
  },
  backButton: {
    width: 42,
    height: 40,
  },
  icon: {
    width: "90%",
    height: "90%",
    right: "350",
    top: "18",
  },
  // History Section
  historyContainer: {
    flex: 1,
    padding: 26,
  },
  fdItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
  },
  fdText: {
    fontSize: 16,
  },
  noHistoryText: {
    fontSize: 16,
    color: 'gray',
    textAlign: "center",
    marginVertical: 20,
  },
});
