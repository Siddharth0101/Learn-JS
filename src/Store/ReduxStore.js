import ThemeSlice from "./ThemeSlice"

const { configureStore } = require("@reduxjs/toolkit");

const ReduxStore=configureStore({
    reducer:{
        Theme:ThemeSlice
    }
})
export default ReduxStore