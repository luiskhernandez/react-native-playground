import React, { Component } from 'react';
import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  View
} from 'react-native';

export default class PanResponderDemo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PanItem initialx={0} initialY={0} />
        <PanItem initialx={0} initialY={0} />
      </View>
    );
  }
}

class PanItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY()
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
      }
    })
  }
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    // Destructure the value of pan from the state
    let { pan } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateX}, {translateY}], backgroundColor: 'red'};
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, imageStyle]} {...this._panResponder.panHandlers}>
            <Image source={pic} style={{width: 150, height: 150}}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
  }
});
