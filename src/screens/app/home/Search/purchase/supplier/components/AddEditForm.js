import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Row, Col, Grid } from 'native-base'
import IHeader from '../../../../../../../common/components/IHeader';
import FormInput from '../../../../../../../common/components/TextInput';
import { Formik } from 'formik'
import IPicker from '../../../../../../../common/components/Ipicker';


const initValues = {
    supplierName: "",
    supplierAddress: "",
    supplierEmail: "",
    mobile: "",
}

const SupplierForm = (props) => {

    return (
        <>
            <IHeader onAddIconPress />
            <View style={style.container}>
                <Formik
                    enableReinitialize={true}
                    initialValues={initValues}
                    // validationSchema={schemaValidation}
                    onSubmit={(values, { resetForm }) => {
                        // navigation.navigate("Home")
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
                                label="Supplier Address"
                                formikProps={formikProps}
                            />
                            <IPicker
                                name="supplierEmail"
                                label="Bank Name"
                                formikProps={formikProps}
                            />
                            <FormInput
                                name="supplierEmail"
                                label="Supplier Email"
                                formikProps={formikProps}
                            />

                            <FormInput
                                name="mobile"
                                label="Mobile"
                                formikProps={formikProps}
                                keyboardType="numeric"
                            />







                        </View>
                    )}
                </Formik>
            </View>
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

})