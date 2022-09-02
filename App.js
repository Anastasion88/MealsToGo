import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { View, Text } from 'react-native';
import { SafeArea } from './src/components/utils/safe-area.component';

// const isAndroid = Platform.OS === 'android';

function RestaurantScreen() {
  return <RestaurantsScreen />;
}

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

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
  // <RestaurantsScreen />
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
