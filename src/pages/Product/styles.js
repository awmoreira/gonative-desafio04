import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.light,
  },
  image: {
    height: 285,
    resizeMode: 'contain',
  },
  box: {
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  detail: {
    flex: 1,
  },
  info: {
    marginTop: metrics.baseMargin + 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { color: colors.black, fontSize: 16, fontWeight: 'bold' },
  brand: { color: colors.dark, fontSize: 14 },
  price: { color: colors.secondary, fontSize: 26, fontWeight: 'bold' },
  button: {
    height: 45,
    marginTop: metrics.basePadding,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
