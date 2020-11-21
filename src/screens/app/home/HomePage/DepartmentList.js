import React from 'react'
import { View, FlatList } from 'react-native'
import layout from '../../../../common/styles/layout';
import SingleDepartment from './SingleDepartment';

const Departments = [
    {
        image: require("../../../../assets/images/departments/purchase.png"),
        name: "Purchase"
    },
    {
        image: require("../../../../assets/images/departments/sales.png"),
        name: "Sales"
    },
    {
        image: require("../../../../assets/images/departments/accounts.png"),
        name: "Accounts"
    },
    {
        image: require("../../../../assets/images/departments/inventory.png"),
        name: "Inventory"
    },
    {
        image: require("../../../../assets/images/departments/hr&admin.png"),
        name: "HR&Admin"
    },
    {
        image: require("../../../../assets/images/departments/report.png"),
        name: "Report"
    },
]


const DepartmentList = () => {

    return (
        <>
            <View style={layout.row}>

            </View>
            <FlatList
                data={Departments}
                keyExtractor={(item, i) => i.toString()}
                contentContainerStyle={[layout.row, { marginVertical: 20 }]}
                // numColumns={2}
                renderItem={({ item }) =>
                    <SingleDepartment data={item} />
                }
            />
        </>
    );
}

export default DepartmentList;