import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const EcontactCard = (props) =>{
    return(
        <View style={{backgroundColor: '#58CF8F', marginTop:10, flexDirection:'row',height:85, flex:2}}>
            <View style={{flexDirection:'row', alignItems:'center', margin:30}}>
                <Image source={require('../assets/png_icons/user.png')} style={{height:40, width:40, marginRight:15}} />

                <View>
                {/* leftside of card */}
                    <Text style={styles.contactsText} >
                        {props.contact.name}
                    </Text> 
                    <Text style={styles.contactsText}>
                        {props.contact.number}
                    </Text>
              </View>
            </View>
            {/* right side of card */}
            <View style={{flex:2, marginLeft:40}}>
                <View style={{display: 'flex', flexDirection: 'row', borderColor:'black',}} >
                <View>
                    <Image source={require('../assets/png_icons/send_sms.png')}
                     style={{ height:25, width: 35,margin:15, marginBottom:5 }} />
                     <Text style={{fontSize:10, color:'#4A4A4A', marginBottom:8 }}>Send SMS</Text>
                </View>
                    <Image source={require('../assets/png_icons/call.png')}
                    style={{height:25, width:25,margin:15, marginLeft:20 }} />
                </View>
                <Text 
                style={{fontSize:10, color:'#4A4A4A', alignContent:'flex-end', marginLeft:25 }} >
                  Edit Contact  
                </Text>
            </View>

        </View>
    )
} 
const styles=StyleSheet.create({
    contactsText:{
        fontSize:15,
        color:'#4A4A4A',
         height:20, 
    }
})
export default EcontactCard;