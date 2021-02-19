import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Button, Image } from "react-native";
// import { Button, Icon } from "native-base";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Product" component={Product} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => <Icon name="home" type="feather" color={color} size={size}/>,
            }}
          />
         
          <Tab.Screen name="Product" component={Product}  options={{
              tabBarLabel: "Product",
              tabBarIcon: ({ color, size }) => <Icon name="laptop" type="font-awesome" color={color} size={size}/>,
            }}/>
             <Tab.Screen name="About" component={About}  options={{
              tabBarLabel: "About",
              tabBarIcon: ({ color, size }) => <Icon name="building-o" type="font-awesome" color={color} size={size}/>,
            }}/>
          <Tab.Screen name="Contact" component={Contact}  options={{
              tabBarLabel: "Contact",
              tabBarIcon: ({ color, size }) => <Icon name="phone-call" type="feather" color={color} size={size}/>,
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
