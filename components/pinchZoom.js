import React, { Component } from 'react';
import { Image } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class PinchZoom extends Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <PinchZoomView>
        <Image source={pic} style={{width: 100, height: 100}}/>
      </PinchZoomView>
    );
  }
}
