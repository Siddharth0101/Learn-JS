const { createSlice } = require("@reduxjs/toolkit");

const ThemeSlice=createSlice({
    name:"Theme",
    initialState:{
        theme:localStorage.getItem("theme") || "DARK"
    },
    reducers:{
        ChangeTheme(state,action) {
            state.theme=action.payload
        }
    }
})
export const ThemeActions=ThemeSlice.actions
export default ThemeSlice.reducer