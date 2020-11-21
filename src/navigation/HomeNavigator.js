import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/app/home/HomePage';
// import homeIcon from '../assets/images/tabIcons/home.png';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountTab from '../screens/app/home/Account';
import SearchTab from '../screens/app/home/Search';
import MenuTab from '../screens/app/home/Menu';
import TabBarBtn from '../common/components/TabBarBtn';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../common/theme/colors';


const HomeNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,

        style: {
          height: 60
        },
        labelStyle: {
          margin: 0,
          fontSize: 10
        },
        iconStyle: {
          fontSize: 10,
          justifyContent: "center",
          alignItems: "center"
        },
        tabStyle: {
          justifyContent: "center",
          padding: 0
        },
        indicatorStyle: {
          backgroundColor: colors.TAB_ACTIVE,
          height: 3
        },
        activeTintColor: colors.TAB_ACTIVE,
        inactiveTintColor: colors.TAB_INACTIVE,
      }}
      tabBarPosition="bottom"
      swipeEnabled={false}
    >
      <Tab.Screen
        options={{
          showIcon: true,
          // tabBarButton: TabBarBtn,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Entypo name="home" size={20} color={color} />
        }}
        name="HomePage"
        component={HomePage}
      />

      <Tab.Screen
        options={{
          showIcon: true,
          // tabBarButton: TabBarBtn,
          tabBarIcon: ({ color, size }) => <EvilIcons name="search" size={20} color={color} />
        }}
        name="Search"
        component={SearchTab}
      />


      <Tab.Screen
        options={{
          showIcon: true,
          // tabBarButton: props => <TabBarBtn
          //   icon={e => <FontAwesome5 name="user-circle" size={20} color={color} />}
          //   {...props} />,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-circle" size={20} color={color} />
        }}
        name="Account"
        component={AccountTab}
      />

      <Tab.Screen
        options={{
          showIcon: true,
          // tabBarButton: TabBarBtn,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="sort-variant" size={20} color={color} />
        }}
        name="Menu"
        component={MenuTab}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
