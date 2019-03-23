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
        <View style={{height: 200, backgroundColor:"#222b3a", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../resources/images/sandwich_icon.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>
            <Text style={{color:"white", textAlign:'center', fontSize: 28, paddingTop: 30}}>Main</Text>
        </View>
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