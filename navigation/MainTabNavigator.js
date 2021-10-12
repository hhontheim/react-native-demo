import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DemoScreen from '../screens/DemoScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home` // `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-settings` // `ios-home${focused ? '' : '-outline'}`
          : 'md-settings'
      }
    />
  ),
};

const DemoStack = createStackNavigator({
  Settings: DemoScreen
})

DemoStack.navigationOptions = {
  tabBarLabel: 'Demo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard` // `ios-home${focused ? '' : '-outline'}`
          : 'md-settings'
      }
    />
  ),
};

WelcomeStack = createStackNavigator({
  Welcome: WelcomeScreen
})

WelcomeStack.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star${focused ? '' : '-outline'}`
          : 'md-star'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  DemoStack,
  WelcomeStack,
});
