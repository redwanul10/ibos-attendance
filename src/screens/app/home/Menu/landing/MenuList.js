import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import colors from "../../../../../common/theme/colors";
import fontsFamily from "../../../../../common/theme/fonts";
import SingleDepartment from "../../HomePage/SingleDepartment";
import { Row, Col } from 'native-base'
import { useNavigation } from "@react-navigation/native"
import globalStyle from "../../../../../common/styles/global";


const MenuList = ({ list, sectionTitle }) => {

    const navigation = useNavigation()

    return (
        <>
            <Text style={globalStyle.sectionTitle}>{sectionTitle}</Text>
            {/* contentContainerStyle */}
            <View style={style.row}>
                {list.map(item => (
                    <Col style={{ width: "25%", }}>
                        <SingleDepartment
                            data={item}
                            onPress={e => navigation.navigate(item.name)}
                            contentContainerStyle={{
                                marginHorizontal: 0,
                                // backgroundColor:"red"
                            }}
                            imgStyle={style.image}
                            titleStyle={style.menuTitle}
                        />
                    </Col>
                ))}

            </View>

        </>
    );
}

export default MenuList

const style = StyleSheet.create({
    title: {
        fontFamily: fontsFamily.RUBIK_MEDIUM,
        color: colors.GREY,
        marginVertical: 10,
        // fontSize:16
    },
    menuTitle: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        // fontSize:10,
        fontSize: 9,
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        // marginHorizontal: -10
    },
    image: {
        width: 62,
        height: 62,
    }
})