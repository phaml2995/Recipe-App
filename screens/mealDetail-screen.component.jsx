import React, { useEffect, useCallback } from "react";

import { 
    View,
    Text,
    Image, 
    StyleSheet,
    Button, 
    ScrollView } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector,useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/headerButton.component';
import { toggleFavorite } from "../redux/actions/meals";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text style={{fontFamily:'open-sans'}}>{props.children}</Text>
        </View>
    );
};


const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const meals = useSelector(state => state.meals.meals)
    const favMeal=  useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );
    const selectedMeal = meals.find(meal => meal.id === mealId);
    
    const dispatch  = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    },[dispatch,mealId])
    
    useEffect(()=> {
        props.navigation.setParams({toggleFav: toggleFavHandler })
    },[toggleFavHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: favMeal})
    },[favMeal])

    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.detail}>
                <Text style={styles.text}>{selectedMeal.duration}m</Text>
                <Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.text}>{selectedMeal.affordability.toUpperCase()}</Text>
		    </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => 
                <ListItem key={ingredient}>{ingredient}</ListItem>
            )}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => 
                <ListItem key={step}>{step}</ListItem>
            )}
            <View>
                <Button title="GO BACK TO CATEGORY" onPress={() => {
                    props.navigation.popToTop();
                }}/>
            </View>            
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavMeal = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title="Favorite" 
                iconName={isFavMeal ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite}
            />
        </HeaderButtons>
        
    }

}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200      
    },

    detail: {
        flexDirection: "row",
        padding: 15,
        justifyContent: 'space-around'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },

    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});


export default MealDetailScreen;