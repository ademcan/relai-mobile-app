import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Main extends Component {

   

  render() {
    return (
      <View style={styles.container}>

        <View style={{height: 200, backgroundColor:"#253041", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.openDrawer()} underlayColor={"#253041"}>
                <Image source={require('../resources/images/sandwich_icon.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>    
        </View>

        <View onStartShouldSetResponder={() => {this.props.navigation.navigate("Details")}} style={{backgroundColor:'white', flex: 1, position: 'absolute', top: 100, left:'10%', right:'10%',  width:'80%', height: 180, borderRadius:20, borderWidth:1, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
            
            <Text style={{fontSize:20, color:'#253041'}}>Your portfolio</Text>
            <Text style={{fontSize:36, color:'#253041'}}>998.70 CHF</Text>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../resources/images/arrow_up.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
            <Text style={{fontSize:16, color:'green'}}>9.76 %</Text>            
            </View>
            <View style={{alignItems:'center'}}><Text style={{fontSize:16, color:'green'}}>{'\n'}You earned</Text><Text style={{fontSize:20, color:'green', fontWeight:'bold'}}> 98.70 CHF</Text></View>
        
        </View>

        <View style={{alignItems:'center', paddingTop: 100, paddingBottom:40}}>
            <Text style={{fontSize:20}}>Last payments</Text>
        </View>
        <ScrollView>
            <View style={{alignItems:'center', width:'100%', height:100, backgroundColor:'#eaeaea', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>01.02.2019</Text>
                
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/arrow_up.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    <Text style={{ color:'green', fontWeight:'bold', fontSize:22}}>2.04 %</Text>
                </View>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>100 CHF</Text>
            </View>
            <View style={{alignItems:'center', width:'100%', height:100, backgroundColor:'white', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>01.01.2019</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/arrow_down.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    <Text style={{ color:'red', fontWeight:'bold', fontSize:22}}>0.87 %</Text>
                </View>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>100 CHF</Text>
            </View>
            <View style={{alignItems:'center', width:'100%', height:100, backgroundColor:'#eaeaea', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>01.12.2018</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/arrow_up.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    <Text style={{ color:'green', fontWeight:'bold', fontSize:22}}>1.20 %</Text>
                </View>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>100 CHF</Text>
            </View>
            <View style={{alignItems:'center', width:'100%', height:100, backgroundColor:'white', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>01.11.2018</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/arrow_up.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    <Text style={{ color:'green', fontWeight:'bold', fontSize:22}}>0.55 %</Text>
                </View>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>100 CHF</Text>
            </View>
            <View style={{alignItems:'center', width:'100%', height:100, backgroundColor:'#eaeaea', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>01.10.2018</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/arrow_up.png')} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    <Text style={{ color:'green', fontWeight:'bold', fontSize:22}}>1.06 %</Text>
                </View>
                <Text style={{flex:1, color:'black', textAlign:'center', fontSize:18}}>100 CHF</Text>
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
  menu_icon: {
    width: 45,
    height: 45,
  },
});