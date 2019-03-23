import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Modal,
  Button,
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

    static navigationOptions = {
        
        drawerIcon: ({ tintColor }) => (
            <Image source={require('../resources/images/graph_menu.png')} resizeMode={"contain"}  style={styles.menu_icon} />
        ),
      };


  constructor() {
    super();
    this.state = {
      cumulfiat: [],
      cumulcrypto: [],
      periodpricedata: [],
      amount: 25,
      time: 36,
      isVisible: false
    };
  }

  componentDidMount() {
    this.recalc();
  }

  recalc() {
    this.calc(0, 0, this.state.amount);
  }

  calc(startinterval, endinterval, investment) {
    let max = 0;
    let cumulfiat = [];
    let cumulcrypto = [];
    let sumfiat = 0;
    let sumcrypto = 0;

    const slice =
      pricedata.length - this.state.time * 4 > 0
        ? pricedata.length - this.state.time * 4
        : 0;
    let periodpricedata = pricedata.slice(slice);

    periodpricedata.map((price, i) => {
      sumfiat += investment / 4;
      sumcrypto += investment / price.v;
      currentvaluecrypto = sumcrypto * price.v;
      cumulfiat.push(sumfiat);
      cumulcrypto.push(currentvaluecrypto);
      if (sumfiat > max) max = sumfiat;
      if (price.v > max) max = price.v;
      if (currentvaluecrypto > max) max = currentvaluecrypto;
    });

    const finalvaluefiat = cumulfiat[cumulfiat.length - 1];
    const finalvaluecrypo = cumulcrypto[cumulcrypto.length - 1];

    this.setState({
      cumulfiat: cumulfiat,
      cumulcrypto: cumulcrypto,
      finalvaluefiat: finalvaluefiat,
      finalvaluecrypo: finalvaluecrypo,
      pctgain: (finalvaluecrypo / finalvaluefiat) * 100 - 100,
      periodpricedata: periodpricedata,
      scale: max
    });
  }

  render() {
   const price = this.state.periodpricedata.map(item => {
      return item.v;
    });
    return (
      <View style={styles.container}>

        <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("Modal has been closed.") }}
            >
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            <View style = {{flex:1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems:'center', justifyContent:'center'}}>
                <View style={{width:300, height:500, backgroundColor:'white', borderRadius:30, borderWidth:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontSize:22, color:"#253041"}}>So far you invested</Text>
                    <Text style = {{fontSize:28, color:"#253041"}}>{this.state.finalvaluefiat} CHF</Text>
                    <Text style = {{fontSize:22, color:"#253041"}}>Your actual portfolio</Text>
                    <Text style = {{fontSize:28, color:"#253041"}}>{Number((parseFloat(this.state.finalvaluecrypo)).toFixed(2))} CHF</Text>
                    <Text style = {{fontSize:22, color:"#253041"}}>Your progress so far</Text>
                    <Text style = {{fontSize:28, color:"#253041"}}>{Number((parseFloat(this.state.pctgain)).toFixed(2))} %</Text>
                    
                    <TouchableHighlight style={{width:200, height:50, backgroundColor: "#253041", justifyContent:'center', marginTop:20}} onPress = {() => {
                    this.setState({ isVisible:false})}}>
                        <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>

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
            Simulation
          </Text>
        </View>

        <View style={{ height: 300 }}>
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
            animate={true}
            style={{ flex: 1 }}
            data={price}
            svg={{ stroke: "rgba(134, 65, 244, 0.5)", strokeWidth: 3 }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={this.state.scale}
          >
           

            <Grid />
          </LineChart>
          <LineChart
            animate={true}
            style={StyleSheet.absoluteFill}
            data={this.state.cumulfiat}
            svg={{ stroke: "rgba(34, 128, 176, 0.5)", strokeWidth: 3 }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={this.state.scale}
          />
          <LineChart
            animate={true}
            style={StyleSheet.absoluteFill}
            data={this.state.cumulcrypto}
            svg={{ stroke: "rgba(345, 8, 16, 0.5)", strokeWidth: 3 }}
            contentInset={{ top: 20, bottom: 20 }}
            gridMin={0}
            gridMax={this.state.scale}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 70,
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <TouchableHighlight
            style={
              this.state.amount == 25
                ? styles.activeButton
                : styles.defaultButton
            }
            onPress={() => {
              this.setState({ amount: 25 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.amount == 25 ? styles.activeText : styles.defaultText
              }
            >
              25 CHF
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.amount == 50
                ? styles.activeButton
                : styles.defaultButton
            }
            onPress={() => {
              this.setState({ amount: 50 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.amount == 50 ? styles.activeText : styles.defaultText
              }
            >
              50 CHF
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.amount == 100
                ? styles.activeButton
                : styles.defaultButton
            }
            onPress={() => {
              this.setState({ amount: 100 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.amount == 100
                  ? styles.activeText
                  : styles.defaultText
              }
            >
              100 CHF
            </Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 70,
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 30
          }}
        >
          <TouchableHighlight
            style={
              this.state.time == 18 ? styles.activeButton : styles.defaultButton
            }
            onPress={() => {
              this.setState({ time: 18 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.time == 18 ? styles.activeText : styles.defaultText
              }
            >
              1,5Y
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.time == 36 ? styles.activeButton : styles.defaultButton
            }
            onPress={() => {
              this.setState({ time: 36 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.time == 36 ? styles.activeText : styles.defaultText
              }
            >
              3Y
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={
              this.state.time == 48 ? styles.activeButton : styles.defaultButton
            }
            onPress={() => {
              this.setState({ time: 48 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.time == 48 ? styles.activeText : styles.defaultText
              }
            >
              4Y
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.time == 60 ? styles.activeButton : styles.defaultButton
            }
            onPress={() => {
              this.setState({ time: 60 }, () => {
                this.recalc();
              });
            }}
          >
            <Text
              style={
                this.state.time == 60 ? styles.activeText : styles.defaultText
              }
            >
              5Y
            </Text>
          </TouchableHighlight>
        </View>

        <View style={{alignItems:'center', paddingTop:20}}>
            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center', marginTop:20}} onPress={() => {this.setState({isVisible:true})}}>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Details</Text>
            </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  defaultButton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#253041",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 35
  },
  activeButton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#253041",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#253041",
    borderRadius: 35
  },
  defaultText: {
    color: "#253041"
  },
  activeText: {
    color: "white"
  },
  menu_icon: {
    width: 45,
    height: 45,
  },
});
