import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import { Col } from 'native-base'
import IDetails from '../../../../../../../common/components/IDetails';
import ISeperator from '../../../../../../../common/components/ISeperator';



const DueReceiveDetails = ({route, navigation }) => {

    return (
        <>
            <IHeader />

            <View style={style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                  <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Payment Type"
                                value={"Cash"}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Date"
                                value={"11//12/2020"}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>
                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Customer"
                                value={"Golam Rabbani"}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Amount"
                                value={"100.00"}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>
                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Bank Account"
                                value={"Dhaka"}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Instrument No"
                                value={"dg4w5533"}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>
                </ScrollView>
            </View>

        </>
    );
}

export default DueReceiveDetails

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