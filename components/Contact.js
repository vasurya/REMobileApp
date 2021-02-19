import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Icon,Button} from 'native-base'
import { Header, Icon, Image } from "react-native-elements";

export default function Contact({navigation}){
   return( <View>
       <Header
        backgroundColor="transparent"
      
        centerComponent={
          <Image
            source={require("./logonew.png")}
            style={{ width: 250, height: 50 }}
          />
        }
       
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Contact Screen</Text>
      </View>
    </View>)
}

