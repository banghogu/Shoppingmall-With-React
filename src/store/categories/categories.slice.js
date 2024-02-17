import { createSlice } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";

const initialState = CategoriesName.All

export const categoriesSlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setActive : (state,action)=>{
            return state= action.payload
            //return action.payload
        }
    }
})

export const {setActive} = categoriesSlice.actions
export default categoriesSlice.reducer