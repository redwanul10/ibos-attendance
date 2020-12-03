import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import globalStyle from '../styles/global';


const IDetails = ({ value,label,lableStyle,valueStyle }) => {

    return (
        <View style={[globalStyle.inputWrapper,{marginBottom:20}]}>
            <Text style={[globalStyle.label,lableStyle || {}]}>{label}</Text>
            <Text style={[globalStyle.input, valueStyle || {}]}>{value}</Text>
        </View>
    );
}

export default IDetails