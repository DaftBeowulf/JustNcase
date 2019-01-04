import React from 'react';
import {View, Text,} from 'react-native';
import EcontactCard from './EcontactCard';

class MergencyContacts extends React.Component{
    constructor(props){
    }
    render(){
    return(
        <View>
    render(){
    return(
        <View>
{/* <EcontactCard contact={this.props.user.contacts[0]}/> */}

                {this.props.user.contacts.map(contact => {
                return (<View key={contact._id}>

                 <EcontactCard contact={contact}/>
                </View> 
                )
                })}
        </View>
    )
}}
export default MergencyContacts;
