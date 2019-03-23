import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Faq3 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center', paddingTop: 100}}>
            <Text style={{fontSize:20}}>You invested</Text>
            <Text style={{fontSize:50}}>100 CHF</Text>
            <Text style={{fontSize:20}}>per month</Text>
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