import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "couddnter",
    initialState: {
        value: 3
    },
    reducers: {
        increment: (state)=> {
            state.value = state.value + 1
        }
    }
})

export const {increment} = counterSlice.actions



//export default counterSlice.reducer