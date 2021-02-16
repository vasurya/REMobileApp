import { Content } from "native-base";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
export default function Home({ navigation }) {
  return (
    <View>
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
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}
