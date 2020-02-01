import React from "react";

import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/headerButton.component';
import MealList from '../components/mealList.component';

const FavoriteScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    if (favoriteMeals.length === 0 || ! favoriteMeals) {
        return (
        <View style={styles.fallbackText}>
            <Text style={styles.text}>No favorite meals</Text>
        </View>
        );    
    }
    
    return(
       <MealList listData={favoriteMeals} navigation={props.navigation}/>
    )
};

FavoriteScreen.navigationOptions = (navData) => {
    return{ 
        headerTitle: 'Favorites',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=> {navData.navigation.toggleDrawer()}}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    fallbackText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    }
})

export default FavoriteScreen;