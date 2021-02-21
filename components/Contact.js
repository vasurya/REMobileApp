import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {Icon,Button} from 'native-base'
import { Header, Icon, Image } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Montserrat_900Black } from "@expo-google-fonts/montserrat";

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
      </View>
    );
  }
}
