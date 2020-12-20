import React from 'react'
import { View, Image, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import layout from '../../../../common/styles/layout';
import fontsFamily from '../../../../common/theme/fonts';

const SingleMenu = ({ data }) => {
    console.log(data)
    return (
        <TouchableWithoutFeedback>
            <View style={[style.menu, layout.hozCenter]}>
                <Image style={style.image} source={data.image} />
                <Text style={style.menuName}>{data.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SingleMenu;

const style = StyleSheet.create({
    menu: {
        // marginHorizontal: 15,
        marginBottom: 10,
        // width:"33.33%",
        
    },
    menuName: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        fontSize: 13,
        marginTop: -8
    },
    image: {
        height: 120,
        width: 120,
    }
})