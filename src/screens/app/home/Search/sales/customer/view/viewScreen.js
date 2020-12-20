import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import { Col } from 'native-base'
import IDetails from '../../../../../../../common/components/IDetails';
import ISeperator from '../../../../../../../common/components/ISeperator';



const CustomerDetails = ({route, navigation }) => {
    const {partnerName, address, city, email, mobileNo, bankName, branchName, bankAccountTypeName, bankAccountNumber} = route.params.data.item;

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
                        value={partnerName}
                        valueStyle={style.value}
                    />

                    <IDetails
                        label="Adress"
                        value={address}
                        valueStyle={[style.value, { width: "60%" }]}
                    />



                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="City"
                                value={city}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Email"
                                value={email}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>

                    <IDetails
                        label="Moile"
                        value={mobileNo}
                        valueStyle={style.value}
                    />

                    <ISeperator />

                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Bank Name"
                                value={bankName}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Branch Name"
                                value={branchName}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>

                    <View style={style.row}>
                        <Col>
                            <IDetails
                                label="Bank Account Type"
                                value={bankAccountTypeName}
                                valueStyle={style.value}
                            />
                        </Col>
                        <Col>
                            <IDetails
                                label="Bank Account Number"
                                value={bankAccountNumber}
                                valueStyle={style.value}
                            />
                        </Col>
                    </View>
                </ScrollView>
            </View>

        </>
    );
}

export default CustomerDetails

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