import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import TextInput from '../components/TextInput';
import TextInputSpecial from '../components/TextInputSpecial';

export default class EventScreen extends React.Component{
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
                <Text style={styles.secondText}>MY EVENT CHECK-IN</Text>
                <Text style={styles.secondText}>Wed, Jan 4 2019</Text>
            </View>
            <View style={styles.fancyCard}>
                <View>
                    <Text style={styles.inside}>Set Event Name</Text>
                    <Text style={styles.inside}>Total Duration</Text>
                    <Text style={styles.inside}>Check-In Every</Text>
                    <Text style={styles.smallText}>Change Duration and Check-In>></Text>
                </View>
                <View style={styles.textInput}>
                    <TextInputSpecial />
                    <TextInput /> 
                    <TextInput />
                </View>
            </View>
            <View style={styles.sidebyside}>
            <Image source={require('../assets/png_icons/stopEventButton.png')} style={{ height:50, width:120,resizeMode:'contain', marginLeft:30, marginTop:-18}} />
            <Image source={require('../assets/png_icons/startEventButton.png')} style={{ height:50, width:120, resizeMode:'contain', marginTop:-18}} />
            </View>
            <View>
            <Image source={require('../assets/png_icons/checkInButton.png')} style={{ height:50, width:120, resizeMode:'contain', marginTop:-5, marginLeft: 95}} />
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
    fontFamily:'SF Pro Tex',
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
    borderRadius:'2',
    borderWidth:'0.5',
    borderColor:'#1EB865',
    opacity:.5,
    backgroundColor:'white'
},
sidebyside:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop:20,
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