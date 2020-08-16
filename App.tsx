import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {defaultTheme} from './src/theme/theme';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/state';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import moment from 'moment';

// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

moment.updateLocale('en', {
  relativeTime : {
    past: function(input) {
      return input === 'just now'
        ? input
        : input + ' ago'
    },
    s  : 'just now',
    future: "in %s",
    ss : '%d seconds',
    m:  "a minute",
    mm: "%d minutes",
    h:  "an hour",
    hh: "%d hours",
    d:  "a day",
    dd: "%d days",
    M:  "a month",
    MM: "%d months",
    y:  "a year",
    yy: "%d years"
  }
});

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 0);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <PaperProvider theme={defaultTheme}>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;


/* Fonts

Avenir Next
AvenirNext-Medium
AvenirNext-DemiBoldItalic
AvenirNext-DemiBold
AvenirNext-HeavyItalic
AvenirNext-Regular
AvenirNext-Italic
AvenirNext-MediumItalic
AvenirNext-UltraLightItalic
AvenirNext-BoldItalic
AvenirNext-Heavy
AvenirNext-Bold
AvenirNext-UltraLight

 */
