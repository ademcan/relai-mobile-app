import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={{height: 200, backgroundColor:"#253041", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.openDrawer()} underlayColor={"#253041"}>
                <Image source={require('../resources/images/sandwich_icon.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>    
        </View>
        <View style={{ flex: 1, position: 'absolute', top: 70, left:50,  width:300, height: 200, backgroundColor:'red'}}> 
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