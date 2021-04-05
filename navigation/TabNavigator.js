import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {MealsNavigator} from "./MealsNavigator";
import {FavoritesNavigator} from "./FavoritesNavigator";
import {NavigationContainer} from "@react-navigation/native";
const Tab = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export default function TabNavigator () {
    return (
        <Tab.Navigator shifting={true} activeColor='white'
                       barStyle={{
                           backgroundColor: Colors.primaryColor,
                       }} tabBarOptions={{
            activeTintColor: Colors.accentColor,
        }} labelStyle={{ fontFamily: 'open-sans-bold'}}>
            <Tab.Screen options={{
                tabBarLabel: 'Meals',
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-restaurant" color={color} size={25}/>
                ),

            }} name="Meals" component={MealsNavigator}/>
            <Tab.Screen name="Favorites" component={FavoritesNavigator} options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-star" color={color} size={25}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}
