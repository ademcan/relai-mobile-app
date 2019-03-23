import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class Login extends Component {

  state={
    email: '',
    pwd: ''
  }

  onEmailChange = (email) => {
    this.setState({email : email})
  }

  onPwdChange = (pwd) => {
    this.setState({pwd : pwd})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>Welcome to Relai</Text>
        <View style={{alignItems:'center', paddingTop:50}}>
          <View>
            <TextInput onChangeText={text => this.onPwdChange(text)} secureTextEntry={true} style={{width: 300, backgroundColor: 'white', height: 50, borderColor: 'black', borderWidth: 1,  justifyContent:'center'}} placeholder='Email'/>
          </View>
          <View style={{paddingTop:30}}>
            <TextInput onChangeText={text => this.onPwdChange(text)} secureTextEntry={true} style={{ width: 300, backgroundColor: 'white', height: 50, borderColor: 'black', borderWidth: 1,   justifyContent:'center'}} placeholder='Password'/>
          </View>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate("Main")}} style={{width:300, height:60, backgroundColor: "#253041", justifyContent:'center', marginTop:30}}>
            <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Login</Text>
          </TouchableHighlight>
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