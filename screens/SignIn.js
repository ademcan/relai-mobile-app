import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PaginationIndicator from '../components/PaginationIndicator';
import Walkthrough from '../components/Walkthrough';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';


export default class SignIn extends Component {

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
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
            <Intro1 navigation={this.props.navigation}/>
            <Intro2 navigation={this.props.navigation}/>
            <Intro3 navigation={this.props.navigation}/>
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
    paddingTop:200
  },
});