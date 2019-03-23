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
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>Follow your progress </Text>
        <Text style={{textAlign:'center', fontSize:24, color:"#253041"}}>and your earnings</Text>

        <View style={{alignItems:'center', paddingTop: 40}}>
            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center'}} onPress={ () => this.props.navigation.navigate("Onboarding1") }>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Let's start</Text>
            </TouchableHighlight>
        </View>

        <View style={{alignItems:'center', paddingTop: 10}}>
            <TouchableHighlight style={{width:300, height:50, backgroundColor: "#253041", justifyContent:'center'}} onPress={ () => this.props.navigation.navigate("Learn") }>
                <Text style={{color:"white",textAlign:'center', fontSize: 18}}>Learn more about investing</Text>
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