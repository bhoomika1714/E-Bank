//changed page
import * as React from "react"; 
import { StyleSheet, View, Text ,Pressable} from "react-native"; 
import { Image } from "expo-image"; 
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles"; 
import {Linking} from "react-native"; 
const GroupComponent37 = () => { 
const openIndigoWebsite = () => { 
Linking.openURL('https://www.goindigo.in'); 
}; 
const openIRCTCWebsite = () => { 
Linking.openURL('https://www.irctc.co.in'); 
}; 
const openRedBusWebsite = () => { 
Linking.openURL('https://www.redbus.in'); 
}; 
const openOlaWebsite = () => { 
Linking.openURL('https://www.olacabs.com'); 
}; 
const openMakeMyTripHotel = () => { 
Linking.openURL('https://www.makemytrip.com/hotels'); 
}; 
return ( 
<View style={styles.groupParent}> 
<Pressable style={[styles.rectangleParent, styles.groupPosition1]} onPress={openIRCTCWebsite}> 
<View style={[styles.groupChild, styles.groupPosition1]} /> 
<Image 
style={[styles.materialSymbolstrainIcon, styles.groupInnerLayout]} 
contentFit="cover" 
source={require("../assets/materialsymbolstrain.png")} 
/> 
</Pressable> 
<Text style={[styles.train, styles.trainTypo]}>Train</Text> 
<View style={[styles.rectangleGroup, styles.groupPosition]}> 
<View style={[styles.groupChild, styles.groupPosition1]} /> 
<Image 
style={[styles.materialSymbolstrainIcon, styles.groupInnerLayout]} 
contentFit="cover" 
source={require("../assets/icbaselinemovie.png")} 
/> 
</View> 
<Text style={[styles.movie, styles.cabPosition]}>Movie</Text> 
<Image 
style={[styles.groupInner, styles.groupInnerPosition]} 
contentFit="cover" 
source={require("../assets/group-841.png")} 
/> 
<Text style={[styles.hotel, styles.cabTypo]}>Hotel</Text> 
<Text style={[styles.cab, styles.cabTypo]}>Cab</Text> 
<Pressable style={[styles.rectangleContainer, styles.groupInnerPosition]} onPress={openIndigoWebsite}> 
<View style={[styles.groupChild, styles.groupPosition1]} /> 
<Image 
style={[styles.materialSymbolstrainIcon, styles.groupInnerLayout]} 
contentFit="cover" 
source={require("../assets/mdiflight.png")} 
/> 
</Pressable> 
<View style={[styles.groupView, styles.rectanglePosition]}> 
<View style={[styles.groupChild, styles.groupPosition1]} /> 
<Image 
style={[styles.materialSymbolstrainIcon, styles.groupInnerLayout]} 
contentFit="cover" 
source={require("../assets/bxsbus1.png")} 
/> 
</View> 
<Text style={[styles.flight, styles.cabTypo]}>Flight</Text> 
<Text style={styles.bus}>Bus</Text> 
</View> 
); 
}; 
const styles = StyleSheet.create({ 
groupPosition1: { 
left: "0%", 
position: "absolute", 
}, 
groupInnerLayout: { 
maxHeight: "100%", 
overflow: "hidden", 
maxWidth: "100%", 
}, 
trainTypo: { 
textAlign: "left", 
color: Color.lightGray11, 
fontFamily: FontFamily.montserratSemiBold, 
fontWeight: "600", 
fontSize: FontSize.m3LabelLarge_size, 
position: "absolute", 
}, 
groupPosition: { 
bottom: "17.21%", 
top: "54.88%", 
}, 
cabPosition: { 
top: "89.3%", 
height: "10.7%", 
}, 
groupInnerPosition: { 
left: "37.38%", 
right: "43.93%", 
width: "18.69%", 
height: "27.91%", 
position: "absolute", 
}, 
cabTypo: { 
width: "15.26%", 
textAlign: "left", 
color: Color.lightGray11, 
fontFamily: FontFamily.montserratSemiBold, 
fontWeight: "600", 
fontSize: FontSize.m3LabelLarge_size, 
position: "absolute", 
}, 
rectanglePosition: { 
bottom: "72.09%", 
top: "0%", 
}, 
groupChild: { 
height: "100%", 
width: "100%", 
right: "0%", 
bottom: "0%", 
borderRadius: Border.br_xs, 
backgroundColor: Color.colorWhitesmoke_700, 
left: "0%", 
top: "0%", 
}, 
materialSymbolstrainIcon: { 
height: "58.33%", 
width: "58.33%", 
top: "18.33%", 
right: "21.67%", 
bottom: "23.33%", 
left: "20%", 
position: "absolute", 
}, 
rectangleParent: { 
bottom: "72.09%", 
top: "0%", 
right: "81.31%", 
left: "0%", 
width: "18.69%", 
height: "27.91%", 
}, 
train: { 
width: "15.89%", 
left: "2.8%", 
top: "32.56%", 
height: "10.7%", 
textAlign: "left", 
}, 
rectangleGroup: { 
left: "0%", 
position: "absolute", 
right: "81.31%", 
width: "18.69%", 
height: "27.91%", 
}, 
movie: { 
width: "14.33%", 
left: "2.18%", 
textAlign: "left", 
color: Color.lightGray11, 
fontFamily: FontFamily.montserratSemiBold, 
fontWeight: "600", 
fontSize: FontSize.m3LabelLarge_size, 
position: "absolute", 
}, 
groupInner: { 
bottom: "17.21%", 
top: "54.88%", 
maxHeight: "100%", 
overflow: "hidden", 
maxWidth: "100%", 
}, 
hotel: { 
left: "41.12%", 
top: "89.3%", 
height: "10.7%", 
}, 
cab: { 
left: "79.75%", 
top: "89.3%", 
height: "10.7%", 
}, 
rectangleContainer: { 
bottom: "72.09%", 
top: "0%", 
}, 
groupView: { 
right: "6.54%", 
left: "74.77%", 
width: "18.69%", 
height: "27.91%", 
bottom: "72.09%", 
position: "absolute", 
}, 
flight: { 
height: "7.44%", 
left: "40.5%", 
top: "32.56%", 
}, 
bus: { 
height: "7.67%", 
width: "31.46%", 
left: "68.54%", 
textAlign: "center", 
color: Color.lightGray11, 
fontFamily: FontFamily.montserratSemiBold, 
fontWeight: "600", 
fontSize: FontSize.m3LabelLarge_size, 
top: "32.56%", 
position: "absolute", 
}, 
groupParent: { 
height: "26.48%", 
width: "85.6%", 
top: "36.7%", 
right: "5.33%", 
bottom: "36.82%", 
left: "9.07%", 
position: "absolute", 
}, 
}); 
export default GroupComponent37;