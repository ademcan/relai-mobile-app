import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Modal,
  TextInput
} from 'react-native';

export default class Onboarding3 extends Component {

  state={
    amount: '',
    loading: false,
    isVisible: false
  }

  onAmountChange = (amount) => {
    this.setState({amount : amount})
  }

  confirm = () => {
    this.setState({loading:true}); 
    setTimeout( () => {this.setState({isVisible:true})} ,5000);
    setTimeout( () => {this.props.navigation.navigate("Main")} ,6000);
  }

  render() {
      if (this.state.loading){
          return(
            <View style={{flex:1}}>
                <Modal visible = {this.state.isVisible}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../resources/images/check.png')} resizeMode={"contain"}  style={{width:300, height:300}}/>
                    </View>
                </Modal>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../resources/images/loading.gif')} resizeMode={"contain"}  style={{width:300, height:300}}/>
                </View>
            </View>
          );
      }
      else {
          return(
            <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:28, color:"#253041"}}>Prepare your recurrent payment</Text>
            <Text style={{textAlign:'center', fontSize:20, color:"#253041", paddingTop:30}}>Amount</Text>
            <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>100 CHF</Text>
            <Text style={{textAlign:'center', fontSize:20, color:"#253041", paddingTop:30}}>Occurence</Text>
            <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>Monthy</Text>
            <Text style={{textAlign:'center', fontSize:20, color:"#253041", paddingTop:30}}>Recipient account</Text>
            <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>IBAN
DE07700222000020041966
SWIFT/BIC
FDDODEMMXXX</Text>
            <Text style={{textAlign:'center', fontSize:20, color:"#253041", paddingTop:30}}>Communication</Text>
            <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>23xDfrDqq09l3l14li872kd</Text>


            <View style={{alignItems:'center', paddingTop: 40}}>
                <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center'}} onPress={ () => this.confirm()  }>
                    <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Done</Text>
                </TouchableHighlight>
            </View>

        </View>
          );
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:200

  },
});