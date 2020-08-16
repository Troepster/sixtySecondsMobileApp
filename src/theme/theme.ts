import {configureFonts, DefaultTheme, Theme} from 'react-native-paper';
import {Fonts} from 'react-native-paper/lib/typescript/src/types';

const fontConfig : {default: Fonts} = {
  default: {
    regular: {
      fontFamily: 'Poppins-SemiBold',
    },
    medium: {
      fontFamily: 'Poppins-SemiBold',
    },
    light: {
      fontFamily: 'Poppins-SemiBold',
    },
    thin: {
      fontFamily: 'Poppins-SemiBold',
    },
  },
};

export const defaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3E98E0',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
    accent: '#3E98E0'
  },
  fonts: configureFonts(fontConfig),
}
