import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        todoUpdate: (state, action)=> {
            //console.log(action)
            (state.value).push(action.payload)
        }
    }
})

export const {todoUpdate}  = todoSlice.actions