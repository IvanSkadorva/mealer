import React from 'react';
import {MEALS} from "../data/dummy-data";
import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const FavoritesScreen = props => {
  const favMeals = useSelector( state => state.meals.favoriteMeals);
  return (
   <MealList listData={favMeals} navigation={props.navigation} />
  );
};

export default FavoritesScreen;
