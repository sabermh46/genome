import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice";
export const makeStore = ()=> {
    configureStore({
        reducer: {
            counter: counterReducer,
        },
        
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;//Property 'getState' does not exist on type 'void'
export type AppDispatch = AppStore['dispatch'];//Property 'dispatch' does not exist on type 'void'.