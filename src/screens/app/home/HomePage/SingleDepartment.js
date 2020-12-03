import React from 'react'
import { View, Image, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import layout from '../../../../common/styles/layout';
import fontsFamily from '../../../../common/theme/fonts';

const SingleDepartment = ({ data, onPress, imgStyle, titleStyle, contentContainerStyle }) => {
    console.log(data)
    return (
        <TouchableWithoutFeedback onPress={e => onPress ? onPress() : false}>
            <View style={[style.department, layout.hozCenter, contentContainerStyle || {}]}>
                <Image style={[style.image, imgStyle || {}]} source={data.image} />
                <Text style={[style.departmentname, titleStyle || {}]}>{data.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SingleDepartment;

const style = StyleSheet.create({
    department: {
        marginHorizontal: 15,
        marginBottom: 10,
        // width:"33.33%",
        
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