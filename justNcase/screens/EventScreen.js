import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import TextInput from "../components/TextInput";
import TextInputSpecial from "../components/TextInputSpecial";
import axios from "axios";


export default class EventScreen extends React.Component {
  state = {
    event: {}
  };

  componentDidMount() {
    axios
      .get("https://justncase.now.sh/user/lambdajoe")
      .then(res => {
        console.debug(res.data.username)
        this.setState({ event: res.data.events });
      })
      .catch(err => console.debug(err));
  }

  checkinHandler() {
    axios.put("https://justncase.now.sh/user/5c2d98df11ccda4084298d7a", {
      "username":"lambdajoe",
      "contacts": [{"name": "Mark", "number": 5128176260}],
      "events": {"name": "bike trip", "eventDuration": 5000, "checkinInterval": 1000, "checkedIn": true}
    })
    .then(res => {
        console.debug(res.data);
    })
    .catch(err => console.debug(err))
  }

  render() {
    return (
      <View style={styles.overall}>
        <View style={styles.thinBox}>
          <Text style={styles.headerText}>Let's get started!</Text>
          <Image
            source={require("../assets/png_icons/settings.png")}
            style={{ height: 20, width: 20, marginRight: 0, marginTop: 10 }}
          />
          <Image
            source={require("../assets/png_icons/disclosureIndicator.png")}
            style={{
              height: 15,
              width: 15,
              marginLeft: 0,
              marginTop: 10,
              position: "absolute"
            }}
          />
        </View>
        <View style={styles.bigBox}>
          <Image
            source={require("../assets/png_icons/biking.png")}
            style={{ marginLeft: 110, marginTop: 10 }}
          />
        </View>
        <View style={styles.thinBox}>
          <Text style={styles.secondText}>MY EVENT CHECK-IN</Text>
          <Text style={styles.secondText}>Wed, Jan 4 2019</Text>
        </View>
        <View style={styles.fancyCard}>
          <View>
            <Text style={styles.inside}>Event: {this.state.event.name}</Text>
            <Text style={styles.inside}>
              Duration: {this.state.event.eventDuration / 1000} s
            </Text>
            <Text style={styles.inside}>
              Check-In every {this.state.event.checkinInterval / 1000} s
            </Text>
          </View>
          <View style={styles.textInput}>
            {/* <TextInputSpecial />
                    <TextInput /> 
                    <TextInput /> */}
          </View>
        </View>
        <View style={styles.sidebyside}>
          <Image
            source={require("../assets/png_icons/stopEventButton.png")}
            style={{
              height: 50,
              width: 120,
              resizeMode: "contain",
              marginLeft: 30,
              marginTop: -18
            }}
          />
        </View>
        <View>
        <TouchableWithoutFeedback onPress={()=> this.checkinHandler()}>
          <Image
            source={require("../assets/png_icons/checkInButton.png")}
            style={{
              height: 50,
              width: 120,
              resizeMode: "contain",
              marginTop: -5,
              marginLeft: 95
            }}
          />
</TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overall: {
    backgroundColor: "white",
    height: "100%"
  },
  thinBox: {
    height: 40,
    alignItems: "stretch",
    position: "relative",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bigBox: {
    height: 100,
    alignItems: "stretch",
    position: "relative",
    backgroundColor: "#1EB865"
  },
  headerText: {
    color: "#1EB865",
    marginTop: 10,
    marginLeft: 80
  },
  secondText: {
    color: "#4A4A4A",
    // fontFamily:'SF Pro Tex',
    marginTop:15,
    fontSize:12,
},
fancyCard:{
    height:158,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    position:'relative',
    backgroundColor:'white',
    borderRadius:2,
    borderWidth:0.5,
    borderColor:'#1EB865',
    opacity:.5,
    backgroundColor:'white'
},
sidebyside:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop:50,
    marginLeft:5,
    marginRight:30,
},
inside:{
flexDirection:'column',
alignContent:'space-around',
marginTop:20,
marginLeft:20,
color:'#4A4A4A',
},
smallText:{
fontSize:6,
marginLeft:180,
marginTop:5,
color:'#4A4A4A',
},
pockets:{
height:20,
width:80,
borderRadius:4,
backgroundColor:'#1EB865',
},
textInput:{
    flexDirection:'column',
    alignContent:'space-between',
    marginTop:-118,

}
})
