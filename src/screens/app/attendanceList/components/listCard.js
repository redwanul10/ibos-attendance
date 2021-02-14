import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { _dateFormatter } from "../../../../common/functions/_dateFormatter";

const getBackgroundColor = () => {
  let color;
  if (1) {
    color = 'red';
  } else if (2) {
    color = '#808080';
  }
  return color;
};

function ListCard({ data }) {

  const renderDayStatus = (item) => {
    if (item?.ysnPresent) {
      return (
        <View style={[styles.attendanceInfo]}>
          <Text style={styles.presentText}>Present</Text>
        </View>
      )
    }

    if (item?.ysnAbsent) {
      return (
        <View style={[styles.attendanceInfo, styles.absent]}>
          <Text style={styles.absentText}>Absent</Text>
        </View>
      )
    }

    if (item?.ysnLeave) {
      return (
        <View style={[styles.attendanceInfo, styles.late]}>
          <Text style={styles.lateText}>Leave</Text>
        </View>
      )
    }

    if (item?.ysnPresent) {
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
        <View style={{ justifyContent: "flex-end", alignItems: 'center', marginTop: 10, marginRight: 10, flexDirection: 'row' }}>
          <View style={[styles.attendanceInfo]}>
            <Text style={styles.presentText}>Present</Text>
          </View>
          {/* {renderDayStatus(data)} */}
          {/* {data ?.ysnEaryLeave && <Text>Early Leave</Text>} */}
          <Text style={{ marginLeft: 8 }}>Early Leave</Text>
        </View>
        <View style={styles.cardContent}>
          {/* {props.children} */}
          <View style={{ backgroundColor: 'green', marginTop: -30, borderRadius: 5, flexDirection: 'row' }} >
            {/* have to use after dynamically done */}
            {/* <Text >{_dateFormatter(data?.dteAttendanceDate)}</Text> */}
            {/* for design purpose */}
            <View style={{ padding:10, alignItems:'center'}}>
              <Text style={styles.fontWeight}>10</Text>
              <Text style={styles.fontWeight}>Thurs</Text>

            </View>

          </View>

          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginLeft: 8, paddingHorizontal: 5 }}>
            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>In Time</Text>
              <Text>{data?.checkInTime?.split('.')[0] || "00.00"}</Text>
            </View>

            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>Out Time</Text>
              <Text>{data?.checkOutTime?.split('.')[0] || "00.00"}</Text>
            </View>

            <View style={styles.timeMargin}>
              <Text style={styles.fontWeight}>Over Time</Text>
              <Text>00:00</Text>
            </View>

            {/* <View style={styles.attendanceInfo}>
              <Text>Present</Text>
            </View> */}



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
    backgroundColor: getBackgroundColor(),
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 12,
    marginVertical: 6,
    // height:100
  },
  cardContent: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 10,


  },
  attendanceInfo: {
    backgroundColor: "#B3FFD6",
    paddingHorizontal: 8,
    borderRadius: 8,
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
  absent: {
    backgroundColor: "#FFD4D2"
  },
  absentText: {
    color: "#ffffff"
  },
  late: {
    backgroundColor: "#FFF2D1"
  },
  lateText: {
    color: "#ffffff"
  },
  present: {
    backgroundColor: "#00BB7D"
  },
  presentText: {
    color: "#ffffff"
  }
});

export default ListCard;
