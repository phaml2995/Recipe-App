import React from "react";

import { View,Text, StyleSheet } from "react-native";

import {  MEALS } from '../data/dummy-data';

import MealList from '../components/mealList.component';

const FavoriteScreen = props => {
    const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id ==='m2')

    return(
       <MealList listData={favMeal} navigation={props.navigation}/>
    )
};

FavoriteScreen.navigationOptions = {
    headerTitle: 'Favorites'
}


export default FavoriteScreen;