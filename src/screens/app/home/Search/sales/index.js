import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Container, Header, Content, Picker, Form, Text, Right, Left, Button, Icon, Body, Title } from "native-base";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import IHeader from '../../../../../common/components/IHeader';


const Login = ({ navigation }) => {

    const Stack = createStackNavigator();

    return (
        <>
            <IHeader />

            <TouchableWithoutFeedback onPress={e => navigation.navigate('Purchase')}>
                <Text>customer</Text>
            </TouchableWithoutFeedback>
        </>
    );
}

const Login2 = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
        <>
            <IHeader />
            <TouchableWithoutFeedback onPress={e => navigation.navigate('Sales')}>
                <Text>Goods</Text>
            </TouchableWithoutFeedback>
        </>
    );
}

const SalesNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Sales"
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
            <Stack.Screen name="Customer" component={Login} />
            <Stack.Screen name="Goods" component={Login2} />
            {/* <Stack.Screen name="Homee" component={HomeNavigator} /> */}
        </Stack.Navigator>
    );
}

export default SalesNavigation;