/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Button,
  Text,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Linking
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";

import SignIn from "./screens/SignIn";
import Main from "./screens/Main";
import Demo from "./screens/Demo";
import FAQ from "./screens/Faq";
import Login from "./screens/Login";
import Details from "./screens/Details";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import { TouchableHighlight } from "react-native-gesture-handler";
import walletGenerator from "react-native-ethereum-wallets";

//global.Buffer = require('buffer').Buffer;

// AuthLoadingScreen checks if a wallet already exists
// - if yes -> redirects to the app main view
// - if no -> redirects to the CreateWallet view
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // check if a wallet was already created
    const walletCreated = await AsyncStorage.getItem("walletcreatedpk");

    if (!walletCreated) {
      walletGenerator.createPrivateKey().then(privateKey => {
        AsyncStorage.setItem("walletcreatedpk", privateKey);
      });
    }
    AsyncStorage.setItem("exchangeparams", "100CHF-" + new Date());


    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(walletCreated ? 'App' : 'Auth');

    // this.props.navigation.navigate(walletCreated ? 'App' : 'Auth');
    this.props.navigation.navigate(walletCreated ? "App" : "App");
    // this.props.navigation.navigate(walletCreated ? 'Auth' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 2, backgroundColor: "#273040" }}>
    <View style={{ flex: 1, paddingTop: 100 }}>
      <DrawerItems {...props} />
    </View>
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        justifyContent: "flex-end",
        bottom: 30
      }}
    >
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("SignIn");
        }}
        underlayColor={"#273040"}
      >
        <Image
          source={require("./resources/images/relai_logo.png")}
          resizeMode={"contain"}
          style={{ width: 150, height: 150 }}
        />
      </TouchableHighlight>
    </View>
  </View>
);

// The Stack for modals
const MainStack = createStackNavigator(
  {
    Main: {
      path: "/",
      screen: Main
    },
    Details: {
      path: "/",
      screen: Details
    }
  },
  {
    headerMode: "none"
  }
);

// MainDrawerMenu
const MainDrawerMenu = createDrawerNavigator(
  {
    // TransactionsHistory : {
    //   path: '/',
    //   screen: TxStack,
    //   navigationOptions: {
    //     drawerLabel: 'WALLET',
    //     drawerIcon: ({ tintColor }) => (
    //       <Image source={require('./resources/images/wallet_icon.png')} resizeMode={"contain"}  style={{width:45, height:45}}/>
    //     ),
    //     // drawerLabel: 'Settings',
    //     // drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    //   },
    // },
    Learn: { screen: FAQ },
    Simulate: { screen: Demo },

    Invest: {
      screen: MainStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./resources/images/wallet_menu.png")}
            resizeMode={"contain"}
            style={{ width: 45, height: 45 }}
          />
        )
        // drawerLabel: 'Settings',
        // drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
      }
    }
  },
  {
    initialRouteName: "Invest",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      labelStyle: {
        color: "white",
        fontWeight: "normal",
        fontSize: 20,
        alignItems: "center"
      },
      itemStyle: {
        height: 70,
        paddingLeft: 10
      }
    }
  }
);

// The Stack for modals
const RootStack = createStackNavigator(
  {
    MainDrawer: {
      screen: MainDrawerMenu
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

// Stack Navigator for wallet creation process
const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    Login: { screen: Login },
    Onboarding1: { screen: Onboarding1 },
    Onboarding2: { screen: Onboarding2 },
    Onboarding3: { screen: Onboarding3 }
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none"
  }
);

// const AuthStack = StackNavigator({ SignIn: CreateWallet });
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
