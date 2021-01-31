import React from 'react';
import { View, StyleSheet } from 'react-native'
import IHeader from '../../../common/components/IHeader';
import ICalender from './components/ICalender';


const AttendanceList = () => {
    return (
        <>
            <IHeader />
            <View style={style.container}>
                <ICalender />
            </View>
        </>
    );
}

export default AttendanceList;


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
})