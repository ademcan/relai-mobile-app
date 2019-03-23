import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Faq extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 200, backgroundColor:"#222b3a", paddingTop: 100}}>
            <Text style={{color:"white", textAlign:'center', fontSize: 28}}>Main</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});