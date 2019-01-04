import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style={{height: 20, width: 100, borderColor: '#1EB865', borderWidth: 1, marginTop:15, marginLeft:170, }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        keyboardType='numeric'
        returnKeyType='done'
        keyboardAppearance='dark'
        placeholder='0'
      />
    );
  }
}

