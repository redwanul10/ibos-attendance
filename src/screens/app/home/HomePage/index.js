import React, { useEffect } from 'react'
import { Text, View, StatusBar, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Container, Row } from 'native-base';
import ProfileInfo from '../../../../common/components/ProfileInfo';

import DepartmentList from './DepartmentList';
import TutorialSection from './TutorialSection';
import FeedbackSection from './FeedbackSection';
import backgroundImage from '../../../../assets/images/dshboardBg2.png';
import ReportCard from './ReportCard';
import globalStyle from '../../../../common/styles/global';



const HomePage = () => {

    useEffect(() => {
        StatusBar.setBackgroundColor("#008AFF")
    }, [])

    return (
        <>
            <ImageBackground source={backgroundImage} style={style.backgroundImage}>
                <View style={style.container}>
                    <SafeAreaView>
                        <View style={{ paddingHorizontal: 20 }}>
                            <ScrollView
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                            >
                                <ProfileInfo />
                                {/* <DepartmentList /> */}

                                <Text style={[globalStyle.sectionTitle, style.titleMargin]}>Today's Report</Text>
                                <View style={style.row}>
                                    <ReportCard />
                                    <ReportCard />
                                    <ReportCard />
                                    <ReportCard />
                                </View>
                            </ScrollView>
                        </View>

                    </SafeAreaView>
                    {/* <TutorialSection /> */}
                    {/* <FeedbackSection /> */}

                </View>
            </ImageBackground>

        </>
    );
}

export default HomePage;

const style = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    container: {
        paddingVertical: 20,
        flex: 1
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    titleMargin: {
        marginTop: 35,
        marginBottom: 15
    }
})