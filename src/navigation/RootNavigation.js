import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import HomeNavigator from './HomeNavigator';

const RootNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerMode: "screen",
                        ...TransitionPresets.SlideFromRightIOS,
                        headerShown: false,
                        headerTitleAlign: "center"

                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={HomeNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default RootNavigation;