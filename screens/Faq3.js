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
        <View style={{alignItems:'center', paddingTop: 50, paddingLeft: 20,paddingright: 20}}>
          <Text style={{ fontSize: 40, paddingBottom: 10 }}>
            How Bitcoin Volatility Shapes the Crypto Asset Class
          </Text>
          <Text style={{ fontSize: 20 }}>
            “Volatility” is often misconstrued as being synonymous with “risk.”
            Before we dive into the details of Bitcoin’s volatility, we need to
            recognize to take a step back and understand why this is a gross
            oversimplification. Volatility is a technical measure of the
            magnitude of an asset’s price fluctuation in a defined time
            interval.{" "}
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
