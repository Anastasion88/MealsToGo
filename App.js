import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import styled from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

// const isAndroid = Platform.OS === 'android';

export default function App() {
  const [oswaldLoadded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoadded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoadded || !latoLoadded) {
    return null;
  }

  // <></>- fragments allow to render 2 elements side by side without wrapping in another container
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
