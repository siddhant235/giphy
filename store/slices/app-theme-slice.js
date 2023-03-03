import { createSlice } from "@reduxjs/toolkit";
import { THEME } from "../../helpers/consts";

const initialState={
    mode:THEME.LIGHT
}

export const themeSlice=createSlice({
    name:"themeToggle",
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
       
            state.mode=action.payload
        }
    }
})

export const {changeTheme}=themeSlice.actions

export default themeSlice.reducer
