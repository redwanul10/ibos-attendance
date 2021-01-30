import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import HomeNavigator from './HomeNavigator';
import Dashboard from '../screens/app/dashboard';
import IbosAttendance from '../screens/app/ibossAttendance';
import RegistrationAttendance from '../screens/app/registration';
import AttendanceList from '../screens/app/attendanceList';



const RootNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="AttendanceList"
                    screenOptions={{
                        headerMode: "screen",
                        ...TransitionPresets.SlideFromRightIOS,
                        headerShown: false,
                        headerTitleAlign: "center"

                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Registration" component={RegistrationAttendance} />
                    <Stack.Screen name="Home" component={HomeNavigator} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Attendance" component={IbosAttendance} />
                    <Stack.Screen name="AttendanceList" component={AttendanceList} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default RootNavigation;