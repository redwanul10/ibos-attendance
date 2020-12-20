import React from 'react'
import { Text, StyleSheet, View, FlatList, Image ,TouchableOpacity} from 'react-native'
import editImg from '../../../../../../../assets/images/edit.png';
import fontsFamily from '../../../../../../../common/theme/fonts';
import {useNavigation} from '@react-navigation/native'
import globalStyle from '../../../../../../../common/styles/global';
globalStyle


const SingleSupplier = ({data}) => {
    const {serial, accountName, address, mobileNo,partnerName} = data.item;
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={e => navigation.navigate("Customer Details",{data})}>
            <View style={style.singleSupplier}>
                <View>
                    <Text style={style.smallText}>{serial}</Text>
                    <Text style={style.supplierTxt}>{partnerName}</Text>
                    <Text style={style.smallText}>{address}</Text>
                </View>
                <View>
                    <Text style={style.smallText}>Mobile Number</Text>
                    <Text style={style.supplierTxt}>{mobileNo}</Text>
                    <TouchableOpacity onPress={e => navigation.navigate("Edit Customer",{data})}>
                        <Image source={editImg} style={globalStyle.editIcon} />
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default SingleSupplier

const style = StyleSheet.create({

    singleSupplier: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#AEAEAE",
        paddingTop:15,
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
    

})