import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar1 from '../components/StatusBar1';

const BillsNotification = () => {
  const navigation = useNavigation();

  // Function to handle API requests based on utility type
  const fetchUtilityBill = async (utilityType) => {
    const urls = {
      mobileRecharge: 'https://api.example.com/mobile-recharge', // Replace with actual API endpoint
      electricity: 'https://api.example.com/electricity-bill',
      water: 'https://api.example.com/water-bill',
      dth: 'https://api.example.com/dth-recharge',
      gas: 'https://api.example.com/gas-bill',
    };

    try {
      const response = await fetch(urls[utilityType], {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY', // Replace with your API key
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(`${utilityType} Data:`, data); // Process the data as needed
    } catch (error) {
      console.error(`Error fetching ${utilityType} data:`, error);
    }
  };

  return (
    <View style={styles.billsNotification}>
      <View style={styles.statusBarParent}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={-20}
          statusBarLeft={-20}
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
      </View>
      <Text style={styles.payBills}>Pay Bills</Text>

      {/* Container for icons arranged in rows */}
      <View style={styles.iconsContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => fetchUtilityBill('mobileRecharge')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/mobile-img.png")}
            />
            <Text style={styles.iconLabel}>Mobile Recharge</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => fetchUtilityBill('electricity')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/electricity-img.png")}
            />
            <Text style={styles.iconLabel}>Electric Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => fetchUtilityBill('water')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/water-img.png")}
            />
            <Text style={styles.iconLabel}>Water</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => fetchUtilityBill('dth')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/dth-img.png")}
            />
            <Text style={styles.iconLabel}>DTH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => fetchUtilityBill('gas')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/gas-img.png")}
            />
            <Text style={styles.iconLabel}>Gas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('SendMoney')}
          >
            <Image
              style={styles.icon}
              source={require("../assets/group-1272628297.png")}
            />
            <Text style={styles.iconLabel}>Rent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billsNotification: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  payBills: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: "center",
    top: 20,
  },
  iconsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    top: 50,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    textAlignVertical: 'center',
    flexWrap: 'wrap',
    maxWidth: 80,
  },
});

export default BillsNotification;
