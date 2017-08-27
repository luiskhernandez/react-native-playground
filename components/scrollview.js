import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class ScrollViewDemo extends Component {
  render () {
    let pic = {
      uri: 'https://pumpdnutrition.com/wp-content/uploads/2014/02/michelle-lewin-venzuela.png'
    };
    return (
      <ScrollView>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
        <Text style={{fontSize: 40}}>Michelle Lewin</Text>
        <Image source={pic} style={{width: '100%', height: 400 }}/>
      </ScrollView>
    )
  }
}
