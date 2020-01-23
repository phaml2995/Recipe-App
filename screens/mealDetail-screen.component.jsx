import React from "react";

import { View,Text, StyleSheet,Button } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/headerButton.component';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="GO BACK TO CATEGORY" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedCategory = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedCategory.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title="Favorite" 
                iconName='ios-star' 
                onPress={()=>{
                console.log("Favorite")
                }}
            />
        </HeaderButtons>
        
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});


export default MealDetailScreen;