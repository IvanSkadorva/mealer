import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {DrawerActions} from "@react-navigation/native";


const Stack = createStackNavigator();

const FiltersNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
                fontFamily: 'open-sans',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'Your favorites',
        }}>
            <Stack.Screen name="FiltersNavigator" options={({navigation, route}) => ({
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </HeaderButtons>),
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={() => route.params.save}
                />
            </HeaderButtons>)
            })}
                          component={FiltersScreen}/>
            <Stack.Screen name="Meal Detail" component={MealDetailScreen}/>

        </Stack.Navigator>
    );
}

export {FiltersNavigator};
