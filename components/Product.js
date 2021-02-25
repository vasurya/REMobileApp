import React, { useState } from "react";
// import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import {Button} from 'native-base'
import { Header, Icon, Image, Button, Overlay } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


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
        fontSize: scale(34),
        marginLeft: scale(20),
        marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/pole.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Pole Display
              </Text>

              <Overlay
                isVisible={overlay1}
                onBackdropPress={() => setoverlay1(false)}
                overlayStyle={{ width: scale(300), height: scale(400) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center",height:"100%" }}
                >
                  <Image
                    source={require("../assets/pole.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Pole Display
                  </Text>
                  {/* <View style={{flex:1}}> */}
                  <ScrollView
                  
                    contentContainerStyle={{
                      padding: scale(15),
                    }}
                  >
                    {/* <View
                      style={{
                        padding: "5%",
                      }}
                    > */}
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Bright vacuum fluorescent display
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Two-line display with 20 characters per line{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Long life and trouble free operation
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Generous base best for freely stand alone application in
                      PD2200 series.{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Two adjustable viewing angles{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Pole height adjustable{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Display frame is horizontally slidable and 360 degree
                      rotatable{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Brightness adjustable by software
                    </Text>
                    {/* </View> */}
                  </ScrollView>
                  {/* </View> */}
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/cashdraw.png")}
                style={{ width:scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Cash Drawer
              </Text>
              <Overlay
                isVisible={overlay2}
                onBackdropPress={() => setoverlay2(false)}
                overlayStyle={{ width: scale(300), height: scale(400) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center", height:"100%" }}
                >
                  <Image
                    source={require("../assets/cashdraw.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Cash Drawer
                  </Text>
                  <ScrollView
                 
                    contentContainerStyle={{
                      padding: scale(15),
                    }}
                    
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      "Screw less" innovative design
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Adjustable bill/coin compartments
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Advanced mechanical design to extend the MTBF to 1,000,00
                      times
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Precision machining assures wobble-free drawer movement
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Check slot for non-cash or high denomination currency
                      transactions
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Three level lock for maximum cash security
                    </Text>
                  </ScrollView>
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/thermal.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                Thermal Bill Rolls
              </Text>
              <Overlay
                isVisible={overlay3}
                onBackdropPress={() => setoverlay3(false)}
                overlayStyle={{ width: scale(250), height: scale(280) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/thermal.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Thermal Bill Rolls
                  </Text>
                  <View
                    style={{
                      padding: scale(15),
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      25*20 size
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      28*20 size
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      50*20 size
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      and more
                    </Text>
                  </View>
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/barcodeprinter.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                TA-210 Barcode Printer
              </Text>
              <Overlay
                isVisible={overlay4}
                onBackdropPress={() => setoverlay4(false)}
                overlayStyle={{ width: scale(300), height: scale(300)}}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center",height:"100%" }}
                >
                  <Image
                    source={require("../assets/barcodeprinter.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    TA-210 Barcode Printer
                  </Text>
                  <ScrollView
                  scrollEnabled={true}
                    contentContainerStyle={{
                      padding: scale(15),
                    }}
                  >
                  
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      200 MHz 32-bit RISC processor with 8 MB SDRAM, 4MB FLASH
                      memory
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Internally Scalable True Type fonts
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      TSPL-EZ TM firmware emulates TPLE and TPLZ languages out
                      of the box
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Precision machining assures wobble-free drawer movement
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      5" OD internal media supply, optional external media
                      holder supports 8.4" OD label rolls on 3" cores
                    </Text>
                  </ScrollView>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/topscanner.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Table Top Scanner
              </Text>
              <Overlay
                isVisible={overlay5}
                onBackdropPress={() => setoverlay5(false)}
                overlayStyle={{ width: scale(300), height: scale(300) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center",height:"100%" }}
                >
                  <Image
                    source={require("../assets/topscanner.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Table Top Scanner
                  </Text>
                  <ScrollView
                  scrollEnabled={true}
                    contentContainerStyle={{
                      padding: scale(15),

                    }}
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Fully automatic scan operation
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      PowerLink,user-replaceable cables and MetroSet and
                      metroselect Configuration 20 scan line omnidirectional
                      pattern : provides aggressive scanning as an additional
                      benefit to hand presentation applications
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Single Line option: With the push of a button, switch to a
                      targeted scan ideal for menu scanning
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Adjustable scan head: Ability to tilt scanner 30 degrees
                      for targeted scanning or larger products
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      EAS: Deaxtivate an EAS tag and decode a barcode in a
                      single scan
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      7 Beeper tones
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Customize the depth-of field for tight for scanning
                      environments
                    </Text>
                  </ScrollView>
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/handscanner.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Hand Scanner
              </Text>
              <Overlay
                isVisible={overlay6}
                onBackdropPress={() => setoverlay6(false)}
                overlayStyle={{ width: scale(300), height: scale(300) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center", height:"100%" }}
                >
                  <Image
                    source={require("../assets/handscanner.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15)  }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Hand Scanner
                  </Text>
                  <ScrollView
                 
                    contentContainerStyle={{
                      padding: scale(15),

                    }}
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Light Source : visible Laser Diode 650 nm+- 5 nm
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Laser power {"<"} 1 mW Peak Power
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Depth of scan field :0mm-140mm(0-5.5) for 0.330 mm(13 mil
                      ) bar codes
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Width of scan Field :49 mm (1.9)@ face; 195 mm(7.7) @ 140
                      mm(5.5)
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Scan speed :72 scan lines per second
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Scan pattern: Single scan line
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Minimum bar width 0.102 mm (4.0 mil)
                    </Text>
                  </ScrollView>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "15%",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/printer.png")}
                style={{  width: scale(90), height: scale(90)}}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                Epson TM-T82 (Ethernet POS Printer)
              </Text>
              <Overlay
                isVisible={overlay7}
                onBackdropPress={() => setoverlay7(false)}
                overlayStyle={{ width: scale(300), height: scale(350) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/printer.png")}
                    style={{width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Epson TM-T82 (Ethernet POS Printer)
                  </Text>
                  <View
                    style={{
                      padding: "5%",
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      29 Centimeters Height
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      40 Centimeters Width
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Weight 1.7 Kg
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Dimensions 49 x 40 x 29 cm
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Printer, Adopter, Power cable, Interface cable, CD and
                      Manual
                    </Text>
                  </View>
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: scale(25),
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/cpu.png")}
                style={{ width: scale(90), height: scale(90)}}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                Brix CPU
              </Text>
              <Overlay
                isVisible={overlay8}
                onBackdropPress={() => setoverlay8(false)}
                overlayStyle={{ width: scale(300), height: scale(360) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/cpu.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Brix CPU
                  </Text>
                  <View
                    style={{
                      padding: scale(15),
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Dimensions:46.8 mm x 112.6 mm x 119.4 mm (1.84" x 4.43" x
                      4.7")
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Mother board:105 x 110 mm
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      CPU: Intel Core i5-6200U, 2.3GHz / 2.8GHz
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      Memory: 2 x SO-DIMM DDR4 slots, 2133MHz, Max 32GB
                    </Text>
                    <Text
                      style={{
                        marginBottom: scale(10),
                        fontFamily: "Raleway_400Regular",
                        fontSize: scale(14),
                      }}
                    >
                      LAN:Gigabit LAN (Intel i219V)
                    </Text>
                  </View>
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
              setoverlay2(true);
            }}
          >
            <View
              style={{
                borderRadius: 10,
                border: "1px solid #ccc",
                boxShadow: "0 0 10px #ccc",
                backgroundColor: "#fff",
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/storeicon3.png")}
                style={{ width: scale(130), height: scale(80) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Store Management
              </Text>
              <Overlay
                isVisible={overlay2}
                onBackdropPress={() => setoverlay2(false)}
                overlayStyle={{ width: scale(300), height: scale(450) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/storeicon3.png")}
                    style={{ width: scale(140), height: scale(100), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Store Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    Retail Experts Store Management is a part of the Point of
                    Sale solutions from Retail Experts offering comprehensive,
                    flexible and resilient solutions to a variety of retail
                    service establishments and convenience stores. It is a
                    seamlessly integrated solution from POST TO HOST driven-thru
                    support, front office system to control the store, back
                    office systems to control inventory, vendor management, and
                    all the way to the head office, providing central management
                    and decision control for the entire chain.
                  </Text>
                </View>
              </Overlay>
            </View>
          </TouchableOpacity>
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/laptopicon.png")}
                style={{ width: scale(80), height: scale(80) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Web Development
              </Text>

              <Overlay
                isVisible={overlay1}
                onBackdropPress={() => setoverlay1(false)}
                overlayStyle={{ width: scale(300), height: scale(250) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/laptopicon.png")}
                    style={{ width: scale(80), height: scale(70), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Web Development
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
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
            marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/warehouseicon.png")}
                style={{ width: scale(90), height: scale(80) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                Warehouse Management
              </Text>
              <Overlay
                isVisible={overlay3}
                onBackdropPress={() => setoverlay3(false)}
                overlayStyle={{ width: scale(300), height: scale(450) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/warehouseicon.png")}
                    style={{ width: scale(100), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Warehouse Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    Our Warehouse Management System can efficiently handle the
                    complex roles of inventory management, transportation
                    management, order management and complete accounting
                    systems. Goods flow from the Warehouse to Stores. The store
                    can also directly be replenished from the supplier’s
                    warehouse. Information will also flow from the store to the
                    warehouse and from warehouse to central office. The entire
                    system is linked to the inventory management system used by
                    the company. Options to add automated reordering and
                    more/less warehouses/stores is also available.
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/agencyicon.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Agency Management
              </Text>
              <Overlay
                isVisible={overlay4}
                onBackdropPress={() => setoverlay4(false)}
                overlayStyle={{ width: scale(300), height: scale(400) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/agencyicon.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Agency Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    The main role of agency management system is to purchase
                    goods from the manufacturers and distribute these goods to
                    different segments of customer in the markets. Our agency
                    management system are to maintain the inventory details and
                    the customer information. In order to handle this data
                    effectively . The application is flexible to adapt with
                    different agency organization that are categorized on the
                    bases of market needs
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
            marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/enterpriseicon.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Enterprise Housing
              </Text>
              <Overlay
                isVisible={overlay5}
                onBackdropPress={() => setoverlay5(false)}
                overlayStyle={{ width: scale(300), height: scale(400) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/enterpriseicon.png")}
                    style={{ width: scale(90), height: scale(90),marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Enterprise Housing
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    Our Enterprise Housing management system is a comprehensive
                    software developed for the housing market, attracting large
                    clients such as ICRISAT. Enterprise Housing management is a
                    front office management system to support the transaction
                    such as allotment of room, reservation, generating reports
                    and cash receipts. It is also equipped with grouping the
                    users according to company.
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/textileicon.png")}
                style={{ width: scale(90), height: scale(90)  }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                }}
              >
                Textile Management
              </Text>
              <Overlay
                isVisible={overlay6}
                onBackdropPress={() => setoverlay6(false)}
                overlayStyle={{ width: scale(300), height: scale(420) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/textileicon.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Textile Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    The customer data, stock information and warehouse details
                    of a textile company having different branches has to be
                    maintained in an organized manner so that it can be easily
                    retrieved. The flow of goods and services also are to be
                    monitored at intervals . In such a case the need for
                    handling volumes of data in the textile industry has become
                    a critical and a major issue. Taking these requirements into
                    consideration we have developed a Textile Management System.
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
            marginTop: scale(15),
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
                width: scale(160),
                height: scale(150),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: scale(25),
              }}
            >
              <View style={{ position: "absolute", right: 10, top: 2 }}>
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  size={20}
                />
              </View>
              <Image
                source={require("../assets/jewelryicon.png")}
                style={{ width: scale(90), height: scale(90) }}
                // onPress = {()=>{setoverlay(true)}}
              ></Image>
              <Text
                style={{
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(15),
                  marginTop: scale(15),
                  textAlign: "center",
                }}
              >
                Jewellery Management
              </Text>
              <Overlay
                isVisible={overlay7}
                onBackdropPress={() => setoverlay7(false)}
                overlayStyle={{width: scale(300), height: scale(370) }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/jewelryicon.png")}
                    style={{ width: scale(90), height: scale(90), marginTop: scale(15) }}
                    // onPress = {()=>{setoverlay(true)}}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(19),
                      marginTop: scale(20),
                    }}
                  >
                    Jewellery Management
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Raleway_400Regular",
                      fontSize: scale(13),
                      padding: scale(15),
                      textAlign: "center",
                    }}
                  >
                    Jewellery Management System has been a proactive product in
                    leading the retail market. The main aspects of this
                    application deal with centralizing the distributed data of
                    the jewellery store for monitoring product, sales, purchase
                    and stock in, stock out information. Our jewellery system
                    also performs stock exchange between branches and generating
                    various reports.
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
              style={{ width: scale(250), height: scale(50) }}
            />
          }
        />
        <View>
          <Text style={styles.headerStyle}>Products</Text>
          <Text
            style={{
              fontFamily: "Raleway_400Regular",
              fontWeight: "600",
              fontSize: scale(15),
              padding: scale(15),
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
                width: scale(100),
                height: scale(45),
                borderRadius: 0,
                // backgroundColor: "#2196F3",
                // border:'1px solid',
                alignItems: "center",
                marginRight: scale(16),
                borderWidth: btn === true ? 0 : 1,
                backgroundColor: btn === true ? "#2196F3" : "transparent",
              }}
            >
              <Text
                style={{
                  paddingTop: scale(10),
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(17),
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
                width: scale(100),
                height: scale(45),
                borderRadius: 0,
                // backgroundColor: "#2196F3",
                alignItems: "center",
                borderWidth: btn === false ? 0 : 1,

                backgroundColor: btn === false ? "#2196F3" : "transparent",
              }}
            >
              <Text
                style={{
                  paddingTop: scale(10),
                  fontFamily: "Raleway_400Regular",
                  fontSize: scale(17),
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
