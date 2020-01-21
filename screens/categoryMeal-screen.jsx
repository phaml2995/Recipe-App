import React from "react";

import { View,Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from '../data/dummy-data';
import colors from '../constants/colors';

import MealItem from '../components/mealItem.component';

const CategoryMealScreen = props => {
    const renderMealItem = (itemData) => {
        return(
            <MealItem 
                title={itemData.item.title} 
                durartion={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={()=> {}}
            />
        );
    }
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0);

    return(
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item,index)=>item.id} 
                renderItem={renderMealItem} 
                style={styles.mealContainer}
            />
        </View>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    mealContainer: {
        width: '100%'
    }
});


export default CategoryMealScreen;