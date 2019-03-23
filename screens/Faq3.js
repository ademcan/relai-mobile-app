import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from "react-native";

export default class Faq3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            paddingTop: 50,
            paddingLeft: 20,
            paddingright: 20
          }}
        >
          <Text style={{ fontSize: 40, paddingBottom: 10 }}>
            Cryptocurrency Wallet Guide: A Step-By-Step Tutorial
          </Text>
          <Text style={{ fontSize: 20 }}>
            Use this straightforward guide to learn what a cryptocurrency wallet
            is, how they work and discover which ones are the best on the
            market. If you are looking for something a bit more in detail about
            cryptocurrencies please check out our course on it. What is a
            Cryptocurrency Wallet?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
