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
            .catch(err=>{I 
                console.log
            })
        })
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{backgroundColor: '#1EB865', height:160, justifyContent:'space-around', flexDirection:'row',}}>
                        <View >
                            <Image source={require('../assets/png_icons/user.png')} style={{height:40, width:40, margin:8, }}/>
                        </View>
                        <View>
                            <Text style={styles.userText}>{this.state.user.username}</Text>
                            <Text style={styles.userText}>{this.state.user.email}</Text>
                            <Text style={styles.userText}>{this.state.user.phone_number}</Text>
                        </View>
                     </View>
            
                     <View style={styles.smallText}>
                       <Text>Emergency Contacts  </Text> 
                       <Text>Manage List</Text>
                    </View>

                </View>
            </ScrollView>
           
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#e9fce0',
    },
    userText:{
        alignSelf: 'center',
        fontSize: 22,
        color:'white',
        margin:2,

    },
    smallText:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:6,
        fontSize:12
    },
})
