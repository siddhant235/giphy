import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { THEME } from "../../../helpers/consts";

const CustomHeaderButton=props=>{
    const theme=useSelector((state)=>state.theme.mode)
    const titleColor=theme==THEME.LIGHT?"#000":"#fff"
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={titleColor}/>
}

export default CustomHeaderButton;