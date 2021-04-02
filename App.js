import React, { useState } from 'react';
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import Colors from "./constants/Colors";

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={console.warn('Error loading assets')}
        />
    );
  }
    return ( <NavigationContainer>
          <Stack.Navigator  screenOptions={ {
              headerStyle: {
                  backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
              },
              headerTintColor://6.26 0.21
                  Platform.OS === 'android' ? 'white' : Colors.primaryColor,
              headerTitle: 'A Screen'
          }}>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}
