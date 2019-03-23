import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

export default class Intro3 extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Image/>
            <Image source={require('../resources/images/graph_icon.png')} resizeMode={"contain"}  style={{width:300, height:300}}/>
        </View>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>Foolow your progress </Text>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>and your earnings</Text>

        <View style={{alignItems:'center', paddingTop: 40}}>
            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center'}} onPress={ () => this.props.navigation.navigate("Login") }>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center', marginTop:20}}>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Sign up</Text>
            </TouchableHighlight>

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