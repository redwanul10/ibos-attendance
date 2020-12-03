import React, { useEffect } from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { Container } from 'native-base';
import ProfileInfo from '../../../../common/components/ProfileInfo';
import DepartmentList from './DepartmentList';
import TutorialSection from './TutorialSection';
import FeedbackSection from './FeedbackSection';

const HomePage = () => {

    useEffect(() => {
        StatusBar.setBackgroundColor("#008AFF")
    }, [])

    return (
        <>

            <Container >
                <SafeAreaView>
                <View style={{ paddingHorizontal: 20 }}>
                    <ProfileInfo />
                    <DepartmentList />
                </View>
                </SafeAreaView>
                <TutorialSection />
                {/* <FeedbackSection /> */}
                
            </Container>

        </>
    );
}

export default HomePage;