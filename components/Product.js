import React, { useState } from "react";
// import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import {Button} from 'native-base'
import { Header, Icon, Image, Button, Overlay } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";

import { Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function Product({ navigation }) {
  const [btn, setbtn] = useState(true);
  const [overlay1, setoverlay1] = useState(false);
  const [overlay2, setoverlay2] = useState(false);
  const [overlay3, setoverlay3] = useState(false);
  const [overlay4, setoverlay4] = useState(false);
  const [overlay5, setoverlay5] = useState(false);
  const [overlay6, setoverlay6] = useState(false);
  const [overlay7, setoverlay7] = useState(false);

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
        fontSize: 30,
        marginLeft: 10,
      },
    };

    let HardwarePage = (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
    );

    let SoftwarePage = (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={() => {
            setoverlay1(true);
          }}
        >
          <View
            style={{
              borderRadius: 10,
              border: "1px solid #ccc",
              boxShadow: "0 0 10px #ccc",
              backgroundColor: "#fff",
              width: 160,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/laptopicon.png")}
              style={{ width: 90, height: 60 }}
              // onPress = {()=>{setoverlay(true)}}
            ></Image>
            <Text
              style={{
                fontFamily: "Raleway_400Regular",
                fontSize: 15,
                marginTop: "10%",
              }}
            >
              Web Development
            </Text>
            <Overlay
              isVisible={overlay1}
              onBackdropPress={() => setoverlay1(false)}
              overlayStyle={{ width: "80%", height: "40%" }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={require("../assets/laptopicon.png")}
                  style={{ width: 90, height: 60 }}
                  // onPress = {()=>{setoverlay(true)}}
                ></Image>
                <Text
                  style={{
                    fontFamily: "Raleway_400Regular",
                    fontSize: 20,
                    marginTop: "10%",
                  }}
                >
                  Web Development
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_400Regular",
                    fontSize: 14,
                    padding: "5%",
                    textAlign:"center"
                  }}
                >
                  Retail Experts offers a comprehensive e-commerce website
                  application and mobile application that is fully customizable
                  and personalized based on the customer's needs
                </Text>
              </View>
            </Overlay>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            border: "1px solid #ccc",
            boxShadow: "0 0 10px #ccc",
            backgroundColor: "#fff",
            width: 160,
            height: 150,
          }}
        >
          <Text>STesting</Text>
        </View>
      </View>
    );

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
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "10%",
            marginTop: "5%",
          }}
        >
          <Button
            title="Software"
            type={btn ? "solid" : "outline"}
            buttonStyle={{
              width: 100,
              height: 40,
              marginRight: "2%",
              borderRadius: 5,
              // backgroundColor:(btn === true)?"green":"none"
            }}
            onPress={() => setbtn(true)}
          ></Button>
          <Button
            title="Hardware"
            type={!btn ? "solid" : "outline"}
            buttonStyle={{ width: 100, height: 40, borderRadius: 5 }}
            // titleStyle={{color:'green'}}
            // containerStyle={{color:'green'}}
            onPress={() => setbtn(false)}
          ></Button>
        </View>

        <View>{btn === true ? SoftwarePage : HardwarePage}</View>
      </View>
    );
  }
}
