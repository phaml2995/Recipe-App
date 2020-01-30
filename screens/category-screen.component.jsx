import React from "react";

import { FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import CategoryTile from '../components/categoryGrid.component'
import HeaderButton from '../components/headerButton.component';


const CategoryScreen = props => {
    const renderGrid = (itemData) => {
        return (
           <CategoryTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({routeName: "CategoryMeal",params:{
                    categoryId: itemData.item.id
                }})}}
           />
        );
    };
    return(
      <FlatList data={CATEGORIES} renderItem={renderGrid} numColumns={2} />
    )
};

CategoryScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={()=> {navData.navigation.toggleDrawer()}}></Item>   
        </HeaderButtons>
     }
}

export default CategoryScreen;