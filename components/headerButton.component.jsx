import React from 'react';

import { Text, View, Stylesheet } from 'react-native';

import { HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import color from '../constants/colors';


const CustomHeaderButton = props => {
    return(
        <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={20}
            color={color.buttonColor}
        />
    )
}

export default CustomHeaderButton;