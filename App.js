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
import { Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

// const isAndroid = Platform.OS === 'android';

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

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen
                name="Restaurants"
                options={{ headerShown: false }}
                component={RestaurantsScreen}
              />
              <Tab.Screen
                name="Map"
                options={{ headerShown: false }}
                component={Map}
              />
              <Tab.Screen
                name="Settings"
                options={{ headerShown: false }}
                component={Settings}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
