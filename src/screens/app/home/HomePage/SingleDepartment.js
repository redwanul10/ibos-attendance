import React from 'react'
import { View, Image, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import layout from '../../../../common/styles/layout';
import fontsFamily from '../../../../common/theme/fonts';

const SingleDepartment = ({ data }) => {
    console.log(data)
    return (
        <TouchableWithoutFeedback>
            <View style={[style.department, layout.hozCenter]}>
                <Image style={style.image} source={data.image} />
                <Text style={style.departmentname}>{data.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SingleDepartment;

const style = StyleSheet.create({
    department: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    departmentname: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        fontSize: 13,
        marginTop: 5
    },
    image: {
        width: 70,
        height: 70
    }
})