import * as React from 'react';
import {View, Text, Image} from 'react-native';

const EcontactCard = (props) =>{
    return(
        <View style={{backgroundColor: '#58CF8F'}}>
          <Text>
              {props.contact.name}
{props.contact.number}
          </Text>

        </View>
    )
} 
export default EcontactCard;