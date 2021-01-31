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
import AttendanceDashboard from '../screens/app/attendanceDashboard';




const RootNavigation = () => {

    alert("root")
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
                    <Stack.Screen name="Registration" component={RegistrationAttendance} />
                    <Stack.Screen name="Home" component={HomeNavigator} />
                    <Stack.Screen name="Attendance Dashboard" component={AttendanceDashboard} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Check in/out" component={IbosAttendance} />
                    <Stack.Screen name="AttendanceList" component={AttendanceList} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default RootNavigation;


// const IbosAttendance = React.lazy(() => import('../screens/app/ibossAttendance'));
// const RegistrationAttendance = React.lazy(() => import('../screens/app/registration'));
// const AttendanceList = React.lazy(() => import('../screens/app/attendanceList'));
// const AttendanceDashboard = React.lazy(() => import('../screens/app/attendanceDashboard'));
// const Login = React.lazy(() => import('../screens/auth/Login'));