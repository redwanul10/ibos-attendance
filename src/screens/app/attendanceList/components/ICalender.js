import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import dayjs from 'dayjs'
import fontsFamily from '../../../../common/theme/fonts';
import colors from '../../../../common/theme/colors';


const dayColors = ["green", "blue", "red", "purple", "green", "blue", "green", "blue"]

const renderDayStatus = (item, index) => {
    if (item ?.ysnPresent) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#33D449' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    if (item ?.ysnAbsent) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#F75A5A' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    if (item ?.ysnLeave) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#AC88D5' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    if (item ?.ysnLate) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#F5A328' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    if (item ?.ysnOffday) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#DCDCDC' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    if (item ?.ysnHoliday) {
        return (
            <View key={index} style={[style.col, style.calendar, { backgroundColor: '#6EC3F3' }]}>
                <View style={[style.contentWrapper]}>
                    <Text style={[style.txt, { color: "white" }]}>{index + 1}</Text>
                </View>
            </View>
        )
    }

    return (
        <View key={index} style={[style.col, style.calendar]}>
            <View style={[style.contentWrapper]}>
                <Text style={style.txt}>{index + 1}</Text>
            </View>
        </View>
    )

}
let timeout = null
const ICalender = ({ daysList, onMonthChange, setAttdList, setIsLoading }) => {

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
                <TouchableOpacity style={{ padding: 5 }}
                    onPress={e => {
                        setIsLoading(false)
                        if (daysList.length > 0) setAttdList([])
                        if (timeout) {
                            clearTimeout(timeout)
                            timeout = setTimeout(() => {
                                console.log("fetching req")
                                onMonthChange(value.subtract(1, "month"))
                            }, 1000)
                        } else {
                            timeout = setTimeout(() => {
                                console.log("fetching req")
                                onMonthChange(value.subtract(1, "month"))
                            }, 1000)
                        }
                        // onMonthChange(value.subtract(1, "month"))
                        setValue(value.subtract(1, "month"))

                    }}>
                    <Text>{value.subtract(1, "month").format("MMM")}</Text>
                </TouchableOpacity>

                <Text style={[style.header, { textTransform: "capitalize", color: '#6EC3F3' }]}>{value.format("MMMM")}- {value.year()}</Text>

                <TouchableOpacity style={{ padding: 5 }}
                    onPress={e => {
                        setIsLoading(false)
                        if (daysList.length > 0) setAttdList([])

                        if (timeout) {
                            clearTimeout(timeout)
                            timeout = setTimeout(() => {
                                console.log("fetching req")
                                onMonthChange(value.add(1, "month"))
                            }, 1000)
                        } else {
                            timeout = setTimeout(() => {
                                console.log("fetching req")
                                onMonthChange(value.add(1, "month"))
                            }, 1000)
                        }

                        setValue(value.add(1, "month"))
                    }}>
                    <Text>{value.add(1, "month").format("MMM")}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.12,
                shadowRadius: 5.00,

                elevation: 5,
                margin: 10, backgroundColor: '#FAFAFA', borderRadius: 9
            }}>



                <View style={[style.row, { margin: 10, marginRight: 4, marginBottom: 4 }]}>
                    {
                        weekDays.map((item, index) => {
                            return (
                                <View key={index} style={[style.col, style.header, style.calendar]}>
                                    <Text style={[style.header,]}>{item}</Text>
                                </View>
                            )
                        })
                    }

                    {/* <View style={style.row}> */}
                    {
                        nullDay.map((item, index) => {
                            return (
                                <View key={index} style={[style.col, style.header, style.calendar]}><Text >
                                    {/* {index + 1} */}
                                </Text></View>
                            )
                        })
                    }

                    {
                        allDay.map((item, index) => {
                            return renderDayStatus(daysList[index], index)

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
    },
    calendar: {
        backgroundColor: '#F0F2F2',
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.0,
        width: "12%",
        height: 30,
        margin: "1%"
    }
})