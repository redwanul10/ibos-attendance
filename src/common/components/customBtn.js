import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const CustomBtn = (props) => {
  const {title, PressAction} = props;
  return (
    <>
      <TouchableOpacity onPress={PressAction} >
        <Text style={style.button}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
    button: {
        fontSize: 20,
        backgroundColor:"#66DBA8",
        color:"white",
        height: 50,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default CustomBtn;
