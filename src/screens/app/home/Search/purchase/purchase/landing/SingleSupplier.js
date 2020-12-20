import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import editImg from '../../../../../../../assets/images/edit.png';
import deleteImg from '../../../../../../../assets/images/delete.png';
import fontsFamily from '../../../../../../../common/theme/fonts';
import { useNavigation } from '@react-navigation/native'
import globalStyle from '../../../../../../../common/styles/global';



const SingleSupplier = ({ data }) => {
    // console.log(JSON.stringify(data,null,2));
    const { serial, accountName, address, mobileNo, partnerName } = data.item;
    const navigation = useNavigation()
    console.log(data)

    return (
        <TouchableOpacity onPress={e => navigation.navigate("Quick Purchase Details", { data })}>
            <View style={style.singleSupplier}>
                <View>
                    <Text style={style.smallText}>{serial}</Text>
                    <Text style={style.supplierTxt}>{partnerName}</Text>
                    <Text style={style.smallText}>Code</Text>
                    <Text style={[style.smallText,style.highlight]}>Pending Amount</Text>
                </View>
                <View>
                    <Text style={style.smallText}>Total Amount</Text>
                    <Text style={style.supplierTxt}>{mobileNo}</Text>
                    <View style={style.row}>
                        <TouchableOpacity onPress={e => navigation.navigate("Edit Supplier", { data })}>
                            <Image source={editImg} style={[style.editIcon,globalStyle.editIcon,{marginRight:8}]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={e => navigation.navigate("Edit Supplier", { data })}>
                            <Image source={deleteImg} style={[style.editIcon,globalStyle.editIcon]} />
                        </TouchableOpacity>
                    </View>
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
        marginTop:13
    },
    row:{
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    highlight:{
        backgroundColor:"#FCFACA",
        color:"#FFCC00",
        fontFamily: fontsFamily.RUBIK_REGULAR,
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:6,
        // borderRadius:500
    }

})



// Rubik 11 regular 
 

 
