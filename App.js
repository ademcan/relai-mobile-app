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

import React, {Component} from 'react';
import { Button, Text, ImageBackground, ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Image, Linking } from 'react-native';
import { createStackNavigator , createDrawerNavigator, createSwitchNavigator, DrawerItems, createAppContainer } from 'react-navigation';


import SignIn from './screens/SignIn';
import Main from './screens/Main';
import Demo from './screens/Demo';
import FAQ from './screens/Faq';
import Login from './screens/Login';
import Details from './screens/Details';

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
  const walletCreated = await AsyncStorage.getItem('walletcreated');
  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  // this.props.navigation.navigate(walletCreated ? 'App' : 'Auth');

  // this.props.navigation.navigate(walletCreated ? 'App' : 'Auth');
  this.props.navigation.navigate(walletCreated ? 'App' : 'App');
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
  <View style={{ flex: 2, backgroundColor: '#222b3a'}}>
    <View style={{flex:1, paddingTop: 100}}>
      <DrawerItems {...props}/>
    </View>
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'flex-end', bottom: 30}}>
      <Image source={require('./resources/images/relai_logo.jpg')} resizeMode={"contain"}  style={{width:150, height:150}}/>
    </View>
  </View>
)


// The Stack for modals
const MainStack = createStackNavigator(
  {
    Main : {
      path: '/',
      screen: Main
    },
    Details : {
      path: '/',
      screen: Details
  },
  },
  {
    headerMode: 'none',
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
    Main: { screen: MainStack },
    Demo: { screen: Demo },
    FAQ: { screen: FAQ },
  },
  {
    initialRouteName: 'Main',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 20,
        alignItems: 'center',
      },
      itemStyle : {
        height: 70,
        paddingLeft: 10,
      },
    },
  },
);

// The Stack for modals
const RootStack = createStackNavigator(
  {
    MainDrawer: {
      screen: MainDrawerMenu,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

// Stack Navigator for wallet creation process
const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    Login: { screen: Login},
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);

// const AuthStack = StackNavigator({ SignIn: CreateWallet });
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
