import { createSlice } from "@reduxjs/toolkit";

export const personalInfoSlice = createSlice({
    name: 'personal_info_slice',
    initialState: {
        value: []
    },
    reducers: {
        infoUpdate: (state, action)=> {
            //console.log(action)
            (state.value).push(action.payload)

        }
    }
})

export const {infoUpdate} = personalInfoSlice.actions