import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Alert, BackHandler, Linking } from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import RNBootSplash from "react-native-bootsplash";
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import { Root } from 'native-base'
import VersionCheck from 'react-native-version-check';
// import { getGlobalData } from './src/common/functions/localStorage';


export default function App() {

  // RNBootSplash.hide()

  useEffect(() => {
    hideSplashScreen()
    // StatusBar.setTranslucent(true)
    // StatusBar.setBackgroundColor("red")


  }, [])
  useEffect(() => {
    checkUpdateNeeded();
  }, []);

  const hideSplashScreen = async () => {

    await RNBootSplash.hide({ fade: true });
  }

  const checkUpdateNeeded = async () =>{
    try{
      let updateNeeded = await VersionCheck.needUpdate();
      if(updateNeeded && updateNeeded.isNeeded){
        Alert.alert(
          'Please update',
          [
            {
              text: 'Update',
              onPress:()=>{
                BackHandler.exitApp();
                Linking.openURL(updateNeeded.storeUrl);

              },

          },
        ],
        {cancelable:false},
        );
      }
    }catch(error){}
  }

  return (
    <>
      <Root>
        <RootNavigation />
      </Root>
    </>
  );
}



