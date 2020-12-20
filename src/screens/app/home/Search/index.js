import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import SalesNavigation from './sales';

import PurchaseNavigation from './purchase';
import SalesNavigation from './sales';

const SearchTab = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Purchase"
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
            <Stack.Screen name="Sales" component={SalesNavigation} />
            <Stack.Screen name="Purchase" component={PurchaseNavigation} />
            {/* <Stack.Screen name="Homee" component={HomeNavigator} /> */}
        </Stack.Navigator>
    );
}

export default SearchTab;