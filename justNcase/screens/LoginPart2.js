import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import ProfileScreen from "./ProfileScreen";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from "apsl-react-native-button";


export default class EnterLoginInfo extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Grid>
        <Row>
          <View>
            <Image
              source={require("../assets/imgs/bgimage.png")}
              style={{
                flex: 1,
                aspectRatio: 0.1,
                resizeMode: "contain",
                position: "absolute",
                top: -550,
                left: -850
              }}
            />
            <Image
              source={require("../assets/png_icons/logo.png")}
              style={{
                aspectRatio: 2,
                resizeMode: "contain",
                left: "6%",
                top: "0%",
                opacity: 0.7
              }}
            />
            <View>
              
            </View>
            <View style={styles.buttons}>
            <Button
              style={{ backgroundColor: "white", borderRadius:20, borderColor:"transparent", opacity:.9, marginTop:10 }}
              textStyle={{ fontSize: 16, color: "#0B3835", opacity:.95, fontWeight:"600" }}
            >
              LOGIN
            </Button>
            </View>
          </View>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  //   overall: {
  //     flex: 1,
  //     backgroundColor: "#0ba360",
  //   }
  buttons:{
      position:"absolute",
      top:"65%",
      left:"6%",
      width:"95%",
  }
});
