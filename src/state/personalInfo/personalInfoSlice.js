import { createSlice } from "@reduxjs/toolkit";

export const PersonalInfoSlice = createSlice({
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

export const {infoUpdate} = PersonalInfoSlice.actions