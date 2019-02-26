import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  activeCategory: {
    borderBottomWidth: 5,
    borderColor: colors.white,
    paddingTop: 5,
  },

  activeCategoryText: {
    opacity: 1,
  },
  category: {
    justifyContent: 'center',
    marginRight: 30,
  },
  categoryBar: {
    backgroundColor: colors.primary,
    height: 54,
  },

  categoryList: {
    paddingHorizontal: metrics.basePadding,
  },
  categoryText: {
    color: colors.white,
    fontWeight: 'bold',
    opacity: 0.6,
    // textTransform: 'uppercase',
  },
  columnContainer: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.basePadding,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  loading: {
    marginTop: metrics.basePadding,
  },

  productList: {
    paddingBottom: metrics.basePadding,
    paddingTop: metrics.baseMargin,
  },
});

export default styles;
