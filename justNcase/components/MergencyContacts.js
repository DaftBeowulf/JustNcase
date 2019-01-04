import React from "react";
import { View, Text } from "react-native";
import EcontactCard from "./EcontactCard";

class MergencyContacts extends React.Component {
  render() {
    return (
      <View>
        {this.props.user.contacts.map(contact => {
          return (
            <View key={contact._id}>
              <EcontactCard contact={contact} />
            </View>
          );
        })}
      </View>
    );
  }
}
export default MergencyContacts;
