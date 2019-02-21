import React from 'react';

import { View } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

const Main = () => <View />;

Main.navigationOptions = () => ({
  title: 'GoCommerce',
  headerTitleStyle: {
    color: colors.primary,
    textAlign: 'center',
    flex: 1,
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
});

export default Main;
