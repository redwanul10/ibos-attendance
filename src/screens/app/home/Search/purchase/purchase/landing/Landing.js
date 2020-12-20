import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import ICustomPicker from '../../../../../../../common/components/ICustomPicker';
import IHeader from '../../../../../../../common/components/IHeader';
import fontsFamily from '../../../../../../../common/theme/fonts';
import { getSupplierData } from '../helper';
import SingleSupplier from './SingleSupplier';



const PurchaseLanding = ({ navigation }) => {
    const [supplierData, setSupplierData] = useState([])

    useEffect(() => {
        getSupplierData(accId = '5fbe5312a742f7af381e484d', setSupplierData)
    }, [])

    return (
        <>
            <IHeader onAddIconPress={e => navigation.navigate("Create Supplier")} />
            <View style={style.container}>



                <FlatList
                    data={supplierData}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View style={style.searchForm}>
                            <ICustomPicker
                                label="Sales Type"
                                options={[
                                    { value: "sales", label: "sales" },
                                    { value: "purchase", label: "purchase" },
                                ]}
                                onChange={() => {

                                }}
                            />
                            <ICustomPicker
                                label="Customer"
                                options={[
                                    { value: "sales", label: "sales" },
                                    { value: "purchase", label: "purchase" },
                                ]}
                                onChange={() => {

                                }}
                            />
                        </View>
                    )}
                    bounces={false}
                    renderItem={item => (
                        <SingleSupplier data={item} />
                    )}
                />
            </View>
        </>
    );
}

export default PurchaseLanding

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,

    },
    searchForm: {
        paddingVertical: 15
    }

})