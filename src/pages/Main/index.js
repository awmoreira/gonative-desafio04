import React from 'react';
import PropTypes from 'prop-types';

import { View, StatusBar, FlatList } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import ProductItem from './components/ProductItem';

const categoryProducts = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
];

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <FlatList
      data={categoryProducts}
      keyExtractor={catProduct => String(catProduct.id)}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductItem
          onPress={() => navigation.navigate('Product', { product: item })}
          product={item}
        />
      )}
    />
  </View>
);

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

export default Main;
