import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Faq1 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center', paddingTop: 50, paddingLeft: 20,paddingright: 20}}>
            {/* <Text style={{fontSize:20}}>You invested</Text> */}
            <Text style={{fontSize:40}}>How To Invest in Cryptocurrency: A Step-By-Step Guide for Beginners</Text>
            <Text style={{fontSize:20}}>Imagine if you knew how to invest in cryptocurrency like the people that have been in the game for several years.
Surprisingly, that’s not as hard as it sounds, and you will have no issues at all following this guide even if you’re a beginner.
The people that bought Bitcoin at $50 or Ethereum at $1 are not highly sophisticated traders, but they did have a decent understanding of how to invest in a HYPER volatile asset like cryptocurrencies.
And that’s precisely what you will learn in this guide.
</Text>
            <Image resizeMode={"contain"} style={{width:300}} source={require('../resources/images/faq1.png')}/>
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