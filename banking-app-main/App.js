const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AkarIconsxFill from "./components/AkarIconsxFill";
import Home from "./screens/Home";
import PaymentMethod5 from "./screens/PaymentMethod5";
import UPIPIN from "./screens/UPIPIN";
import SavingPlan from "./screens/SavingPlan";
import Livechat2 from "./screens/Livechat2";
import Payment from "./screens/Payment";
import Message from "./screens/Message";
import Proceed from "./screens/Proceed";
import Donate from "./screens/Donate";
import Info6 from "./screens/Info6";
import PaymentMethod4 from "./screens/PaymentMethod4";
import Help1 from "./screens/Help1";
import Shares from "./screens/Shares";
import RoomCreated from "./screens/RoomCreated";
import CheckBalance from "./screens/CheckBalance";
import SingleProduct from "./screens/SingleProduct";
import PaymentMethod3 from "./screens/PaymentMethod3";
import MovieTicket from "./screens/MovieTicket";
import HomeNav from "./screens/HomeNav";
import Info3 from "./screens/Info3";
import Analysis from "./screens/Analysis";
import About from "./screens/About";
import OrderReview1 from "./screens/OrderReview1";
import CheckDeposit from "./screens/CheckDeposit";
import ApplyForPolicy1 from "./screens/ApplyForPolicy1";
import PaymentNewCard from "./screens/PaymentNewCard";
import RequestMoney from "./screens/RequestMoney";
import Info from "./screens/Info";
import RechargePlan from "./screens/RechargePlan";
import BookMyshow1 from "./screens/BookMyshow1";
import SendMoneyHome from "./screens/SendMoneyHome";
import AUTHYVerification from "./screens/AUTHYVerification";
import Info7 from "./screens/Info7";
import SendMoney from "./screens/SendMoney";
import Home2 from "./screens/Home2";
import AddNewCard from "./screens/AddNewCard";
import DonateForEducation1 from "./screens/DonateForEducation1";
import MyCards from "./screens/MyCards";
import EmptyFriendlist from "./screens/EmptyFriendlist";
import PaymentType from "./screens/PaymentType";
import UPIPIN1 from "./screens/UPIPIN1";
import LivechatAnalyze from "./screens/LivechatAnalyze";
import RoomSettings1 from "./screens/RoomSettings1";
import QRCode from "./screens/QRCode";
import Pay from "./screens/Pay";
import Info4 from "./screens/Info4";
import Car from "./screens/Car";
import Info1 from "./screens/Info1";
import Plans from "./screens/Plans";
import Profile2 from "./screens/Profile2";
import Insuarance from "./screens/Insuarance";
import RecoverPassword from "./screens/RecoverPassword";
import UPIPIN4 from "./screens/UPIPIN4";
import MapDestination from "./screens/MapDestination";
import DonateForEducation from "./screens/DonateForEducation";
import FD from "./screens/FD";
import Notification1 from "./screens/Notification1";
import Livechat from "./screens/Livechat";
import Pay1 from "./screens/Pay1";
import BESCOMBangalore from "./screens/BESCOMBangalore";
import EmptyRoomlist from "./screens/EmptyRoomlist";
import ApplyForPolicy2 from "./screens/ApplyForPolicy2";
import Loan from "./screens/Loan";
import RoomSettings from "./screens/RoomSettings";
import Livechat4 from "./screens/Livechat4";
import ForgotPassword from "./screens/ForgotPassword";
import Money from "./screens/Money";
import TermCondition from "./screens/TermCondition";
import ChildScheme from "./screens/ChildScheme";
import Info8 from "./screens/Info8";
import PaymentSuccessful from "./screens/PaymentSuccessful";
import BookMyshow2 from "./screens/BookMyshow2";
import ShopList from "./screens/ShopList";
import LoanApply from "./screens/LoanApply";
import Onboarding1 from "./screens/Onboarding1";
import EditMembers from "./screens/EditMembers";
import Livechat1 from "./screens/Livechat1";
import ChangePassword from "./screens/ChangePassword";
import Onboarding from "./screens/Onboarding";
import Info2 from "./screens/Info2";
import Products from "./screens/Products";
import Settings from "./screens/Settings";
import Gst from "./screens/Gst";
import MapSourceWithDestination from "./screens/MapSourceWithDestination";
import Scheme from "./screens/Scheme";
import History1 from "./screens/History1";
import TargetDay from "./screens/TargetDay";
import FirstPage from "./screens/FirstPage";
import Cart from "./screens/Cart";
import Help from "./screens/Help";
import ShowTimings from "./screens/ShowTimings";
import BookTicket from "./screens/BookTicket";
import ChooseAmount from "./screens/ChooseAmount";
import OrderReview from "./screens/OrderReview";
import VerifyOTP from "./screens/VerifyOTP";
import MyPlan from "./screens/MyPlan";
import ApplyForPolicy from "./screens/ApplyForPolicy";
import LivechatAnalysis from "./screens/LivechatAnalysis";
import Info5 from "./screens/Info5";
import Livechat5 from "./screens/Livechat5";
import SignInWithGoogle from "./screens/SignInWithGoogle";
import InsurancePlan from "./screens/InsurancePlan";
import LoginPage from "./screens/LoginPage";
import Livechat3 from "./screens/Livechat3";
import BillsNotification from "./screens/BillsNotification";
import PaymentMethod from "./screens/PaymentMethod";
import ApplyForPolicy3 from "./screens/ApplyForPolicy3";
import Account from "./screens/Account";
import SetNewPassword from "./screens/SetNewPassword";
import SendMoney1 from "./screens/SendMoney1";
import FdSuccess from "./screens/FdSuccess";
import SignUp from "./screens/SignUp";
import PaymentSuccessful1 from "./screens/PaymentSuccessful1";
import Language from "./screens/Language";
import CarePolicy from "./screens/CarePolicy";
import PaymentMethod2 from "./screens/PaymentMethod2";
import UPIPIN2 from "./screens/UPIPIN2";
import EditProfile from "./screens/EditProfile";
import ElectricityBill from "./screens/ElectricityBill";
import PayBills from "./screens/PayBills";
import UPIPIN3 from "./screens/UPIPIN3";
import LivechatAnalysis1 from "./screens/LivechatAnalysis1";
import ActivityGraph from "./screens/ActivityGraph";
import Map1 from "./screens/Map1";
import PaymentMethod1 from "./screens/PaymentMethod1";
import HomeNav1 from "./screens/HomeNav1";
import ShipTo from "./components/ShipTo";
import SendMoney2 from './components/SendMoney2';
import { SelectedContactsProvider } from './screens/SelectedContactsContext';
import { RoomProvider } from './screens/RoomContext'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { TransactionProvider } from './screens/TransactionContext';
import ScanCamera from "./screens/ScanCamera";
import { createStackNavigator } from "@react-navigation/stack";
import News from "./screens/News";
import BalanceDisplay from "./screens/BalanceDisplay";
import Ministatement from "./screens/MiniStatement";
// import SetPin from "./screens/SetPin";
//for Loans section
import FixedDepositScreen from "./screens/FixedDepositScreen";
//import AUTHYVerification from "./screens/AUTHYVerification";
import LifeInsuranceClaimForm from './screens/LifeInsuranceClaimForm';
import NetBanking from './screens/NetBanking';
import AmountEntry from './screens/AmountEntry';
import PaymentSuccess from './screens/PaymentSuccess';
import HealthInsuranceApplicationForm from "./screens/HealthInsuranceApplicationForm";
import VehicleInsuranceForm from "./screens/VehicleInsuranceForm";
import HomeInsuranceForm from "./screens/HomeInsuranceForm";
import HomeInsuranceScreen2 from "./screens/HomeInsuranceScreen2";
import HomeClaimForm from "./screens/HomeClaimForm";
import HealthClaimForm from "./screens/HealthClaimForm";
import VehicleClaimForm from "./screens/VehicleClaimForm";
import HealthInsuranceScreen2 from "./screens/HealthInsuranceScreen2";
import VehicleInsuranceScreen2 from "./screens/VehicleInsuranceScreen2";
import HomeLoanForm from "./screens/HomeLoanForm";
import VehicleLoanForm from "./screens/VehicleLoanForm";
import LoanCalculator from "./screens/LoanCalculator";
import EducationLoanForm from "./screens/EducationLoanForm";
import SeniorCitizenSavingsScheme from "./screens/SeniorCitizenSavingsScheme";
import ApplyScheme from "./screens/ApplyScheme";
import SchemesOptions from "./screens/SchemesOptions";
import FixedDepositScheme from "./screens/FixedDepositScheme";
import PPFScheme from "./screens/PPFScheme"; 
import ApplySchemeTemplate from "./screens/ApplySchemeTemplate";
import SukanyaSamriddhi from "./screens/SukanyaSamriddhi";
import AtalPensionYojana from "./screens/AtalPensionYojana";
import ApplyFDScreen from "./screens/ApplyFDScreen";
import { requestCameraPermission } from "./screens/requestCameraPermission";
import Loans from "./components/Loans";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Adamina-Regular": require("./assets/fonts/Adamina-Regular.ttf"),
    "NotoSansTC-Bold": require("./assets/fonts/NotoSansTC-Bold.otf"),
    "NotoSansTC-Black": require("./assets/fonts/NotoSansTC-Black.otf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Heebo-Regular": require("./assets/fonts/Heebo-Regular.ttf"),
    "LexendDeca-Regular": require("./assets/fonts/LexendDeca-Regular.ttf"),
    "LexendDeca-Medium": require("./assets/fonts/LexendDeca-Medium.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans12pt-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <TransactionProvider>
      <SelectedContactsProvider>
      <RoomProvider>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator 
          screenOptions={{ headerShown: false }} 
          initialRouteName="LoginPage" // Set Home as the initial screen
        >
              <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SendMoney2" component={SendMoney2} />
            <Stack.Screen
              name="PaymentMethod5"
              component={PaymentMethod5}
              options={{ headerShown: false }}
            />
 <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
            <Stack.Screen name="LifeInsuranceClaimForm" component={LifeInsuranceClaimForm} />
            <Stack.Screen name="HealthInsuranceApplicationForm" component={HealthInsuranceApplicationForm} />
            <Stack.Screen name="HealthClaimForm" component={HealthClaimForm} />
            <Stack.Screen name="HealthInsuranceScreen2" component={HealthInsuranceScreen2} />
            <Stack.Screen name="VehicleInsuranceForm" component={VehicleInsuranceForm} />
            <Stack.Screen name="VehicleClaimForm" component={VehicleClaimForm} />
            <Stack.Screen name="VehicleInsuranceScreen2" component={VehicleInsuranceScreen2} />
            <Stack.Screen name="HomeInsuranceForm" component={HomeInsuranceForm} />
            <Stack.Screen name="HomeClaimForm" component={HomeClaimForm} />
            <Stack.Screen name="HomeInsuranceScreen2" component={HomeInsuranceScreen2} />

            <Stack.Screen
              name="SchemesOptions"
              component={SchemesOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeniorCitizenSavingsScheme"
              component={SeniorCitizenSavingsScheme}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="ApplyScheme"
              component={ApplyScheme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FixedDepositScheme"
              component={FixedDepositScheme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPFScheme"
              component={PPFScheme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SukanyaSamriddhi"
              component={SukanyaSamriddhi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AtalPensionYojana"
              component={AtalPensionYojana}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplySchemeTemplate"
              component={ApplySchemeTemplate}
              options={{ headerShown: false }}
            />
              
        {/* FD History Screen */}
        <Stack.Screen name="FixedDepositScreen">
          {props => <FixedDepositScreen {...props} fdHistory={fdHistory} />}
        </Stack.Screen>

        {/* Apply FD Screen */}
        <Stack.Screen name="ApplyFDScreen">
          {props => <ApplyFDScreen {...props} setFdHistory={setFdHistory} />}
        </Stack.Screen>

<Stack.Screen name="AmountEntry" component={AmountEntry} />
          

 {/* <Stack.Screen
              name="AUTHYVerification"
              component={AUTHYVerification}
              options={{ headerShown: false }}
            /> */}
<Stack.Screen
        name="requestCameraPermission"
        component={requestCameraPermission}
        options={{ title: 'Scan QR Code' }}
      />

<Stack.Screen
              name="HomeLoanForm"
              component={HomeLoanForm}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="VehicleLoanForm"
              component={VehicleLoanForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EducationLoanForm"
              component={EducationLoanForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoanCalculator"
              component={LoanCalculator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UPIPIN"
              component={UPIPIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingPlan"
              component={SavingPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat2"
              component={Livechat2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News"
              component={News}
              options={{ headerShown: false }}
              />

            <Stack.Screen name="ScanCamera" component={ScanCamera} />

            <Stack.Screen
              name="Proceed"
              component={Proceed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Donate"
              component={Donate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info6"
              component={Info6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod4"
              component={PaymentMethod4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help2"
              component={Help1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Shares"
              component={Shares}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoomCreated"
              component={RoomCreated}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckBalance"
              component={CheckBalance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MiniStatement"
              component={Ministatement}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod3"
              component={PaymentMethod3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MovieTicket"
              component={MovieTicket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeNav"
              component={HomeNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info3"
              component={Info3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Analysis"
              component={Analysis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About1"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderReview1"
              component={OrderReview1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckDeposit"
              component={CheckDeposit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplyForPolicy1"
              component={ApplyForPolicy1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentNewCard"
              component={PaymentNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestMoney"
              component={RequestMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RechargePlan"
              component={RechargePlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookMyshow"
              component={BookMyshow1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoneyHome"
              component={SendMoneyHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AUTHYVerification"
              component={AUTHYVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info7"
              component={Info7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoney"
              component={SendMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard"
              component={AddNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DonateForEducation1"
              component={DonateForEducation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCards"
              component={MyCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmptyFriendlist"
              component={EmptyFriendlist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentType1"
              component={PaymentType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UPIPIN1"
              component={UPIPIN1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LivechatAnalyze"
              component={LivechatAnalyze}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoomSettings1"
              component={RoomSettings1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QRCode"
              component={QRCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pay"
              component={Pay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info4"
              component={Info4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Car"
              component={Car}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info1"
              component={Info1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Plans1"
              component={Plans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Insuarance"
              component={Insuarance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecoverPassword"
              component={RecoverPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UPIPIN4"
              component={UPIPIN4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapDestination"
              component={MapDestination}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DonateForEducation"
              component={DonateForEducation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FD"
              component={FD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat"
              component={Livechat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pay1"
              component={Pay1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BESCOMBangalore"
              component={BESCOMBangalore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmptyRoomlist"
              component={EmptyRoomlist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplyForPolicy2"
              component={ApplyForPolicy2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loans"
              component={Loans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoomSettings"
              component={RoomSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat4"
              component={Livechat4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Money"
              component={Money}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermCondition"
              component={TermCondition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChildScheme"
              component={ChildScheme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info8"
              component={Info8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentSuccessful"
              component={PaymentSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookMyshow2"
              component={BookMyshow2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShopList"
              component={ShopList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoanApply"
              component={LoanApply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditMembers"
              component={EditMembers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat1"
              component={Livechat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info2"
              component={Info2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Products"
              component={Products}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gst"
              component={Gst}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapSourceWithDestination"
              component={MapSourceWithDestination}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Scheme"
              component={Scheme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History1"
              component={History1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TargetDay"
              component={TargetDay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FirstPage"
              component={FirstPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShowTimings"
              component={ShowTimings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookTicket"
              component={BookTicket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseAmount"
              component={ChooseAmount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderReview"
              component={OrderReview}
              options={{ headerShown: false }}
            />
              {/* <Stack.Screen
              name="SetPin"
              component={SetPin}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="VerifyOTP"
              component={VerifyOTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlan"
              component={MyPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplyForPolicy"
              component={ApplyForPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LivechatAnalysis"
              component={LivechatAnalysis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info5"
              component={Info5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat5"
              component={Livechat5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInWithGoogle"
              component={SignInWithGoogle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsurancePlan"
              component={InsurancePlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livechat3"
              component={Livechat3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BillsNotification"
              component={BillsNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplyForPolicy3"
              component={ApplyForPolicy3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetNewPassword"
              component={SetNewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoney1"
              component={SendMoney1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FdSuccess"
              component={FdSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentSuccessful1"
              component={PaymentSuccessful1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarePolicy"
              component={CarePolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod2"
              component={PaymentMethod2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UPIPIN2"
              component={UPIPIN2}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="BalanceDisplay" component={BalanceDisplay} />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ElectricityBill"
              component={ElectricityBill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PayBills"
              component={PayBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UPIPIN3"
              component={UPIPIN3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LivechatAnalysis1"
              component={LivechatAnalysis1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActivityGraph"
              component={ActivityGraph}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod1"
              component={PaymentMethod1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeNav1"
              component={HomeNav1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
      </RoomProvider>
      </SelectedContactsProvider>
      </TransactionProvider>
    </>
  );
};
export default App;