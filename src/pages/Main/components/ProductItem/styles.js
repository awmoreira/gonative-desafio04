import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.dark,
    fontSize: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexGrow: 1,
    flexBasis: 0,
    margin: metrics.basePadding / 2,
    marginHorizontal: metrics.basePadding / 2,
    // width: '50%',
  },
  image: {
    height: 250,
    marginTop: metrics.basePadding / 2,
    width: '100%',
  },
  info: {
    // flex: 1,
    padding: metrics.basePadding,
  },
  name: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },
});

export default styles;
