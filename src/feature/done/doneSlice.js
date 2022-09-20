import {createSlice} from "@reduxjs/toolkit";

const done = createSlice({
    name: "done", initialState: {
        listDone: []
    }, reducers: {
        addDoneItem: (state, action) => {
            state.listDone.push(action.payload);
        }, removeDoneItem: (state, action) => {
            state.listDone.splice(action.payload, 1);
        }, undoDoneItem: (state, action) => {
            state.listDone.splice(action.payload, 1);
        }
    }
})

export const {addDoneItem, removeDoneItem, undoDoneItem} = done.actions;

export default done.reducer;