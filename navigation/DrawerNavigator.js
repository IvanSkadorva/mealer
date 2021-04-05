import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import {FiltersNavigator} from "./FiltersNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Filters" component={FiltersNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
