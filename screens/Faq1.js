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
            <Text style={{fontSize:40}}>What is Dollar Cost Averaging?</Text>
            {/* <Text style={{fontSize:20}}>by Saskia</Text> */}
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