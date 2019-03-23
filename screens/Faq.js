import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PaginationIndicator from '../components/PaginationIndicator';
import Walkthrough from '../components/Walkthrough';
import Faq1 from './Faq1';

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
        <View style={{height: 200, backgroundColor:"#222b3a", paddingTop: 100}}>
            <Text style={{color:"white", textAlign:'center', fontSize: 28}}>FAQ</Text>
        </View>

        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
            <Faq1/>
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