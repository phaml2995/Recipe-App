import React from "react";

import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/headerButton.component';
import MealList from '../components/mealList.component';

const FavoriteScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
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


export default FavoriteScreen;