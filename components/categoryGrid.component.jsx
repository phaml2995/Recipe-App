import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryTile = props => {
	return(
		 <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
                <View style={{...styles.container,...{backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
        </TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	gridItem: {
        flex: 1,
        margin: 15,
		height: 150,
    },
    container: {
    	flex: 1,
    	borderRadius: 10,
		shadowOpacity: 0.26,
		shadowColor: 'black',
    	shadowOffset: {width: 0, height: 2},
    	shadowRadius: 15,
    	elevation: 3,
    	padding: 10,
    	justifyContent: 'center',
    	alignItems: 'center'
    },
    title: {
    	fontFamily:'open-sans-bold',
    	fontSize: 18

    }
})

export default CategoryTile;