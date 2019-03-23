import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'

export default class Demo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 200, backgroundColor:"#222b3a", paddingTop: 100}}>
            <Text style={{color:"white", textAlign:'center', fontSize: 28}}>Main</Text>
        </View>
        <View style={{flex:1, height: 300, flexDirection: 'row', marginTop:30, justifyContent:'center', marginLeft:10, marginRight:10}}>
            <YAxis
                data={  this.state.ohlc_data  }
                contentInset={ contentInset }
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={ 10 }
                formatLabel={ value => `${value}` }
            />
            <LineChart
                style={{flex:1, height: 300 }}
                data={ this.state.ohlc_data }
                svg={{ stroke: rgbColors[colorIndex], strokeWidth:3 }}
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
    paddingTop:200
  },
});