import React from 'react';
import {Image} from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Image
      source={(require('../assets/png_icons/time.png'))}
      name={this.props.name}
      // size={20}
      color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{height:20, width:20}}
      />
    );
  }
}