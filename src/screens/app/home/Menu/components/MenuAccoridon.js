import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Header, Content, Accordion, Text, Icon } from "native-base";
import fontsFamily from "../../../../../common/theme/fonts";
import { View } from 'react-native'
import colors from "../../../../../common/theme/colors";

const dataArray = [
    { title: "Profile Settings", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Language (EN)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Settings", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Wallet", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
];

const MenuAccordion = () => {

    const renderHeader = (item, expanded) => {
        return (
            <View style={style.headerWrapper}>
                <Text style={style.title}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    return (
        <>

            <Accordion
                style={{ color: "red", borderColor: "transparent", fontFamily: fontsFamily.RUBIK_REGULAR }}
                dataArray={dataArray}
                icon="add"
                expandedIcon="remove"
                headerStyle={{ backgroundColor: "white" }}
                renderHeader={renderHeader}
            // contentStyle={{ backgroundColor: "#ddecf8" }}
            />
            <TouchableWithoutFeedback>
                <View>
                    <Text style={[style.title, { marginLeft: 5 }]}>Log Out</Text>
                </View>
            </TouchableWithoutFeedback>

        </>
    );
}

export default MenuAccordion

const style = StyleSheet.create({
    headerWrapper: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        // color: colors.LGHT_GREY
    }
})