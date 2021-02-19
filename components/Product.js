import React, { useState } from 'react';
// import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {Icon,Button} from 'native-base'
import { Header, Icon, Image } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";

import { Montserrat_900Black } from "@expo-google-fonts/montserrat";

export default function Product({ navigation }) {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Montserrat_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    const [btn, setbtn] = useState("");

    let styles = {
      headerStyle: {
        fontFamily: "Montserrat_900Black",
        fontSize: 30,
        marginLeft: 10,
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
        <View>
          <Text style={styles.headerStyle}>Products</Text>
          <Text
            style={{
              fontFamily: "Raleway_400Regular",
              fontWeight: "600",
              fontSize: 17,
              padding: 15,
            }}
          >
            Retail Experts offers a comprehensive collection of software and
            hardware products that will satisfy all your point of sale and
            warehouse management needs.
          </Text>
          <View style={{flexDirection: "row",
            justifyContent: "space-around",}}>
            <View
              style={{
               
                borderRadius: 10,
                border: "1px solid #ccc",
                boxShadow: "0 0 10px #ccc",
                backgroundColor: "#fff",
                width: 130,
                height: 150,
              }}
            >
              <Text>Testing</Text>
            </View>
            <View
              style={{
                
                borderRadius: 10,
                border: "1px solid #ccc",
                boxShadow: "0 0 10px #ccc",
                backgroundColor: "#fff",
                width: 130,
                height: 150,
              }}
            >
              <Text>Testing</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
