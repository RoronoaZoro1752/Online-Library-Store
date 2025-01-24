import { createSlice } from '@reduxjs/toolkit'
import { Books } from '../data'

const initialState = {
    value: Books || []
};

export const additionSlice = createSlice({
    name: 'addBook',
    initialState,
    reducers:{
        pushBook: (state, action) => {
            const newBook = action.payload;
            const newId = state.value.length ? state.value[state.value.length - 1].id + 1 : 1;
            state.value.push({
                ...newBook, id:parseInt(newId)
            })
        }
    }
})

export const { pushBook } = additionSlice.actions

export default additionSlice.reducer;