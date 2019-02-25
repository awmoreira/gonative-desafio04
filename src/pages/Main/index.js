import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoryActions } from '../../store/ducks/category';
import { Creators as CatProductsActions } from '../../store/ducks/catProducts';

import styles from './styles';
import ProductItem from './components/ProductItem';

class Main extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  };

  categoriesLoaded = false;

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getCategoryRequest: PropTypes.func.isRequired,
    category: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    getCatProductsRequest: PropTypes.func.isRequired,
    catProducts: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getCategoryRequest } = this.props;

    getCategoryRequest();
  }

  componentDidUpdate(prevProps) {
    if (!this.categoriesLoaded) {
      const { category } = this.props;

      if (category.data.length > 0) {
        this.categoriesLoaded = true;

        const { getCatProductsRequest } = prevProps;

        getCatProductsRequest(category.data[0].id);
      }
    }
  }

  render() {
    const {
      category, catProducts, navigation, getCatProductsRequest,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.categoryBar}>
          {!category.loading && (
            <FlatList
              style={styles.categoryList}
              data={category.data}
              extraData={catProducts.id}
              keyExtractor={category => String(category.id)}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    getCatProductsRequest(item.id);
                  }}
                  style={
                    catProducts.id === item.id
                      ? [styles.category, styles.activeCategory]
                      : styles.category
                  }
                >
                  <Text
                    style={
                      catProducts.id === item.id
                        ? [styles.categoryText, styles.activeCategoryText]
                        : styles.categoryText
                    }
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        {(category.loading || catProducts.loading) && (
          <ActivityIndicator size="small" color="#C0C0C0" style={styles.loading} />
        )}

        {!catProducts.loading && (
          <FlatList
            data={catProducts.data}
            keyExtractor={product => String(product.id)}
            numColumns={2}
            columnWrapperStyle={styles.columnContainer}
            contentContainerStyle={styles.productList}
            renderItem={({ item }) => (
              <ProductItem
                onPress={() => {
                  navigation.navigate('Product', { productId: item.id });
                }}
                product={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
  catProducts: state.catProducts,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...CategoryActions,
    ...CatProductsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
