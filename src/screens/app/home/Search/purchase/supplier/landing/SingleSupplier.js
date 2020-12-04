import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import editImg from '../../../../../../../assets/images/edit.png';
import fontsFamily from '../../../../../../../common/theme/fonts';
import { useNavigation } from '@react-navigation/native'


const SingleSupplier = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={e => navigation.navigate("Supplier Details")}>
            <View style={style.singleSupplier}>
                <View>
                    <Text style={style.smallText}>01</Text>
                    <Text style={style.supplierTxt}>Parvez Ahmed</Text>
                    <Text style={style.smallText}>Uttara Dhaka 12</Text>
                </View>
                <View>
                    <Text style={style.smallText}>Mobile Number</Text>
                    <Text style={style.supplierTxt}>01631838829</Text>
                    <TouchableOpacity>
                        <Image source={editImg} style={style.editIcon} />
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
        alignSelf: "flex-end",
        width: 30,
        height: 30
        // width:
    }

})