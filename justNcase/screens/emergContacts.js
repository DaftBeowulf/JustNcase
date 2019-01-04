import * as React from "react";
import axios from 'axios'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Button
} from "react-native";

import EditContacts from '../components/editContacts'

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      input: [
        {
          name: '',
          number: ''
        }
      ]
    };
  }

  addContact() {
    const newContact = {
      name: '',
      number: ''
    }
    this.setState({ input: { ...this.state.input, newContact}})
  }

  handleInputChange = (text, index, item) => {
    console.debug(index, item)
    let input = [ ...this.state.input]
    input[index][item] = text
    this.setState({ input })
  }

  handleAddContact() {
    if (this.state.input.length > 3) {
      return
    } else {
      console.debug("debug");
      let current = this.state.input;
      this.setState({ input: [ ...current, { name: '', number: ''}] });
      console.debug(this.state.input);
    }
  }



  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title="Add More" onPress={e => this.handleAddContact()} />
        <View style={{ flex: 5 }}>{this.state.input.map((contact, index) => {
          return(
            <EditContacts
              key={index}
              name={contact.name}
              number={contact.number}
              index={index}
              handleChange={this.handleInputChange} />
          )
        })}</View>
      </View>
    );
  }
}
