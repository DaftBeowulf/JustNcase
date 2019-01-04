import React from 'react';
import {View, Text,} from 'react-native';
import EcontactCard from './EcontactCard';

class MergencyContacts extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     user:{}
        // }

    }
    // componentDidUpdate(prevProps) {
    //     if(prevProps !== this.props){
    //         console.error('new props')
    //         this.setState({
    //             user: this.props.user
    //         });
    //         ()=>this.forceUpdate();

    //     }
    // }
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
