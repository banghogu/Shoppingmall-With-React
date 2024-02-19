import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//전체 item을 가져오는 reducer
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", //동일한 리듀서 충돌 방지
    async (category,thunkAPI) => { 
        try {
            let response
            if(category){
                response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            }
            else{
                response = await axios.get(`https://fakestoreapi.com/products`)
            }
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("Error loading products")
        }
    }
)

const initialState = {
    products: [],
    isLoading: false,
    error: ""
}

export const productsSlice = createSlice({
    name: 'products', //동일한 리듀서 충돌 방지
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }

})

export default productsSlice.reducer