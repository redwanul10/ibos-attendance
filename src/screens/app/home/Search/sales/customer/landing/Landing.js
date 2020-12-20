import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import fontsFamily from '../../../../../../../common/theme/fonts';
import { getCustomerData } from '../helper';
import SingleSupplier from './SingleSupplier';


const CustomerLanding = ({ navigation }) => {
    const [supplierData, setSupplierData] = useState([])

    useEffect(() =>{
        getCustomerData(accId='5fbe5312a742f7af381e484d', setSupplierData)
    }, [])
    
    return (
        <>
            <IHeader onAddIconPress={e => navigation.navigate("Create Customer")} />
            <View style={style.container}>

                <FlatList
                data={supplierData}
                keyExtractor={(item,i) => i.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                renderItem={item => (
                    <SingleSupplier data={item}/>
                )}
                />
            </View>
        </>
    );
}

export default CustomerLanding

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,

    },
    singleSupplier:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        borderBottomColor:"#AEAEAE",
        paddingBottom:10
    },
    smallText:{
        color:"#5D5C5C",
        fontSize:12,
        fontFamily: fontsFamily.RUBIK_REGULAR
        
    },
    supplierTxt:{
        marginTop:5,
        marginBottom:5,
        fontFamily: fontsFamily.RUBIK_MEDIUM,
    },
    editIcon:{
        alignSelf:"center"
        // width:
    }

})