import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { DrawerActions } from '@react-navigation/native';



const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
                fontFamily: 'open-sans',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen'
        }}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={({navigation}) => ({
                headerTitle: 'Categories',
                    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </HeaderButtons>)})}/>
            <Stack.Screen name="CategoryMeals" options={({route, navigation}) => ({
                headerTitle: CATEGORIES.find(cat => cat.id === route.params.categoryId).title,
                headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => console.log('Mark as favorite! ')}
                    />
                </HeaderButtons>),
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </HeaderButtons>)
            })}
                          component={CategoryMealsScreen}/>
            <Stack.Screen name="MealDetail"
                          options={({route}) => ({headerTitle: route.params.mealTitle})}
                          component={MealDetailScreen}/>
        </Stack.Navigator>
    );
}

export {MealsNavigator};
