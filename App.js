import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import FacebookLogin from './src/FacebookLogin';
import MainScreen from './src/HomeScreen'

const navigator = createStackNavigator(
  {
    FbLogin: FacebookLogin,
    Main: MainScreen

  }, {

  initialRouteName: 'FbLogin',
  headerMode: 'none',
  defaultNavigationOptions: {
    title: 'App',

  }

}
);

export default createAppContainer(navigator);