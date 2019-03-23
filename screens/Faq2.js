import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Faq2 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center', paddingTop: 50, paddingLeft: 20,paddingright: 20}}>
            {/* <Text style={{fontSize:20}}>You invested</Text> */}
            <Text style={{fontSize:40}}>Fundamentals of Bitcoin</Text>
            <Text style={{fontSize:20,paddingTop: 10}}>Every discussion about Bitcoin sooner or later leads to a wrangle over what gives Bitcoin value. Skeptics claim it has no value whatsoever, while believers see it as digital gold with nearly infinite potential. So who is right and what actually makes single Bitcoin valuable? There are several attributes to consider.</Text>
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