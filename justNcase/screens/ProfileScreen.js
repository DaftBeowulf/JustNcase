import * as React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import axios from 'axios';

export default class ProfileScreen extends React.Component{
    static navigationOptions = { title: 'Your Profile'};
    constructor(props){
        super(props);
        this.state={
           user:{}
        }
    }
    componentDidMount=()=>{
        axios.get('https://justncase.now.sh/user/lambdajoe')
        .then(response=>{
            this.setState({
                user: response.data
            })
            .catch(err=>{
                console.log
            })
        })
    }

    render(){
        return (
            <View style={styles.container}>
            <View style={{backgroundColor: '#1EB865', width: '100%',}}>
                <Text style={styles.userText}>{this.state.user.username}</Text>
            </View>
            <View syle={{flex: 1, flexDirection:'row'}}>
                <Text>
                    Emergency Contacts
                </Text>
                <Text>
                    Manage List
                </Text>
            </View>
            </View>
           
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcffcc',
        alignItems: 'center',
        flex:1,
    },
    userText:{
        fontSize: 22,

    }
})
