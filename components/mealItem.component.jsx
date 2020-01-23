import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
	return(
		<View style={ styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
		            <View style={{...styles.mealRow,...styles.mealHeader}}>
		            	<ImageBackground source={{uri:props.image}} style={styles.bgImage}>
				            <Text style={styles.title}>{props.title}</Text>
			            </ImageBackground>
		            </View>
		            <View style= {{...styles.mealRow,...styles.mealDetail}}>
		            	<Text style={styles.text}>{props.durartion}m</Text>
		            	<Text style={styles.text}>{props.complexity.toUpperCase()}</Text>
		            	<Text style={styles.text}>{props.affordability.toUpperCase()}</Text>
		            </View>
		        </View>
	        </TouchableOpacity>
        </View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#fffbd5',
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10
	},
	mealRow: {
		flexDirection: 'row'
	},
	bgImage:{
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	mealHeader: {
		height: '85%'
	},
	mealDetail: {
		height: '15%',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontFamily:'open-sans-bold',
		fontSize: 20,
		color: 'white',
		backgroundColor:'rgba(0,0,0,0.5)',
		paddingHorizontal: 12,
		paddingVertical: 5,
		textAlign: 'center'
	},
	text: {
		fontFamily: 'open-sans-bold',
		fontSize: 15
	}

})

export default MealItem;