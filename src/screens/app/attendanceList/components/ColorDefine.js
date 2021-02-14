import React from "react";
import { StyleSheet, Text, View } from "react-native";


function ColorDefine({ data }) {

  return (
    <>
      <View style={styles.def}>

        <View style={styles.defStyle}>
            <Text>Present</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#F75A5A'}]}>
            <Text>Absent</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#F5A328'}]}>
            <Text>Late</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#DCDCDC'}]}>
            <Text>Off Day</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#6EC3F3'}]}>
            <Text>Holiday</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#AC88D5'}]}>
            <Text>Leave</Text>
        </View>
        <View style={[styles.defStyle,{backgroundColor:'#60F5C8'}]}>
            <Text>Unprocessed</Text>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    def:{
        
        backgroundColor:'#ffffff',
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap',
        

    },
    defStyle:{
      backgroundColor:'#33D449',
      
      borderRadius:8,
      padding:10,
      alignItems:'center',
      margin:3
      
      

    }


  
});

export default ColorDefine;
