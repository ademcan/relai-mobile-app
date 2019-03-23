import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

export default class Onboarding2 extends Component {

  state={
    amount: '',
  }

  onAmountChange = (amount) => {
    this.setState({amount : amount})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:28, color:"#253041"}}>Choose your bank</Text>
        <View style={{alignItems:'center', paddingTop:50}}>
          <View>
              <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
              <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center'}}>
                <Image source={require('../resources/images/julius_bar.png')} resizeMode={"contain"}  style={{width:300, height:50}}/>
            </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
            <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center', marginTop: 20}}>
          <Image source={require('../resources/images/bank_lenzburg.png')} resizeMode={"contain"}  style={{width:300, height:50}}/>
          </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
          <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center', marginTop: 20}}>
          <Image source={require('../resources/images/cler.png')} resizeMode={"contain"}  style={{width:300, height:50}}/>
          </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
          <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center', marginTop: 20}}>
          <Image source={require('../resources/images/ubs.png')} resizeMode={"contain"}  style={{width:300, height:50}}/>
          </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
          <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center', marginTop: 20}}>
          <Image source={require('../resources/images/credit_suisse.png')} resizeMode={"contain"}  style={{width:300, height:50}}/>
          </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate("Onboarding3")}} underlayColor={'white'}>
          <View style={{widht:320, height:60, borderColor:'lightgray', borderWidth:1, justifyContent:'center', marginTop: 20}}>
            <Text style={{textAlign:'center', fontSize:20}}>Others</Text>
          </View>
          </TouchableHighlight>

        </View>

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