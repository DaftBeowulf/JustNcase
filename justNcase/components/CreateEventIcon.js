import React from 'react';
import {Image} from 'react-native';

export default class CreateEventIcon extends React.Component{
    render(){
        return(
            <Image 
                source={(require('../assets/png_icons/my_events.png'))}
                name={this.props.name}
                color={}
            />
        )
    }
}