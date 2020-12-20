import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import editImg from '../../../../../../../assets/images/edit.png';
import fontsFamily from '../../../../../../../common/theme/fonts';
import { useNavigation } from '@react-navigation/native'
import globalStyle from '../../../../../../../common/styles/global';



const SingleItem = ({ data }) => {
    // console.log(JSON.stringify(data,null,2));
    // const { serial, accountName, address, mobileNo, partnerName } = data.item;
    const navigation = useNavigation()
    // console.log(data)

    return (
        <TouchableOpacity onPress={e => navigation.navigate("Supplier Details", { data })}>
            <View style={style.singleSupplier}>
                <View>
                    <Text style={style.smallText}>SL</Text>
                    <Text style={style.supplierTxt}>Item Name</Text>
                    <View style={[style.row, style.customRow]}>
                        <Text style={[style.smallText, { marginRight: 12 }]}>Discount Amount</Text>
                        <Text style={style.smallText}>Qty</Text>
                    </View>

                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={style.smallText, style.green}>Price</Text>
                    <Text style={[style.supplierTxt]}>95</Text>
                    <View style={style.row}>
                        <Text style={style.smallText}>Net A</Text>
                        <Text style={[style.smallText, { marginHorizontal: 12 }]}>Vat</Text>
                        <Text style={style.smallText}>SD</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default SingleItem

const style = StyleSheet.create({

    singleSupplier: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#AEAEAE",
        paddingTop: 15,
        paddingBottom: 15
    },
    smallText: {
        color: "#5D5C5C",
        fontSize: 12,
        fontFamily: fontsFamily.RUBIK_REGULAR

    },
    supplierTxt: {
        marginTop: 5,
        marginBottom: 5,
        fontFamily: fontsFamily.RUBIK_MEDIUM,
    },
    editIcon: {
        // marginTop:13
    },
    row: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    green: {
        color: "#83E470",
        fontFamily: fontsFamily.RUBIK_MEDIUM
    },
    customRow: {
        justifyContent: "flex-start",
    }

})



