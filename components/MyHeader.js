import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import firebase from 'firebase';

export default class MyHeader extends Component{
  render(){
    return(
        <Header
          placement = "left"
          centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold" } }}
          rightComponent={ <Icon name='map' type='font-awesome' color='#696969' size={25}
          onPress={() =>this.props.navigation.navigate('Maps')}/>}
          backgroundColor = "#ff8860"
        />

)
}
}
