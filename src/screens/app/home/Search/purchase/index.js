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

const PurchaseNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="PurchaseLanding"
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
            <Stack.Screen name="PurchaseLanding" component={PurchaseLandingScreen} />
            <Stack.Screen name="Supplier" component={SupplierLanding} />
            <Stack.Screen name="Create Supplier" component={SupplierForm} />
            <Stack.Screen name="Supplier Details" component={SupplierDetails} />
        </Stack.Navigator>
    );
}

export default PurchaseNavigation;