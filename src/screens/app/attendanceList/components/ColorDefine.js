import React from "react";
import { StyleSheet, Text, View } from "react-native";


function ColorDefine({ data }) {

  return (
    <>
      <View style={styles.def}>

        <View style={{flexDirection:'row'}}>

          <View style={styles.defStyle}>
            <Text>Present</Text>
          </View>
          <View style={[styles.defStyle, { backgroundColor: '#F75A5A' }]}>
            <Text>Absent</Text>
          </View>
          <View style={[styles.defStyle, { backgroundColor: '#F5A328' }]}>
            <Text>Late</Text>
          </View>

        </View>
        <View  style={{flexDirection:'row'}}>
          <View style={[styles.defStyle, { backgroundColor: '#DCDCDC' }]}>
            <Text>Off Day</Text>
          </View>
          <View style={[styles.defStyle, { backgroundColor: '#6EC3F3' }]}>
            <Text>Holiday</Text>
          </View>
          <View style={[styles.defStyle, { backgroundColor: '#AC88D5' }]}>
            <Text>Leave</Text>
          </View>

        </View>






      </View>
    </>
  );
}

const styles = StyleSheet.create({
  def: {

    backgroundColor: '#ffffff',
    // justifyContent:'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10

  },
  defStyle: {
    backgroundColor: '#33D449',

    borderRadius: 8,
    // paddingHorizontal:"5%",
     paddingVertical:8,
    alignItems: 'center',
    margin: 3,
    width:"31.5%",
    // height:"60%"



  }



});

export default ColorDefine;
