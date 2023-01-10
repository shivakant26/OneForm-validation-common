import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./siteReducer";

const store = configureStore({
    reducer:siteReducer
    
});

export default store;