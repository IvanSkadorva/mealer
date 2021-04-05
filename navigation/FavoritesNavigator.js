import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {DrawerActions} from "@react-navigation/native";


const Stack = createStackNavigator();

const FavoritesNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
                fontFamily: 'open-sans-bold',
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'Your favorites'
        }}>
            <Stack.Screen name="Favorites" options={({navigation}) => ({
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </HeaderButtons>)})}
                          component={FavoritesScreen}/>
            <Stack.Screen name="Meal Detail" component={MealDetailScreen}/>

        </Stack.Navigator>
    );
}

export {FavoritesNavigator};
