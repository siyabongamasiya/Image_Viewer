import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Presentation/SplashScreen/SplashScreen';
import HomeScreen from './Presentation/HomeScreen/HomeScreen';
import ImageViewScreen from './Presentation/ImageViewScreen/ImageViewScreen';
import { primary } from './Styles';

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen options={{ headerShown: false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false}}  name="ImageView" component={ImageViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}