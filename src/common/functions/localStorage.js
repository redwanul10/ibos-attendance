import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeGlobalData = async (value,key="iBosApp") => {
    const jsonValue = JSON.stringify(value)
    try {
      await AsyncStorage.setItem(key, jsonValue)
    } catch (err) {
      console.log(err)
    }
}


export const getGlobalData = async (key = "iBosApp") => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return JSON.parse(value)
      }
    } catch(e) {
        console.log(err)
    }
  }

