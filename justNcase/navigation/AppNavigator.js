import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { NativeRouter, Route, Link } from "react-router-native";

import MainTabNavigator from './MainTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});

const App = () => (
  <NativeRouter>
    <View>
      <View>
        {/* <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link> */}
        <Link to="/ProfileScreen">
          <Text>ProfileScreen</Text>
        </Link>
      </View>

      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/ProfileScreen" component={ProfileScreen} />
    </View>
  </NativeRouter>
);

("MyApp", () => App);