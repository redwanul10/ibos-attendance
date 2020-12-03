import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Row, Col, Grid } from 'native-base'
import IHeader from '../../../../../../../common/components/IHeader';
import FormInput from '../../../../../../../common/components/TextInput';
import { Formik } from 'formik'
import IPicker from '../../../../../../../common/components/Ipicker';
import { Button, Text, View } from 'native-base'
import fontsFamily from '../../../../../../../common/theme/fonts';
import ICustomPicker from '../../../../../../../common/components/ICustomPicker';


const initValues = {
    supplierName: "",
    supplierAddress: "",
    supplierEmail: "",
    city: "",
    mobile: "",
    bankName: "",
    branchName: "",
    bankAccountType: "",
}

const SupplierForm = (props) => {

    return (
        <>
            <IHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[style.container, { paddingHorizontal: 0 }]}
                bounces={false}
            >
                <View style={[style.container, { paddingBottom: 50 }]}>
                    <Formik
                        enableReinitialize={true}
                        initialValues={initValues}
                        // validationSchema={schemaValidation}
                        onSubmit={(values, { resetForm }) => {
                            // navigation.navigate("Home")
                            alert("submited")
                            resetForm(initValues)
                        }}

                    >
                        {(formikProps) => (
                            <View>

                                <FormInput
                                    name="supplierName"
                                    label="Supplier Name"
                                    formikProps={formikProps}
                                />
                                <FormInput
                                    name="supplierAddress"
                                    label="Address"
                                    formikProps={formikProps}
                                />
                                {/* <IPicker
                                name="city"
                                label="City"
                                formikProps={formikProps}
                            /> */}
                                <ICustomPicker
                                    name="city"
                                    label="City"
                                    formikProps={formikProps}
                                    options={[
                                        { label: "Dhaka", value: 1 },
                                        { label: "Noakhali", value: 2 },
                                        { label: "Borishal", value: 3 },
                                    ]}
                                />

                                <FormInput
                                    name="supplierEmail"
                                    label="Email"
                                    formikProps={formikProps}
                                />

                                <FormInput
                                    name="mobile"
                                    label="Mobile"
                                    formikProps={formikProps}
                                    keyboardType="numeric"
                                />

                                {/* <IPicker
                                name="bankName"
                                label="Bank Name"
                                formikProps={formikProps}
                            /> */}

                                <ICustomPicker
                                    name="bankName"
                                    label="Bank Name"
                                    formikProps={formikProps}
                                    options={[
                                        { label: "Brack Bank", value: 1 },
                                        { label: "Dutch Bangla", value: 2 },
                                        { label: "Islami", value: 3 },
                                    ]}
                                />

                                {/* <IPicker
                                name="branchName"
                                label="Branch Name"
                                formikProps={formikProps}
                            /> */}

                                <ICustomPicker
                                    name="branchName"
                                    label="Branch Name"
                                    formikProps={formikProps}
                                    options={[
                                        { label: "Brack Bank", value: 1 },
                                        { label: "Dutch Bangla", value: 2 },
                                        { label: "Islami", value: 3 },
                                    ]}
                                />

                                {/* <IPicker
                                name="bankAccountType"
                                label="Bank Account Type"
                                formikProps={formikProps}
                            /> */}

                                <ICustomPicker
                                    name="bankAccountType"
                                    label="Bank Account Type"
                                    formikProps={formikProps}
                                    options={[
                                        { label: "Saving", value: 1 },
                                        { label: "Current", value: 2 },
                                    ]}
                                />

                                <View style={style.row}>
                                    <Button onPress={formikProps.resetForm} rounded primary style={[style.button, style.cancel]}>
                                        <Text style={[style.btnText, { color: "#008AFF" }]}>cancel</Text>
                                    </Button>

                                    <Button onPress={formikProps.handleSubmit} rounded primary style={[style.button, { backgroundColor: "#008AFF" }]}>
                                        <Text style={style.btnText}>save</Text>
                                    </Button>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </>
    );
}

export default SupplierForm

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,

    },
    button: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginHorizontal: 10,
        shadowOffset: { width: 3, height: 4},
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    btnText: {
        fontSize: 14,
        textTransform: "capitalize",
        fontFamily: fontsFamily.RUBIK_REGULAR
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    cancel: {
        // color:"balck",
        backgroundColor: "white"
    }

})