import * as React from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';

import axios from 'axios';
import MergencyContact from '../components/MergencyContacts';


export default class ProfileScreen extends React.Component{
    static navigationOptions = { title: 'Your Profile'};
    constructor(props){
        super(props);
        this.state={
           user:{},
           isUser: false,
        }
    }
    componentDidMount=()=>{
        axios.get('https://justncase.now.sh/user/lambdajoe')
        .then(response=>{
            this.setState({
                user: response.data,
                isUser:true
            })
            .catch(err=>{
                console.warn('error', err.message)
            })
        })
    }

    render(){
        if (this.state.isUser === false) {
 return (
            <View>
                <Text>
                    Loading.....
                </Text>
            </View>
        )           
        } else {
            return (
                
                <ScrollView style={styles.container}>
                    <View>
                    <View style={styles.thinBox}>
          <Image
            source={require("../assets/png_icons/hiking.png")}
            style={{ aspectRatio:.2, height:40, width:40,resizeMode:'contain', marginLeft:115, marginTop:-72 }}
          />
          <Image
            source={require("../assets/png_icons/settings.png")}
            style={{ height: 15, width: 15, marginRight: 0, marginTop: 20 }}
          />
          <Image
            source={require("../assets/png_icons/disclosureIndicator.png")}
            style={{
              height: 15,
              width: 15,
              marginLeft: 0,
              marginTop: 20,
              position: "absolute"
            }}
          />
        </View>
        
                        <View style={{backgroundColor: '#1EB865', height:160, justifyContent:'space-around', flexDirection:'row',}}>
                            <View >
                                <Image source={require('../assets/png_icons/lambda.png')} style={{height:50, width:50, marginLeft:18, marginTop:45, }}/>
                                {/* <Button title='stuff' onPress={()=> this.props.navigation.navigate('Login')}/> */}
                                
                            </View>
                        <View style={{marginTop:30}} >
                            <Text style={styles.userText}>{this.state.user.username}</Text>
                            <Text style={styles.userText}>{this.state.user.email}</Text>
                            <Text style={styles.userText}>{this.state.user.phone_number}</Text>
                        </View>
                    </View>
                     
                    <View style={styles.smallText}>
                       <Text style={{marginLeft:10,}}>Emergency Contacts  </Text> 
                       <Text>Manage List</Text>
                    </View >
                    <View>
                        <MergencyContact user={this.state.user}/>
                    </View>
                    </View>
                </ScrollView>

            )
        }
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
        alignSelf: 'flex-start',
    },
    smallText:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:8,
        fontSize:10,
    },  
    thinBox: {
        height: 50,
        alignItems: "stretch",
        position: "relative",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around"
      },
      bigBox: {
        height: 30,
        alignItems: "stretch",
        position: "relative",
        backgroundColor: '#e9fce0',
      },
      headerText: {
        color: "#1EB865",
        marginTop: 10,
        marginLeft: 80
      },
})
