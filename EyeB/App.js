import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.foto}>
        <Image source = {require('./assets/icon2.png')}></Image>
        <Text>EyeB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    flex: 1,
    backgroundColor: '#19d1e9',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
