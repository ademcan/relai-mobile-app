import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Modal,
  TextInput
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  decodeTransaction,
  getTxFields,
  toAddress,
  serialize,
  unserialize,
  ec,
  sign,
  ecsign,
  hash,
  fromPhrase
} from "../crypto-common.ts";

global.Buffer = require("buffer").Buffer;

export default class Onboarding3 extends Component {
  state = {
    amount: "",
    loading: false,
    isVisible: false
  };

  confirm = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 5000);
    setTimeout(() => {
      this.props.navigation.navigate("Main");
    }, 6000);
  };

  componentWillMount() {
    AsyncStorage.getItem("walletcreatedpk", (err, privateKey) => {
      AsyncStorage.getItem("exchangeparams", (err, dataToSign) => {
        const dataToSignHash = hash(new Buffer(dataToSign));
        const signedTx = ecsign(dataToSignHash, privateKey);
        const message = signedTx.r
          .toString("hex")
          .substring(0, 6)
          .toUpperCase();
        this.setState({ sig: message });
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1 }}>
          <Modal visible={this.state.isVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../resources/images/check.png")}
                resizeMode={"contain"}
                style={{ width: 300, height: 300 }}
              />
            </View>
          </Modal>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={require("../resources/images/loading.gif")}
              resizeMode={"contain"}
              style={{ width: 300, height: 300 }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: "center", fontSize: 28, color: "#253041" }}>
            Prepare your recurrent payment
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#253041",
              paddingTop: 30
            }}
          >
            Amount
          </Text>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#253041" }}>
            100 CHF
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#253041",
              paddingTop: 30
            }}
          >
            Occurence
          </Text>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#253041" }}>
            Monthy
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#253041",
              paddingTop: 30
            }}
          >
            Recipient account
          </Text>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#253041" }}>
            IBAN DE07700222000020041966 SWIFT/BIC FDDODEMMXXX
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#253041",
              paddingTop: 30
            }}
          >
            Communication
          </Text>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#253041" }}>
            {this.state.sig}
          </Text>

          <View style={{ alignItems: "center", paddingTop: 40 }}>
            <TouchableHighlight
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#253041",
                justifyContent: "center"
              }}
              onPress={() => this.confirm()}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 18 }}
              >
                Done
              </Text>
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
    paddingTop: 200
  }
});
