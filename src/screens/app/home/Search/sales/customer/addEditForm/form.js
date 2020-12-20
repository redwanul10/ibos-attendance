import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import FormInput from '../../../../../../../common/components/TextInput';
import { Formik } from 'formik'
import { Button, Text, View } from 'native-base'
import fontsFamily from '../../../../../../../common/theme/fonts';
import ICustomPicker from '../../../../../../../common/components/ICustomPicker';
import { getBankAccTypeDDl, getBankNameDDL ,getBranchDDl} from '../helper';

const Form = ({hendleCreateSubmit, initValues}) => {
    const [bankDDL, setBankDDL] = useState([]);
    const [bankBranchDDL, setBanKBranchDDL] = useState([]);
    const [bankAccTypeDDL, setBankAccTypeDDL] = useState([])

    useEffect(() => {
        getBankNameDDL(accId = "5fbe5312a742f7af381e484d", setBankDDL)
        // call this function on bank change (BUG)
        getBranchDDl("7",setBanKBranchDDL)
        getBankAccTypeDDl(setBankAccTypeDDL)
    },[])

    return (
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
                            hendleCreateSubmit(values,resetForm)
                            // alert("submited")
                            // resetForm(initValues)
                        }}

                    >

                        {(formikProps) => (
                            <View>

                                <FormInput
                                    name="partnerName"
                                    label="Partner Name"
                                    formikProps={formikProps}
                                />
                                <FormInput
                                    name="address"
                                    label="Address"
                                    formikProps={formikProps}
                                />
                                <FormInput
                                    name="city"
                                    label="City"
                                    formikProps={formikProps}
                                />

                                <FormInput
                                    name="email"
                                    label="Email"
                                    formikProps={formikProps}
                                />

                                <FormInput
                                    name="mobileNo"
                                    label="mobileNo"
                                    formikProps={formikProps}
                                    keyboardType="numeric"
                                />

                                <FormInput
                                    name="bankAccountNumber"
                                    label="Bank Account Number"
                                    formikProps={formikProps}
                                    keyboardType="numeric"
                                />

                                <ICustomPicker
                                    name="bankName"
                                    label="Bank Name"
                                    formikProps={formikProps}
                                    options={bankDDL}
                                />

                                <ICustomPicker
                                    name="branchName"
                                    label="Branch Name"
                                    formikProps={formikProps}
                                    options={bankBranchDDL}
                                />

                                <ICustomPicker
                                    name="bankAccountType"
                                    label="Bank Account Type"
                                    formikProps={formikProps}
                                    options={bankAccTypeDDL}
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
    );
};

export default Form;

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