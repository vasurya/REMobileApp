import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon,Button} from 'native-base'

export default function About({navigation}){
   return( <View>
      <Button
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={{marginTop:'7%'}}
        transparent
      >
        <Icon name="menu" style={{color:'blue'}}/>
      </Button>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
      </View>
    </View>)
}

