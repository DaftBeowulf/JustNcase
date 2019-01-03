import * as React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import axios from 'axios';

export default class ProfileScreen extends React.Component{
    static navigationOptions = { title: 'Your Profile'};
    constructor(props){
        super(props);
        this.setState({
            name: '',
            email:'',
            ICEcontats: [],
        })
    }
    // componentDidMount{
    //     axios.get().then(user=>{

    //     })
    // }

    render(){
        return (
            <View style={styles.container}>
            <View style={{backgroundColor: '#1EB865', width: '100%',}}>
                <Text style={styles.userText}>Lambda Joe</Text>
                
            </View>
            <Text>
                Emergancey Contacts
            </Text>
            <Text>
                Manage List
            </Text>
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
    userCard:{
        backgroundColor: '#1EB865',
        flex: 2,
    },
    userText:{
        fontSize: 22,

    }
})
