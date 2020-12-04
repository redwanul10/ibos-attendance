import React, { useEffect } from 'react'
import { View, SafeAreaView, StatusBar, ImageBackground, StyleSheet } from 'react-native'
import imageFile from '../../../assets/images/dshboardBg2.png'
import ProfileInfo from '../../../common/components/ProfileInfo'
import DashboardMenu from './components/DashboardMenus'

function Dashboard() {
    useEffect(() => {

        StatusBar.setBarStyle("light-content")
    }, [])
    return (

        <ImageBackground source={imageFile} style={style.backgroundImg}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.container}>
                    <ProfileInfo showMenuIcon />
                    <DashboardMenu />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Dashboard

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    backgroundImg: {
        width: "100%",
        height: "100%"
    }
})
