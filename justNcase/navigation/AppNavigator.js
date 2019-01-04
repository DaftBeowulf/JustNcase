import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, AppRegistry, nativeHistory } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { NativeRouter, Route, Link } from "react-router-native";

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});

