import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from './styles';

import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';

const StackMain = createStackNavigator(
  {
    Main: { screen: Main },
    Product: { screen: Product },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerBackTitle: null,
    },
  },
);

const StackCart = createStackNavigator(
  {
    Cart: { screen: Cart },
  },
  {
    initialRouteName: 'Cart',
    navigationOptions: {
      headerBackTitle: null,
    },
  },
);

const App = createBottomTabNavigator(
  {
    Main: {
      screen: StackMain,
    },
    Cart: {
      screen: StackCart,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Main') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = Icon;
        } else if (routeName === 'Cart') {
          iconName = 'shopping-cart';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

const Routes = createAppContainer(App);

export default Routes;
