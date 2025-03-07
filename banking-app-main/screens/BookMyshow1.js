import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BookMyshow1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookMyshow1}>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={styles.movieTicket}>Movie Ticket</Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.headerPosition]}
        onPress={() => navigation.navigate("BookTicket")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Image
        style={styles.bxsbusIcon}
        contentFit="cover"
        source={require("../assets/bxsbus.png")}
      />
      <View style={[styles.bookMyshow1Inner, styles.groupWrapperLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
              <Image
                style={[
                  styles.interfaceEssentialsearchL,
                  styles.groupWrapperLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface-essentialsearch-loupe.png")}
              />
              <Text
                style={[styles.searchLanguage, styles.searchLanguageLayout]}
              >
                Search Movie....
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("BookMyshow2")}
      />
      <Text style={styles.currentShowingBengaluru}>{`Current Showing
Bengaluru | 10 Movies`}</Text>
      <Image
        style={styles.image119Icon}
        contentFit="cover"
        source={require("../assets/image-119.png")}
      />
      <View style={[styles.searchButton1, styles.searchLayout1]} />
      <View style={[styles.searchButton2, styles.searchLayout]} />
      <View style={[styles.searchButton3, styles.searchLayout1]} />
      <Text style={[styles.english, styles.englishTypo]}>English</Text>
      <Text style={[styles.kannada, styles.englishTypo]}>Kannada</Text>
      <Text style={[styles.hindi, styles.hindiTypo]}>Hindi</Text>
      <View style={[styles.searchButton4, styles.searchBorder]} />
      <View style={[styles.searchButton5, styles.searchLayout]} />
      <Text style={[styles.tamil, styles.hindiTypo]}>Tamil</Text>
      <Text style={[styles.telagu, styles.telaguTypo]}>Telagu</Text>
      <View style={[styles.searchButton6, styles.searchBorder]} />
      <Text style={[styles.maliyalium, styles.telaguTypo]}>Maliyalium</Text>
      <View style={[styles.ticketBookingWrapper, styles.ticketLayout]}>
        <View style={[styles.ticketBooking, styles.ticketLayout]}>
          <Image
            style={[styles.image120Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-120.png")}
          />
          <Image
            style={[styles.image121Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-121.png")}
          />
          <Text style={[styles.bheema, styles.bheemaTypo]}>Bheema</Text>
          <Text style={[styles.actionthriller, styles.comedyhorrorTypo]}>
            Action/Thriller
          </Text>
          <Text style={[styles.actionthriller1, styles.horrorthrillerTypo]}>
            Action/Thriller
          </Text>
          <Text style={[styles.horrorthriller, styles.horrorthrillerTypo]}>
            Horror/Thriller
          </Text>
          <Text
            style={[styles.stree2Sarkata, styles.bheemaTypo]}
          >{`Stree 2: Sarkata ka 
Aatank`}</Text>
          <Text style={[styles.comedyhorror, styles.comedyhorrorTypo]}>
            Comedy/Horror
          </Text>
          <Image
            style={[styles.image122Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-122.png")}
          />
          <Image
            style={[styles.image123Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-123.png")}
          />
          <Text
            style={[styles.deadpoolWolverine, styles.itEndsWithTypo]}
          >{`Deadpool & Wolverine`}</Text>
          <Text style={[styles.itEndsWith, styles.itEndsWithTypo]}>
            It Ends with Us
          </Text>
          <Text
            style={[styles.actionadventurecomedy, styles.dramaromanticTypo]}
          >
            Action/Adventure/Comedy
          </Text>
          <Text style={[styles.dramaromantic, styles.dramaromanticTypo]}>
            Drama/Romantic
          </Text>
          <Pressable
            style={[styles.image124, styles.image124Layout]}
            onPress={() => navigation.navigate("MovieTicket")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-124.png")}
            />
          </Pressable>
          <Image
            style={[styles.image125Icon, styles.image124Layout]}
            contentFit="cover"
            source={require("../assets/image-125.png")}
          />
          <Text style={[styles.voodoIsBack, styles.voodoIsBackTypo]}>
            Voodo is back
          </Text>
          <Text style={[styles.kalki2898Ad, styles.voodoIsBackTypo]}>
            Kalki 2898 AD
          </Text>
        </View>
      </View>
      <View style={[styles.statusBarwhite, styles.groupWrapperPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.searchLanguageLayout]}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    top: 47,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 20,
    position: "absolute",
  },
  searchLanguageLayout: {
    height: 16,
    position: "absolute",
  },
  searchLayout1: {
    height: 33,
    borderColor: Color.lightGray11,
    top: 308,
    width: 70,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  searchLayout: {
    top: 307,
    height: 33,
    width: 70,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  englishTypo: {
    top: 316,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  hindiTypo: {
    top: 315,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  searchBorder: {
    top: 355,
    height: 33,
    borderColor: Color.lightGray11,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  telaguTypo: {
    top: 363,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  ticketLayout: {
    height: 1012,
    width: 419,
    position: "absolute",
  },
  iconLayout1: {
    height: 227,
    width: 160,
    top: 23,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  bheemaTypo: {
    top: 262,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  comedyhorrorTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  horrorthrillerTypo: {
    top: 886,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  iconLayout: {
    height: 219,
    top: 337,
    width: 160,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  itEndsWithTypo: {
    top: 568,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  dramaromanticTypo: {
    top: 591,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  image124Layout: {
    height: 223,
    top: 633,
    width: 160,
    position: "absolute",
  },
  voodoIsBackTypo: {
    top: 865,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  groupWrapperPosition: {
    top: 0,
    left: 0,
  },
  movieTicket: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  header: {
    left: 107,
    width: 155,
    height: 28,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 18,
    width: 40,
    height: 40,
  },
  bxsbusIcon: {
    top: 160,
    left: 279,
    width: 75,
    height: 75,
    overflow: "hidden",
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    width: 20,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  searchLanguage: {
    top: 2,
    left: 28,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    height: 16,
  },
  groupWrapper: {
    width: 152,
    height: 20,
    left: 0,
    top: 0,
  },
  bookMyshow1Inner: {
    top: 129,
    left: 25,
    width: 152,
    height: 20,
  },
  searchButton: {
    top: 118,
    left: 15,
    borderColor: Color.colorWhitesmoke_800,
    width: 196,
    height: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  currentShowingBengaluru: {
    top: 119,
    left: 229,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  image119Icon: {
    top: 187,
    width: 390,
    height: 94,
    left: 0,
    position: "absolute",
  },
  searchButton1: {
    left: 29,
    height: 33,
    borderColor: Color.lightGray11,
    top: 308,
  },
  searchButton2: {
    left: 195,
  },
  searchButton3: {
    left: 112,
    height: 33,
    borderColor: Color.lightGray11,
    top: 308,
  },
  english: {
    left: 39,
  },
  kannada: {
    left: 118,
  },
  hindi: {
    left: 213,
  },
  searchButton4: {
    width: 70,
    top: 355,
    left: 29,
  },
  searchButton5: {
    left: 281,
  },
  tamil: {
    left: 299,
  },
  telagu: {
    left: 42,
  },
  searchButton6: {
    width: 95,
    left: 112,
  },
  maliyalium: {
    left: 124,
  },
  image120Icon: {
    left: 24,
  },
  image121Icon: {
    left: 215,
  },
  bheema: {
    left: 27,
  },
  actionthriller: {
    top: 285,
    left: 24,
  },
  actionthriller1: {
    left: 24,
  },
  horrorthriller: {
    left: 215,
  },
  stree2Sarkata: {
    left: 215,
  },
  comedyhorror: {
    top: 302,
    left: 219,
  },
  image122Icon: {
    left: 27,
  },
  image123Icon: {
    left: 215,
  },
  deadpoolWolverine: {
    left: 24,
  },
  itEndsWith: {
    left: 215,
  },
  actionadventurecomedy: {
    left: 27,
  },
  dramaromantic: {
    left: 215,
  },
  icon1: {
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
  },
  image124: {
    left: 27,
  },
  image125Icon: {
    left: 215,
  },
  voodoIsBack: {
    left: 215,
  },
  kalki2898Ad: {
    left: 27,
  },
  ticketBooking: {
    overflow: "hidden",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    width: 419,
  },
  ticketBookingWrapper: {
    top: 406,
    left: -10,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
  },
  time: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.helvetica,
    letterSpacing: 0,
    left: 24,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "700",
    position: "absolute",
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    left: 0,
    position: "absolute",
  },
  bookMyshow1: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BookMyshow1;
