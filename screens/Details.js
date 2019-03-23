import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PieChart } from 'react-native-svg-charts'

export default class Details extends Component {

  render() {

    const data = [
        {
            key: 1,
            amount: 60,
            svg: { fill: '#253041' },
            name: 'BTC'
        },
        {
            key: 2,
            amount: 30,
            svg: { fill: '#088da5' },
            name: 'ETH'
        },
        {
            key: 3,
            amount: 10,
            svg: { fill: '#EEA2AD' },
            name: 'XMR'
        },
    ]

    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[ 0 ]}
                    y={pieCentroid[ 1 ]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {data.name}
                </Text>
            )
        })
    }

    return (
      <View style={styles.container}>

        <View style={{height: 200, backgroundColor:"#253041", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate("Main")} underlayColor={"#253041"}>
                <Image source={require('../resources/images/whiteArrowLeft.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>  
            <Text style={{color:"white", textAlign:'center', fontSize: 28, paddingTop: 30}}>Portfolio details</Text>  
        </View>

        <ScrollView>
            <View style={{paddingTop:30, paddingLeft: 10}}>
                <Text style={{fontSize:20}}>Portfolio distribution</Text>
                <View style={{flexDirection:'row', paddingTop:10}}>
                    <View style={{width:20, height:20, backgroundColor: "#253041"}}></View><Text>{' '}BTC</Text>
                </View>
                <View style={{flexDirection:'row',paddingTop:5}}>
                    <View style={{width:20, height:20, backgroundColor: "#088da5"}}></View><Text>{' '}ETH</Text>
                </View>
                <View style={{flexDirection:'row',paddingTop:5}}>
                    <View style={{width:20, height:20, backgroundColor: "#EEA2AD"}}></View><Text>{' '}XMR</Text>
                </View>
                <PieChart
                    style={{ height: 200 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    spacing={0}
                    outerRadius={'95%'}
                >
                </PieChart>
            </View>

            <View style={{paddingTop:30, paddingLeft: 10}}>
                <Text style={{fontSize:20}}>Portfolio progress</Text>
            </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});