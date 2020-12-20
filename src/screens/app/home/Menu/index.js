import React from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import ProfileInfo from '../../../../common/components/ProfileInfo';
import FeedbackSection from '../../../../common/components/FeedbackSection';
import MenuAccordion from './components/MenuAccoridon';
import colors from '../../../../common/theme/colors';
import MenuList from './landing/MenuList';
import imageFile from '../../../../assets/images/imageFile';


const PurchaseMenu = [
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Supplier"
    },
    
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Quick Purchase"
    },
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Goods Receive"
    },
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Due Payment"
    },
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Purchase Report"
    },
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Due Receive"
    },
    {
        image: require("../../../../assets/images/purchase/supplier.png"),
        name: "Customer"
    }
]

const MenuTab = () => {
    // console.log(StatusBar)
    return (
        <View style={style.body}>
            <View style={style.menuWrapper}>
                <SafeAreaView>
                    <ProfileInfo />
                </SafeAreaView>
                <MenuList
                    sectionTitle="Purchase"
                    list={PurchaseMenu}
                />
            </View>

            <View style={style.menuWrapper}>
                <MenuList
                    sectionTitle="Sales"
                    list={PurchaseMenu}
                />
            </View>
            {/* <View style={style.background}>
                <ProfileInfo />
                <MenuAccordion />
            </View>
            <View style={style.feedbackWrapper}>
                <FeedbackSection containerStyle={{ paddingRight: 0 }} />
            </View> */}
        </View>


    );
}

export default MenuTab;

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#EDF6F8" || colors.GREY
    },
    menuWrapper: {
        backgroundColor: "white" || colors.GREY,
        paddingHorizontal: 25,
        paddingBottom: 20,
        borderRadius:20,
        marginBottom:10
    },
    feedbackWrapper: {
        paddingHorizontal: 25,
        marginBottom: 40,
        flex: 1,
        justifyContent: "flex-end"
    }
})