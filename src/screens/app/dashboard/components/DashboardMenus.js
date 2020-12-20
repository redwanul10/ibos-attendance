import React from 'react'
import { View, FlatList } from 'react-native'
import layout from '../../../../common/styles/layout';
import SingleMenu from './singleMenu';

const Departments = [
    {
        image: require("../../../../assets/images/dashboard/purchase.png"),
        name: "Purchase"
    },
    {
        image: require("../../../../assets/images/dashboard/sales.png"),
        name: "Sales"
    },
    {
        image: require("../../../../assets/images/dashboard/accounts.png"),
        name: "Accounts"
    },
    {
        image: require("../../../../assets/images/dashboard/inventory.png"),
        name: "Inventory"
    },
    {
        image: require("../../../../assets/images/dashboard/hr&admin.png"),
        name: "HR&Admin"
    },
    {
        image: require("../../../../assets/images/dashboard/reports.png"),
        name: "Report"
    },
]


const DashboardMenu = () => {

    return (
        <>
            <FlatList
                data={Departments}
                keyExtractor={(item, i) => i.toString()}
                contentContainerStyle={[layout.row, { marginTop: 50 }]}
                // numColumns={2}
                renderItem={({ item }) =>
                
                    <SingleMenu data={item} />
                }
            />
        </>
    );
}

export default DashboardMenu;