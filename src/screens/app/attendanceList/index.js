import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import IHeader from '../../../common/components/IHeader';
import { getGlobalData } from '../../../common/functions/localStorage';
import ICalender from './components/ICalender';
import ListCard from './components/listCard'
import { getAttendanceList } from './helper';
import { Spinner } from 'native-base';
import ColorDefine from './components/ColorDefine';

const AttendanceList = () => {

    const [globalData, setGlobalData] = useState({})
    const [attdList, setAttdList] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        getGlobalData(setGlobalData)
        return () => {
            setGlobalData({})
        }
    }, [])

    useEffect(() => {
        if (globalData ?.profileData ?.userId) {
            getAttendanceList(
                globalData ?.profileData ?.userId,
                new Date().getMonth() + 1,
                new Date().getFullYear(),
                setIsLoading,
                setAttdList
            )
        }
        return () => {
            setAttdList([])
        }

    }, [globalData.profileData])

    return (
        <>
            <IHeader />
            <ICalender />
            <ColorDefine/>
            <ListCard/>
            {/* <View style={style.container}>


                {isLoading && <Spinner color='black' style={{}} />}

                {attdList.length > 0 && (
                    <FlatList
                        data={attdList}
                        keyExtractor={item => item.dteAttendanceDate}
                        renderItem={({ item }) => <ListCard data={item} />}
                    />)
                }
            </View> */}

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