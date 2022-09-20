import {configureStore} from "@reduxjs/toolkit";
import todo from "../feature/todo/todoSlice";
import done from "../feature/done/doneSlice";

export default configureStore({
    reducer: {
        todo: todo,
        done: done,
    }
})