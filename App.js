import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import {combineReducers, createStore} from "redux";
import mealsReducer from "./store/reducers/meals";
import {Provider} from 'react-redux'

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};


const rootReducer = combineReducers({
    meals: mealsReducer
});

const store = createStore(rootReducer);
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
    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </Provider>
    );
}
