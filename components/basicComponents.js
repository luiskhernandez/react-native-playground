import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, Slider, Picker } from 'react-native';

export default class BasicComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 10,
      language: 'js',
      css: {
        fontSize: 30
      },
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }

  onPressTitle = () => {
    Alert.alert(this.state.bodyText)
  }

  increaseSize = () => {
    console.log("ssss", this.state.css.fontSize)
    this.setState({ css: { fontSize: this.state.css.fontSize + 3}})
  }
  render () {
    const styles = StyleSheet.create({
      container : {
        marginTop: 50,
      },
      baseText: {
        marginTop: 100,
        color: 'red',
      },
      titleText: {
        fontWeight: 'bold',
      },
      bodyText : {
        fontSize: this.state.css.fontSize,
        borderColor: 'blue',
        borderWidth: 3,
      }
    });
    return (
      <View style={styles.container} >
        <Picker
          mode="dialog"
          prompt="Font Size"
          selectedValue={this.state.css.fontSize}
          onValueChange={(itemValue, itemIndex) => this.setState({css: { fontSize: itemValue}})}>
          <Picker.Item label="Small" value={10} />
          <Picker.Item label="Medium" value={30}/>
          <Picker.Item label="Big" value={60} />
        </Picker>
        <Slider
          minimumValue={1}
          maximumValue={100}
          onValueChange={(value) => this.setState({sliderValue: value, bodyText: ` slider value ${value}`})}
          step={2}
        />
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onLongPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text style={styles.bodyText} numberOfLines={5} onPress={this.increaseSize}>
          {this.state.bodyText}
          </Text>
          </Text>
      </View>
    )
  }
}

