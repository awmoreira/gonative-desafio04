import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from './styles';

import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
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
