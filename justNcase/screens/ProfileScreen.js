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
    
    

    render(){
        return (
            <View style={styles.container}>
            <View>
                <Text>Hello world</Text>
            </View>
            </View>
           
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcffcc',
        alignItems: 'center',
    }
})
