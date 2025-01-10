import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { splashScreenStyles } from '../../Styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the main screen after a delay
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace 'Home' with your target screen
    }, 3000); // 3 seconds delay for splash screen

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={splashScreenStyles.container}>
      <Image 
        source={require('../../assets/logo (3).png')}
        style={splashScreenStyles.logo}
      />
    </View>
  );
};

export default SplashScreen;
