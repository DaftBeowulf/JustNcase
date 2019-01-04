import React from "react";
import { View, TextInput } from "react-native";

const EditContacts = props => {
  return (
    <View style={{ marginTop: 20, height: 55}}>
      <TextInput
        name="name"
        value={props.name}
        onChangeText={text => props.handleChange(text, props.index, 'name')}
        placeholder="Name"
        key={Math.random()}
        style={{ height: 40 }}
      />
      <TextInput
        name="number"
        value={props.number}
        onChangeText={text => props.handleChange(text, props.index, 'number')}
        placeholder="Number"
        key={Math.random()}
        style={{ height: 40, margin: 10 }}
      />
    </View>
  );
};

export default EditContacts;
