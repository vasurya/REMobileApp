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
        fontSize: 40,
        color: "black",
        fontFamily: "Montserrat_900Black",
        position: "relative",
        left: "5%",
        top: "15%",
      },
      image: {
        width: "100%",
        height: 200,
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
              style={{ width: 250, height: 50 }}
            />
          }
        />
        <Image
          source={require("./background2.png")}
          style={styles.image}
        ></Image>
        <View style={{ marginBottom: "15%" }}>
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
            <View style={{
              width: 150, height: 50, borderRadius:0, backgroundColor: '#2196F3',alignItems: 'center',
            }}>
              <Text style={{paddingTop:'10%', fontFamily: "Raleway_400Regular", fontSize:20, color:"white"}}>Know More</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("Contact")}
            underlayColor="white"
          >
            <View style={{width: 150, height: 50 ,backgroundColor: '#2196F3',alignItems: 'center', }}>
              <Text style={{paddingTop:'10%',fontFamily: "Raleway_400Regular", fontSize:20, color:"white"}}>Contact Us</Text>
            </View>
          </TouchableHighlight>

          {/* <Button
            title="Know More"
            type="solid"
            buttonStyle={{ width: 150, height: 50, borderRadius: 40 }}
            onPress={() => navigation.navigate("About")}
          ></Button>
          <Button
            title="Contact Us"
            type="solid"
            buttonStyle={{ width: 150, height: 50, borderRadius: 40 }}
            onPress={() => navigation.navigate("Contact")}
          ></Button> */}
        </View>

        {/* <Text style={styles.fontStyles}>Inside</Text> */}
      </View>
    );
  }
}
