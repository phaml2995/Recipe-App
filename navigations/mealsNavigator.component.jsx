import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import CategoryScreen from '../screens/category-screen.component';
import CategoryMealScreen from '../screens/categoryMeal-screen';
import MealDetailScreen from '../screens/mealDetail-screen.component';
import colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios'  ? colors.primaryColor : colors.accentColor
        },
        headerTintColor: '#FFA17F'
    }
});

export default createAppContainer(MealsNavigator);

