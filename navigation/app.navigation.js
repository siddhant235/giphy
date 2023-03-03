import React, { useEffect, useState } from "react";
import {  } from "react-native";
import {  ScreenName, THEME } from "../helpers/consts";
import { NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home,{homeScreenOptions} from "../screens/home/index"
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/ui/header-button";
import {styles} from "../styles"
import {useSelector,useDispatch} from 'react-redux'
import { changeTheme } from "../store/slices/app-theme-slice";
const GiphyStackNavigator=createStackNavigator();


export const GiphyNavigator=()=>{
const dispatch=useDispatch()
 const theme=useSelector((state)=>state.theme.mode)
 const [mode,setMode]=useState(theme)

 useEffect(()=>{
  setMode(theme)
 },[theme])
  const modeTitle=mode==THEME.LIGHT?`DARK`:`LIGHT`
  const defaultNavOptions={
    headerStyle:{
        ...(mode==THEME.LIGHT?styles.background_light:styles.background_dark)
        
    },
    headerTitleStyle:{
      color:mode==THEME.LIGHT?"#000":"#fff"
    },
 
    headerRight:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title={modeTitle}  onPress={()=>dispatch(changeTheme(theme==THEME.LIGHT ?THEME.DARK:THEME.LIGHT))} />
    </HeaderButtons>
}

      return (
        <NavigationContainer>
        <GiphyStackNavigator.Navigator screenOptions={defaultNavOptions}>
             <GiphyStackNavigator.Screen name={ScreenName.GIPHY_HOME} component={Home} screenOptions={homeScreenOptions} />
        </GiphyStackNavigator.Navigator>
        </NavigationContainer>
      )
}