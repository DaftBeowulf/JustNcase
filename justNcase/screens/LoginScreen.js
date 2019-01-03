import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>
      //     Local files and assets can be imported by dragging and dropping them
      //     into the editor Hello
      //   </Text>
      // </View>
      <View style={styles.overall}>
        <View style={styles.logoBox} />
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
    height: 100,
    backgroundColor: 'steelblue',
    borderRadius: 1,
  },
  overall:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});
