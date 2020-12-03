import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import IHeader from '../../../../../../../common/components/IHeader';
import fontsFamily from '../../../../../../../common/theme/fonts';
import SingleSupplier from './SingleSupplier';

const data = [1,2,3,4,5,6,7,8]

const SupplierLanding = ({ navigation }) => {

    return (
        <>
            <IHeader onAddIconPress={e => navigation.navigate("Create Supplier")} />
            <View style={style.container}>

                <FlatList
                data={data}
                keyExtractor={(item,i) => i.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                renderItem={item => (
                    <SingleSupplier/>
                )}
                />
               
                
            </View>
        </>
    );
}

export default SupplierLanding

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