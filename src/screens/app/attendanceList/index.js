import React, { useEffect,useState } from 'react';
import { View, StyleSheet, FlatList} from 'react-native'
import IHeader from '../../../common/components/IHeader';
import { getGlobalData } from '../../../common/functions/localStorage';
import ICalender from './components/ICalender';
import ListCard from './components/listCard'
import { getAttendanceList } from './helper';

const AttendanceList = () => {

    const [globalData, setGlobalData] = useState({})
    const [attdList, setAttdList] = useState([])

    useEffect(() => {
        getGlobalData(setGlobalData)
    }, [])

    useEffect(() => {
        if (globalData?.profileData?.userId) {
            getAttendanceList(
                globalData?.profileData?.userId,
                new Date().getMonth() +1,
                new Date().getFullYear(),
                setAttdList
            )
        }

    }, [globalData])
    return (
        <>
            <IHeader />
            <View style={style.container}>
                <ICalender />

                {attdList.map(item =>  <ListCard />)}

                <FlatList
                    data={attdList}
                    // keyExtractor={ item => ite}
                    renderItem={({item}) => <ListCard />}
                />
               
                {/* <ListCard />
                <ListCard />
                <ListCard /> */}



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