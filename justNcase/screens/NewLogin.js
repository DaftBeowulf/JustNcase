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

export default class NewLoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
      <Grid>
        <Row >
          <View>
          <Image
              source={require("../assets/imgs/bgimage.png")}
              style={{
                flex: 1,
                aspectRatio:.1,
                resizeMode:"contain",
                position: "absolute",
                top: -550,
                left:-850,
              }}
            />
            <Image
              source={require("../assets/png_icons/logo.png")}
              style={{
                aspectRatio: 1.5,
                resizeMode: "contain",
                // justifyContent: "center",
                left: "8%",
                top:"-5%",
                opacity:.7,
              }}
            />
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
});
