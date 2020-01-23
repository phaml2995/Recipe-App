import React from "react";

import { View,Text } from "react-native";
import { CATEGORIES, MEALS } from '../data/dummy-data';
import colors from '../constants/colors';

import MealList from '../components/mealList.component';

const CategoryMealScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0);

    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    }

}


export default CategoryMealScreen;