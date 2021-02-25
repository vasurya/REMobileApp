import { Content } from "native-base";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
// import { Icon, Button } from "native-base";
import { Header, Icon, Image, Button } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Raleway_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    let styles = {
      headerfontStyles: {
        fontSize: scale(40),
        color: "black",
        fontFamily: "Montserrat_900Black",
        position: "relative",
        left: scale(15),
        top: scale(25),
      },
      image: {
        width: "100%",
        height: scale(150),
      },
    };

    // color - #d4f9ff
    return (
      <View>
        <Header
          backgroundColor="transparent"
          centerComponent={
            <Image
              source={require("./logonew.png")}
              style={{ width: scale(250), height: scale(50) }}
            />
          }
        />
        <Image
          source={require("./background2.png")}
          style={styles.image}
        ></Image>
        <View style={{ marginBottom: scale(45) }}>
          {/* <Text style={styles.headerfontStyles}>Best</Text> */}
          <Text style={styles.headerfontStyles}>Point of Sale</Text>
          <Text style={styles.headerfontStyles}>And</Text>
          <Text style={styles.headerfontStyles}>Warehousing solutions</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableHighlight
            onPress={() => navigation.navigate("Product")}
            underlayColor="white"
          >
            <View
              style={{
                width: scale(150),
                height: scale(50),
                borderRadius: 0,
                backgroundColor: "#2196F3",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  paddingTop: scale(15),
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(20),
                  color: "white",
                }}
              >
                Know More
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("Contact")}
            underlayColor="white"
          >
            <View
              style={{
                width: scale(150),
                height: scale(50),
                backgroundColor: "#2196F3",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  paddingTop: scale(15),
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(20),
                  color: "white",
                }}
              >
                Contact Us
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
