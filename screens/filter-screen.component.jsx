import React, { useState, useEffect, useCallback } from "react";

import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { View, Text , StyleSheet, Switch } from 'react-native';

import HeaderButton from '../components/headerButton.component';
import colors from '../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
                <Text>{props.value}</Text> 
                <Switch 
                    value={props.state} 
                    onValueChange={props.onChange}
                    trackColor={{
                        true: colors.primaryColor
                    }}
                    thumbColor= {colors.buttonColor}
                />
           </View>
    )
}

const FilterScreen = props => {
    const { navigation }  = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilter)
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

    useEffect(()=> {
        navigation.setParams({save: saveFilters})
    },[saveFilters])

    return(
       <View style={styles.screen}>
           <Text style={styles.title}>Available Filters / Restrictions</Text>
           <FilterSwitch value="Gluten-Free" state={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)}/>
           <FilterSwitch value="Lactose-Free" state={isLactoseFree} onChange={newVal => setIsLactoseFree(newVal)}/>
           <FilterSwitch value="Vegan" state={isVegan} onChange={newVal => setIsVegan(newVal)}/>
           <FilterSwitch value="Vegetarian" state={isVegetarian} onChange={newVal => setIsVegetarian(newVal)}/>
       </View>
    )
};

FilterScreen.navigationOptions = (navData) => {
    return{ 
        headerTitle: 'Filter',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=> {navData.navigation.toggleDrawer()}}></Item>
        </HeaderButtons>,
        headerRight: () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Apply" onPress={navData.navigation.getParam('save')}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        padding: 10
    }

})

export default FilterScreen;