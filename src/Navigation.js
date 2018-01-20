import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Welcome, SignIn, SignUp, Home, Example } from './screens';
import { Header } from './components';

// Tab Navigation doesn't render a header, so we render it for it!
const renderHeader = (Screen, headerText) => {
  return StackNavigator({
    SinglePage: {
      screen: Screen,
      navigationOptions: () => ({
        header: <Header text={headerText} />
      }),
    }
  });
};

// This navigator is used after we are authenticated and shows our tab bar
export const TabNav = TabNavigator(
  {
    Home: {
      screen: renderHeader(Home, 'Home'),
      navigationOptions: {
        tabBarLabel: 'Home',
        // tabBarIcon: ({ tintColor, focused }) => (
        //   <Ionicons
        //     name={focused ? 'ios-home' : 'ios-home-outline'}
        //     size={26}
        //     style={{ color: tintColor }}
        //   />
        // ),
      },
    },
    Example: {
      screen: renderHeader(Example, 'Example Page'),
      navigationOptions: {
        tabBarLabel: 'Example',
        // tabBarIcon: ({ tintColor, focused }) => (
        //   <Ionicons
        //     name={focused ? 'ios-home' : 'ios-home-outline'}
        //     size={26}
        //     style={{ color: tintColor }}
        //   />
        // ),
      },
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

// This navigator is used initially to move around via buttons without a tab bar
export const Nav = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      header: <Header text='My App!' />
    }),
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: <Header text='Sign In' />
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: <Header text='Sign Up' />
    },
  },
  ProtectedPages: {
    screen: TabNav,
  },
});
