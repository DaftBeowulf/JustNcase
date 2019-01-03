import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import FloatingLabel from '../screens/FloatingLabel';
import LoginButton from '../components/LoginButton';

export default class LoginScreen extends React.Component {
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
        <Text style={styles.logoBox}> JUST 'n CASE </Text>
        <FloatingLabel style={styles.form} style={{resizeMode:'contain', height:'10%',}}/>
        {/* <LoginButton  style={styles.LoginButton} style={{resizeMode:'contain',}}/> */}
      </View>

      <View style={styles.second}>
      <Image source={require('../assets/images/google.png')} style={{aspectRatio:1.5, resizeMode:'contain'}}/>
      <Image source={require('../assets/images/Facebook.png')} style={{aspectRatio:1.5, resizeMode:'contain'}}/>
      <Image source={require('../assets/images/oval.png')} style={{aspectRatio:1.5, resizeMode:'contain'}}/>

     
        <View style={styles.username} />
        <View style={styles.password} />
        <View style={styles.login} />
        <View style={styles.secondarySignIn2} />
        <View style={styles.secondarySignIn1} />
        <Text>Login</Text>
        <Text>Sign in with Facebook</Text>
        <Text>Sign in with Google</Text>
        <Text>Forgot Username?</Text>
        <Text>Forgot Password?</Text>
        <Text>Create an Account</Text>
        <Text>ABOUT | CONTACT</Text> 
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
    fontSize:'35',
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
