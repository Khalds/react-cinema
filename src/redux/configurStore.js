import { configureStore } from "@reduxjs/toolkit";
import application from "./features/application";


export const store = configureStore({
    reducer: {
        application: application

    }
})