import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        value: []
    },
    reducers: {
        countryUpdate: (state, action)=> {
            state.value.push(action.payload)
        }
    }
})

export const {countryUpdate} = countrySlice.actions