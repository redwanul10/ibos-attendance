import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { _dateFormatter } from "../../../../common/functions/_dateFormatter";


function ListCard({ data }) {

  const renderDayStatus = (item) => {
    if (item.ysnPresent) {
      return (
        <View style={[styles.attendanceInfo]}>
          <Text style={styles.presentText}>Present</Text>
        </View>
      )
    }

    if (item.ysnAbsent) {
      return (
        <View style={[styles.attendanceInfo,styles.absent]}>
          <Text style={styles.absentText}>Absent</Text>
        </View>
      )
    }

    if (item.ysnLeave) {
      return (
        <View style={[styles.attendanceInfo,styles.late]}>
          <Text style={styles.lateText}>Leave</Text>
        </View>
      )
    }

    if (item.ysnPresent) {
      return (
        <View style={styles.attendanceInfo}>
          <Text>Present</Text>
        </View>
      )
    }

  }
  return (
    <>
      <View style={styles.card}>
        <View style={{ alignItems: "flex-end", marginTop: 10, marginRight: 10 }}>
         {data.ysnEaryLeave && <Text>Early Leave</Text>}
        </View>
        <View style={styles.cardContent}>
          {/* {props.children} */}
          <View>
            <Text style={styles.dateStyle}>{_dateFormatter(data.dteAttendanceDate)}</Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>In Time</Text>
              <Text>{data.checkInTime.split('.')[0] || "00.00"}</Text>
            </View>

            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>Out Time</Text>
              <Text>{data.checkOutTime.split('.')[0] || "00.00"}</Text>
            </View>

            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>Over Time</Text>
              <Text>00:00</Text>
            </View>

            {/* <View style={styles.attendanceInfo}>
              <Text>Present</Text>
            </View> */}
            {renderDayStatus(data)}
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
    padding: 7,
    borderRadius: 4,
    // alignSelf: 
    // justifyContent:"flex-start"
    // marginTop: 10,
    // marginLeft: 12 + "%",
    // height:30

  },
  fontWeight: {
    fontWeight: "bold"
  },
  dateStyle: {
    // fontWeight: "bold",
    fontSize: 19,
    marginTop: -10,
    marginBottom: 10
  },
  timeMargin: {
    // marginRight: 14
  },
  absent:{
    backgroundColor:"#FFD4D2"
  },
  absentText:{
    color:"#E93F39"
  },
  late:{
    backgroundColor:"#FFF2D1"
  },
  lateText:{
    color:"#FEB802"
  },
  present:{
    backgroundColor:"#00BB7D"
  },
  presentText:{
    color:"#00BB7D"
  }
});

export default ListCard;
