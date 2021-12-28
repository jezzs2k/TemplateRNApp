import { StyleSheet } from 'react-native';

const Theme = StyleSheet.create({
  boxShadow01: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  containerScreen: {
    paddingHorizontal: 22,
  },
  rootFontFamily: { fontFamily: 'Rubik-Regular' },
});

export default Theme;
