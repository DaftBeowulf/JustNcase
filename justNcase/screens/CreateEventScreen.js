import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import TextInput from '../components/TextInput';
import TextInputSpecial from '../components/TextInputSpecial';
import axios from "axios";

export default class EventScreen extends React.Component{

createEventHandler() {
    axios.put("https://justncase.now.sh/user/event/5c2d98df11ccda4084298d7a", {
        "username":"lambdajoe",
        "contacts": [
            {
                "name": "Mark",
                "number": "+1-512-773-1985"
            },
            {
                "name": "Adam",
                "number": "+1-512-446-2085"
            },
            {
                "name": "Olu",
                "number": "+1-512-552-3655"
            },
                    {
                "name": "Chris",
                "number": "+1-512-212-1492"
            },
                    {
                "name": "Noah",
                "number": "+1-512-101-1011"
            }
        ],
        "events": {"name": "biking", "eventDuration": 15000, "checkinInterval": 5000}
    })
    .then(res => {
        console.debug(res.data);
        () => this.props.navigation.navigate("Event");
    })
    .catch(err => console.debug(err));

}
    render(){
    return(
        <View style={styles.overall}>
            <View style={styles.thinBox}>
                <Text style={styles.headerText}>Let's get started!</Text>
                <Image source={require('../assets/png_icons/settings.png')} style={{height:20, width:20, marginRight:0, marginTop:10}} />
                <Image source={require('../assets/png_icons/disclosureIndicator.png')} style={{height:15, width:15, marginLeft:0, marginTop:10, position:'absolute'}} />
            </View>
            <View style={styles.bigBox}>
                <Image source={require('../assets/png_icons/biking.png')} style={{marginLeft:110, marginTop:10}} />
            </View>
            <View style={styles.thinBox}>
                <Text style={styles.secondText}>MY EVENT FOR THE DAY</Text>
                <Text style={styles.secondText}>Wed, Jan 4 2019</Text>
            </View>
            <View style={styles.fancyCard}>
                <View>
                    <Text style={styles.inside}>Set Event Name</Text>
                    <Text style={styles.inside}>Set Event Duration</Text>
                    <Text style={styles.inside}>Set Check-In Interval</Text>
                    <Text style={styles.smallText}>Change Duration and Check-In>></Text>
                </View>
                <View style={styles.textInput}>
                    <TextInputSpecial />
                    <TextInput /> 
                    <TextInput />
                </View>
            </View>
            <View style={styles.sidebyside}>
            <TouchableWithoutFeedback onPress={()=> this.createEventHandler()}>
            <Image source={require('../assets/png_icons/createEventButton.png')} style={{ height:60, width:400, resizeMode:'contain', marginTop:20}} />
            </TouchableWithoutFeedback>
            <Image source={require('../assets/png_icons/cancelbutton.png')} style={{ height:60, width:400,resizeMode:'contain', marginTop:40}} />
            </View>
        </View>
    )
}};

const styles = StyleSheet.create({
overall:{
    backgroundColor:'white',
    height:'100%',
},
thinBox:{
    height:40,
    alignItems: 'stretch',
    position: 'relative',
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-around',
},
bigBox:{
    height:100,
    alignItems: 'stretch',
    position:'relative',
    backgroundColor:'#1EB865',
},
headerText:{
    color: '#1EB865',
    marginTop:10,
    marginLeft:80,
},
secondText:{
    color:'#4A4A4A',
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
    flexDirection: 'column',
    alignContent:'space-evenly',
    marginTop:60,
    // marginLeft:5,
    // marginRight:30,
    width:300
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