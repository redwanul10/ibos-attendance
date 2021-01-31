import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import dayjs from 'dayjs'
import fontsFamily from '../../../../common/theme/fonts';
import colors from '../../../../common/theme/colors';


const dayColors = ["green", "blue", "red", "purple", "green", "blue", "green", "blue"]

const ICalender = () => {

    const [value, setValue] = useState(dayjs())
    const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [nullDay, setNullDay] = useState([])
    const [allDay, setAllDay] = useState([])
    useEffect(() => {
        // setTimeout(e => {
        //     setValue(value.add(2, "month"))
        //     console.log("month increased")
        // }, 3000)

        const end = Number(value.endOf('month').format("D"))
        console.log("End ", end)
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
                <TouchableOpacity onPress={e => setValue(value.subtract(1, "month"))}>
                    <Text>prev</Text>
                </TouchableOpacity>
                <Text style={[style.header, { textTransform: "uppercase" }]}>{value.format("MMMM")}- {value.year()}</Text>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={e => setValue(value.add(1, "month"))}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={[style.row, { marginTop: 20 }]}>
                {
                    weekDays.map((item, index) => {
                        return (
                            <View style={[style.col, style.header]}>
                                <Text style={style.header}>{item}</Text>
                            </View>
                        )
                    })
                }

                {/* <View style={style.row}> */}
                {
                    nullDay.map((item, index) => {
                        return (
                            <View style={style.col}><Text >
                                {/* {index + 1} */}
                            </Text></View>
                        )
                    })
                }

                {
                    allDay.map((item, index) => {
                        return (
                            <View style={style.col}>
                                <View style={style.contentWrapper}>
                                    <Text style={[style.txt, { color: dayColors[index] || "" }]}>{index + 1}</Text>
                                </View>

                            </View>
                        )
                    })
                }
                {/* </View> */}
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
        // backgroundColor: "red",
        // margin: 1
        // fontSize: 10
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
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 2,
        borderRadius: 10
    }
})