import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Touchables from './components/touchables'
import FlatListBasics from './components/flatList'
import SectionListBasics from './components/sectionList'
import Movies from './components/networking'

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.greeting}>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return <Movies />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});


