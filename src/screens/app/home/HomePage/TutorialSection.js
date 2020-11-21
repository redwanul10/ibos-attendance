import React from 'react'
import { View, Image, TouchableWithoutFeedback, Text, StyleSheet, FlatList } from 'react-native'
import { Container } from 'native-base'
import layout from '../../../../common/styles/layout';
import fontsFamily from '../../../../common/theme/fonts';
import tutorialImg from '../../../../assets/images/tutorial.png';
import TutorialCard from './TurorialCard';
import FeedbackSection from './FeedbackSection';

const tutorials = [
    {
        image: tutorialImg,
        title: "How to Add Goods Receive ?",
        duration: "30s"
    },
    {
        image: tutorialImg,
        title: "How to Add Goods Receive ?",
        duration: "30s"
    },
    {
        image: tutorialImg,
        title: "How to Add Goods Receive ?",
        duration: "30s"
    },
]

const TutorialSection = ({ data }) => {

    return (
        <View style={style.contaianer}>
            <Text style={style.secHeading}>App Tutorials</Text>
            <FlatList
                data={tutorials}
                keyExtractor={(item, i) => i.toString()}
                horizontal={true}
                ItemSeparatorComponent={e => <View style={{ width: 15 }} />}
                renderItem={({ item }) =>
                    <TutorialCard data={item} />
                }
            />
            <FeedbackSection />
        </View>
    );
}

export default TutorialSection;

const style = StyleSheet.create({
    contaianer: {
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: "#F2F7FC",
        flex: 1
    },
    secHeading: {
        fontSize: 16,
        marginBottom: 15,
        fontFamily: fontsFamily.RUBIK_MEDIUM
    }
})