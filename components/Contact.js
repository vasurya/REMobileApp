import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
// import {Icon,Button} from 'native-base'
import { Header, Icon, Image } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { useScrollToTop } from "@react-navigation/native";

export default function Contact({ navigation }) {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Montserrat_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    let styles = {
      headerStyle: {
        fontFamily: "Montserrat_900Black",
        fontSize: 34,
        marginLeft: 20,
        marginTop: 15,
      },
    };
    return (
      <View>
        <Header
          backgroundColor="transparent"
          centerComponent={
            <Image
              source={require("./logonew.png")}
              style={{ width: 250, height: 50 }}
            />
          }
        />
        <Text style={styles.headerStyle}>Contact Us</Text>

        <ScrollView scrollEnabled={true}>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "80%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              Visit us at
            </Text>
            <Text
              style={{
                fontFamily: "Raleway_400Regular",
                marginTop: "5%",
                color: "black",
                marginBottom: "10%",
              }}
            >
              H.No:3-6-640/1, 1st Floor, Beside St.Anthony High School, Street
              No 9, Himayath Nagar, Hyderabad.
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/search/?api=1&query=Retail+Experts+Software+Private+Limited"
                )
              }
              style={{ padding:"5%", paddingLeft:0}}
            >
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 18,
                  color: "black",
                  textDecorationLine: "underline",
                }}
              >
                Click to open in Google Maps
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15, }}>
              Managing Director
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Surya Sanjay Kumar
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              sanjay@retailexperts.in
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9347030881
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              CEO
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Dinesh Barla
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              dinesh@retailexperts.in
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9347030885
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              COO
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Praveen Kumar
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              praveen@retailexperts.in
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9347030889
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              Sr. Marketing Manager
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Amit Kulkarni
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              amit@retailexperts.in
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9347030883
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              Manager
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Pramod Tangod
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              tangodpramod@gmail.com
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9390027545
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              width: "60%",
              borderWidth: 2,
              marginLeft: "5%",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontFamily: "Montserrat_900Black", fontSize: 15 }}>
              Managing Director
            </Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              Surya Sanjay Kumar
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email :</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              sanjay@retailexperts.in
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Cell</Text>
            <Text style={{ fontFamily: "Raleway_400Regular" }}>
              +91-9347030881
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
