import React from 'react';
import { View, StyleSheet } from 'react-native'
import IHeader from '../../../common/components/IHeader';
import ICalender from './components/ICalender';
import ListCard from './components/listCard'

const AttendanceList = () => {
    return (
        <>
            <IHeader />
            <View style={style.container}>
                <ICalender />
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>


                
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