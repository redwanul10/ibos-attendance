import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'
import IHeader from '../../../common/components/IHeader';
import { getGlobalData } from '../../../common/functions/localStorage';
import ICalender from './components/ICalender';
import ListCard from './components/listCard'
import { getAttendanceList } from './helper';
import { Spinner } from 'native-base';
import ColorDefine from './components/ColorDefine';
import Axios from 'axios'
import dayjs from 'dayjs'

let cancelToken;

const AttendanceList = () => {

    const [globalData, setGlobalData] = useState({})
    const [currentDate, setCurrentDate] = useState(dayjs())
    const [attdList, setAttdList] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {

        getGlobalData(setGlobalData)
        
        return () => {
            setGlobalData({})
        }
    }, [])

    useEffect(() => {
        if (globalData?.profileData?.userId) {

            //Check if there are any previous pending requests
            if (typeof cancelToken != typeof undefined) {
                cancelToken.cancel("canceled request");
            }

            //Save the cancel token for the current request
            cancelToken = Axios.CancelToken.source();

            getAttendanceList(
                globalData?.profileData?.userId,
                currentDate?.month() + 1,
                currentDate?.year(),
                setIsLoading,
                setAttdList,
                cancelToken
            )
        }
    }, [globalData.profileData, currentDate])

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <IHeader />

                <ICalender
                    daysList={attdList}
                    setAttdList={setAttdList}
                    setIsLoading={setIsLoading}
                    onMonthChange={date => setCurrentDate(date)}
                />

                {/* Daily History */}
                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            <ColorDefine />
                            <Text style={{ margin: 14, color: '#989898' }}>Attendance Details</Text>
                            {isLoading && <Spinner color='black' />}
                        </>
                    )}
                    data={attdList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ListCard data={item} />}
                />
            </View>
        </>
    );
}

export default AttendanceList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
})