import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: [{key: 1, name: 'Devin'}]},
            {title: 'J', data: [
              {key: 2, name: 'Jackson' },
              {key: 3, name: 'James' },
              {key: 4, name: 'Jillian' },
              {key: 5, name: 'Jimmy' },
              {key: 6, name: 'Joel' },
              {key: 7, name: 'John' },
              {key: 8, name: 'Julie'}
            ]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
