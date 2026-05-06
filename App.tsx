import 'react-native-screens';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import { RootNavigator } from './src/navigation/RootNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@constants/toastConfig';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent // Android transparent
      />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
      <Toast swipeable={true} config={toastConfig} />
    </SafeAreaProvider>
  );
}

export default App;
