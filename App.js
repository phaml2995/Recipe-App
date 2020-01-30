import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigations/mealsNavigator.component';
import mealsReducer from './redux/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);


const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded){
    return(
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={()=>setFontLoaded(true)}>
      </AppLoading>
    )
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}


