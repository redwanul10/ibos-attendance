import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ProfileInfo from '../../../../common/components/ProfileInfo';
import FeedbackSection from '../../../../common/components/FeedbackSection';
import MenuAccordion from './components/MenuAccoridon';
import colors from '../../../../common/theme/colors';

const MenuTab = () => {
    return (
        // <ScrollView>
        <View style={style.body}>
            <View style={style.background}>
                <ProfileInfo />
                <MenuAccordion />
            </View>
            <View style={style.feedbackWrapper}>
                <FeedbackSection containerStyle={{ paddingRight: 0 }} />
            </View>

        </View>


    );
}

export default MenuTab;

const style = StyleSheet.create({
    body: {
        flex: 1,
        // paddingHorizontal: 25,
        // backgroundColor: "white" || "#EDF6F8" || colors.GREY
        backgroundColor: "#EDF6F8" || colors.GREY
    },
    background: {
        backgroundColor: "white" || colors.GREY,
        paddingHorizontal: 25,
        paddingBottom: 20
    },
    feedbackWrapper: {
        paddingHorizontal: 25,
        marginBottom: 40,
        // backgroundColor: "red",
        flex: 1,
        justifyContent: "flex-end"
    }
})