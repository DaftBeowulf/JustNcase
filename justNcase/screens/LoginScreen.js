import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import ProfileScreen from './ProfileScreen';


import FloatingLabel from '../screens/FloatingLabel';
// import LoginButton from '../components/LoginButton';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>
      //     Local files and assets can be imported by dragging and dropping them
      //     into the editor Hello
      //   </Text>
      // </View>
      <ScrollView>
        <View style={styles.overall}>

          <View style={styles.first}>
            <Image source={require('../assets/png_icons/logo.png')} style={{aspectRatio: 1.5, resizeMode:'contain', marginLeft:72, marginTop:-35, marginBottom:-55}}/>
        {/* <Text style={styles.logoBox}> JUST 'n CASE </Text> */}
             <FloatingLabel style={styles.form} style={{resizeMode:'contain', height:'8%', marginTop:-425}} />
        {/* <LoginButton  style={styles.LoginButton} style={{resizeMode:'contain',}}/> */}
          </View>

           <View style={styles.second}>
               <Image source={require('../assets/png_icons/users.png')} style={{aspectRatio:.8, resizeMode:'contain', marginLeft:350, marginTop: -200}}/>
               <Text style={{color:'black', marginLeft:140, marginTop: 0, fontSize:13}}>Forgot Username?</Text>
               <Image source={require('../assets/png_icons/padlock.png')} style={{aspectRatio:.6, resizeMode:'contain', marginLeft:362, marginTop: 1}}/>
               <Text style={{color:'black', marginLeft:145, marginTop: 3, fontSize:13}}>Forgot Password?</Text>
               <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Profile')}>
                   <Image source={require('../assets/png_icons/LoginButton.png')} style={{aspectRatio:1.5, resizeMode:'contain', marginLeft:125, marginTop: -15}} />
               </TouchableWithoutFeedback>
               <Image source={require('../assets/png_icons/google.png')} style={{aspectRatio:2.5, resizeMode:'contain', marginLeft:120, marginTop:80}}/>
               <Image source={require('../assets/png_icons/Facebook.png')} style={{aspectRatio:2.5, resizeMode:'contain', marginLeft:120, marginTop:-10}}/>
               <Image source={require('../assets/png_icons/climbing.png')} style={{aspectRatio:.8, resizeMode:'contain', marginLeft:165, marginTop: -219}}/>
               <Text style={{color:'white', marginTop:140, marginLeft:135, fontSize:15}}>Create an Account</Text>
               <View style={{borderBottomColor:'white', borderBottomWidth:1, paddingTop:5, paddingBottom:10}}></View>
                  <Text style={{color:'white', marginLeft:135, paddingTop:20, fontSize:15}}>ABOUT | CONTACT</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 24,
  // },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: 'red',
  // },
  overall:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems:'stretch',
  },
  first:{
    flex:2,
    backgroundColor:'white',
    height:400,
  },
  second:{
    flex:3,
    backgroundColor:'#58CF8F',
    height:400,
  },
  secondarySignIn1: {
    height: 30,
    width: 140,
    backgroundColor: 'powderblue',
    borderRadius: 4,
  },
  secondarySignIn2: {
    height: 30,
    width: 140,
    backgroundColor: 'steelblue',
    borderRadius: 4,
  },
  login: {
    height: 30,
    width: 140,
    backgroundColor: 'skyblue',
    borderRadius: 2,
  },
  password: {
    height: 50,
    width: 220,
    backgroundColor: 'powderblue',
    borderRadius: 1,
  },
  username: {
    height: 50,
    width: 220,
    backgroundColor: 'skyblue',
    borderRadius: 1,
  },
  logoBox: {
    height: 80,
    backgroundColor: '#58CF8F',
    borderRadius: 10,
    justifyContent: 'center',
    fontFamily: 'Chalkduster',
    textDecorationLine: 'underline',
    color: 'white',
    fontSize:35,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  form:{
    flex: 3,
    alignItems: 'stretch',
    position:'relative',
  },
  LoginButton:{
   color: '#58CF8F',
   
  }

  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});
