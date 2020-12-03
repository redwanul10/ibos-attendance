import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Row, Col, Grid } from 'native-base'
import IHeader from '../../../../../common/components/IHeader';
import SingleDepartment from '../../HomePage/SingleDepartment';
import layout from '../../../../../common/styles/layout';
// import imageFile from '../../../../../assets/images/imageFile';

const Departments = [
    {
        image: require("../../../../../assets/images/purchase/supplier2.png"),
        name: "Supplier"
    },
    {
        image: require("../../../../../assets/images/purchase/supplier2.png"),
        name: "Goods Receive"
    },
    {
        image: require("../../../../../assets/images/purchase/supplier.png"),
        name: "Quick Purchase"
    },
    {
        image: require("../../../../../assets/images/purchase/supplier.png"),
        name: "Due Payment"
    },
    {
        image: require("../../../../../assets/images/purchase/supplier.png"),
        name: "Purchase Report"
    }
]


const PurchaseLandingScreen = ({ navigation }) => {

    return (
        <>
            <IHeader title="Purchase" />
            <View style={style.container}>
                {/* <View style={{ width: "90%", flex: 1 }}> */}
                {/* <Text>Purhcase Landing </Text> */}
                <Row style={{ flexWrap: "wrap" }}>
                    {Departments.map(item => (
                        <Col style={{ width: "50%", }}>
                            <SingleDepartment
                                onPress={e => {
                                    navigation.navigate(item.name)
                                }}
                                contentContainerStyle={{ backgroundColor: "transparent", marginHorizontal: 5 }}
                                imgStyle={style.photo}
                                titleStyle={style.title}
                                data={item}
                            />
                        </Col>
                    ))}
                </Row>
                {/* </View> */}
                {/* <FlatList
                data={Departments}
                keyExtractor={(item, i) => i.toString()}
                contentContainerStyle={[style.container, { flexDirection: "row", flexWrap: "wrap" }]}
                // numColumns={3}
                renderItem={({ item }) =>
                    <SingleDepartment
                        contentContainerStyle={{ width: "50%", backgroundColor: "red", }}
                        imgStyle={style.photo}
                        titleStyle={style.title}
                        data={item}
                    />
                }
            /> */}
            </View>
        </>
    );
}

export default PurchaseLandingScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // justifyContent: "center",
        // alignItems: "center"
        padding: 20,

    },
    photo: {
        width: 110,
        height: 110
    },
    title: {
        marginTop: -10
    }
})