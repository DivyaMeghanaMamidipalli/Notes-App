import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import middleware from "./middleware";

export default configureStore({
    reducer:{
        notes:noteSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});
