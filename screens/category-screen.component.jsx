import React from "react";

import { View,Text, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import { CATEGORIES } from '../data/dummy-data';

import CategoryTile from '../components/categoryGrid.component'


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

CategoryScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});


export default CategoryScreen;