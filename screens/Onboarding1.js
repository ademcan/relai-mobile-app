import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActionSheetIOS,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class Onboarding1 extends Component {

  state={
    amount: '',
    freq:''
  }

  onAmountChange = (amount) => {
    this.setState({amount : amount})
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
        {
        options: ['Cancel', 'Weekly', "Monthly"],
        
        cancelButtonIndex: 0,
        },
        (buttonIndex) => {
        if (buttonIndex === 1) {
            this.setState({freq:"Weekly"})
        }
        else {
            this.setState({freq:"Monthly"})
        }
        },
    );  
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:28, color:"#253041"}}>Let's start</Text>
        <View style={{alignItems:'center', paddingTop:50}}>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>How much would you like to invest on a monthly basis?</Text>
          <View>
          <View style={{paddingTop:30}}>
            <TextInput keyboardType={'numeric'} onChangeText={text => this.onAmountChange(text)} style={{ width: 300, backgroundColor: 'white', height: 50, borderColor: 'black', borderWidth: 1,   justifyContent:'center', alignItems:'center', fontSize:24, textAlign:'center'}} placeholder='- CHF'/>
          </View>

          <Button title="Frequency" onPress={this.showActionSheet}/>
          <Text style={{textAlign:'center', fontSize:24}}>{this.state.freq}</Text>
        </View>
        <View style={{alignItems:'center', paddingTop: 40}}>
            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center'}} onPress={ () => this.props.navigation.navigate("Onboarding2") }>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Connect to my bank</Text>
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