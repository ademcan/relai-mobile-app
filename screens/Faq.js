import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import PaginationIndicator from '../components/PaginationIndicator';
import Walkthrough from '../components/Walkthrough';
import Faq1 from './Faq1';
import Faq2 from './Faq2';
import Faq3 from './Faq3';

export default class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    changeIndex(index) {
      this.setState({index})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 200, backgroundColor:"#253041", paddingTop: 50}}>
            <TouchableHighlight style={{paddingLeft:20}} onPress={() => this.props.navigation.openDrawer()} underlayColor={"#253041"}>
                <Image source={require('../resources/images/sandwich_icon.png')} resizeMode="contain" style={{ height: 25, width: 25 }} />
            </TouchableHighlight>
            <Text style={{color:"white", textAlign:'center', fontSize: 28, paddingTop: 30}}>How it works</Text>
        </View>

        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
            <Faq1/>
            <Faq2/>
            <Faq3/>
        </Walkthrough>

        <View style={{alignItems:'center', flex:0.1}}>
            <PaginationIndicator style={{marginTop:10}} length={3} current={this.state.index} />
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