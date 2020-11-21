import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import RNBootSplash from "react-native-bootsplash";


export default function App() {

  useEffect(() => {
    hideSplashScreen()
    // StatusBar.setTranslucent(true)
    // StatusBar.setBackgroundColor("red")

  }, [])

  const hideSplashScreen = async () => {
    await RNBootSplash.hide({ fade: true });
  }

  return (
    <>
      <RootNavigation />
    </>
  );
}



