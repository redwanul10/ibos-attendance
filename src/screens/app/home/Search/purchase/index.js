import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Container, Header, Content, Picker, Form, Text, Right, Left, Button, Icon, Body, Title } from "native-base";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import IHeader from '../../../../../common/components/IHeader';
import PurchaseLandingScreen from './Landing';
// import Supplier from './supplier/landing/Landing';

import SupplierDetails from './supplier/view/viewScreen';
import SupplierForm from './supplier/addEditForm/AddEditForm';
import SupplierLanding from './supplier/landing/Landing';
import PurchaseLanding from './purchase/landing/Landing';
import CustomerLanding from '../sales/customer/landing/Landing';
import CustomerDetails from '../sales/customer/view/viewScreen';
import CustomerForm from '../sales/customer/addEditForm/AddEditForm';
import PurchaseDetails from './purchase/view/viewScreen';


import DueReceiveLanding from '../sales/due-receive/landing/Landing';
import DueReceiveDetails from '../sales/due-receive/view/viewScreen';


const PurchaseNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Quick Purchase"
            screenOptions={{
                headerMode: "screen",
                // ...TransitionPresets.SlideFromRightIOS,
                headerShown: false,
                animationEnabled: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                    color: "white"
                },
                headerStyle: {
                    backgroundColor: "#1A1A27",

                }

            }}
        >
            {/* Supplier  */}
            <Stack.Screen name="PurchaseLanding" component={PurchaseLandingScreen} />
            <Stack.Screen name="Supplier" component={SupplierLanding} />
            <Stack.Screen name="Create Supplier" component={SupplierForm} />
            <Stack.Screen name="Edit Supplier" component={SupplierForm} />
            <Stack.Screen name="Supplier Details" component={SupplierDetails} />

            {/* Purchase */}
            <Stack.Screen name="Quick Purchase" component={PurchaseLanding} />
            <Stack.Screen name="Quick Purchase Details" component={PurchaseDetails} />
            
            {/* Customer */}
            <Stack.Screen name="Customer" component={CustomerLanding} />
            <Stack.Screen name="Customer Details" component={CustomerDetails} />
            <Stack.Screen name="Create Customer" component={CustomerForm} />
            <Stack.Screen name="Edit Customer" component={CustomerForm} />

            {/* due receive */}
            <Stack.Screen name="Due Receive" component={DueReceiveLanding} />
            <Stack.Screen name="Due Receive Details" component={DueReceiveDetails} />

        </Stack.Navigator>
    );
}

export default PurchaseNavigation;