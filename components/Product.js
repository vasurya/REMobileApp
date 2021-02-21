import React, { useState } from "react";
// import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
// import {Button} from 'native-base'
import { Header, Icon, Image, Button, Overlay } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Montserrat_900Black } from "@expo-google-fonts/montserrat";


export default function Product({ navigation }) {
  const [btn, setbtn] = useState(true);
  const [overlay1, setoverlay1] = useState(false);
  const [overlay2, setoverlay2] = useState(false);
  const [overlay3, setoverlay3] = useState(false);
  const [overlay4, setoverlay4] = useState(false);
  const [overlay5, setoverlay5] = useState(false);
  const [overlay6, setoverlay6] = useState(false);
  const [overlay7, setoverlay7] = useState(false);
  const [overlay8, setoverlay8] = useState(false);

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
      <View>
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
                source={require("../assets/pole.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Pole Display
              </Text>

              <Overlay
                isVisible={overlay1}
                onBackdropPress={() => setoverlay1(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/pole.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Pole Display
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay2(true);
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
                source={require("../assets/cashdraw.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Cash Drawer
              </Text>
              <Overlay
                isVisible={overlay2}
                onBackdropPress={() => setoverlay2(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/cashdraw.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Cash Drawer
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay3(true);
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
                source={require("../assets/thermal.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Thermal Bill Rolls
              </Text>
              <Overlay
                isVisible={overlay3}
                onBackdropPress={() => setoverlay3(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/thermal.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Thermal Bill Rolls
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay4(true);
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
                source={require("../assets/barcodeprinter.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                TA-210 Barcode Printer
              </Text>
              <Overlay
                isVisible={overlay4}
                onBackdropPress={() => setoverlay4(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/barcodeprinter.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    TA-210 Barcode Printer
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay5(true);
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
                source={require("../assets/topscanner.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Table Top Scanner
              </Text>
              <Overlay
                isVisible={overlay5}
                onBackdropPress={() => setoverlay5(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/topscanner.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Table Top Scanner
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay6(true);
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
                source={require("../assets/handscanner.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Hand Scanner
              </Text>
              <Overlay
                isVisible={overlay6}
                onBackdropPress={() => setoverlay6(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/handscanner.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Hand Scanner
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay7(true);
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
                marginBottom: "15%",
              }}
            >
              <Image
                source={require("../assets/printer.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Epson TM-T82 (Ethernet POS Printer)
              </Text>
              <Overlay
                isVisible={overlay7}
                onBackdropPress={() => setoverlay7(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/printer.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Epson TM-T82 (Ethernet POS Printer)
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay8(true);
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
                marginBottom: "15%",
              }}
            >
              <Image
                source={require("../assets/cpu.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Brix CPU
              </Text>
              <Overlay
                isVisible={overlay8}
                onBackdropPress={() => setoverlay8(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/cpu.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Brix CPU
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );

    let SoftwarePage = (
      <View>
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
                style={{ width: 90, height: 90 }}
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
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/laptopicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
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
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay2(true);
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
                source={require("../assets/storeicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Store Management
              </Text>
              <Overlay
                isVisible={overlay2}
                onBackdropPress={() => setoverlay2(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/storeicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Store Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay3(true);
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
                source={require("../assets/warehouseicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Warehouse Management
              </Text>
              <Overlay
                isVisible={overlay3}
                onBackdropPress={() => setoverlay3(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/warehouseicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Warehouse Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay4(true);
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
                source={require("../assets/agencyicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Agency Management
              </Text>
              <Overlay
                isVisible={overlay4}
                onBackdropPress={() => setoverlay4(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/agencyicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Agency Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay5(true);
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
                source={require("../assets/enterpriseicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Enterprise Housing
              </Text>
              <Overlay
                isVisible={overlay5}
                onBackdropPress={() => setoverlay5(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/enterpriseicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Enterprise Housing
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setoverlay6(true);
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
                source={require("../assets/textileicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                }}
              >
                Textile Management
              </Text>
              <Overlay
                isVisible={overlay6}
                onBackdropPress={() => setoverlay6(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/textileicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Textile Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setoverlay7(true);
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
                marginBottom: "15%",
              }}
            >
              <Image
                source={require("../assets/jewelryicon.png")}
                style={{ width: 90, height: 90 }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Jewellery Management
              </Text>
              <Overlay
                isVisible={overlay7}
                onBackdropPress={() => setoverlay7(false)}
                overlayStyle={{ width: "80%", height: "40%" }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/jewelryicon.png")}
                    style={{ width: 90, height: 90, marginTop: "5%" }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 20,
                      marginTop: "10%",
                    }}
                  >
                    Jewellery Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: 14,
                      padding: "5%",
                      textAlign: "center",
                    }}
                  >
                    Retail Experts offers a comprehensive e-commerce website
                    application and mobile application that is fully
                    customizable and personalized based on the customer's needs
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
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
          <TouchableOpacity
            onPress={() => setbtn(true)}
            underlayColor="white"
            style={{ border: "1px solid black" }}
          >
            <View
              style={{
                width: 120,
                height: 50,
                borderRadius: 0,
                // backgroundColor: "#2196F3",
                // border:'1px solid',
                alignItems: "center",
                marginRight: "6%",
                borderWidth: btn === true ? 0 : 1,
                backgroundColor: btn === true ? "#2196F3" : "transparent",
              }}
            >
              <Text
                style={{
                  paddingTop: "10%",
                  fontFamily: "Raleway_400Regular",
                  fontSize: 20,
                  // color: 'white'
                  // color:'black',
                  color: btn === true ? "white" : "black",
                }}
              >
                Software
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setbtn(false)} underlayColor="white">
            <View
              style={{
                width: 120,
                height: 50,
                borderRadius: 0,
                // backgroundColor: "#2196F3",
                alignItems: "center",
                borderWidth: btn === false ? 0 : 1,

                backgroundColor: btn === false ? "#2196F3" : "transparent",

              }}
            >
              <Text
                style={{
                  paddingTop: "10%",
                  fontFamily: "Raleway_400Regular",
                  fontSize: 20,
                  color: btn === false ? "white" : "black",

                }}
              >
                Hardware
              </Text>
            </View>
          </TouchableOpacity>

        
        </View>

        <ScrollView scrollEnabled={true}>
          {btn === true ? SoftwarePage : HardwarePage}
        </ScrollView>
      </View>
    );
  }
}
