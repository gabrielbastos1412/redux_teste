import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slices/count.slice";
import toDoReducer from "../slices/todo.slice";

export const store = configureStore({
    reducer:{
        count: countReducer,
        toDo: toDoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;