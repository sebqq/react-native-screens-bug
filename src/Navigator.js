import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TapBarIcon from './TapBarIcon';
import {FirstScreen, SecondScreen, ThirdScreen} from './Screens';

const FirstStack = createStackNavigator(
  {
    screen1: FirstScreen,
    screen2: SecondScreen,
  },
  {initialRouteName: 'screen1'},
);

const SecondStack = createStackNavigator(
  {
    screen3: ThirdScreen,
  },
  {initialRouteName: 'screen3'},
);

const BaseNavigator = createBottomTabNavigator(
  {
    First: {
      screen: FirstStack,
      navigationOptions: () => ({
        title: 'First Stack',
      }),
    },
    Second: {
      screen: SecondStack,
      navigationOptions: () => ({
        title: 'Second Stack',
      }),
    },
  },
  {
    initialRouteName: 'First',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => (
        <TapBarIcon
          horizontal={horizontal}
          navigation={navigation}
          tintColor={tintColor}
        />
      ),
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      style: {
        backgroundColor: 'rgb(215,215,215)',
      },
    },
  },
);

export default createAppContainer(BaseNavigator);
