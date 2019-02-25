import React from 'react';
import PropTypes from 'prop-types';

import { View, StatusBar, FlatList } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import CartItem from './components/CartItem';

const Cart = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    {/* <FlatList
      data={}
      keyExtractor={product => String(product.id)}
      renderItem={({ item }) => (
        <CartItem
          onPress={() => navigation.navigate('Product', { product: item })}
          product={item}
        />
      )}
    /> */}
  </View>
);

Cart.navigationOptions = () => ({
  title: 'Carrinho',
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

// Main.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
//   categoryProducts: PropTypes.shape({
//     products: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number,
//       }),
//     ),
//   }).isRequired,
// };

export default Cart;
