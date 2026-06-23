import { StyleSheet } from 'react-native';
import { colours } from '../constants/colours';
import { fonts } from '../constants/fonts';

export const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colours.background,
    alignItems: 'center'
  },
  regularFont: {
    fontFamily: fonts.regular
  }
});

