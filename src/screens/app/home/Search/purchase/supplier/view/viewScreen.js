import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import { Col } from 'native-base'
import IDetails from '../../../../../../../common/components/IDetails';
import ISeperator from '../../../../../../../common/components/ISeperator';



const SupplierDetails = ({ navigation }) => {

    return (
        <>
            <IHeader />

            <View style={style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >


                    <IDetails
                        label="Supplier Name"
                        value="Lutfur Rahman"
                        valueStyle={style.value}
                    />

                    <IDetails
                        label="Adress"
                        value="21/1/1 Satish Sarker Road Uttara Dhaka 1216"
                        valueStyle={[style.value, { width: "60%" }]}
                    />



                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="City"
                                value="Dhaka"
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Email"
                                value="enamul@gmail.com"
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>

                    <IDetails
                        label="Moile"
                        value="01631838829"
                        valueStyle={style.value}
                    />

                    <ISeperator />

                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Bank Name"
                                value="Agrani Bank LTD"
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Branch Name"
                                value="Uttara Branch"
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>

                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Bank Account Type"
                                value="Dhaka"
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Bank Account Number"
                                value="1324265262525"
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>
                </ScrollView>
            </View>

        </>
    );
}

export default SupplierDetails

const style = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
        paddingVertical: 20
    },
    value: {
        borderBottomColor: "transparent",
        marginTop: 5
    },
    row: {
        flexDirection: "row"
    }

})