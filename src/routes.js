import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { colors } from './styles';

import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';

const Tabs = createBottomTabNavigator(
  {
    Main,
    Cart,
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
      showLabel: false,
    },
  },
);

const Stack = createStackNavigator(
  {
    Main: {
      screen: Tabs,
    },
    Product: { screen: Product },
  },
  {
    initialRouteName: 'Main',
  },
);

const Routes = createAppContainer(Stack);

export default Routes;
