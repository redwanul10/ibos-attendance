import React from 'react';
import {View,StyleSheet} from 'react-native';
import colors from '../theme/colors';

const ISeperator = () => {
  
  return (
    <>
      <View style={style.seperator}></View>
    </>
  );
};

export default ISeperator;

const style = StyleSheet.create({
    seperator:{
        marginVertical:20,
        width:"70%",
        borderBottomColor: colors.BORDER_COLOR_2,
        borderBottomWidth:1,
        alignSelf:"center"
        
    }
})


