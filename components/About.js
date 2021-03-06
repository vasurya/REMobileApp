import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Header, Icon, Image } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function About({ navigation }) {
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
        fontSize: scale(34),
        marginLeft: scale(20),
        marginTop: scale(15),
      },
    };
    return (
      <View >
        <Header
          backgroundColor="transparent"
          centerComponent={
            <Image
              source={require("./logonew.png")}
              style={{ width: scale(250), height: scale(50) }}
            />
          }
        />
        <Text style={styles.headerStyle}>About Us</Text>
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 2,
            margin: "5%",
            marginTop: "12%",
            padding: "3%",
            height: scale(400),
            
          }}
        >
          
            <Text
              style={{
                fontFamily: "Raleway_400Regular",
                fontSize: scale(15),
                padding: scale(15),
              }}
            >
              Located in the heart of Hyderabad, Retail Experts Software has
              been at the forefront of providing top of the line Point of Sale
              and Warehouse solutions to customers all over South India for over
              two decades.
            </Text>
            <Text
              style={{
                fontFamily: "Raleway_400Regular",
                fontSize: scale(15),
                padding: scale(15),
                paddingTop: scale(5),
              }}
            >
              With hundreds of projects under our belt and over two thousand
              happy customers, you can rest assured about the quality of service
              our team delivers.
            </Text>
            <Text
              style={{
                fontFamily: "Raleway_400Regular",
                fontSize: scale(15),
                padding: scale(15),
                paddingTop: scale(5),
              }}
            >
              We as a team are committed to the success of every individual who
              interacts with our company - your success is our success!
            </Text>
          
        </View>
      </View>
    );
  }
}
