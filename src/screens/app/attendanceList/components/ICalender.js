import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import dayjs from 'dayjs'
import fontsFamily from '../../../../common/theme/fonts';
import colors from '../../../../common/theme/colors';


const dayColors = ["green", "blue", "red", "purple", "green", "blue", "green", "blue"]

const ICalender = () => {

    const [value, setValue] = useState(dayjs())
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'Sa'];

    const [nullDay, setNullDay] = useState([])
    const [allDay, setAllDay] = useState([])
    useEffect(() => {

        const end = Number(value.endOf('month').format("D"))
        let AllDaysInMonth = []

        for (let i = 1; i <= end; i++) {
            if (i < 10) {
                AllDaysInMonth.push(`0${i}`);
            } else {
                AllDaysInMonth.push(`${i}`);
            }
        }

        const start = Number(value.startOf('month').format("d"))
        // alert(start)
        let fakeDaysInMonth = []

        for (let i = 1; i <= start; i++) {
            if (i < 10) {
                fakeDaysInMonth.push(`0${i}`);
            } else {
                fakeDaysInMonth.push(`${i}`);
            }
        }

        setNullDay(fakeDaysInMonth)
        setAllDay(AllDaysInMonth)
    }, [value])
    return (
        <>
            <View style={{ alignItems: "center", marginTop: 20, flexDirection: "row", justifyContent: "space-around" }}>
                {/* <TouchableOpacity onPress={e => setValue(value.subtract(1, "month"))}>
                    <Text>prev</Text>
                </TouchableOpacity> */}
                <Text style={[style.header, { textTransform: "uppercase" }]}>{value.format("MMMM")}- {value.year()}</Text>
                {/* <TouchableOpacity style={{ marginRight: 20 }} onPress={e => setValue(value.add(1, "month"))}>
                    <Text>Next</Text>
                </TouchableOpacity> */}
            </View>
            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
                margin: 10, backgroundColor: 'white', borderRadius: 9
            }}>



                <View style={[style.row, { marginTop: 20 }]}>
                    {
                        weekDays.map((item, index) => {
                            return (
                                <View key={index} style={[style.col, style.header]}>
                                    <Text style={[style.header,{backgroundColor:'red'}]}>{item}</Text>
                                </View>
                            )
                        })
                    }

                    {/* <View style={style.row}> */}
                    {
                        nullDay.map((item, index) => {
                            return (
                                <View key={index} style={style.col}><Text >
                                    {/* {index + 1} */}
                                </Text></View>
                            )
                        })
                    }

                    {
                        allDay.map((item, index) => {
                            return (
                                <View key={index} style={style.col}>
                                    <View style={style.contentWrapper}>
                                        <Text style={[style.txt]}>{index + 1}</Text>
                                    </View>

                                </View>
                            )
                        })
                    }
                    {/* </View> */}
                </View>


            </View>
        </>
    );
}

export default ICalender;

const style = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    col: {
        width: `${100 / 7}%`,
        alignItems: "center",
        justifyContent: "center",

    },
    header: {
        fontFamily: fontsFamily.RUBIK_BOLD
    },
    txt: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        // marginBottom: 5,
        color: colors.GREY,
        // color: "white"
    },
    contentWrapper: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 2,
        borderRadius: 10
    }
})