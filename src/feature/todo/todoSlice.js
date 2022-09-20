import {createSlice} from '@reduxjs/toolkit';

const todo = createSlice(
    {
        name: 'todo',
        initialState: {
            listTodo: []
        },
        reducers: {
            addTodoItem: (state, action) => {
                state.listTodo.push(action.payload);
            },
            removeTodoItem: (state, action) => {
                state.listTodo.splice(action.payload, 1);
            },
            updateTodoItem: (state, action) => {
                state.listTodo[action.payload.index] = action.payload.item;
            }
        }
    }
)

export const {addTodoItem, removeTodoItem, updateTodoItem} = todo.actions;

export default todo.reducer;