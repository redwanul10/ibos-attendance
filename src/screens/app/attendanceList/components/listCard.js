import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ListCard(props) {
    return (
      <>
        <View style={styles.card}>
          <View style={{ alignItems: "flex-end",marginTop:10,marginRight:10 }}>
            <Text>Early Leave</Text>
          </View>
          <View style={styles.cardContent}>
            {/* {props.children} */}
            <View>
              <Text style={styles.dateStyle}>01/07/2020</Text>
            </View>
  
            <View style={{flexDirection:"row"}}>
              <View style={styles.timeMargin}>
                <Text style={styles.fontWeight}>In Time</Text>
                <Text>09:00:34</Text>
              </View>
  
              <View style={styles.timeMargin}>
                <Text style={styles.fontWeight}>Out Time</Text>
                <Text>09:00:34</Text>
              </View>
  
              <View style={styles.timeMargin}>
                <Text style={styles.fontWeight}>Over Time</Text>
                <Text>09:00:34</Text>
              </View>
  
              <View style={styles.attendanceInfo}>
                <Text>Present</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 6,
      backgroundColor: "#fff",
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      // height:100
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 10,
      
    },
    attendanceInfo: {
      backgroundColor: "#B3FFD6",
      padding: 5,
      borderRadius: 4,
      // marginTop: 10,
      marginLeft: 12 + "%",
      // height:30
      
    },
    fontWeight: {
      fontWeight: "bold"
    },
    dateStyle: {
      // fontWeight: "bold",
      fontSize: 19,
      marginTop: -10,
      marginBottom:10
    },
    timeMargin: {
      marginRight: 14
    }
  });
  
  export default ListCard;
  