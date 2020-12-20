import React, { useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import SingleItem from './SingleItem';



const PurchaseDetails = ({ route, navigation }) => {

    useEffect(() => {

    }, [])

    return (
        <>
            <IHeader />

            <View style={style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <SingleItem />


                </ScrollView>
            </View>

        </>
    );
}

export default PurchaseDetails

const style = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
        paddingVertical: 20
    },
    value: {
        borderBottomColor: "transparent",
        marginTop: 5
    },
    row: {
        flexDirection: "row"
    }

})