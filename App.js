import React, { useEffect,useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import RNBootSplash from "react-native-bootsplash";
import { Root } from 'native-base'
// import { getGlobalData } from './src/common/functions/localStorage';


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
      <Root>
        <RootNavigation />
      </Root>
    </>
  );
}



