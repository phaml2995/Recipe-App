import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import CategoryScreen from '../screens/category-screen.component';
import CategoryMealScreen from '../screens/categoryMeal-screen';
import MealDetailScreen from '../screens/mealDetail-screen.component';
import FavoriteScreen from '../screens/favorite-screen.component';
import FilterScreen from '../screens/filter-screen.component';

import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors';

const defaultStackNav = {
    headerStyle: {
        backgroundColor: Platform.OS === 'ios'  ? colors.primaryColor : colors.accentColor
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitle: "Back",
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: colors.buttonColor
}


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNav
});

const FavNavigator = createStackNavigator({
    FavoriteScreen: {
        screen: FavoriteScreen
    },

    MealDetail: {
        screen: MealDetailScreen
    }

},{
    defaultNavigationOptions: defaultStackNav
})


const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                )
            }
        }
    },

    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                )
            }
        }
    }
    
}, {
    tabBarOptions: {
        activeTintColor: colors.buttonColor,
        style: {
            backgroundColor: colors.primaryColor
        },
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 15
        }
    }
})

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},{
    defaultNavigationOptions: defaultStackNav
})

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals Categories"
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: "Filter"
        }
    }
},{
    contentOptions: {
        activeTintColor: colors.buttonColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 15
        }
    }
});

export default createAppContainer(MainNavigator);

