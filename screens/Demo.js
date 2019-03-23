import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'

export default class Demo extends Component {

  render() {
      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    return (
      <View style={styles.container}>
        <View style={{height: 200, backgroundColor:"#222b3a", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../resources/images/sandwich_icon.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>
            <Text style={{color:"white", textAlign:'center', fontSize: 28, paddingTop: 30}}>Demo</Text>
        </View>
        <View style={{flex:1, height: 300, flexDirection: 'row', marginTop:30, justifyContent:'center', marginLeft:10, marginRight:10}}>
            <LineChart
                style={{flex:1, height: 300 }}
                data={ data }
                svg={{ stroke: 'rgb(3, 133, 230)', strokeWidth:3 }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
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