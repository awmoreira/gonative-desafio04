import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from './styles';

import Main from './pages/Main';
import Product from './pages/Product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.secondary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
