import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

const Product = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.info}>
        <View style={styles.detail}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
        </View>
        <Text style={styles.price}>{`R$ ${product.price}`}</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Product.propTypes = {
//   product: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     brand: PropTypes.string,
//   }).isRequired,
//   addProduct: PropTypes.func.isRequired,
// };

Product.navigationOptions = () => ({
  title: 'Detalhe do produto',
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

export default Product;
