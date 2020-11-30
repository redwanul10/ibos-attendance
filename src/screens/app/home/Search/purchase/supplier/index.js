import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Row, Col, Grid } from 'native-base'
import IHeader from '../../../../../../common/components/IHeader';


const Supplier = ({ navigation }) => {

    return (
        <>
            <IHeader onAddIconPress={e => navigation.navigate("Create Supplier")} />
            <View style={style.container}>
                <Text>Supplier Page</Text>
            </View>
        </>
    );
}

export default Supplier

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,

    },

})