import React, { Component } from 'react';
import { TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default class UselessText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style={{height: 20, width: 100, borderColor: '#1EB865', borderWidth: 1, marginTop:10, marginLeft:170, }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        keyboardType='web-search'
        returnKeyType='done'
        keyboardAppearance='dark'
        placeholder='event name'
      />
    );
  }
  
}