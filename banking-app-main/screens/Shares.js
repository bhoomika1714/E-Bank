import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const investmentData = [
  {
    type: "Stocks",
    description: "Equity investment in companies.",
  //  icon: require("../assets/stocks-icon.jpeg"),
  },
  {
    type: "Crypto",
    description: "Digital currencies like Bitcoin, Ethereum.",
    icon: require("../assets/crypto.jpeg"),
  },
  {
    type: "Gold",
    description: "Invest in physical or digital gold.",
    icon: require("../assets/gold-icon.jpeg"),
  },
  {
    type: "Mutual Funds",
    description: "Pool of funds managed by professionals.",
    icon: require("../assets/mutualfunds-icon.jpeg"),
  },
  {
    type: "Bonds",
    description: "Fixed-income investment options.",
    icon: require("../assets/bonds.jpeg"),
  },
];

const apiEndpoints = {
  Stocks:
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo",
  Crypto: "https://api.coindesk.com/v1/bpi/currentprice.json",
  Gold: "https://api.mfapi.in/mf",
};

const Shares = () => {
  const [selectedInvestment, setSelectedInvestment] = React.useState(null);
  const [graphData, setGraphData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchGraphData = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoints[type]);
      let data = [];

      if (type === "Stocks") {
        const timeSeries = response.data["Time Series (Daily)"];
        data = Object.entries(timeSeries)
          .slice(0, 7) // Get data for the last 7 days
          .map(([date, value]) => parseFloat(value["4. close"]));
      } else if (type === "Crypto") {
        const btcPrice = response.data.bpi.USD.rate_float;
        data = Array(7).fill(btcPrice); // Mock last 7 days with the same value
      } else if (type === "Gold") {
        const goldPrice = response.data.rates.XAU;
        data = Array(7).fill(goldPrice); // Mock last 7 days with the same value
      }

      setGraphData(data.reverse()); // Reverse for chronological order
    } catch (error) {
      console.error("Error fetching graph data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInvestmentClick = (investment) => {
    setSelectedInvestment(investment);
    if (apiEndpoints[investment.type]) {
      fetchGraphData(investment.type);
    }
  };

  const handleBack = () => {
    setSelectedInvestment(null);
    setGraphData([]);
  };

  return (
    <ScrollView style={styles.shares}>
      <StatusBar1 statusBarBackgroundColor="#e0a340" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Investment Options</Text>
      </View>
      <View style={styles.section}>
        {!selectedInvestment ? (
          <>
            <Text style={styles.sectionTitle}>Choose an Investment Option</Text>
            {investmentData.map((investment, index) => (
              <Pressable
                key={index}
                style={styles.investmentOption}
                onPress={() => handleInvestmentClick(investment)}
              >
                <Image source={investment.icon} style={styles.icon} />
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>{investment.type}</Text>
                  <Text style={styles.optionDescription}>
                    {investment.description}
                  </Text>
                </View>
              </Pressable>
            ))}
          </>
        ) : (
          <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>{selectedInvestment.type}</Text>
            <Text style={styles.detailDescription}>
              {selectedInvestment.description}
            </Text>
            {loading ? (
              <Text>Loading graph...</Text>
            ) : apiEndpoints[selectedInvestment.type] ? (
              <LineChart
                data={{
                  labels: [
                    "Day 1",
                    "Day 2",
                    "Day 3",
                    "Day 4",
                    "Day 5",
                    "Day 6",
                    "Day 7",
                  ],
                  datasets: [{ data: graphData }],
                }}
                width={Dimensions.get("window").width - 40}
                height={220}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: { borderRadius: 16 },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            ) : (
              <Text>No real-time data available for this option.</Text>
            )}
            <Button title="Back to Options" onPress={handleBack} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shares: { flex: 1, backgroundColor: Color.colorGray_100 },
  header: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: Color.colorBurlywood_100,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
  },
  section: { padding: 20 },
  sectionTitle: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkgray_500,
    marginBottom: 10,
  },
  investmentOption: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 5,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    elevation: 3,
  },
  icon: { width: 50, height: 50, marginRight: 10 },
  optionContent: { justifyContent: "center" },
  optionTitle: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    color: Color.colorDarkgray_700,
  },
  optionDescription: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_300,
  },
  detailContainer: { alignItems: "center", marginTop: 20 },
  detailTitle: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkgray_500,
  },
  detailDescription: {
    fontSize: FontSize.size_md,
    color: Color.colorDarkgray_300,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Shares;