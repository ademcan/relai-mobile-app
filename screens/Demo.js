import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from "react-native";
import {
  LineChart,
  Grid,
  YAxis,
  LinePoints,
  AreaChart
} from "react-native-svg-charts";
import pricedata from "../resources/data/btceur.json";
export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      cumulfiat: [],
      cumulcrypto: []
    };
  }

  componentDidMount() {
    this.calc(0, 0, 100);
  }

  calc(startinterval, endinterval, investment) {
    let cumulfiat = [];
    let cumulcrypto = [];
    let sumfiat = 0;
    let sumcrypto = 0;
    pricedata.map((price, i) => {
      sumfiat += investment;
      sumcrypto += investment / price.v;
      cumulfiat.push(sumfiat);
      cumulcrypto.push(sumcrypto / price.v);
    });

    console.log(cumulfiat)
    console.log(cumulcrypto)
    this.setState({
      cumulfiat: cumulfiat,
      cumulcrypto: cumulcrypto
    });
  }

  render() {
    // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    // const data2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ].reverse()
    // const data3 = [ 50, 10, 64, 95, -4, -24, 45, 29, 35, 33, -5, 2, 30, -20, -80 ]
    const price = pricedata.map(item => {
      return item.v;
    });
    console.log(price)
    return (
      <View style={styles.container}>
        <View
          style={{ height: 200, backgroundColor: "#253041", paddingTop: 50 }}
        >
          <TouchableHighlight
            style={{ paddingLeft: 20 }}
            onPress={() => this.props.navigation.openDrawer()}
            underlayColor={"#253041"}
          >
            <Image
              source={require("../resources/images/sandwich_icon.png")}
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
            />
          </TouchableHighlight>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 28,
              paddingTop: 30
            }}
          >
            Demo
          </Text>
        </View>

        <View style={{ height: 200 }}>

             {/* <YAxis
                data={price}
                contentInset={ { top: 20, bottom: 20 } }
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={ 10 }
                formatLabel={ value => `${value}` }
            /> */}
          <LineChart
            style={{ flex: 1 }}
            data={price}
            svg={{ stroke: "rgba(134, 65, 244, 0.5)", strokeWidth:3  }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={20000}
          >
            <Grid />
          </LineChart>
          <LineChart
            style={StyleSheet.absoluteFill}
            data={this.state.cumulfiat}
            svg={{ stroke: "rgba(34, 128, 176, 0.5)", strokeWidth:3  }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={20000}
          />
          <LineChart
            style={StyleSheet.absoluteFill}
            data={this.state.cumulcrypto}
            svg={{ stroke: "rgba(345, 8, 16, 0.5)", strokeWidth:3 }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={20000}
          />
        </View>

        {/* <View style={{flex:1, height: 300, flexDirection: 'row', marginTop:30, justifyContent:'center', marginLeft:10, marginRight:10}}>

            <LineChart
                style={{flex:1, height: 300 }}
                data={ data }
                svg={{ stroke: 'rgb(3, 133, 230)', strokeWidth:3 }}
                contentInset={{ top: 20, bottom: 20 }}
            >

                <Grid/>
            </LineChart>

            <LineChart
            style={{flex:1, height: 300 }}
            data={ data2 }
            svg={{ stroke: 'rgb(234, 133, 230)', strokeWidth:3 }}
            contentInset={{ top: 20, bottom: 20 }}
            />
            
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
