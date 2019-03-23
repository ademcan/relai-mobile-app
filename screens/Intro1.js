import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Intro1 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Image/>
            <Image source={require('../resources/images/relai.jpg')} resizeMode={"contain"}  style={{width:300, height:300}}/>
        </View>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>Crypto Investing</Text>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>made easy</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});